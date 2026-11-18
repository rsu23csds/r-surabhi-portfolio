import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Trophy, Shield, Users, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function ExperienceEducation() {
  const { education, leadership, achievements } = portfolioData;
  const [activeLane, setActiveLane] = useState('all');

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full radial-burgundy-glow opacity-25 pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 04 • TRAJECTORY & LEADERSHIP
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            MY JOURNEY.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          A continuous pursuit of academic excellence, campus mentorship, and university athletics.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {[
          { id: 'all', label: 'Complete Journey' },
          { id: 'edu', label: 'Academic Milestones' },
          { id: 'lead', label: 'Campus Leadership & Sports' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              playClickSound();
              setActiveLane(tab.id);
            }}
            data-cursor-text="VIEW"
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
              activeLane === tab.id
                ? 'bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 font-semibold'
                : 'glass-panel text-[#d5cbba]/70 hover:text-[#f0ebe1] hover:border-[#87a986]/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Academic Pedigree */}
        {(activeLane === 'all' || activeLane === 'edu') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#87a986] tracking-widest uppercase mb-4">
              <GraduationCap className="w-4 h-4 text-[#87a986]" />
              <span>ACADEMIC FOUNDATIONS</span>
            </div>

            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-3xl border border-[#87a986]/20 hover:border-[#87a986]/50 transition-all duration-300 relative group"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <span className="font-mono text-xs text-[#87a986] bg-[#87a986]/10 px-2.5 py-0.5 rounded-full border border-[#87a986]/30">
                    {edu.period}
                  </span>
                  <span className="font-syne font-black text-sm text-[#a31d3d] bg-[#a31d3d]/10 px-3 py-0.5 rounded-full border border-[#a31d3d]/30">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="font-syne text-lg sm:text-xl font-bold text-[#f0ebe1] group-hover:text-[#87a986] transition-colors">
                  {edu.degree}
                </h3>

                <div className="font-mono text-xs text-[#d5cbba] mt-1 flex items-center gap-2">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#d5cbba]/70">
                    <MapPin className="w-3 h-3 text-[#87a986]" />
                    {edu.location}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#d5cbba]/80 font-light leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Right Column: Leadership, Athletics & Hackathons */}
        {(activeLane === 'all' || activeLane === 'lead') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#a31d3d] tracking-widest uppercase mb-4">
              <Trophy className="w-4 h-4 text-[#a31d3d]" />
              <span>LEADERSHIP, SPORTS & HACKATHONS</span>
            </div>

            {/* Smart India Hackathon Winner Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-3xl border border-[#a31d3d]/50 bg-gradient-to-br from-[#240c14]/80 via-[#121913]/60 to-[#090c0a] shadow-2xl relative overflow-hidden group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-[#87a986] bg-[#87a986]/15 px-2.5 py-0.5 rounded-full border border-[#87a986]/30">
                  2025 • INTERNAL SIH
                </span>
                <span className="font-syne font-bold text-xs text-[#f0ebe1] bg-[#a31d3d] px-3 py-0.5 rounded-full shadow-lg shadow-[#a31d3d]/40">
                  🏆 1ST PLACE WINNER
                </span>
              </div>

              <h3 className="font-syne text-lg sm:text-xl font-bold text-[#f0ebe1]">
                Internal Smart India Hackathon (SIH 2025)
              </h3>
              <p className="text-xs font-mono text-[#d5cbba]/70 mt-1">
                CMR Institute of Technology
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#d5cbba] font-light leading-relaxed">
                Led innovative problem-solving initiative, engineering a full-scale working solution under rigorous timed hackathon conditions to secure the 1st position across the institution.
              </p>
            </motion.div>

            {/* Anti Drug Committee Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-[#87a986]/20 hover:border-[#87a986]/40 transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-[#87a986]">
                  CAMPUS WELFARE & CIVIC ACTION
                </span>
                <Shield className="w-4 h-4 text-[#87a986]" />
              </div>
              <h3 className="font-syne text-base sm:text-lg font-bold text-[#f0ebe1]">
                Anti-Drug Committee Core Member
              </h3>
              <p className="text-xs font-mono text-[#d5cbba]/70 mt-1">
                Nasha Mukt Bharat & Khushaal Bharat Campaigns
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#d5cbba]/80 font-light leading-relaxed">
                Active member championing anti-substance abuse and student wellness, coordinating institutional workshops and environmental awareness drives across Bengaluru.
              </p>
            </motion.div>

            {/* Peer Learning & Support Team Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-3xl border border-[#87a986]/20 hover:border-[#87a986]/40 transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-[#87a986]">
                  ACADEMIC MENTORSHIP
                </span>
                <Users className="w-4 h-4 text-[#87a986]" />
              </div>
              <h3 className="font-syne text-base sm:text-lg font-bold text-[#f0ebe1]">
                Peer Support Team (PST) & Peer Learning Team (PLT)
              </h3>
              <p className="text-xs font-mono text-[#d5cbba]/70 mt-1">
                CMRIT Peer Guidance Network
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#d5cbba]/80 font-light leading-relaxed">
                Facilitating peer learning sessions, simplifying data structures, Python, and algorithm design to accelerate junior engineering cohorts.
              </p>
            </motion.div>

            {/* University Sports Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-3xl border border-[#87a986]/20 hover:border-[#87a986]/40 transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-[#87a986]">
                  COMPETITIVE ATHLETICS
                </span>
                <span className="text-xs font-mono text-[#f0ebe1]">VTU 2024</span>
              </div>
              <h3 className="font-syne text-base sm:text-lg font-bold text-[#f0ebe1]">
                VTU Inter-University Volleyball & Throwball Athlete
              </h3>
              <p className="text-xs font-mono text-[#d5cbba]/70 mt-1">
                Visvesvaraya Technological University Tournament
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#d5cbba]/80 font-light leading-relaxed">
                Competed in university volleyball and collegiate throwball competitions representing CMRIT, showcasing agility, leadership, and team camaraderie.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
