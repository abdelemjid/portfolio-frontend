import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Globe } from "./Glob";
import { OrbitControls } from "@react-three/drei";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/8 top-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/8 right-1/8 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* 3D Globe Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: "transparent" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="pointer-events-none relative z-20 flex h-full items-center">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { delay: 0.4, duration: 0.8 },
              }}
              className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              <Trans i18nKey="hero.title">
                Build the
                <span className="block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Future
                </span>
              </Trans>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { delay: 0.6, duration: 0.8 },
              }}
              className="mb-8 text-lg text-gray-300 md:text-xl bg-white/5 backdrop-blur-sm p-3 rounded-md border-2 border-gray-300/6"
            >
              {t("hero.subtitle")}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.8, duration: 0.8 },
        }}
        className="z-10 absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-100/80">
            {t("hero.scroll_down")}
          </span>
          <a href="#about" className="p-3 animate-bounce hover:animate-none">
            <FaArrowDown size={25} className="text-neutral-100/80" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
