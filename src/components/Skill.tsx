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
      className="w-full p-5 rounded-md bg-neutral-100/6 border border-neutral-100/15"
    >
      {/* Icon and Progress Number */}
      <div className="flex flex-row justify-between items-center">
        {/* Icon */}
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="p-1 rounded-md bg-green-400/5 border border-green-400/40">
            <Icon className="text-lg text-green-400" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* Progress Number */}
        <h1 className="text-2xl font-bold">{progress}%</h1>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-full">
        {/* Bar */}
        <div className="relative w-full h-4 rounded-full border border-neutral-100/20 bg-neutral-100/8">
          <span
            className="absolute inset-0 h-full rounded-md"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, #a1a1a1, ${progress >= 20 && progress < 40 ? "#ff8904" : progress >= 40 && progress < 60 ? "#05df72" : progress >= 60 && progress < 80 ? "#7c86ff" : progress >= 80 ? "#fb2c36" : "#a1a1a1"})`,
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
          <span className="text-xs text-red-500 font-semibold">
            {t("skills.expert")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
