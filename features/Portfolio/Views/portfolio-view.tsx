"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/project-card";

import { Badge } from "@/components/UI/badge";
import { SlidersHorizontal, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Particles from "@/features/Portfolio/components/Particles";
import { FilterDropdown } from "../components/FilterDropdown";
import { FollowerPointerCard } from "@/components/UI/following-pointer";
import HeadingTitle from "@/components/Heading";

const CATEGORIES = [...new Set(projects.map((p) => p.category))].sort();
const YEARS = [...new Set(projects.map((p) => p.completionDate))].sort(
  (a, b) => Number(b) - Number(a),
);
const ROLES = [...new Set(projects.map((p) => p.stack))].sort();

type Filters = {
  categories: string[];
  years: string[];
  roles: string[];
  featuredOnly: boolean;
};

const EMPTY: Filters = {
  categories: [],
  years: [],
  roles: [],
  featuredOnly: false,
};

function toggle(arr: string[], val: string) {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

function activeCount(filters: Filters) {
  return (
    filters.categories.length +
    filters.years.length +
    filters.roles.length +
    (filters.featuredOnly ? 1 : 0)
  );
}

export default function PortfolioView() {
  const [filters, setFilters] = useState<Filters>(EMPTY);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.featuredOnly && !p.featured) return false;
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(p.category)
      )
        return false;
      if (filters.years.length > 0 && !filters.years.includes(p.completionDate))
        return false;
      if (
        filters.roles.length > 0 &&
        !filters.roles.some((r) => p.stack.includes(r))
      )
        return false;
      return true;
    });
  }, [filters]);

  const total = activeCount(filters);
  const hasFilters = total > 0;

  return (
    <div className="relative w-screen min-h-screen pt-16 md:pt-20">
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

      <div className="w-full py-16 md:p-24 max-w-6xl xl:max-w-7xl mx-auto">
        <div className="mb-8 md:mb-2 flex flex-col items-center text-center px-4">
          <HeadingTitle title="Projects" lineWidthClassName="w-32" />

          <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-zinc-500">
            A List of my personal and professional projects, showcasing my
            skills and experience in various domains.
          </p>
        </div>
      </div>
      <div className="inset-0 z-50 flex flex-col items-start gap-4 md:gap-6 relative w-full max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-0">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/8">
                <SlidersHorizontal size={13} className="text-zinc-400" />
              </div>
              <span className="text-base font-semibold text-white">Filter</span>
              {/* Live count pill */}
              <div className="flex items-center gap-1.5 rounded-full border border-white/6 bg-white/3 px-3 py-0.5">
                <span className="text-base text-zinc-500">Showing</span>
                <span className="text-base font-bold text-white tabular-nums">
                  {filtered.length}
                </span>
                <span className="text-base text-zinc-500">
                  / {projects.length}
                </span>
              </div>
            </div>

            {/* Clear all */}
            {hasFilters && (
              <button
                onClick={() => setFilters(EMPTY)}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium text-zinc-500 transition-colors hover:bg-white/6 hover:text-zinc-300"
              >
                <X size={11} />
                Clear all
              </button>
            )}
          </div>

          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
            <FilterDropdown
              label="Category"
              options={CATEGORIES}
              selected={filters.categories}
              onChange={(v) =>
                setFilters((f) => ({
                  ...f,
                  categories: toggle(f.categories, v),
                }))
              }
            />
            <FilterDropdown
              label="Year"
              options={YEARS}
              selected={filters.years}
              onChange={(v) =>
                setFilters((f) => ({ ...f, years: toggle(f.years, v) }))
              }
            />
            <FilterDropdown
              label="Stack"
              options={ROLES}
              selected={filters.roles}
              onChange={(v) =>
                setFilters((f) => ({ ...f, roles: toggle(f.roles, v) }))
              }
            />

            {/* Featured toggle */}
            <button
              onClick={() =>
                setFilters((f) => ({ ...f, featuredOnly: !f.featuredOnly }))
              }
              className={cn(
                "flex h-9 items-center gap-1.5 rounded-xl border px-3 text-xs font-medium transition-all duration-200",
                "border-white/8 bg-white/4 text-zinc-400 hover:bg-white/9 hover:text-white",
                filters.featuredOnly &&
                  "border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15",
              )}
            >
              <Star
                size={12}
                fill={filters.featuredOnly ? "currentColor" : "none"}
                strokeWidth={filters.featuredOnly ? 0 : 1.5}
              />
              Featured
            </button>
          </div>
        </div>
        <div className="my-1">
          {/* Active filter chips */}
          {hasFilters && (
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {filters.categories.map((c) => (
                <Badge
                  key={c}
                  variant="secondary"
                  className="gap-1 rounded-lg border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-base text-violet-300 hover:bg-violet-500/20 cursor-pointer"
                  onClick={() =>
                    setFilters((f) => ({
                      ...f,
                      categories: toggle(f.categories, c),
                    }))
                  }
                >
                  {c}
                  <X size={9} />
                </Badge>
              ))}
              {filters.years.map((y) => (
                <Badge
                  key={y}
                  variant="secondary"
                  className="gap-1 rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 text-base text-cyan-300 hover:bg-cyan-500/20 cursor-pointer"
                  onClick={() =>
                    setFilters((f) => ({ ...f, years: toggle(f.years, y) }))
                  }
                >
                  {y}
                  <X size={9} />
                </Badge>
              ))}
              {filters.roles.map((r) => (
                <Badge
                  key={r}
                  variant="secondary"
                  className="gap-1 rounded-lg border border-zinc-600/40 bg-zinc-800/60 px-2 py-0.5 text-base text-zinc-300 hover:bg-zinc-700/60 cursor-pointer"
                  onClick={() =>
                    setFilters((f) => ({ ...f, roles: toggle(f.roles, r) }))
                  }
                >
                  {r}
                  <X size={9} />
                </Badge>
              ))}
              {filters.featuredOnly && (
                <Badge
                  variant="secondary"
                  className="gap-1 rounded-lg border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-base text-amber-300 hover:bg-amber-500/20 cursor-pointer"
                  onClick={() =>
                    setFilters((f) => ({ ...f, featuredOnly: false }))
                  }
                >
                  Featured only
                  <X size={9} />
                </Badge>
              )}
            </div>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 w-full ">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-3 py-24 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/3">
              <SlidersHorizontal size={22} className="text-zinc-600" />
            </div>
            <p className="text-base font-medium text-zinc-400">
              No projects match these filters
            </p>
            <p className="text-sm text-zinc-600">
              Try adjusting or clearing your filters
            </p>
            <button
              onClick={() => setFilters(EMPTY)}
              className="mt-1 rounded-xl border border-white/8 bg-white/4 px-4 py-2 text-base font-medium text-zinc-400 transition-colors hover:bg-white/8 hover:text-white"
            >
              Clear filters
            </button>
          </div>
        )}
        <div className="pb-16 md:pb-20" />
      </div>
    </div>
  );
}
