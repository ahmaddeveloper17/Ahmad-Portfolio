"use client";

import { useRef } from "react";
import { experiences } from "../data/experience";

import Particles from "@/features/Portfolio/components/Particles";
import ExperienceCard from "../components/ExperienceCard";
import { TracingBeamLine } from "../components/TracingBeamLine";
import { FollowerPointerCard } from "@/components/UI/following-pointer";
import HeadingTitle from "@/components/Heading";

export default function ExperiencePageView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <main className="w-screen min-h-screen pt-16 md:pt-20">
      <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <section className="relative w-full py-16 md:py-24 max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-0">
        {/* header */}
        <div className="mb-10 md:mb-20 flex flex-col items-center text-center">
          <HeadingTitle title="Work Experience" lineWidthClassName="w-36" />

          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            A timeline of the roles and companies that shaped how I build.
          </p>
        </div>

        {/* timeline */}
        <div ref={containerRef} className="relative">
          {/* SVG snake beam — rendered behind cards */}
          <TracingBeamLine
            containerRef={containerRef}
            cardRefs={cardRefs}
            count={experiences.length}
          />

          <div className="flex flex-col gap-12 lg:gap-20">
            {experiences.map((exp, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col lg:flex-row ${side === "right" ? "lg:justify-end" : ""}`}
                >
                  <div
                    className="w-full lg:w-[50%]"
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                  >
                    <FollowerPointerCard title={exp.company}>
                      <ExperienceCard exp={exp} side={side} />
                    </FollowerPointerCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        .exp-card {
          opacity: 0;
          transform: translateX(var(--tx, -28px));
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .exp-card[data-side="right"] { --tx: 28px; }
        .exp-card.exp-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div className="pb-16 md:pb-20" />
      </section>
    </main>
  );
}
