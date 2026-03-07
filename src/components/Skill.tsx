import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { motion } from "motion/react";

interface Props {
  title: string;
  progress: number;
  Icon: IconType;
}

const Skill = ({ title, progress, Icon }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: { delay: 0.4, duration: 0.8 },
      }}
      viewport={{ once: true }}
      className="z-10 w-full p-3 rounded-md bg-linear-to-br from-neutral-500/20 to-neutral-500/20 backdrop-blur-lg border border-neutral-100/15 shadow-gray-900/30 shadow-lg transition-all duration-200 hover:-translate-y-0.75 hover:shadow-lg hover:shadow-blue-400/10 hover:border-blue-500/20 cursor-pointer"
    >
      {/* Icon and Progress Number */}
      <div className="flex flex-row justify-between items-center">
        {/* Icon */}
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="p-1 rounded-md bg-green-400/5 border border-green-400/40">
            <Icon className="text-lg text-green-400" />
          </div>
          <h3 className="text-md font-semibold">{title}</h3>
        </div>

        {/* Progress Number */}
        <h1 className="text-lg font-bold">{progress}%</h1>
      </div>

      {/* Progress Bar */}
      <div className="mt-3 w-full">
        {/* Bar */}
        <div className="relative w-full h-2 rounded-full border border-neutral-100/20 bg-neutral-100/8">
          <span
            className="absolute inset-0 h-full rounded-md"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, #a1a1a1, ${progress >= 25 && progress < 50 ? "#ff8904" : progress >= 50 && progress < 75 ? "#05df72" : progress >= 75 && progress <= 100 ? "#7c86ff" : "#a1a1a1"})`,
            }}
          />
        </div>

        {/* Progress Description */}
        <div className="mt-2 w-full flex flex-row justify-between items-center">
          <span className="text-xs text-neutral-400 font-semibold">
            {t("skills.beginner")}
          </span>
          <span className="text-xs text-orange-400 font-semibold">
            {t("skills.elementary")}
          </span>
          <span className="text-xs text-green-400 font-semibold">
            {t("skills.intermediate")}
          </span>
          <span className="text-xs text-indigo-400 font-semibold">
            {t("skills.advanced")}
          </span>
          {/* <span className="text-xs text-red-500 font-semibold">
            {t("skills.expert")}
          </span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
