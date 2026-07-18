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
  Sparkles,
  Shield,
  Palette,
  Cpu,
} from "lucide-react";
import Particles from "@/features/Portfolio/components/Particles";

interface Props {
  params: Promise<{ slug: string }>;
}

const metaIcons = [User, Clock, Calendar, Layers];
const metaGradients = [
  "from-violet-600 to-cyan-500",
  "from-cyan-500 to-violet-600",
  "from-violet-500 to-purple-600",
  "from-cyan-400 to-teal-500",
];

const featureIcons = [Zap, Sparkles, Shield, Palette, Cpu, ArrowUpRight];

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="relative w-screen min-h-screen">
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
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
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#070710] via-[#070710]/70 to-[#070710]/30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#070710]/60 via-transparent to-transparent" />

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
          <div className="flex items-center gap-3 mt-4">
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

          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            {project.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            {project.tagline}
          </p>

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

        {/* floating gradient orbs */}
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-40 right-40 h-48 w-48 rounded-full bg-cyan-500/8 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      </section>

      {/* ── Content wrapper ───────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[360px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] px-4 sm:px-6 md:px-0">

        {/* ── 2. Meta strip ──────────────────────────────────────────────── */}
        <section className="py-14">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: User, label: "Role", value: project.role },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Calendar, label: "Year", value: project.completionDate },
              { icon: Layers, label: "Stack", value: project.stack },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:scale-[1.02] hover:border-transparent"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${metaGradients[i]} bg-opacity-20`}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-white leading-snug">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gradient divider ────────────────────────────────────────────── */}
        <Divider />

        {/* ── 3. Overview ──────────────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Overview</SectionLabel>
          <div className="mt-6 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-linear-to-b from-violet-600 via-cyan-500 to-transparent rounded-full" />
            <p className="pl-6 text-base sm:text-lg leading-[1.85] text-zinc-300">
              {project.overview}
            </p>
          </div>
        </section>

        <Divider />

        {/* ── 4. Gallery ──────────────────────────────────────────────────────── */}
        {project.gallery.length > 0 && (
          <>
            <section className="py-16">
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="mt-4 mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Visual walkthrough
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {project.gallery.map((image, i) => (
                  <div
                    key={image}
                    className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="h-[2px] w-full bg-linear-to-r from-violet-600 via-cyan-400 to-violet-600 bg-[length:200%_100%]" />
                    <img
                      src={image}
                      alt=""
                      className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#070710]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </section>
            <Divider />
          </>
        )}

        {/* ── 5. Technology stack ──────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="mt-4 mb-8 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built with
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => {
              const gradients = [
                "from-violet-600/20 to-cyan-500/20 border-violet-500/30 text-violet-300",
                "from-cyan-500/20 to-teal-500/20 border-cyan-500/30 text-cyan-300",
                "from-purple-600/20 to-pink-500/20 border-purple-500/30 text-purple-300",
                "from-emerald-500/20 to-cyan-500/20 border-emerald-500/30 text-emerald-300",
                "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
                "from-blue-500/20 to-violet-500/20 border-blue-500/30 text-blue-300",
              ];
              return (
                <span
                  key={tech}
                  className={`rounded-xl border bg-linear-to-br ${gradients[i % gradients.length]} px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* ── 6. Key Features ──────────────────────────────────────────────── */}
        <section className="py-16">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-4 mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Key highlights
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={feature}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.08]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-cyan-500">
                  <Zap size={16} className="text-white" />
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {feature}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] origin-left scale-x-0 bg-linear-to-r from-violet-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 7. Challenges & Solutions ───────────────────────────────────── */}
        <section className="py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-violet-600 to-transparent" />
              <div className="mb-2 flex items-center gap-2">
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
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                    <span className="text-sm leading-relaxed text-zinc-400">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-linear-to-b from-cyan-500 to-transparent" />
              <div className="mb-2 flex items-center gap-2">
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

        <Divider />

        {/* ── 8. Outcomes ──────────────────────────────────────────────────── */}
        {project.outcomes.length > 0 && (
          <>
            <section className="py-16">
              <SectionLabel>Outcomes</SectionLabel>
              <h2 className="mt-4 mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Results & impact
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {project.outcomes.map((outcome, i) => (
                  <div
                    key={outcome}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-7 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      className="mb-5 h-[3px] w-12 rounded-full"
                      style={{
                        background:
                          i % 3 === 0
                            ? "linear-gradient(90deg,#7C3AED,#06B6D4)"
                            : i % 3 === 1
                              ? "linear-gradient(90deg,#06B6D4,#7C3AED)"
                              : "linear-gradient(90deg,#a78bfa,#67e8f9)",
                      }}
                    />
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600/20 to-cyan-500/20 border border-white/[0.07]">
                      <Target size={16} className="text-violet-400" />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <Divider />
          </>
        )}

        {/* ── 9. CTA strip ────────────────────────────────────────────────── */}
        {(project.liveUrl || project.githubUrl) && (
          <section className="py-10">
            <div className="rounded-2xl border border-white/[0.07] bg-linear-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-md p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-4">
                Links
              </p>
              <div className="flex flex-wrap gap-3">
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
            </div>
          </section>
        )}

        {/* ── 10. Next Project ────────────────────────────────────────────── */}
        <section className="py-16 pb-24">
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/[0.07] bg-linear-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-md p-8 sm:p-10 transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-600/5"
          >
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

            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div>
                <span className="mb-3 inline-block rounded-lg border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-300">
                  {nextProject.category}
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-cyan-400">
                  {nextProject.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm text-zinc-500">
                  {nextProject.tagline}
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:border-transparent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-600/25">
                <ChevronRight
                  size={18}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-16 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <style jsx>{`
              @keyframes shimmer {
                0% { background-position: 0% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
          </Link>
        </section>
      </div>
    </main>
  );
}

// ── helper components ──────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-[2px] w-5 rounded-full bg-linear-to-r from-violet-600 to-cyan-500" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
        {children}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="py-2">
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
    </div>
  );
}
