import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Palette, BookOpen, Compass, CheckCircle2, MapPin, Languages, HeartHandshake } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/audio';

export default function About() {
  const { personal, leadership } = portfolioData;
  const [activeTab, setActiveTab] = useState('tech');

  const tabs = [
    { id: 'tech', label: '01 / Technical Philosophy', icon: Cpu },
    { id: 'leadership', label: '02 / Campus & Social Impact', icon: HeartHandshake },
    { id: 'creative', label: '03 / Athletics & Creativity', icon: Activity },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 01 • PROFILING & ETHOS
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            ABOUT ME.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          Bridging mathematical rigor, algorithmic privacy, and human-centric software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Story Tabs */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Tab Selection Pill Group */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-[#87a986]/20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] shadow-lg shadow-[#7e142e]/30 font-semibold'
                      : 'text-[#d5cbba]/70 hover:text-[#f0ebe1] hover:bg-[#87a986]/10'
                  }`}
                  data-cursor-text="VIEW"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panes */}
          <div className="min-h-[320px]">
            <AnimatePresence mode="wait">
              {activeTab === 'tech' && (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#87a986]/20 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#87a986]/15 border border-[#87a986]/40 flex items-center justify-center text-[#87a986] mb-5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#f0ebe1] mb-3">
                    Privacy-First AI & Resilient Systems
                  </h3>
                  <p className="text-[#d5cbba] leading-relaxed text-sm sm:text-base mb-6 font-light">
                    As an engineering undergraduate at <span className="text-[#87a986] font-medium">CMRIT Bengaluru (CGPA 8.81)</span>, 
                    my focus centers on the intersection of <span className="text-[#f0ebe1] font-medium">Machine Learning utility</span> and 
                    <span className="text-[#a31d3d] font-medium"> privacy guarantees</span>. 
                    I construct systems that allow organizations to leverage predictive intelligence and Large Language Models (LLM / RAG) 
                    without exposing sensitive personally identifiable information (PII).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#87a986]/15">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f0ebe1] font-mono">Formal k-anonymity & l-diversity risk evaluation</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f0ebe1] font-mono">Modern FastAPI, React & Postgres microservices</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f0ebe1] font-mono">Microsoft Certified Power BI data modeling</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f0ebe1] font-mono">End-to-end cloud integration & AWS deployment</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'leadership' && (
                <motion.div
                  key="leadership"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#a31d3d]/30 relative overflow-hidden bg-[#240c14]/40"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#a31d3d]/20 border border-[#a31d3d]/50 flex items-center justify-center text-[#f0ebe1] mb-5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#f0ebe1] mb-3">
                    Campus Leadership & Social Consciousness
                  </h3>
                  <p className="text-[#d5cbba] leading-relaxed text-sm sm:text-base mb-6 font-light">
                    True technology is rooted in community welfare. Beyond writing clean code, I lead youth empowerment 
                    and awareness initiatives across campus, helping create safe, intellectually vibrant environments for student peers.
                  </p>

                  <div className="space-y-3.5">
                    {leadership.map((item) => (
                      <div key={item.role} className="p-3.5 rounded-xl glass-panel border border-[#87a986]/15 hover:border-[#87a986]/40 transition-colors">
                        <div className="flex items-center justify-between font-mono text-xs text-[#87a986]">
                          <span className="font-semibold text-[#f0ebe1]">{item.role}</span>
                          <span className="text-[10px] text-[#a31d3d] uppercase">{item.org}</span>
                        </div>
                        <p className="text-xs text-[#d5cbba]/80 mt-1 font-light leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'creative' && (
                <motion.div
                  key="creative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#87a986]/20 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#87a986]/20 border border-[#87a986]/40 flex items-center justify-center text-[#87a986] mb-5">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#f0ebe1] mb-3">
                    The Athlete & Artist Equilibrium
                  </h3>
                  <p className="text-[#d5cbba] leading-relaxed text-sm sm:text-base mb-6 font-light">
                    My engineering mindset is strengthened by competitive athletics and fine arts. The endurance, 
                    split-second decision making, and team trust built on the volleyball court translate directly into 
                    handling high-pressure hackathons and complex software systems.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl glass-panel border border-[#87a986]/20">
                      <div className="font-syne font-bold text-sm text-[#f0ebe1] flex items-center gap-2 mb-1">
                        <Activity className="w-4 h-4 text-[#87a986]" />
                        <span>VTU University Volleyball</span>
                      </div>
                      <p className="text-xs text-[#d5cbba]/80 leading-relaxed font-light">
                        Represented CMRIT in the VTU Inter-University Volleyball Tournament (2024) and collegiate throwball competitions.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl glass-panel border border-[#87a986]/20">
                      <div className="font-syne font-bold text-sm text-[#f0ebe1] flex items-center gap-2 mb-1">
                        <Palette className="w-4 h-4 text-[#a31d3d]" />
                        <span>Fine Arts & Dance</span>
                      </div>
                      <p className="text-xs text-[#d5cbba]/80 leading-relaxed font-light">
                        Practicing detailed sketching and expressive classical/contemporary dance, cultivating spatial intuition and design empathy.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Identity Dossier Card */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#87a986]/25 shadow-2xl relative overflow-hidden">
            {/* Top Identity Header with Portrait Preview */}
            <div className="flex items-center gap-4 border-b border-[#87a986]/15 pb-5 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#87a986]/40 bg-gradient-to-br from-[#7e142e] to-[#121913] shrink-0 shadow-xl shadow-[#7e142e]/30">
                <img
                  src="/surabhi.jpg"
                  alt="R Surabhi"
                  className="w-full h-full object-cover object-top scale-110 hover:scale-125 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#87a986] uppercase tracking-widest">
                    SYSTEM IDENTIFIER
                  </span>
                  <span className="text-[10px] font-mono text-[#a31d3d] bg-[#a31d3d]/15 px-2 py-0.5 rounded-full border border-[#a31d3d]/40 font-semibold">
                    VERIFIED
                  </span>
                </div>
                <h4 className="font-syne font-bold text-lg text-[#f0ebe1] mt-0.5">
                  {personal.name}
                </h4>
                <span className="font-mono text-[11px] text-[#d5cbba]/70">
                  CMRIT • CS (Data Science)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">FULL NAME:</span>
                <span className="text-[#f0ebe1] font-semibold">{personal.name}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">ACADEMIC FOCUS:</span>
                <span className="text-[#f0ebe1] text-right">B.E. Computer Science (Data Science)</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">INSTITUTION:</span>
                <span className="text-[#f0ebe1]">CMRIT Bengaluru</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">CGPA PERFORMANCE:</span>
                <span className="text-[#a31d3d] font-bold text-sm">{personal.cgpa}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">LOCATION:</span>
                <span className="text-[#f0ebe1] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#87a986]" />
                  <span>{personal.location}</span>
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-[#87a986]/10 text-xs font-mono">
                <span className="text-[#87a986]">LANGUAGES:</span>
                <span className="text-[#f0ebe1] flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-[#87a986]" />
                  <span>{personal.languages.join(" • ")}</span>
                </span>
              </div>

              <div className="flex justify-between items-start py-2 text-xs font-mono">
                <span className="text-[#87a986] shrink-0">HOBBIES:</span>
                <span className="text-[#d5cbba] text-right">{personal.hobbies.join(", ")}</span>
              </div>
            </div>

            {/* Quote badge */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#240c14] to-[#121913] border border-[#a31d3d]/30 text-center">
              <p className="font-syne text-xs text-[#f0ebe1] font-bold tracking-widest uppercase">
                CURIOUS BY NATURE. CREATIVE BY DESIGN. DRIVEN BY INNOVATION.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
