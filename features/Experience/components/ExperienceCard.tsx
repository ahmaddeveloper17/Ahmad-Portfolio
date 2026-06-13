"use client";
import { formatDate, getDuration } from "@/lib/utils";
import { Experience } from "@/Types/experience.type";
import { Briefcase, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const TYPE_COLORS: Record<string, string> = {
  "Full Time": "border-violet-500/30 bg-violet-500/10 text-violet-300",
  Freelance: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  "Part Time": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Internship: "border-zinc-600/40 bg-zinc-800/60 text-zinc-400",
};

export default function ExperienceCard({
  exp,
  side,
}: {
  exp: Experience;
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("exp-in");
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const tc = TYPE_COLORS[exp.employmentType] ?? TYPE_COLORS["Internship"];

  return (
    <div
      ref={ref}
      data-side={side}
      className="exp-card group relative overflow-hidden rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-xl transition-[border-color] duration-300 hover:border-violet-500/25"
    >
      <div className="p-6 lg:p-7">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {exp.logo ? (
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-10 w-10 rounded-xl border border-white/8 object-cover bg-primary/4"
              />
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ring/[0.08] bg-primary/4">
                <Briefcase size={16} className="text-violet-400" />
              </div>
            )}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-600">
                {exp.company}
              </p>
              <h3 className="text-base font-bold leading-snug text-white">
                {exp.position}
              </h3>
            </div>
          </div>
          <span
            className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${tc}`}
          >
            {exp.employmentType}
          </span>
        </div>

        {/* meta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="flex items-center gap-1.5 text-base text-zinc-500">
            <CalendarDays size={14} className="text-zinc-600" />
            {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
          </span>
          <span className="ml-1 rounded-md bg-white/[0.05] px-1.5 py-0.5  text-muted-foreground text-sm">
            {getDuration(exp.startDate, exp.endDate)}
          </span>
          <span className="flex items-center gap-1.5 text-base text-zinc-500">
            <MapPin size={14} className="text-zinc-600" />
            {exp.location}
          </span>
          {exp.current && (
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Current
            </span>
          )}
        </div>

        {/* description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {exp.description}
        </p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {exp.achievements.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-secondary"
              />
              <span className="text-xs leading-relaxed text-muted-foreground ">
                {a}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-ring/[0.5] pt-5">
          {exp.technologies.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-ring/[0.07] bg-primary/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-ring-500/30 hover:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  );
}
