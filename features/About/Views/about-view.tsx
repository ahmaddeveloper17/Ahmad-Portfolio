"use client";

import ProfileCard from "@/features/About/components/ProfileCard";
import SplitText from "@/features/Home/components/SplitText";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { TechsLogoLoop } from "../components/LogoLoop";
import SoftAurora from "../components/SoftAurora";
import MoreAboutMe from "../components/MoreAboutMe";

const dockItems = [
  { icon: <FaGithub size={18} />, label: "Github", onClick: () => {} },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", onClick: () => {} },
  { icon: <FaFacebook size={18} />, label: "Facebook", onClick: () => {} },
  { icon: <FaInstagram size={18} />, label: "Instagram", onClick: () => {} },
  { icon: <FaYoutube size={18} />, label: "YouTube", onClick: () => {} },
];

export default function AboutPageView() {
  return (
    <div className="relative w-screen h-screen overflow-auto">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex flex-col max-w-6xl mx-auto">
        <section className="w-full flex justify-center px-4 pt-28 lg:pt-40 ">
          <div className="w-full  flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="text-white text-5xl py-6 tracking-tight">
                About Me
              </h1>
              <p className="text-white font-semibold text-lg">
                MERN Developer | DevOps | Next JS | OpenAI | SaaS
              </p>

              <p className="text-white text-base">
                A full-stack developer focusing on the MERN stack, specializing
                in building user-centric and performant web applications.
              </p>

              <p className="text-white text-base">
                3+ years experience building full-stack MERN applications with
                seamless frontend-backend integration.
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 bg-white text-black rounded-md">
                  Contact Me
                </button>
                <button className="px-6 py-2 border border-white text-white rounded-md">
                  Resume
                </button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-3 mt-5">
                {dockItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white text-black size-10 flex items-center justify-center rounded-md cursor-pointer hover:-translate-y-1 transition"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="shrink-0">
              <ProfileCard
                name="Ahmad Mujtaba"
                title="MERN Stack Developer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/pic.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </div>
          </div>
        </section>
        <section className="mt-35">
          <MoreAboutMe />
        </section>

        <section className="mt-10">
          <h1 className="text-white text-5xl py-13 tracking-tight">
            Technologies
          </h1>
          <TechsLogoLoop />
        </section>
      </main>
    </div>
  );
}
