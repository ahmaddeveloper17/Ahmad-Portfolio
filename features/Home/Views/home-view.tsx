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

export default function HomePageView() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
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

  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      {/* Background Lines with full interaction */}
      <div className="fixed inset-0 z-30 opacity-80 pointer-events-none">
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
      <div className="absolute inset-0 z-20 opacity-80 pointer-events-none">
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

      {/* Centered Text */}
      <div className=" lg:mt-30 xl:mt-40 inset-0 z-999 flex flex-col items-center justify-center gap-4 pointer-events-none">
        <SplitText
          text="I'm, Ahmad!"
          className="text-3xl md:text-5xl  text-white text-center"
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
        <div className=" text-white font-[Stack_Sans_Notch] ">
          <TrueFocus
            sentence="Full Stack Developer"
            manualMode={false}
            blurAmount={4}
            borderColor="#eee"
            animationDuration={0.5}
            glowColor="rgba(0, 255, 0, 0.6)"
            pauseBetweenAnimations={1}
          />
        </div>

        <div className=" text-white relative pointer-events-auto ">
          <GlassIcons items={items} className="custom-class" />
        </div>
        <p className=" text-base tracking-tight  text-white text-center w-120">
          A Full Stack Developer specializing in MERN Stack, Next.js,
          TypeScript, and modern web applications. I help businesses build
          scalable, high-performance digital products.
        </p>
        <div className=" mt-4   pointer-events-auto">
          <SocialFlipButton
            items={dockItems}
            frontClassName=" border-white border "
          />
        </div>
      </div>
    </div>
  );
}
