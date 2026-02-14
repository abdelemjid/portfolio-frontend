import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GLOBE_RADIUS = 2;
const SPIN_SPEED = 0;

export function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * SPIN_SPEED;
    }
  });

  const sharedSphereGeometry = useMemo(
    () => new THREE.SphereGeometry(GLOBE_RADIUS, 48, 48),
    [],
  );

  const glowGeometry = useMemo(
    () => new THREE.SphereGeometry(GLOBE_RADIUS * 1.2, 32, 32),
    [],
  );

  const gridLines = useMemo(() => {
    const lines: THREE.Line[] = [];
    const r = GLOBE_RADIUS + 0.005;
    const mat = new THREE.LineBasicMaterial({
      color: "#a5b4fc",
      transparent: true,
      opacity: 0.3,
    });

    // Latitude lines — 7 lines
    for (let i = 1; i < 8; i++) {
      const phi = (i / 8) * Math.PI;
      const lr = r * Math.sin(phi);
      const y = r * Math.cos(phi);
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 48; j++) {
        const angle = (j / 48) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(lr * Math.cos(angle), y, lr * Math.sin(angle)),
        );
      }
      lines.push(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat),
      );
    }

    // Longitude lines — 12 lines
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 48; j++) {
        const phi = (j / 48) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.cos(phi),
            r * Math.sin(phi) * Math.sin(theta),
          ),
        );
      }
      lines.push(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat),
      );
    }

    return lines;
  }, []);

  const dotsGeometry = useMemo(() => {
    const count = 300;
    const r = GLOBE_RADIUS + 0.02;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
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

  const ringData = useMemo(
    () => [
      {
        tilt: 1.2,
        speed: 0.12,
        radius: 2.8,
        color: "#818cf8",
        opacity: 0.3,
        key: 0,
      },
      {
        tilt: 0.6,
        speed: -0.08,
        radius: 3.1,
        color: "#6366f1",
        opacity: 0.2,
        key: 1,
      },
      {
        tilt: -0.8,
        speed: 0.06,
        radius: 3.4,
        color: "#a5b4fc",
        opacity: 0.15,
        key: 2,
      },
    ],
    [],
  );

  return (
    <group>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#e0e7ff" />
      <pointLight position={[-5, -3, -5]} intensity={0.7} color="#6366f1" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#818cf8" />

      {/* Spinning globe group — single useFrame drives everything */}
      <group ref={groupRef}>
        {/* Surface */}
        <mesh geometry={sharedSphereGeometry}>
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
        <mesh geometry={sharedSphereGeometry}>
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Grid lines */}
        {gridLines.map((line, i) => (
          <primitive key={i} object={line} />
        ))}

        {/* Dots as single Points object */}
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

      {/* Glow — static, no rotation needed */}
      <mesh geometry={glowGeometry} material={glowMaterial} />

      {/* Orbiting rings — slow speeds */}
      {ringData.map((ring) => (
        <OrbitingRing
          key={ring.key}
          tilt={ring.tilt}
          speed={ring.speed}
          radius={ring.radius}
          color={ring.color}
          opacity={ring.opacity}
        />
      ))}
    </group>
  );
}

function OrbitingRing({
  tilt,
  speed,
  radius,
  color,
  opacity,
}: {
  tilt: number;
  speed: number;
  radius: number;
  color: string;
  opacity: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
    }
  });

  const torusGeometry = useMemo(
    () => new THREE.TorusGeometry(radius, 0.005, 8, 64),
    [radius],
  );

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]} geometry={torusGeometry}>
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}
