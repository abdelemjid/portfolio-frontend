import { useEffect, useRef, useState } from "react";
import type { EducationItem } from "../types/EducationType";
import * as FaIcons from "react-icons/fa";

interface TimelineItemProps {
  entry: EducationItem;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const Icon = FaIcons[entry?.icon as keyof typeof FaIcons];
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  const dir = document.documentElement.dir as "ltr" | "rtl";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([intersectionEntry]) => {
        if (intersectionEntry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(intersectionEntry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`
        relative flex w-full items-center
        md:justify-center
      `}
    >
      {/* Desktop layout */}
      <div
        className={`
          hidden w-full items-center md:flex
          ${isLeft ? "flex-row" : "flex-row-reverse"}
        `}
      >
        {/* Card side */}
        <div className="w-5/12">
          <div
            className={`
              transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`
                group relative cursor-pointer rounded-xl border-2 border-neutral-500/10
                bg-neutral-500/15 p-6 shadow-lg shadow-black/20
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20
                hover:border-indigo-500/50
              `}
            >
              {/* Year badge */}
              <span className="mb-3 inline-block rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-blue-400">
                {new Date(entry?.startingTime)?.getFullYear()}
              </span>

              {/* Title */}
              <h3 className="mb-1 text-lg font-bold text-white">
                {entry?.name}
              </h3>

              {/* Label */}
              <span className="mb-3 inline-block text-sm font-medium text-purple-400">
                {entry?.learningSource}
              </span>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-300">
                {entry.description}
              </p>

              {/* Subtle gradient line at top */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        {/* Center node */}
        <div className="relative z-10 flex w-2/12 justify-center">
          <div
            className={`
              transition-all duration-700 ease-out
              ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              {/* Outer glow */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-blue-500/30 to-purple-500/30 blur-md" />
              {/* Inner circle */}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                <Icon />
              </div>
            </div>
          </div>
        </div>

        {/* Empty side */}
        <div className="w-5/12" />
      </div>

      {/* Mobile layout */}
      <div className="flex w-full items-start md:hidden">
        {/* Timeline node - mobile */}
        <div
          className={`relative z-10 ${dir === "rtl" ? "ml-4" : "mr-4"} flex shrink-0 items-start pt-1`}
        >
          <div
            className={`
              transition-all duration-700 ease-out
              ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 100 + 100}ms` }}
          >
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-blue-500/30 to-purple-500/30 blur-md" />
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                <Icon />
              </div>
            </div>
          </div>
        </div>

        {/* Card - mobile */}
        <div className="flex-1 pb-8">
          <div
            className={`
              transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`
                group relative cursor-pointer rounded-xl border border-white/10
                bg-neutral-500/15 p-5 shadow-lg shadow-black/20
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20
                hover:border-indigo-500/50
              `}
            >
              <span className="mb-2 inline-block rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-blue-400">
                {new Date(entry?.startingTime)?.getFullYear()}
              </span>
              <h3 className="mb-1 text-base font-bold text-white">
                {entry?.name}
              </h3>
              <span className="mb-2 inline-block text-sm font-medium text-purple-400">
                {entry?.learningSource}
              </span>
              <p className="text-sm leading-relaxed text-slate-300">
                {entry.description}
              </p>
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
