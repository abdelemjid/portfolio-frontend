import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  ContactShadows,
  Stars,
} from "@react-three/drei";
import Loader from "./Loader";

const SpinningModel = lazy(() => import("./SpinningModel"));

const Scene3D = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [-2, 2, 5], fov: 50 }}
        className="h-full w-full overflow-visible"
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        style={{ background: "transparent" }}
        shadows
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
          <pointLight position={[3, 3, 3]} intensity={0.4} color="#c4b5fd" />

          {/* Floating Animation Wrapper */}
          <Float
            speed={1.5}
            rotationIntensity={0}
            floatIntensity={0.3}
            floatingRange={[-0.1, 0.1]}
          >
            <SpinningModel
              modelPath="/models/dog.glb"
              rotationSpeed={0.1}
              scale={0.3}
              position={[0, 0, 0]}
            />
          </Float>

          {/* Shadow under the model */}
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.4}
            scale={6}
            blur={2.5}
            far={4}
          />

          {/* Environment for realistic reflections */}
          <Environment preset="city" />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={2.5}
            maxDistance={10}
            target={[0, 0.3, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
