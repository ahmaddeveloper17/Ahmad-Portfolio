import LogoLoop from "@/components/LogoLoop";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

const techLogos = [
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
];

export function TechsLogoLoop() {
  return (
    <div className=" flex flex-col gap-6 mt-15">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        className=" text-white"
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        className=" text-white"
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
