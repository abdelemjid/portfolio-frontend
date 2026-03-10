import type { EducationItem } from "../types/EducationType";
import { TimelineItem } from "./TimelineItem";

const Timeline = ({ data }: { data: EducationItem[] }) => {
  const dir = document.documentElement.dir as "ltr" | "rtl";

  return (
    <div className="relative">
      {/* Vertical line - Desktop */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
        <div className="h-full w-full bg-linear-to-b from-transparent via-blue-500/30 to-transparent" />
        {/* Glow effect on line */}
        <div className="absolute inset-0 w-px bg-linear-to-b from-transparent via-blue-400/20 to-transparent blur-sm" />
      </div>

      {/* Vertical line - Mobile */}
      <div
        className={`absolute ${dir === "ltr" ? "left-5" : "right-5"} top-0 h-full w-px md:hidden`}
      >
        <div className="h-full w-full bg-linear-to-b from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-0 w-px bg-linear-to-b from-transparent via-blue-400/20 to-transparent blur-sm" />
      </div>

      {/* Timeline items */}
      <div className="space-y-8 md:space-y-12">
        {data?.map((entry, index) => (
          <TimelineItem key={entry._id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
