import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star, Clock, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    shortDescription: string;
    thumbnail: string;
    category: string;
    featured: boolean;
    stack: string;
    technologies: string[];
    duration: string;
    completionDate: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="project-card group relative block"
      style={{ textDecoration: "none" }}
    >
      {/* Card body */}
      <div className="card-inner relative overflow-hidden rounded-2xl bg-[#0F0F1A] border border-white/6">
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Deep gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F0F1A] via-[#0F0F1A]/60 to-transparent" />

          {/* Category badge — bottom-left of image */}
          <div className="absolute gap-3 flex  bottom-4 left-4">
            <span className="category-badge inline-block rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]">
              {project.stack}
            </span>
            <span className="category-badge inline-block rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]">
              {project.category}
            </span>
          </div>

          {/* Featured badge — top-right */}
          {project.featured && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 px-3 py-1 text-[11px] font-semibold text-amber-600 backdrop-blur-sm">
              <Star size={10} fill="currentColor" strokeWidth={0} />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title + tagline */}
          <div>
            <h3 className="text-xl font-bold text-white leading-snug tracking-tight transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-cyan-400">
              {project.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="tech-pill rounded-md border border-white/[0.07] bg-white/4 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors duration-200 group-hover:border-violet-500/30 group-hover:text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md border border-white/[0.07] bg-white/4 px-2.5 py-1 text-[11px] font-medium text-zinc-600">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between border-t border-white/6 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-zinc-500">
                <Clock size={12} className="text-zinc-600" />
                <span className="text-[12px] font-medium text-zinc-400">
                  {project.duration}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500">
                <Calendar size={12} className="text-zinc-600" />
                <span className="text-[12px] font-medium text-zinc-400">
                  {project.completionDate}
                </span>
              </div>
            </div>

            {/* Arrow CTA */}
            <div className="arrow-btn flex h-9 w-9 items-center justify-center rounded-full bg-white/6 border border-white/8 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:border-transparent group-hover:scale-110">
              <ArrowUpRight
                size={15}
                className="text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>

        {/* Inner ambient glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute -bottom-24 left-2/3 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-2xl" />
        </div>
      </div>

      <style jsx>{`
        .card-border-glow {
          background: linear-gradient(135deg, #7c3aed, #06b6d4, #7c3aed);
          padding: 1px;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .accent-bar {
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .category-badge {
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.25),
            rgba(6, 182, 212, 0.25)
          );
          border: 1px solid rgba(124, 58, 237, 0.3);
          color: rgba(167, 139, 250, 1);
          backdrop-filter: blur(8px);
        }
      `}</style>
    </Link>
  );
}
