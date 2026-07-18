import { projects } from "@/features/Portfolio/data/project";
import ProjectCard from "@/features/Portfolio/components/project-card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h3
            className="relative inline-block font-bold py-2 text-3xl md:text-5xl 2xl:text-6xl font-[Stack_Sans_Notch] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#66FCF1, #45A29E)",
            }}
          >
            Featured Work
            <span
              className="absolute left-0 -bottom-0 h-1 rounded-full w-28"
              style={{
                background: "linear-gradient(90deg, #66FCF1 0%, #45A29E 100%)",
              }}
            />
          </h3>
          <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-zinc-500">
            A selection of my recent and most impactful projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            View All Projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
