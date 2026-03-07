import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import SpiderThreads from "../components/SpiderThreads";
import pic from "/images/my_pic.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/8 top-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/8 right-1/8 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Animated Background */}
      <SpiderThreads
        nodeCount={150}
        linkDistance={140}
        speed={0.5}
        threadColor="140, 160, 255"
        nodeColor="180, 200, 255"
        threadOpacity={0.4}
        mouseInteraction
        mouseRadius={180}
      />

      {/* Content Overlay */}
      <div className="pointer-events-none relative z-20 flex h-full items-center">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 mt-20 lg:mt-0 items-center md:items-start">
          <div className="max-w-lg md:max-w-md lg:max-w-lg">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-center md:text-start"
            >
              <Trans i18nKey="hero.title">
                Build the
                <span className="md:block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Abdelemjid
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

          {/* Picture with Animated Balls */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="relative mx-auto w-60 h-60 lg:w-80 lg:h-80 mt-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 rotate-5"
          >
            {/* Animated Balls */}
            <div className="absolute -bottom-3 -right-12 w-8 h-8 animate-bounce rounded-full bg-linear-to-r from-amber-200 to-orange-400 backdrop-blur-md shadow-gray-950/50 shadow-md" />
            <div className="absolute -top-5 -left-15 w-12 h-12 animate-bounce rounded-full bg-linear-to-r from-blue-600 to-purple-600 backdrop-blur-md shadow-gray-950/50 shadow-md" />

            {/* Picture */}
            <img
              src={pic}
              alt="My Picture"
              className="-rotate-5 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
            />
          </motion.div>
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
