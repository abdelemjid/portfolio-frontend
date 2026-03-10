import { AnimatedSlideCard } from "./AnimatedSlideCard";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <AnimatedSlideCard direction="zoom" delay={100}>
      <div className="mt-4 mb-25 w-full flex flex-col justify-center items-center gap-1">
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
      </div>
    </AnimatedSlideCard>
  );
};

export default SectionTitle;
