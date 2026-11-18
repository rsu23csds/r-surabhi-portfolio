import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, ShieldCheck, Database, Award, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/audio';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden">
      {/* Background Radial Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] h-[340px] sm:h-[540px] md:h-[720px] rounded-full radial-burgundy-glow opacity-80 pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full radial-sage-glow opacity-60 pointer-events-none blur-3xl -z-10" />

      {/* Top Meta Line */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#87a986]/15 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs text-[#87a986] tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-[#87a986] animate-pulse" />
          <span>// CMRIT CS (DATA SCIENCE) '27</span>
          <span className="hidden sm:inline text-[#d5cbba]/40">•</span>
          <span className="hidden sm:inline text-[#d5cbba]/70">BENGALURU, INDIA</span>
        </motion.div>
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10">
        
        {/* Left Column: Bold Tagline & Pitch */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f0ebe1] leading-[1.1] max-w-xl"
          >
            INTELLIGENCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87a986] via-[#f0ebe1] to-[#d5cbba]">
              WITHOUT COMPROMISE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-[#d5cbba]/90 max-w-xl font-light leading-relaxed"
          >
            Building ideas into impactful solutions through technology and creativity.
          </motion.p>

          {/* Social Proof & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={playClickSound}
              data-cursor-text="WORK"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7e142e] via-[#991b3b] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs uppercase tracking-wider font-semibold border border-[#a31d3d]/60 shadow-xl shadow-[#7e142e]/30 hover:shadow-[#a31d3d]/50 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                playPopSound();
                if (onOpenResume) onOpenResume();
              }}
              data-cursor-text="RESUME"
              className="px-6 py-3.5 rounded-full glass-panel border border-[#87a986]/30 text-[#f0ebe1] font-mono text-xs uppercase tracking-wider hover:border-[#87a986] hover:bg-[#87a986]/10 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>View Dossier</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#87a986]" />
            </button>

            {/* Quick social icon badges */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="GIT"
                className="w-10 h-10 rounded-full glass-panel border border-[#87a986]/20 flex items-center justify-center text-[#d5cbba] hover:text-[#f0ebe1] hover:border-[#87a986] transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="IN"
                className="w-10 h-10 rounded-full glass-panel border border-[#87a986]/20 flex items-center justify-center text-[#d5cbba] hover:text-[#f0ebe1] hover:border-[#87a986] transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="LC"
                className="w-10 h-10 rounded-full glass-panel border border-[#87a986]/20 flex items-center justify-center text-[#d5cbba] hover:text-[#f0ebe1] hover:border-[#87a986] font-mono text-xs font-bold transition-all"
                title="LeetCode"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4 sm:py-8">
          
          {/* Main Visual Composition Container */}
          <div className="relative w-72 h-[360px] sm:w-96 sm:h-[450px] md:w-[420px] md:h-[500px] flex items-end justify-center">
            
            {/* Giant Circular Backdrop with burgundy gradient disc (Behind Subject) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full radial-hero-circle border border-[#a31d3d]/50 shadow-2xl shadow-[#7e142e]/50 overflow-hidden pointer-events-none">
              {/* Concentric subtle rings */}
              <div className="absolute inset-4 rounded-full border border-[#f0ebe1]/10" />
              <div className="absolute inset-10 rounded-full border border-[#87a986]/15" />
              {/* Ambient glowing highlight arc */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#a31d3d]/30 blur-2xl" />
            </div>

            {/* Concentric outer orbit ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[350px] sm:h-[350px] md:w-[410px] md:h-[410px] rounded-full border border-[#87a986]/15 pointer-events-none" />

            {/* Subject Cutout Portrait Photo - Completely Clear and 100% Unobstructed Face */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
            >
              <img
                src="/surabhi.jpg"
                alt="R Surabhi"
                className="max-h-[340px] sm:max-h-[420px] md:max-h-[470px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(126,20,46,0.6)] select-none pointer-events-auto hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Rotating Circular Badge: CREATIVE DEVELOPER (Safely positioned at the bottom hip/waist corner, completely away from face) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute bottom-1 -left-2 sm:-left-5 z-20 w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#7e142e] via-[#991b3b] to-[#4d0a1b] border-2 border-[#f0ebe1]/30 shadow-2xl shadow-[#7e142e]/60 flex items-center justify-center text-[#f0ebe1] p-1.5 pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fontSize="8.5" fill="#f0ebe1" fontFamily="JetBrains Mono" letterSpacing="2.8" fontWeight="bold">
                  <textPath href="#circlePath">
                    • CREATIVE DEVELOPER • CREATIVE DEVELOPER •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#87a986]" />
              </div>
            </motion.div>
          </div>

          {/* Badges Strip: Safely and cleanly situated BELOW the photo on ALL screen sizes (desktop, tablet, mobile) — GUARANTEED to never overlap the face! */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5 z-20 w-full max-w-lg px-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-panel px-4 py-2.5 rounded-2xl border border-[#87a986]/30 shadow-xl flex items-center gap-3 backdrop-blur-xl w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-xl bg-[#87a986]/20 border border-[#87a986]/40 flex items-center justify-center text-[#87a986] shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-[9px] text-[#87a986] uppercase tracking-wider font-semibold">PYTHON & AI</div>
                <div className="font-syne font-bold text-xs text-[#f0ebe1] leading-tight">Building Intelligent Solutions</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="glass-panel px-4 py-2.5 rounded-2xl border border-[#a31d3d]/50 shadow-xl flex items-center gap-3 backdrop-blur-xl bg-[#290a12]/85 w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-xl bg-[#a31d3d]/30 border border-[#a31d3d]/60 flex items-center justify-center text-[#f0ebe1] shrink-0">
                <Award className="w-4 h-4 text-[#f0ebe1]" />
              </div>
              <div>
                <div className="font-mono text-[9px] text-[#87a986] uppercase tracking-wider font-semibold">SIH 2025</div>
                <div className="font-syne font-bold text-xs text-[#f0ebe1] leading-tight">Internal Hackathon Winner</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Massive Bold Hero Name Anchor */}
      <div className="max-w-7xl mx-auto w-full pt-8 sm:pt-14 border-t border-[#87a986]/15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-[105px] tracking-tight text-[#f0ebe1] uppercase select-none leading-none flex flex-wrap items-baseline justify-between">
            <span className="hover:text-[#87a986] transition-colors duration-300">R SURABHI</span>
            <span className="text-xs sm:text-sm md:text-base font-mono text-[#87a986] font-normal tracking-widest normal-case border border-[#87a986]/30 px-3 py-1 rounded-full mb-2">
              PORTFOLIO 2025-2026
            </span>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#87a986]/10">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="glass-panel p-4 rounded-xl border border-[#87a986]/15 hover:border-[#87a986]/40 transition-colors"
            >
              <div className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f0ebe1]">
                {s.value}
                <span className="text-sm font-mono text-[#a31d3d] ml-1">{s.suffix}</span>
              </div>
              <div className="font-mono text-xs text-[#87a986] tracking-wider mt-1">{s.label}</div>
              <div className="text-[11px] text-[#d5cbba]/60 mt-0.5">{s.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
