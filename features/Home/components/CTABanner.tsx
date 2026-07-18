import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-10 md:p-16 text-center">
          <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-32 w-64 rounded-full bg-cyan-500/8 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1]">
              Let&apos;s build{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#66FCF1, #45A29E)",
                }}
              >
                something great
              </span>{" "}
              together.
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-sm md:text-base text-zinc-400 leading-relaxed">
              Have a project in mind or just want to chat? I&apos;m always open
              to discussing new ideas and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0A0F1C] transition-all hover:scale-105 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg,#66FCF1 0%, #45A29E 100%)",
                }}
              >
                Start a Project
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="mailto:ahmaddeveloper174@gmail.com"
                className="group flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Send an Email
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
