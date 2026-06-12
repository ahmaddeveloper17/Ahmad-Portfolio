"use client";
import { notFound } from "next/navigation";
import { projects } from "@/features/Portfolio/data/project";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Clock,
  Calendar,
  User,
  Layers,
  Star,
  CheckCircle2,
  Zap,
  Target,
  ChevronRight,
} from "lucide-react";
import Particles from "@/features/Portfolio/components/Particles";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // find next project for the footer CTA
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="relative w-screen h-screen overflow-auto ">
      {/* Aurora background */}
      <div className="fixed inset-0 -z-10 opacity-50 pointer-events-none">
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

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        {/* Cover image */}
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[#070710] via-[#070710]/70 to-[#070710]/30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#070710]/60 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 lg:px-16">
          <Link
            href="/portfolio"
            className="group w-max my-2 flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-2 text-sm text-zinc-400 backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All Projects
          </Link>
          <div className="flex  items-center gap-3">
            {project.featured && (
              <div className="flex w-max items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
                <Star size={11} fill="currentColor" strokeWidth={0} />
                Featured Project
              </div>
            )}
            <span className="flex w-max rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-violet-300 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {project.tagline}
          </p>

          {/* CTA buttons inline in hero */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-[0.98]"
              >
                Live Demo
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/[0.1]"
              >
                <Github size={15} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Wrapper for remaining sections ──────────────────────────────────── */}
      <div className="mx-auto max-w-72.5 sd:max-w-[370px] 540:max-w-[480px] sm:max-w-135 md:max-w-175 lg:max-w-225 xl:max-w-300 px-0">
        {/* ── 2. Meta strip ─────────────────────────────────────────────────── */}
        <section className="py-14">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: User, label: "Role", value: project.role },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Calendar, label: "Year", value: project.completionDate },
              { icon: Layers, label: "Stack", value: project.stack },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-5 transition-colors hover:border-violet-500/25"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05]">
                  <Icon size={15} className="text-violet-400" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                  {label}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white leading-snug">
                  {value}
                </p>
                {/* bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Overview ───────────────────────────────────────────────────── */}
        <section className="py-10">
          <SectionLabel>Overview</SectionLabel>
          <h2 className="mt-4 mb-6 text-4xl font-bold tracking-tight text-white">
            About this project
          </h2>
          <p className="max-w-3xl text-lg leading-[1.85] text-zinc-400">
            {project.overview}
          </p>
        </section>

        {/* ── 4. Gallery ────────────────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="mt-4 mb-10 text-4xl font-bold tracking-tight text-white">
            Visual walkthrough
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((image, i) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* top accent bar */}
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-cyan-400 to-violet-600 bg-[length:200%_100%]" />
                <img
                  src={image}
                  alt=""
                  className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Technology stack ───────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="mt-4 mb-8 text-4xl font-bold tracking-tight text-white">
            Built with
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-violet-500/35 hover:bg-violet-500/10 hover:text-violet-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── 6. Key Features ───────────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-4 mb-10 text-4xl font-bold tracking-tight text-white">
            Key highlights
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={feature}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-6 transition-all hover:border-violet-500/25"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <Zap size={15} className="text-violet-400" />
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {feature}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Challenges & Solutions ─────────────────────────────────────── */}
        <section className="py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Challenges */}
            <div className="rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-8">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-[2px] w-5 rounded-full bg-gradient-to-r from-violet-600 to-transparent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Challenges
                </span>
              </div>
              <h2 className="mb-8 text-2xl font-bold text-white">
                What we solved
              </h2>
              <ul className="space-y-5">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span className="text-sm leading-relaxed text-zinc-400">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-8">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-[2px] w-5 rounded-full bg-gradient-to-r from-cyan-500 to-transparent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Solutions
                </span>
              </div>
              <h2 className="mb-8 text-2xl font-bold text-white">
                How we built it
              </h2>
              <ul className="space-y-5">
                {project.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    <span className="text-sm leading-relaxed text-zinc-400">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 8. Outcomes ───────────────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Outcomes</SectionLabel>
          <h2 className="mt-4 mb-10 text-4xl font-bold tracking-tight text-white">
            Results & impact
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.outcomes.map((outcome, i) => (
              <div
                key={outcome}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-7"
              >
                {/* gradient top bar, distinct per column */}
                <div
                  className="mb-5 h-[2px] w-10 rounded-full"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(90deg,#7C3AED,#06B6D4)"
                        : i % 3 === 1
                          ? "linear-gradient(90deg,#06B6D4,#7C3AED)"
                          : "linear-gradient(90deg,#a78bfa,#67e8f9)",
                  }}
                />
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <Target size={15} className="text-violet-400" />
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. CTA strip ─────────────────────────────────────────────────── */}
        {(project.liveUrl || project.githubUrl) && (
          <section className="py-8">
            <div className="flex flex-wrap gap-3 rounded-2xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-6">
              <p className="w-full text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-1">
                Links
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-[0.98]"
                >
                  Live Demo
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.1]"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
            </div>
          </section>
        )}

        {/* ── 10. Next Project ──────────────────────────────────────────────── */}
        <section className="py-16 pb-24">
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/[0.07]  bg-white/5 backdrop-blur-md p-10 transition-all hover:border-violet-500/30"
          >
            {/* animated accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg,#7C3AED,#06B6D4,#7C3AED)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s linear infinite",
              }}
            />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
              Next project
            </p>

            <div className="mt-5 flex items-end justify-between gap-6">
              <div>
                <span className="mb-3 inline-block rounded-lg border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-300">
                  {nextProject.category}
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400">
                  {nextProject.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm text-zinc-500">
                  {nextProject.tagline}
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:border-transparent group-hover:scale-110">
                <ChevronRight
                  size={18}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </div>
            </div>

            {/* ambient glow */}
            <div className="pointer-events-none absolute -bottom-16 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <style jsx>{`
              @keyframes shimmer {
                0% {
                  background-position: 0% 0;
                }
                100% {
                  background-position: 200% 0;
                }
              }
            `}</style>
          </Link>
        </section>
      </div>
    </main>
  );
}

// ── tiny helper component ──────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-[2px] w-5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
        {children}
      </span>
    </div>
  );
}
