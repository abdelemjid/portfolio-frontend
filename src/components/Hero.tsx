import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";

const GlobeScene = lazy(() => import("./GlobeScene"));

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
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </div>

      {/* Content Overlay */}
      <div className="pointer-events-none relative z-20 flex h-full items-center">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.8 },
              }}
              viewport={{ once: true }}
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
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="mb-8 rounded-md border-2 border-gray-300/6 bg-white/5 p-3 text-lg text-gray-300 backdrop-blur-sm md:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.8, duration: 0.8 },
        }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-100/80">
            {t("hero.scroll_down")}
          </span>
          <a href="#about" className="animate-bounce p-3 hover:animate-none">
            <FaArrowDown size={25} className="text-neutral-100/80" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
