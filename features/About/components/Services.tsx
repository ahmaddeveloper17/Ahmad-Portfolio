import { FaCode, FaPlug, FaCloud, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications using React, Next.js, Node.js, and MongoDB — from database design to deployment.",
  },
  {
    icon: FaPlug,
    title: "API Design & Integration",
    description:
      "RESTful and GraphQL APIs built for performance, security, and seamless third-party integrations.",
  },
  {
    icon: FaCloud,
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, Docker containerization, cloud hosting on Vercel/AWS, and serverless architectures.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect interfaces from Figma designs with Tailwind CSS, Framer Motion, and responsive layouts.",
  },
];

export default function Services() {
  return (
    <section>
      <div className="flex flex-col items-center text-center mb-10">
        <h3
          className="relative inline-block font-bold py-2 text-3xl md:text-5xl 2xl:text-6xl font-[Stack_Sans_Notch] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg,#66FCF1, #45A29E)",
          }}
        >
          What I Do
          <span
            className="absolute left-0 -bottom-0 h-1 rounded-full w-24"
            style={{
              background: "linear-gradient(90deg, #66FCF1 0%, #45A29E 100%)",
            }}
          />
        </h3>
        <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground">
          How I help businesses and teams build great digital products.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.08]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 transition-transform duration-300 group-hover:scale-110">
              <Icon size={18} />
            </div>
            <h4 className="text-base font-bold text-white mb-2">{title}</h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
