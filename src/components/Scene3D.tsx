import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  ContactShadows,
} from "@react-three/drei";
import SpinningModel from "./SpinningModel";
import Loader from "./Loader";

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [-2, 2, 5], fov: 50 }}
      className="h-full w-full overflow-visible"
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<Loader />}>
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={0.5} color="#6366f1" />

        {/* Floating Animation Wrapper */}
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.1, 0.1]}
        >
          {/* Your GLB Model */}
          <SpinningModel
            modelPath="/models/setup_optimized.glb"
            rotationSpeed={0.002}
            scale={0.06}
            position={[0, 0, 0]}
          />
        </Float>

        {/* Shadow under the model */}
        <ContactShadows
          position={[0, -0.1, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
        />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        {/* Mouse Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
