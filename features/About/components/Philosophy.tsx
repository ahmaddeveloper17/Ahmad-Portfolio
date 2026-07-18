import { FaGem, FaRocket, FaUsers, FaBookOpen } from "react-icons/fa";

const values = [
  {
    icon: FaGem,
    title: "Clean Code",
    description:
      "I write readable, maintainable code with consistent patterns, proper typing, and thorough testing.",
  },
  {
    icon: FaRocket,
    title: "Performance First",
    description:
      "Every millisecond matters. I optimize bundles, leverage caching, and follow Core Web Vitals best practices.",
  },
  {
    icon: FaUsers,
    title: "User-Centered Design",
    description:
      "Great UX is non-negotiable. I build interfaces that are intuitive, accessible, and delightful to use.",
  },
  {
    icon: FaBookOpen,
    title: "Continuous Learning",
    description:
      "Tech evolves fast. I stay current with emerging tools, frameworks, and industry patterns.",
  },
];

export default function Philosophy() {
  return (
    <section>
      <div className="flex flex-col items-center text-center mb-10">
        <h3
          className="relative inline-block font-bold py-2 text-3xl md:text-5xl 2xl:text-6xl font-[Stack_Sans_Notch] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg,#66FCF1, #45A29E)",
          }}
        >
          Work Philosophy
          <span
            className="absolute left-0 -bottom-0 h-1 rounded-full w-28"
            style={{
              background: "linear-gradient(90deg, #66FCF1 0%, #45A29E 100%)",
            }}
          />
        </h3>
        <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground">
          The principles that guide how I build and collaborate.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-cyan-500/25 hover:bg-white/[0.08]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <Icon size={18} />
            </div>
            <h4 className="text-base font-bold text-white mb-2">{title}</h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
