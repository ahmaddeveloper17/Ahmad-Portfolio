"use client";

import ProfileCard from "@/features/About/components/ProfileCard";
import ColorBends from "@/features/About/components/ColorBends";
import SplitText from "@/features/Home/components/SplitText";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import SoftAurora from "../components/SoftAurora";

const dockItems = [
  {
    icon: <FaGithub size={18} />,
    label: "Github",
    onClick: () => alert("Home!"),
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <FaFacebook size={18} />,
    label: "Facebook",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <FaYoutube size={18} />,
    label: "YouTube",
    onClick: () => alert("Profile!"),
  },
];
export default function AboutPageView() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="relative w-screen h-screen overflow-auto ">
      {/* Background Lines with full interaction */}
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
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
      <div className="absolute lg:pt-25 xl:pt-40 inset-0 z-50 flex  items-start justify-between gap-5 mx-auto max-w-72.5 sd:max-w-[370px] 540:max-w-[480px] sm:max-w-135 md:max-w-175 lg:max-w-225 xl:max-w-300 ">
        <div className="flex flex-col gap-2 z-9999">
          <SplitText
            text="About Me"
            className="text-3xl md:text-5xl  text-white text-center"
            delay={50}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-10px"
            textAlign="start"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className=" tracking-tight text-white font-semibold text-lg max-w-120 mt-3">
            MERN Developer | DevOps | Next JS | OpenAi | SaaS
          </p>
          <p className=" tracking-tight text-white text-base max-w-150 mt-3">
            A full-stack developer focusing on the MERN stack, specializing in
            making user-centric and performant web applications.
          </p>
          <p className=" tracking-tight text-white text-base max-w-150 mt-2">
            Building full-stack MERN applications: I leverage my 3+ years of
            experience to create complete web applications, seamlessly
            connecting the React front-end with the MERN back-end.
          </p>
          <div className="flex  items-center gap-5 mt-5">
            <button
              onClick={() => alert("ok")}
              className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-white text-[#696969] rounded-md cursor-pointer transition duration-200 ease-linear"
            >
              Contact Me
            </button>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-whote dark:border-blakc dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 cursor-pointer transition duration-400">
              Resume
            </button>
          </div>
          <div className="flex gap-2 items-center mt-5">
            {dockItems.map((item, i) => (
              <p
                key={i}
                className="bg-white rounded-md text-black size-12 text-2xl inline-flex justify-center items-center cursor-pointer hover:-translate-y-2 transition-all duration-500"
              >
                {item.icon}
              </p>
            ))}
          </div>
        </div>
        <div>
          <ProfileCard
            name="Ahmad Mujtaba"
            title="Mern Stack Developer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/pic.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>
    </div>
  );
}
