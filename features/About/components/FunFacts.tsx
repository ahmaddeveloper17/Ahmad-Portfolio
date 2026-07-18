import { FaCoffee, FaCode, FaGlobeAmericas, FaMoon } from "react-icons/fa";

const facts = [
  { icon: FaCoffee, label: "Fueled by coffee" },
  { icon: FaCode, label: "Open source enthusiast" },
  { icon: FaGlobeAmericas, label: "Tech explorer" },
  { icon: FaMoon, label: "Night owl coder" },
];

export default function FunFacts() {
  return (
    <section>
      <div className="flex flex-col items-center text-center mb-10">
        <h3
          className="relative inline-block font-bold py-2 text-3xl md:text-5xl 2xl:text-6xl font-[Stack_Sans_Notch] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg,#66FCF1, #45A29E)",
          }}
        >
          Beyond Code
          <span
            className="absolute left-0 -bottom-0 h-1 rounded-full w-28"
            style={{
              background: "linear-gradient(90deg, #66FCF1 0%, #45A29E 100%)",
            }}
          />
        </h3>
        <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground">
          A glimpse into what keeps me going when I&apos;m not shipping code.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {facts.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/5 backdrop-blur-md px-5 py-3.5 transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.08]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 transition-transform duration-300 group-hover:scale-110">
              <Icon size={16} />
            </div>
            <span className="text-sm font-medium text-zinc-300">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
