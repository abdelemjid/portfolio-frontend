import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export type SlideDirection =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "fade"
  | "zoom"
  | "flip";

interface AnimatedSkillProps {
  children: ReactNode;
  direction?: SlideDirection;
  delay?: number;
  className?: string;
}

const directionStyles: Record<
  SlideDirection,
  { hidden: string; visible: string }
> = {
  right: {
    hidden: "-translate-x-24 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  left: {
    hidden: "translate-x-24 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  bottom: {
    hidden: "-translate-y-24 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  top: {
    hidden: "translate-y-24 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  zoom: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  fade: {
    hidden: "scale-75 opacity-0",
    visible: "scale-100 opacity-100",
  },
  flip: {
    hidden: "rotate-y-90 opacity-0",
    visible: "rotate-y-0 opacity-100",
  },
};

export function AnimatedSlideCard({
  children,
  direction = "right",
  delay = 0,
  className = "",
}: AnimatedSkillProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const { hidden, visible } = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? visible : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
