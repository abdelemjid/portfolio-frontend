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
      className="mt-4 mb-12 w-full flex flex-col justify-center items-center gap-3"
    >
      {/* Title */}
      <div className="px-8 py-2 rounded-full border-b-2 border-neutral-100/50 bg-neutral-100/2 backdrop-blur-md hover:bg-neutral-100/10 hover:-translate-y-1 transition-all ease-in-out duration-200 cursor-pointer">
        <h1 className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-4xl font-semibold">
          {title}
        </h1>
      </div>

      {/* Subtitle */}
      <p className="font-semibold text-neutral-100/50">{subtitle}</p>
    </motion.div>
  );
};

export default SectionTitle;
