import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, Sparkles, Trophy, Star, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { playChimeSound, playPopSound } from '../utils/audio';

export default function AchievementsCertifications() {
  const { certifications, achievements } = portfolioData;

  const triggerCelebration = (e) => {
    playChimeSound();
    
    // Launch celebratory confetti with sage, beige, and burgundy colors
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#87a986', '#f0ebe1', '#7e142e', '#a31d3d', '#d5cbba'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full radial-sage-glow opacity-30 pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 05 • HONORS & CREDENTIALS
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            CERTIFIED EXCELLENCE.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          Industry-recognized certifications, competitive algorithmic credentials, and hackathon victories.
        </p>
      </div>

      {/* Featured Trophy Interactive Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={triggerCelebration}
        data-cursor-text="CELEBRATE"
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#a31d3d]/50 bg-gradient-to-r from-[#290a12]/90 via-[#121913]/80 to-[#290a12]/90 shadow-2xl mb-12 cursor-pointer group hover:border-[#a31d3d] transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7e142e] to-[#a31d3d] border border-[#f0ebe1]/20 flex items-center justify-center text-[#f0ebe1] shadow-xl shadow-[#7e142e]/40 group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-[#f0ebe1] animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#87a986] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#87a986]" />
                <span>CHAMPIONSHIP VICTORY • CMRIT</span>
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-[#f0ebe1] mt-1">
                Winner — Internal Smart India Hackathon (SIH 2025)
              </h3>
              <p className="text-xs sm:text-sm text-[#d5cbba]/80 font-light mt-1">
                Selected as the #1 technological solution among all competing engineering branches. Click for celebration!
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerCelebration(e);
            }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs font-semibold uppercase tracking-wider border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 group-hover:scale-105 transition-all self-start sm:self-center"
          >
            🎉 Celebrate Win
          </button>
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative group ${
              cert.highlight
                ? 'border-[#87a986]/40 bg-gradient-to-br from-[#121913] via-[#1a251c] to-[#090c0a]'
                : 'border-[#87a986]/15 hover:border-[#87a986]/40'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                  cert.highlight
                    ? 'bg-[#87a986]/20 text-[#87a986] border border-[#87a986]/40'
                    : 'bg-[#a31d3d]/15 text-[#f0ebe1] border border-[#a31d3d]/30'
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#87a986] block tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] text-[#d5cbba]/60">
                    Badge ID: {cert.badgeCode}
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs text-[#f0ebe1] bg-[#121913] px-2.5 py-1 rounded-full border border-[#87a986]/20">
                {cert.year}
              </span>
            </div>

            <h3 className="font-syne text-lg sm:text-xl font-bold text-[#f0ebe1] group-hover:text-[#87a986] transition-colors">
              {cert.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#d5cbba]/80 font-light leading-relaxed">
              {cert.description}
            </p>

            <div className="mt-5 pt-3 border-t border-[#87a986]/15 flex items-center justify-between text-xs font-mono text-[#87a986]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </span>
              <span className="text-[#d5cbba]/50 group-hover:text-[#f0ebe1] transition-colors flex items-center gap-1">
                Completed
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
