// GlobeScene.tsx — new wrapper component
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";

const Globe = lazy(() => import("./Globe"));

const CAMERA_CONFIG = { position: [0, 0, 6] as const, fov: 50 };
const CANVAS_STYLE = { background: "transparent" };
const DPR: [number, number] = [1, 2];

const GlobeScene = () => (
  <Canvas camera={CAMERA_CONFIG} style={CANVAS_STYLE} dpr={DPR}>
    <Suspense fallback={null}>
      <Globe />
    </Suspense>
  </Canvas>
);

export default GlobeScene;
