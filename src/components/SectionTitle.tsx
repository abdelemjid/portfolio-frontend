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
      className="mt-4 mb-25 w-full flex flex-col justify-center items-center gap-3"
    >
      {/* Title */}
      <div className="px-8 py-2 border-b-2 border-neutral-100/50">
        <h1 className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-4xl font-semibold">
          {title}
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-sm font-semibold text-neutral-100/50 max-w-100">
        {subtitle?.toUpperCase()}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
