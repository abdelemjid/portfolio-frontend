import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// ─── Module-level constants (computed once) ────────────────
const GLOBE_RADIUS = 2;
const GRID_RADIUS = GLOBE_RADIUS + 0.005;
const DOT_RADIUS = GLOBE_RADIUS + 0.02;
const DOT_COUNT = 300;
const SEGMENTS = 48;
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

const MIN_POLAR_ANGLE = Math.PI / 3;
const MAX_POLAR_ANGLE = (2 * Math.PI) / 3;

const RING_CONFIG = [
  { tilt: 1.2, speed: 0.12, radius: 2.8, color: "#818cf8", opacity: 0.3 },
  { tilt: 0.6, speed: -0.08, radius: 3.1, color: "#6366f1", opacity: 0.2 },
  { tilt: -0.8, speed: 0.06, radius: 3.4, color: "#a5b4fc", opacity: 0.15 },
] as const;

export default function Globe() {
  const ringRefs = useRef<(THREE.Mesh | null)[]>([null, null, null]);

  // ─── Single useFrame for all animations (was 4 hooks) ────
  useFrame((_state, delta) => {
    for (let i = 0; i < RING_CONFIG.length; i++) {
      const ring = ringRefs.current[i];
      if (ring) ring.rotation.z += delta * RING_CONFIG[i].speed;
    }
  });

  // ─── Geometries (reduced polygon counts) ─────────────────
  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(GLOBE_RADIUS, 32, 32),
    [],
  );

  const glowGeometry = useMemo(
    () => new THREE.SphereGeometry(GLOBE_RADIUS * 1.2, 24, 24),
    [],
  );

  // ─── Merged grid: 19 draw calls → 1 ─────────────────────
  const gridGeometry = useMemo(() => {
    const positions: number[] = [];

    // Latitude lines (7)
    for (let i = 1; i < 8; i++) {
      const phi = (i / 8) * Math.PI;
      const lr = GRID_RADIUS * Math.sin(phi);
      const y = GRID_RADIUS * Math.cos(phi);
      for (let j = 0; j < SEGMENTS; j++) {
        const a1 = (j / SEGMENTS) * Math.PI * 2;
        const a2 = ((j + 1) / SEGMENTS) * Math.PI * 2;
        positions.push(
          lr * Math.cos(a1),
          y,
          lr * Math.sin(a1),
          lr * Math.cos(a2),
          y,
          lr * Math.sin(a2),
        );
      }
    }

    // Longitude lines (12)
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI;
      for (let j = 0; j < SEGMENTS; j++) {
        const p1 = (j / SEGMENTS) * Math.PI * 2;
        const p2 = ((j + 1) / SEGMENTS) * Math.PI * 2;
        positions.push(
          GRID_RADIUS * Math.sin(p1) * Math.cos(theta),
          GRID_RADIUS * Math.cos(p1),
          GRID_RADIUS * Math.sin(p1) * Math.sin(theta),
          GRID_RADIUS * Math.sin(p2) * Math.cos(theta),
          GRID_RADIUS * Math.cos(p2),
          GRID_RADIUS * Math.sin(p2) * Math.sin(theta),
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, []);

  const dotsGeometry = useMemo(() => {
    const positions = new Float32Array(DOT_COUNT * 3);
    for (let i = 0; i < DOT_COUNT; i++) {
      const theta = (2 * Math.PI * i) / GOLDEN_RATIO;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / DOT_COUNT);
      const idx = i * 3;
      positions[idx] = DOT_RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[idx + 1] = DOT_RADIUS * Math.cos(phi);
      positions[idx + 2] = DOT_RADIUS * Math.sin(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const glowMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color("#6366f1") },
        },
        vertexShader: `
          varying float intensity;
          void main() {
            vec3 vNormal = normalize(normalMatrix * normal);
            intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() {
            gl_FragColor = vec4(glowColor * intensity, intensity * 0.4);
          }
        `,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      }),
    [],
  );

  const torusGeometries = useMemo(
    () =>
      RING_CONFIG.map((r) => new THREE.TorusGeometry(r.radius, 0.005, 6, 48)),
    [],
  );

  return (
    <group>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#e0e7ff" />
      <pointLight position={[-5, -3, -5]} intensity={0.7} color="#6366f1" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#818cf8" />

      {/* Globe — no useFrame needed (SPIN_SPEED was 0) */}
      <group>
        {/* Surface */}
        <mesh geometry={sphereGeometry}>
          <meshPhongMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.35}
            shininess={80}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Wireframe overlay — shares geometry */}
        <mesh geometry={sphereGeometry}>
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Grid — single draw call instead of 19 */}
        <lineSegments geometry={gridGeometry}>
          <lineBasicMaterial color="#a5b4fc" transparent opacity={0.3} />
        </lineSegments>

        {/* Dots */}
        <points geometry={dotsGeometry}>
          <pointsMaterial
            color="#c7d2fe"
            size={0.03}
            transparent
            opacity={0.7}
            sizeAttenuation
          />
        </points>
      </group>

      {/* Glow */}
      <mesh geometry={glowGeometry} material={glowMaterial} />

      {/* Orbiting rings — inlined, no sub-component overhead */}
      {RING_CONFIG.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
          rotation={[ring.tilt, 0, 0]}
          geometry={torusGeometries[i]}
        >
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={ring.opacity}
          />
        </mesh>
      ))}

      {/* Controls — moved from Hero.tsx to keep drei lazy-loaded */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={MIN_POLAR_ANGLE}
        maxPolarAngle={MAX_POLAR_ANGLE}
      />
    </group>
  );
}
