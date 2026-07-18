import CountUp from "@/components/CountUp";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-6 md:p-8 text-center transition-all duration-300 hover:border-violet-500/25"
            >
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
                  <CountUp
                    from={0}
                    to={value}
                    duration={1.5}
                    separator=","
                    className="count-up-text"
                  />
                  <span>{suffix}</span>
                </div>
                <p className="text-sm text-zinc-400 mt-2 tracking-wide">
                  {label}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/5 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
