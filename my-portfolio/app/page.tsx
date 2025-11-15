"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Balancer from "react-wrap-balancer";

type PopupKey = "about" | "projects" | "skills" | "contact";

export default function Home() {
  const skills = [
    "Advanced Python",
    "SQL",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Network Security",
    "Penetration Testing",
    "Cryptography",
    "OWASP Top 10",
    "Secure Coding",
    "MongoDB",
  ];

  const projects = [
    {
      title: "🧠 Ananda - Mental Health Platform",
      desc: "A comprehensive AI-powered mental health support platform with professional counseling, mental health assessments (PHQ-9, GAD-7), and secure student-focused features. Built with Supabase, Edge Functions, and real-time chat.",
      tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "Deno"],
      link: "https://github.com/kanha077/sih-2025",
    },
  ];

  const [activePopup, setActivePopup] = useState<PopupKey | null>(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const popupContent: Record<PopupKey, { title: string; body: string }> = {
    about: {
      title: "About",
      body:
        "I'm a full stack developer and cybersecurity enthusiast passionate about building secure, scalable applications. I combine frontend expertise (React, Next.js, Tailwind CSS) with robust backend development (Python, Node.js, SQL). My work focuses on creating elegant solutions to complex problems, with a strong emphasis on security best practices and user experience. I'm experienced in building AI-powered platforms, mental health applications, and secure web systems.",
    },
    projects: {
      title: "Projects",
      body:
        "I've built Ananda, a comprehensive mental health support platform featuring AI-powered counseling, professional integration, mental health assessments (PHQ-9, GAD-7), and secure role-based access. Built with Supabase, Edge Functions, and real-time chat capabilities. Explore more on my GitHub.",
    },
    skills: {
      title: "Skills",
      body:
        "My main stack: Advanced Python, SQL, React, JavaScript, Tailwind CSS, Next.js, TypeScript, Node.js, MongoDB. Cybersecurity expertise includes Network Security, Penetration Testing, Cryptography, OWASP Top 10, and Secure Coding practices.",
    },
    contact: {
      title: "Contact",
      body:
        "If you'd like to collaborate, discuss a project, or just connect—reach out via email at yashvijavergiya911@gmail.com or any of the platforms below. I'm open to freelance work, project discussions, and cybersecurity opportunities.",
    },
  };

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">

      {/* -------------------------------------------------------- */}
      {/* ⭐ NEW: FULL ANIMATED BACKGROUND EFFECTS (LEVEL B, #7) ⭐ */}
      {/* -------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.2, 1.2, 0.2],
                y: [0, -150],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute h-2 w-2 rounded-full bg-slate-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Morphing gradient blob 1 */}
        <motion.div
          className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-slate-300/80 to-white/50 blur-3xl"
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Morphing gradient blob 2 */}
        <motion.div
          className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-slate-200/80 to-white/40 blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 30, -35, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shimmer glow wave */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),_transparent_70%)]"
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ORIGINAL BACKGROUND GRADIENTS (unchanged) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_#e0f2fe_0,_#f8fafc_55%,_#ffffff_100%)] opacity-40" />
        <div className="absolute -bottom-48 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_bottom,_#cffafe_0,_#f1f5f9_55%,_#ffffff_100%)] opacity-30" />
        <div className="absolute left-[-10rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_#d1fae5_0,_#f0fdf4_60%,_#ffffff_100%)] opacity-40" />
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-slate-200 bg-white/95 px-10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md"
      >
        <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-slate-700">
          Yash Vijayvargiya
        </div>

        <div className="h-4 w-px bg-slate-300" />

        <div className="flex gap-8 text-sm">
          {(["about", "projects", "skills", "contact"] as PopupKey[]).map(
            (item) => (
              <motion.button
                key={item}
                onClick={() => setActivePopup(item)}
                whileHover={{ y: -2, opacity: 0.95 }}
                whileTap={{ scale: 0.92 }}
                className="relative font-medium text-slate-600 hover:text-slate-900 transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            )
          )}
        </div>
      </motion.nav>

      {/* POPUP MODALS */}
      <AnimatePresence>
        {activePopup && (
          <motion.div
            key={activePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/30 backdrop-blur-xl"
            onClick={() => setActivePopup(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-lg rounded-3xl border border-slate-300 bg-white px-8 py-7 shadow-[0_30px_120px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    {popupContent[activePopup].title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {popupContent[activePopup].body}
                  </p>
                </div>
                <button
                  onClick={() => setActivePopup(null)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-40 px-6 pt-32 pb-32">

        {/* HERO */}
        <section className="grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">

          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              <Balancer>
                Crafting{" "}
                <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                  secure & scalable
                </span>
                <br />
                digital solutions.
              </Balancer>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-7 max-w-2xl text-lg text-slate-600 leading-relaxed font-light"
            >
              Full stack developer & cybersecurity enthusiast. I build elegant, secure applications with 
              <span className="text-slate-900 font-medium"> cutting-edge technology</span> and a passion for clean code, 
              <span className="text-slate-900 font-medium"> user experience</span>, and 
              <span className="text-slate-900 font-medium"> security-first design</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="rounded-lg bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:bg-slate-800 transition-all"
              >
                View My Work
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="rounded-lg border-2 border-slate-300 px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Hero 3D "device" card */}
          <motion.div
            className="flex justify-center md:justify-end"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <motion.div
              style={{
                rotateX: cardTilt.x,
                rotateY: cardTilt.y,
                transformPerspective: 900,
              }}
              className="relative h-80 w-56 sm:h-96 sm:w-64 rounded-[2.5rem] border border-white/15 bg-[radial-gradient(circle_at_top,_#f4f4f5_0,_#111827_40%,_#020617_70%,_#000_100%)] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <div className="absolute left-1/2 top-5 h-1 w-20 -translate-x-1/2 rounded-full bg-white/70" />
              <div className="flex h-full flex-col items-center justify-center gap-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Developer
                </p>
                <p className="text-lg font-medium text-neutral-50">
                  Yash Vijayvargiya
                </p>
                <p className="text-[11px] text-neutral-300">
                  Next.js · TypeScript · Security
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-6 py-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full mb-6" />
          </div>
          <p className="max-w-4xl text-lg text-slate-600 leading-relaxed">
            I'm a full stack developer and cybersecurity enthusiast passionate about building secure, scalable applications. 
            With expertise across the entire development stack—from responsive frontends to robust backends—I combine technical excellence 
            with a security-first mindset. My approach focuses on creating elegant solutions that not only work beautifully but also protect user data 
            and maintain system integrity.
          </p>
          <p className="max-w-4xl text-lg text-slate-600 leading-relaxed">
            Currently, I'm contributing to innovative projects like <span className="font-semibold text-slate-900">Ananda</span>, a mental health 
            support platform that integrates AI counseling with professional mental health services. I believe in continuous learning, staying updated with 
            emerging technologies, and applying best practices in every project I undertake.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8 py-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full" />
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -3, scale: 1.05 }}
                className="rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-8 py-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Featured Project
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full" />
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-800/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 border border-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors group"
                >
                  Explore Project <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-8 py-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full mb-6" />
          </div>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you want to collaborate, discuss ideas, or just say hello—feel free to reach out!
          </p>
          <div className="mt-8 space-y-4 text-base">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-slate-900" />
              <a href="mailto:yashvijavergiya911@gmail.com" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">
                yashvijavergiya911@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github size={20} className="text-slate-900" />
              <a href="https://github.com/kanha077" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">
                github.com/kanha077
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={20} className="text-slate-900" />
              <span className="text-slate-600">linkedin.com/in/yourprofile</span>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-900">Yash Vijayvargiya</p>
          <p className="text-xs text-slate-600">Full Stack Developer | Cybersecurity Enthusiast</p>
          <p className="text-[11px] text-slate-500 mt-4">
            © {new Date().getFullYear()} Yash Vijayvargiya. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </main>
  );
}
