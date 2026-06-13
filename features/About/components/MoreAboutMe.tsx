import CountUp from "@/components/CountUp";

const stats = [
  {
    label: "Experience",
    value: 3,
    suffix: "+",
  },
  {
    label: "Projects",
    value: 10,
    suffix: "+",
  },
  {
    label: "Technologies",
    value: 20,
    suffix: "+",
  },
  {
    label: "Client Satisfaction",
    value: 99,
    suffix: "%",
  },
];

export default function MoreAboutMe() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className=" cursor-pointer
            relative group
            bg-secondary/5 backdrop-blur-md
            border border-ring/30
            rounded-xl
            p-5
            text-center
            hover:border-ring/50
            transition-all duration-300
          "
        >
          {/* glow effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/50 blur-xl"></div>

          <div className="relative z-10">
            <div className="text-3xl font-bold text-white flex items-center justify-center ">
              <CountUp
                from={0}
                to={item.value}
                duration={1.5}
                separator=","
                className="count-up-text"
              />
              <span>{item.suffix}</span>
            </div>

            <p className="text-sm text-zinc-400 mt-2 tracking-wide">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
