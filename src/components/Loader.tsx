import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="min-w-30 flex flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
        <p className="mt-4 text-sm font-semibold text-white">
          {progress.toFixed(0)}% loaded
        </p>
      </div>
    </Html>
  );
};

export default Loader;
