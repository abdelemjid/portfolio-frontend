import React, { useRef, useEffect, useCallback } from "react";

interface SpiderThreadsProps {
  /** Number of nodes */
  nodeCount?: number;
  /** Max distance (px) to draw a thread between two nodes */
  linkDistance?: number;
  /** Node radius in px */
  nodeRadius?: number;
  /** Max speed of each node */
  speed?: number;
  /** Thread color (any CSS color) */
  threadColor?: string;
  /** Node color */
  nodeColor?: string;
  /** Max thread opacity (0–1) when nodes are closest */
  threadOpacity?: number;
  /** Thread line width */
  threadWidth?: number;
  /** Enable mouse interaction — threads connect to cursor */
  mouseInteraction?: boolean;
  /** Distance from cursor to connect */
  mouseRadius?: number;
  /** Extra classes on the wrapper */
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SpiderThreads: React.FC<SpiderThreadsProps> = ({
  nodeCount = 80,
  linkDistance = 150,
  nodeRadius = 2,
  speed = 0.6,
  threadColor = "140, 160, 255",
  nodeColor = "180, 200, 255",
  threadOpacity = 0.45,
  threadWidth = 1,
  mouseInteraction = false,
  mouseRadius = 200,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const animFrameRef = useRef<number>(0);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  /* ---------- helpers ---------- */

  const randomSpeed = useCallback(
    () => (Math.random() - 0.5) * speed * 2,
    [speed],
  );

  const initNodes = useCallback(
    (w: number, h: number) => {
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: randomSpeed(),
        vy: randomSpeed(),
      }));
    },
    [nodeCount, randomSpeed],
  );

  /* ---------- resize ---------- */

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    ctx?.scale(dpr, dpr);

    // re‑init only when we don't have nodes yet or count changed
    if (nodesRef.current.length !== nodeCount) {
      initNodes(w, h);
    }

    sizeRef.current = { w, h };
  }, [initNodes, nodeCount]);

  /* ---------- animation loop ---------- */

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    ctx.clearRect(0, 0, w, h);

    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    // --- move nodes ---
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      // bounce off edges
      if (node.x < 0 || node.x > w) node.vx *= -1;
      if (node.y < 0 || node.y > h) node.vy *= -1;

      // clamp
      node.x = Math.max(0, Math.min(w, node.x));
      node.y = Math.max(0, Math.min(h, node.y));
    }

    // --- draw threads ---
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < linkDistance) {
          const opacity = (1 - dist / linkDistance) * threadOpacity;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${threadColor}, ${opacity})`;
          ctx.lineWidth = threadWidth;
          ctx.stroke();
        }
      }

      // --- mouse threads ---
      if (mouseInteraction && mouse.active) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const opacity = (1 - dist / mouseRadius) * threadOpacity * 1.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${threadColor}, ${opacity})`;
          ctx.lineWidth = threadWidth * 1.5;
          ctx.stroke();
        }
      }
    }

    // --- draw nodes ---
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${nodeColor}, 0.8)`;
      ctx.fill();

      // subtle glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius * 2.5, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        nodeRadius * 2.5,
      );
      grad.addColorStop(0, `rgba(${nodeColor}, 0.25)`);
      grad.addColorStop(1, `rgba(${nodeColor}, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // --- mouse cursor node ---
    if (mouseInteraction && mouse.active) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, nodeRadius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${nodeColor}, 1)`;
      ctx.fill();
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, [
    linkDistance,
    nodeRadius,
    threadColor,
    nodeColor,
    threadOpacity,
    threadWidth,
    mouseInteraction,
    mouseRadius,
  ]);

  /* ---------- mouse handlers ---------- */

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mouseInteraction) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    },
    [mouseInteraction],
  );

  const onMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  /* ---------- lifecycle ---------- */

  useEffect(() => {
    handleResize();
    animFrameRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => handleResize());
    const parent = canvasRef.current?.parentElement;
    if (parent) ro.observe(parent);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [draw, handleResize, onMouseMove, onMouseLeave]);

  return (
    <div
      className={`absolute inset-0 h-full w-full overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-auto block h-full w-full"
      />
    </div>
  );
};

export default SpiderThreads;
