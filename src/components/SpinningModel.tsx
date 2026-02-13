import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface SpinningModelProps {
  modelPath: string;
  rotationSpeed?: number;
  scale?: number;
  position?: [number, number, number];
}

const SpinningModel = ({
  modelPath,
  rotationSpeed = 0.5,
  scale = 0.2,
  position = [0, 0, 0],
}: SpinningModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  // Center the model geometry — IDEMPOTENT (safe to run multiple times)
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    // ✅ Use .set() instead of .sub() — won't drift on re-renders or Strict Mode
    scene.position.set(-center.x, -center.y, -center.z);
  }, [scene]);

  // Spin only rotation.y — never touch position
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene} scale={scale} />
    </group>
  );
};

useGLTF.preload("/models/dog.glb");

export default SpinningModel;
