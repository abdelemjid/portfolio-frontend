import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";

interface Props {
  achievement: any;
}

const AchievementItem = ({ achievement }: Props) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp({
    end: achievement.count,
    enabled: isInView,
    duration: 3000,
  });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden flex flex-col gap-3 border-2 border-neutral-100/10 rounded-md bg-neutral-500/15 backdrop-blur-xl p-5 shadow-lg shadow-neutral-900/20 hover:border-indigo-500/50 hover:shadow-blue-400/10 transition-all duration-200 hover:-translate-y-1 cursor-pointer`}
    >
      {/* Hover Animation */}
      <div className="absolute -top-3 -right-3 z-0 w-10 h-10 rounded-full bg-radial from-indigo-100/60 to-indigo-500/60 group-hover:w-15 group-hover:h-15 transition-all duration-200 blur-md" />

      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-4xl font-bold text-purple-400">{count}</h2>
        <p className="text-sm">{achievement.title}</p>
      </div>
    </div>
  );
};

export default AchievementItem;
