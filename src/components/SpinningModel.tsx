import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group, Box3, Vector3 } from "three";

interface SpinningModelProps {
  modelPath: string;
  rotationSpeed?: number;
  scale?: number;
  position?: [number, number, number];
}

const SpinningModel = ({
  modelPath,
  rotationSpeed = 0.005,
  scale = 1,
  position = [0, 0, 0],
}: SpinningModelProps) => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  // Center the model
  useEffect(() => {
    if (scene) {
      const box = new Box3().setFromObject(scene);
      const center = box.getCenter(new Vector3());
      scene.position.sub(center);
    }
  }, [scene]);

  // Horizontal spinning animation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/robot.glb");

export default SpinningModel;
