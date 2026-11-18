import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, education, skills, projects, certifications, achievements, leadership } = portfolioData;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] bg-[#090c0a]/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          className="relative max-w-4xl w-full bg-[#0e1410] border border-[#87a986]/30 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-[#f0ebe1] max-h-[92vh] overflow-y-auto"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-[#87a986]/20 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#87a986] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#87a986]">
                CURRICULUM VITAE // DOSSIER
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl glass-panel border border-[#87a986]/30 text-xs font-mono text-[#f0ebe1] hover:border-[#87a986] flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl glass-panel border border-[#a31d3d]/40 text-[#f0ebe1] hover:text-[#a31d3d] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content Body */}
          <div className="space-y-8 font-sans">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h1 className="font-syne text-3xl sm:text-4xl font-extrabold text-[#f0ebe1]">
                  {personal.name}
                </h1>
                <p className="font-mono text-xs text-[#87a986] mt-1 tracking-wider uppercase">
                  {personal.title} • CMR Institute of Technology
                </p>

                <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-[#d5cbba]/80 pt-3 border-t border-[#87a986]/15">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#87a986]" />
                    {personal.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#87a986]" />
                    {personal.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#87a986]" />
                    Bengaluru & Raichur, Karnataka
                  </span>
                </div>
              </div>

              {/* Subject Photo in Resume Header */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#87a986]/40 bg-gradient-to-br from-[#7e142e] to-[#121913] shrink-0 shadow-xl shadow-[#7e142e]/40 self-start sm:self-center">
                <img
                  src="/surabhi.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>

            {/* Career Objective */}
            <div className="p-4 rounded-2xl glass-panel border border-[#87a986]/15 bg-[#121913]/60">
              <h2 className="font-mono text-xs text-[#87a986] uppercase tracking-wider mb-2">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-[#d5cbba] leading-relaxed font-light">
                {personal.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-mono text-xs text-[#87a986] uppercase tracking-wider mb-3">
                EDUCATIONAL QUALIFICATIONS
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree} className="p-4 rounded-xl border border-[#87a986]/15 bg-[#121913]/40">
                    <div className="flex justify-between items-start font-mono text-xs">
                      <span className="font-bold text-[#f0ebe1]">{edu.degree}</span>
                      <span className="text-[#a31d3d] font-bold">{edu.grade}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#d5cbba]/70 mt-1">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-[11px]">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Projects */}
            <div>
              <h2 className="font-mono text-xs text-[#87a986] uppercase tracking-wider mb-3">
                SELECTED TECHNICAL PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl border border-[#87a986]/15 bg-[#121913]/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="font-syne font-bold text-sm text-[#f0ebe1]">{proj.title}</span>
                      <span className="font-mono text-[11px] text-[#87a986]">{proj.timeline}</span>
                    </div>
                    <div className="font-mono text-[11px] text-[#a31d3d] mb-2 font-medium">
                      Stack: {proj.techStack.join(", ")}
                    </div>
                    <p className="text-xs text-[#d5cbba] font-light leading-relaxed mb-2">
                      {proj.longDescription}
                    </p>
                    <div className="space-y-1">
                      {proj.features.map((f, i) => (
                        <div key={i} className="text-[11px] text-[#d5cbba]/90 font-mono flex items-start gap-1.5">
                          <span className="text-[#87a986]">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-mono text-xs text-[#87a986] uppercase tracking-wider mb-3">
                  CORE TECHNICAL SKILLS
                </h2>
                <div className="text-xs font-mono text-[#d5cbba] space-y-2">
                  <div><strong className="text-[#f0ebe1]">Programming & Scripting:</strong> Python, Java (Basic), SQL</div>
                  <div><strong className="text-[#f0ebe1]">Web Technologies:</strong> HTML, CSS, JavaScript, React, Vite</div>
                  <div><strong className="text-[#f0ebe1]">Backend & Cloud:</strong> FastAPI, Node.js, Express, AWS</div>
                  <div><strong className="text-[#f0ebe1]">Databases:</strong> PostgreSQL, MySQL, MongoDB & MongoDB Atlas</div>
                  <div><strong className="text-[#f0ebe1]">AI & Machine Learning:</strong> LLM Fundamentals, RAG Basics, Prompt Engineering, Scikit-learn, k-Anonymity</div>
                  <div><strong className="text-[#f0ebe1]">Data Analysis & Tools:</strong> Microsoft Power BI, Tableau, Excel, Git, GitHub, VS Code</div>
                  <div><strong className="text-[#f0ebe1]">Operating Systems:</strong> Windows, Linux</div>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs text-[#87a986] uppercase tracking-wider mb-3">
                  HONORS & CERTIFICATIONS
                </h2>
                <div className="text-xs font-mono text-[#d5cbba] space-y-2">
                  <div>🏆 <strong className="text-[#f0ebe1]">SIH 2025 Winner</strong> — Internal CMRIT Hackathon</div>
                  <div>🎖️ <strong className="text-[#f0ebe1]">Microsoft Certified:</strong> Power BI Data Analyst (Certificate)</div>
                  <div>📜 <strong className="text-[#f0ebe1]">Coursera:</strong> Divide and Conquer & Randomized Algorithms</div>
                  <div>📜 <strong className="text-[#f0ebe1]">NPTEL:</strong> Theory of Computation</div>
                  <div>🏐 <strong className="text-[#f0ebe1]">VTU Volleyball:</strong> Represented CMRIT in Inter-University (2024)</div>
                </div>
              </div>
            </div>

            {/* Personal Details & Interests */}
            <div className="pt-4 border-t border-[#87a986]/15 font-mono text-xs text-[#d5cbba]/80 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div><strong className="text-[#87a986]">Languages:</strong> {personal.languages.join(", ")}</div>
              <div><strong className="text-[#87a986]">Hobbies:</strong> {personal.hobbies.join(", ")}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
