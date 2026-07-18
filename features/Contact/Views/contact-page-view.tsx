"use client";

import { useState, useRef } from "react";
import SoftAurora from "@/features/About/components/SoftAurora";
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Send,
  CheckCircle2,
} from "lucide-react";
import Particles from "@/features/Portfolio/components/Particles";
import { Field } from "../components/InputField";
import HeadingTitle from "@/components/Heading";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmaddeveloper174@gmail.com",
    href: "mailto:ahmaddeveloper174@gmail.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Multan, Punjab, Pakistan",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/ahmadmujtaba" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/ahmadmujtaba" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ahmadmujtaba" },
];

const SERVICES = [
  "Full-stack development",
  "UI / UX design",
  "Website Development",
  "Open-source work",
];

export default function ContactPageView() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(key: keyof typeof form) {
    return (v: string) => setForm((f) => ({ ...f, [key]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // replace with your actual submit logic
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {" "}
      <main className="relative w-screen min-h-screen pt-16 md:pt-20">
        <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
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

        <div className="relative w-full py-16 md:py-24 max-w-6xl xl:max-w-7xl mx-auto">
          <div className="mb-10 md:mb-20 flex flex-col items-center text-center px-4">
            <HeadingTitle title="Contact Me" lineWidthClassName="w-36" />

            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-zinc-500">
              Whether you have a project in mind, a question, or just want to
              connect!
            </p>
          </div>
          <section className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 px-4 md:px-0">
            {/* ── LEFT COLUMN ────────────────────────────────────────────────────── */}
            <div className="flex flex-col gap-8 md:gap-10 w-full md:w-[47%]">
              {/* headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
                  Let&rsquo;s build{" "}
                  <span
                    className="bg-clip-text font-[Stack_Sans_Notch] text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#66FCF1, #45A29E)",
                    }}
                  >
                    something
                  </span>
                  <br />
                  Together.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Whether you have a project in mind, a question, or just want
                  to say hello — my inbox is open. I read every message
                  personally.
                </p>
              </div>

              {/* availability pill */}
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.07]  bg-white/5 backdrop-blur-sm px-5 py-4 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-base font-medium text-zinc-300">
                  Available for new projects
                </span>
              </div>

              {/* contact methods */}
              <div className="flex flex-col gap-3">
                {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.07]  bg-white/5 backdrop-blur-sm px-5 py-4 transition-colors hover:border-violet-500/25"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block truncate text-base font-medium text-zinc-300 transition-colors hover:text-violet-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base font-medium text-zinc-300">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* services */}
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600">
                  Open to
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-ring/[0.07]  bg-primary/5 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-ring-500/30 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* socials */}
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-ring/[0.08] bg-primary/5 backdrop-blur-md text-muted-foreground transition-all hover:border-ring35 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* form  */}
            <div className="relative w-full md:max-w-lg">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
                <div className="p-7 lg:p-10">
                  {submitted ? (
                    /* success state */
                    <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(6,182,212,0.15))",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <CheckCircle2 size={28} className="text-primary" />
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          Message sent!
                        </h2>
                        <p className="mt-2 text-base text-muted-foreground">
                          Thanks for reaching out. I’ll get back to you within
                          24 hours.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        className="rounded-xl border border-ring/10 bg-primary/5 px-5 py-2.5 text-muted-foreground hover:bg-primary/10 hover:text-white transition"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    /* form */
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          Send a message
                        </h2>
                        <p className="mt-1.5 text-muted-foreground">
                          Fill out the form and I’ll respond soon.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field
                          id="name"
                          label="Your name"
                          value={form.name}
                          onChange={set("name")}
                        />
                        <Field
                          id="email"
                          label="Email address"
                          value={form.email}
                          onChange={set("email")}
                        />
                      </div>

                      <Field
                        id="subject"
                        label="Subject"
                        value={form.subject}
                        onChange={set("subject")}
                      />

                      <Field
                        id="message"
                        label="Your message"
                        textarea
                        value={form.message}
                        onChange={set("message")}
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 rounded-xl px-6 py-3.5 font-semibold text-white transition active:scale-[0.98] disabled:opacity-70"
                        style={{
                          background:
                            "linear-gradient(135deg,#66FCF1,#45A29E )",
                        }}
                      >
                        {loading ? "Sending..." : "Send message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        <div className="pb-16 md:pb-20" />
      </main>
    </>
  );
}
