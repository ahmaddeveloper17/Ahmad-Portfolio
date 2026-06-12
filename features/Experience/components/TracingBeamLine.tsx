"use client";
import { useEffect, useRef, useState } from "react";

export function TracingBeamLine({
  containerRef,
  cardRefs,
  count,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>;
  count: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState("");

  // Build the path whenever layout changes
  useEffect(() => {
    function build() {
      const container = containerRef.current;
      const cards = cardRefs.current;
      if (!container || !cards || cards.length === 0) return;

      const cRect = container.getBoundingClientRect();
      const W = cRect.width;
      const H = cRect.height;
      setSvgSize({ w: W, h: H });

      const R = 56; // curve radius
      const cardW = W * 0.49; // each card is ~62% wide
      // left card right edge and right card left edge in SVG coords
      const leftEdgeX = cardW; // right edge of left card
      const rightEdgeX = W - cardW; // left edge of right card

      let d = "";
      let curX = leftEdgeX;
      let curY = 0;

      for (let i = 0; i < cards.length - 1; i++) {
        const c0 = cards[i];
        const c1 = cards[i + 1];
        if (!c0 || !c1) continue;

        const r0 = c0.getBoundingClientRect();
        const r1 = c1.getBoundingClientRect();

        // vertical mid-points relative to container
        const y0 = r0.top - cRect.top + r0.height * 0.5;
        const y1 = r1.top - cRect.top + r1.height * 0.5;

        const isLeftCard = i % 2 === 0; // current card is on the left
        const fromX = isLeftCard ? cardW : W - cardW; // exit x of current card
        const toX = isLeftCard ? W - cardW : cardW; // enter x of next card
        const swingX = isLeftCard ? W - R * 0.5 : R * 0.5; // far swing x

        if (i === 0) {
          d += `M ${fromX} ${y0}`;
          curX = fromX;
          curY = y0;
        }

        if (isLeftCard) {
          // go right → curve down → come back left
          d += ` H ${swingX - R}`;
          d += ` Q ${swingX} ${curY} ${swingX} ${curY + R}`;
          d += ` V ${y1 - R}`;
          d += ` Q ${swingX} ${y1} ${swingX - R} ${y1}`;
          d += ` H ${toX}`;
        } else {
          // go left → curve down → come back right
          d += ` H ${swingX + R}`;
          d += ` Q ${swingX} ${curY} ${swingX} ${curY + R}`;
          d += ` V ${y1 - R}`;
          d += ` Q ${swingX} ${y1} ${swingX + R} ${y1}`;
          d += ` H ${toX}`;
        }
        curX = toX;
        curY = y1;
      }

      setPathD(d);
    }

    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, [containerRef, cardRefs, count]);

  // Scroll-drive the stroke-dashoffset
  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const total = path.getTotalLength();
    path.style.strokeDasharray = `${total}`;
    path.style.strokeDashoffset = `${total}`;

    function onScroll() {
      const rect = container!.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrolled = Math.max(0, winH * 0.6 - rect.top);
      const pct = Math.min(1, scrolled / rect.height);
      const drawn = total * pct;
      path!.style.strokeDashoffset = `${total - drawn}`;

      // move dot to tip of drawn path
      if (dot && drawn > 0 && drawn <= total) {
        const pt = path!.getPointAtLength(drawn);
        dot.setAttribute("cx", String(pt.x));
        dot.setAttribute("cy", String(pt.y));
        dot.style.opacity = "1";
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathD, containerRef]);

  if (!pathD || svgSize.w === 0) return null;

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 hidden lg:block"
      width={svgSize.w}
      height={svgSize.h}
      viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        {/* glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* dim track */}
      <path
        d={pathD}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* live fill */}
      <path
        ref={pathRef}
        d={pathD}
        stroke="url(#beamGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        style={{ transition: "stroke-dashoffset 60ms linear" }}
      />

      {/* travelling dot */}
      <circle
        ref={dotRef}
        r="5"
        fill="#7C3AED"
        filter="url(#glow)"
        style={{ opacity: 0, transition: "opacity 0.2s" }}
      />
      {/* outer ring of dot */}
      <circle
        ref={dotRef}
        r="9"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1"
        strokeOpacity="0.4"
        style={{ opacity: 0 }}
      />
    </svg>
  );
}
