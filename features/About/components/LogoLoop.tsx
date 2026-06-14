import LogoLoop from "@/components/LogoLoop";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiDocker,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const techFrontLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiRedux />,
    title: "Redux Toolkit",
    href: "https://redux-toolkit.js.org",
  },
];

const techBackLogos = [
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
];

const techDevOpsLogos = [
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiVercel />,
    title: "Vercel",
    href: "https://vercel.com",
  },
];

export function TechsLogoLoop() {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {/* Frontend */}
      <div>
        <h3
          className={`relative inline-block font-bold  text-xl md:text-2xl  font-[Stack_Sans_Notch] my-4 text-white `}
        >
          Frontend
          {/* Main Underline */}
          <span
            className={`absolute left-0 -bottom-0 h-1 w-15 bg-white  rounded-full `}
          />
        </h3>
        <LogoLoop
          logos={techFrontLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          className="text-white"
          fadeOutColor="#000"
          ariaLabel="Frontend Technologies"
        />
      </div>

      {/* Backend */}
      <div>
        <h3
          className={`relative inline-block font-bold  text-xl md:text-2xl  font-[Stack_Sans_Notch] my-4 text-white `}
        >
          Backend
          {/* Main Underline */}
          <span
            className={`absolute left-0 -bottom-0 h-1 w-15 bg-white  rounded-full `}
          />
        </h3>
        <LogoLoop
          logos={techBackLogos}
          speed={100}
          direction="right"
          logoHeight={60}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          className="text-white"
          fadeOutColor="#000"
          ariaLabel="Backend Technologies"
        />
      </div>

      {/* DevOps */}
      <div>
        <h3
          className={`relative inline-block font-bold  text-xl md:text-2xl  font-[Stack_Sans_Notch] my-4 text-white `}
        >
          DevOps
          {/* Main Underline */}
          <span
            className={`absolute left-0 -bottom-0 h-1 w-15 bg-white  rounded-full `}
          />
        </h3>
        <LogoLoop
          logos={techDevOpsLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          className="text-white"
          fadeOutColor="#000"
          ariaLabel="DevOps Tools"
        />
      </div>
    </div>
  );
}
