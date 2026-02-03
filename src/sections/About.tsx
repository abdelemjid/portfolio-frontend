import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { IoFlagOutline, IoPersonSharp } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { LuSignature } from "react-icons/lu";
import { TbLanguage } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiStamp } from "react-icons/pi";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-8 bg-linear-to-bl from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute animate-pulse -top-1/8 right-1/8  w-60 h-60 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute animate-bounce bottom-15 left-0 w-70 h-70 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* About Content */}
      <div className="container mx-auto">
        {/* Section Title */}
        <SectionTitle
          title={t("about.title")}
          subtitle={t("about.subtitle").toUpperCase()}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.5, duration: 0.8 },
            }}
            className="flex flex-col gap-4 bg-neutral-100/6 border border-neutral-100/15 backdrop-blur-md p-4 rounded-md"
          >
            {/* Subsection Title */}
            <div className="flex flex-row gap-3">
              <div className="p-2 rounded-md bg-indigo-400/20 flex items-center justify-center">
                <IoPersonSharp className="text-indigo-400 text-2xl" />
              </div>

              <h1 className="text-3xl font-semibold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t("about.personal_info")}
              </h1>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-3 mt-8">
              {/* Full Name */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <LuSignature className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.first_name")}
                  </h3>
                  <p className="text-amber-400">Abdelemjid</p>
                </div>
              </div>
              {/* Nationality */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <IoFlagOutline className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.nationality")}
                  </h3>
                  <p className="text-amber-400">Moroccan</p>
                </div>
              </div>
              {/* Freelance */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <SiUpwork className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.freelance")}
                  </h3>
                  <p className="text-amber-400">Available</p>
                </div>
              </div>
              {/* Graduated From */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <RiGraduationCapLine className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.graduated")}
                  </h3>
                  <p className="text-amber-400">ALX of Africa</p>
                </div>
              </div>
              {/* Specialization */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <PiStamp className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.specialization")}
                  </h3>
                  <p className="text-amber-400">Back-End</p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <FaWhatsapp className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.whatsapp")}
                  </h3>
                  <p className="text-amber-400">
                    <a
                      href="https://wa.me/212689366092?text=Hello%20I%20need%20your%20help%20in%20"
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      {t("about.contact_me")}
                    </a>
                  </p>
                </div>
              </div>
              {/* Languages */}
              <div className="flex flex-row gap-4 bg-neutral-100/20 backdrop-blur-sm rounded-md p-2">
                <div className="p-1 rounded-md border border-amber-400/50">
                  <TbLanguage className="text-2xl text-amber-400" />
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <h3 className="text-sm text-semibold text-white/80">
                    {t("about.languages")}
                  </h3>
                  <p className="text-amber-400">Arabic, English</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.7, duration: 0.8 },
            }}
            className="flex flex-col gap-4 bg-neutral-100/6 border border-neutral-100/15 backdrop-blur-md p-4 rounded-md"
          >
            {/* Subsection Title */}
            <div className="flex flex-row gap-3">
              <div className="p-2 rounded-md bg-indigo-400/20 flex items-center justify-center">
                <GiAchievement className="text-indigo-400 text-2xl" />
              </div>

              <h1 className="text-3xl font-semibold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t("about.achievement")}
              </h1>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {/* Years of Experience */}
              <div className="group relative overflow-hidden flex flex-col gap-3 rounded-md bg-neutral-100/20 p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                {/* Hover Animation */}
                <div className="absolute -top-3 -right-3 z-0 w-10 h-10 rounded-full bg-radial from-indigo-100 to-indigo-500 group-hover:w-12 group-hover:h-12 transition-all duration-200 blur-md" />

                {/* Content */}
                <div className="flex flex-col justify-center items-center gap-3">
                  <h2 className="text-4xl font-bold text-amber-400">
                    {new Date().getFullYear() - 2024}
                  </h2>
                  <p className="text-sm">{t("about.experience")}</p>
                </div>
              </div>

              {/* Completed Projects */}
              <div className="group relative overflow-hidden flex flex-col gap-3 rounded-md bg-neutral-100/20 p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                {/* Hover Animation */}
                <div className="absolute -top-3 -right-3 z-0 w-10 h-10 rounded-full bg-radial from-indigo-100 to-indigo-500 group-hover:w-12 group-hover:h-12 transition-all duration-200 blur-md" />

                {/* Content */}
                <div className="flex flex-col justify-center items-center gap-3">
                  <h2 className="text-4xl font-bold text-amber-400">+3</h2>
                  <p className="text-sm">{t("about.project_completed")}</p>
                </div>
              </div>

              {/* Happy Customers */}
              <div className="group relative overflow-hidden flex flex-col gap-3 rounded-md bg-neutral-100/20 p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                {/* Hover Animation */}
                <div className="absolute -top-3 -right-3 z-0 w-10 h-10 rounded-full bg-radial from-indigo-100 to-indigo-500 group-hover:w-12 group-hover:h-12 transition-all duration-200 blur-md" />

                {/* Content */}
                <div className="flex flex-col justify-center items-center gap-3">
                  <h2 className="text-4xl font-bold text-amber-400">0</h2>
                  <p className="text-sm">{t("about.customers")}</p>
                </div>
              </div>

              {/* Awards Won */}
              <div className="group relative overflow-hidden flex flex-col gap-3 rounded-md bg-neutral-100/20 p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                {/* Hover Animation */}
                <div className="absolute -top-3 -right-3 z-0 w-10 h-10 rounded-full bg-radial from-indigo-100 to-indigo-500 group-hover:w-12 group-hover:h-12 transition-all duration-200 blur-md" />

                {/* Content */}
                <div className="flex flex-col justify-center items-center gap-3">
                  <h2 className="text-4xl font-bold text-amber-400">0</h2>
                  <p className="text-sm">{t("about.awards")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
