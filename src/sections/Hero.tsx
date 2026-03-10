import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FaArrowDown, FaInstagram } from "react-icons/fa";
import SpiderThreads from "../components/SpiderThreads";
import pic from "/images/my_pic.jpg";
import { VscFlame } from "react-icons/vsc";
import { FiFacebook } from "react-icons/fi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { AnimatedSlideCard } from "../components/AnimatedSlideCard";

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
        nodeCount={140}
        linkDistance={140}
        speed={0.5}
        threadColor="140, 160, 255"
        nodeColor="180, 200, 255"
        threadOpacity={0.4}
        mouseInteraction={false}
        mouseRadius={180}
      />

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container flex flex-row gap-8">
          <div className="max-w-md">
            <AnimatedSlideCard direction="right" delay={150}>
              <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                <Trans i18nKey="hero.title">
                  Build the
                  <span className="md:block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Abdelemjid
                  </span>
                </Trans>
              </h1>
            </AnimatedSlideCard>

            <AnimatedSlideCard direction="flip" delay={300}>
              <p className="mb-8 rounded-md border-2 border-gray-300/6 bg-white/5 p-3 text-lg text-gray-300 backdrop-blur-sm md:text-xl">
                {t("hero.subtitle")}
              </p>
            </AnimatedSlideCard>

            {/* Social Media */}
            <AnimatedSlideCard direction="right" delay={450}>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-1">
                  <VscFlame size={20} />
                  <h4 className="text-sm font-semibold">Follow Me</h4>
                </div>

                <div className="flex flex-row gap-2">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/essaidabdelemjid/"
                    target="_blank"
                    className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
                  >
                    <FaInstagram
                      size={25}
                      className="text-neutral-100/60 group-hover:text-pink-500 transition-all duration-150"
                    />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/m.e.j.i.d.tsu"
                    target="_blank"
                    className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
                  >
                    <FiFacebook
                      size={25}
                      className="text-neutral-100/60 group-hover:text-blue-500 transition-all duration-150"
                    />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/abdelemjid-essaid-0x00"
                    target="_blank"
                    className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
                  >
                    <PiLinkedinLogoLight
                      size={25}
                      className="text-neutral-100/60 group-hover:text-blue-400 transition-all duration-150"
                    />
                  </a>
                </div>
              </div>
            </AnimatedSlideCard>
          </div>

          {/* Picture with Animated Balls */}
          <AnimatedSlideCard direction="left" className="mx-auto">
            <div className="hidden md:block relative w-60 h-60 lg:w-80 lg:h-80 mt-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 rotate-5">
              {/* Animated Balls */}
              <div className="absolute -bottom-3 -right-12 w-8 h-8 animate-bounce rounded-full bg-linear-to-r from-amber-200 to-orange-400 backdrop-blur-md shadow-gray-950/50 shadow-md" />
              <div className="absolute -top-5 -left-15 w-12 h-12 animate-bounce rounded-full bg-linear-to-r from-blue-600 to-purple-600 backdrop-blur-md shadow-gray-950/50 shadow-md" />

              {/* Picture */}
              <img
                src={pic}
                alt="My Picture"
                className="-rotate-5 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
              />
            </div>
          </AnimatedSlideCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSlideCard
        direction="bottom"
        delay={0}
        className="z-20 absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-100/80">
            {t("hero.scroll_down")}
          </span>
          <a href="#about" className="animate-bounce p-3 hover:animate-none">
            <FaArrowDown size={25} className="text-neutral-100/80" />
          </a>
        </div>
      </AnimatedSlideCard>
    </section>
  );
};

export default Hero;
