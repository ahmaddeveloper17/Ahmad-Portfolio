import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Experience", url: "/experience" },
  { name: "Contact", url: "/contact" },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/ahmadmujtaba" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/ahmadmujtaba" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/ahmadmujtaba" },
  { icon: FaEnvelope, label: "Email", href: "mailto:ahmaddeveloper174@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#070710]">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-12 md:py-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-xs text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-lg font-bold text-white font-[Stack_Sans_Notch]">
                Ahmad Mujtaba
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Full-stack developer building modern web applications with the MERN stack, Next.js, and TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-600">
              Navigation
            </span>
            <div className="flex flex-col items-center md:items-start gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-sm text-zinc-400 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-600">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 text-zinc-400 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="mailto:ahmaddeveloper174@gmail.com"
              className="text-sm text-zinc-500 hover:text-primary transition-colors duration-200"
            >
              ahmaddeveloper174@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.05] py-6">
          <p className="text-center text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Ahmad Mujtaba. Built with Next.js &middot; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
