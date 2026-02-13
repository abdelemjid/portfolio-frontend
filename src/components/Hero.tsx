import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Scene3D from "./Scene3D";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 md:right-[30%] md:top-[50%] md:translate-x-[50%] md:-translate-y-[50%] overflow-visible h-full">
        <Scene3D />
      </div>

      {/* Content Overlay */}
      <div className="pointer-events-none relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6">
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

      {/* Bottom Gradient */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-32 bg-linear-to-t from-slate-900 to-transparent" /> */}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.8, duration: 0.8 },
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-400">
            {t("hero.scroll_down")}
          </span>
          <div className="h-6 w-4 rounded-full border-2 border-gray-400 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-gray-400" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
