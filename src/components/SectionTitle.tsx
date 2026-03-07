import { motion } from "motion/react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { delay: 0.5, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="mt-4 mb-25 w-full flex flex-col justify-center items-center gap-1"
    >
      {/* Title */}
      <div className="px-4 py-1">
        <h1 className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-4xl font-semibold">
          {title}
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-xs font-semibold text-neutral-300/80 max-w-100 px-5 py-1">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
