"use client";

import GlassIcons from "@/features/Home/components/GlassIcons";
import SplitText from "@/features/Home/components/SplitText";
import TrueFocus from "@/features/Home/components/TrueFocus";
import { SiMongodb, SiExpress } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import SocialFlipButton from "@/features/Home/components/social-flip-button";

import Particles from "@/features/Portfolio/components/Particles";
import LightRays from "@/features/Home/components/LightRays";
import RotatingText from "../../../components/RotatingText";
import InfiniteMenu from "@/components/InfiniteMenu";
import StatsBar from "@/features/Home/components/StatsBar";
import FeaturedProjects from "@/features/Home/components/FeaturedProjects";
import CTABanner from "@/features/Home/components/CTABanner";

export default function HomePageView() {
  const handleAnimationComplete = () => {};
  const items = [
    {
      icon: <SiMongodb className="text-white text-2xl" />,
      color: "green",
      label: "MongoDB",
    },
    {
      icon: <SiExpress className="text-gray-300 text-2xl" />,
      color: "gray",
      label: "Express",
    },
    {
      icon: <FaReact className="text-cyan-400 text-2xl" />,
      color: "blue",
      label: "React",
    },
    {
      icon: <FaNodeJs className="text-white text-2xl" />,
      color: "lime",
      label: "Node.js",
    },
  ];
  const dockItems = [
    {
      letter: "H",
      icon: <FaGithub size={18} />,
      label: "Github",
      onClick: () => alert("Home!"),
    },
    {
      letter: "O",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      onClick: () => alert("Archive!"),
    },
    {
      letter: "V",
      icon: <FaFacebook size={18} />,
      label: "Facebook",
      onClick: () => alert("Profile!"),
    },
    {
      letter: "E",
      icon: <FaInstagram size={18} />,
      label: "Instagram",
      onClick: () => alert("Profile!"),
    },
    {
      letter: "R",
      icon: <FaYoutube size={18} />,
      label: "YouTube",
      onClick: () => alert("Profile!"),
    },
  ];
  const menuItems = [
    {
      image: "/home/re.png",
      link: "https://google.com/",
    },
    {
      image: "/home/node.png",
      link: "https://google.com/",
    },

    {
      image: "/home/db.png",
      link: "https://google.com/",
    },
    {
      image: "/home/next.png",
      link: "https://google.com/",
    },

    {
      image: "/home/gpt.png",
      link: "https://google.com/",
    },
  ];

  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Background Lines with full interaction */}
      <div className="fixed inset-0 z-10 opacity-80 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.7}
          rayLength={8}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="fixed inset-0 z-0 opacity-80 pointer-events-none">
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-6xl mx-auto px-4 lg:px-0 pt-24 l pb-12 lg:pb-0">
        <div className="w-full lg:w-auto px-2 lg:px-0">
          <SplitText
            text="I'm, Ahmad Mujatba!"
            className="text-2xl sm:text-3xl md:text-5xl font-[Stack_Sans_Notch] py-2 text-white text-center lg:text-left"
            delay={50}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="text-white py-2 text-lg sm:text-xl md:text-3xl font-[Stack_Sans_Notch] flex items-center gap-2 justify-center lg:justify-start">
            <p>Doing as</p>
            <RotatingText
              texts={["Frontend", "Backend", "DevOps", "SEO Expert"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-black overflow-hidden sm:py-1 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </div>

          <div className="text-white relative py-2 pointer-events-auto flex justify-center lg:justify-start">
            <GlassIcons items={items} className="custom-class" />
          </div>
          <p className="text-sm sm:text-base tracking-tight text-white w-full max-w-md lg:max-w-lg text-center lg:text-left">
            A Full Stack Developer specializing in MERN Stack, Next.js,
            TypeScript, and modern web applications. I help businesses build
            scalable, high-performance digital products.
          </p>
          <div className="mt-7 pointer-events-auto flex justify-center lg:justify-start">
            <SocialFlipButton items={dockItems} frontClassName="border-none" />
          </div>
        </div>
        <div className="h-80 sm:h-96 lg:h-[30rem] w-full lg:w-[55%] z-50 mt-8 lg:mt-0">
          <InfiniteMenu items={menuItems} scale={1.1} />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10">
        <StatsBar />
      </section>

      {/* Featured Projects */}
      <section className="relative z-10">
        <FeaturedProjects />
      </section>

      {/* CTA Banner */}
      <section className="relative z-10">
        <CTABanner />
      </section>
    </div>
  );
}
