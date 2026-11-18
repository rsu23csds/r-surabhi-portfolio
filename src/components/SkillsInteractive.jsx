import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BrainCircuit, Terminal, BarChart3, ShieldCheck, Play, RefreshCw, CheckCircle, Server, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/audio';

export default function SkillsInteractive() {
  const { skillsCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  // Interactive Live Privacy Scanner state
  const [simulatedData, setSimulatedData] = useState([
    { id: 101, name: "Dr. Ananya Sharma", email: "a.sharma@healthcorp.org", age: 34, diagnosis: "Hypertension Stage 2", risk: "HIGH" },
    { id: 102, name: "Rahul Verma", email: "rahul.v@fintech.io", age: 29, diagnosis: "Type 2 Diabetes", risk: "MEDIUM" },
    { id: 103, name: "Priya Nair", email: "pnair99@gmail.com", age: 42, diagnosis: "Arrhythmia", risk: "HIGH" },
  ]);
  const [isAnonymized, setIsAnonymized] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'databases', label: 'Databases & Analytics' },
    { id: 'frameworks', label: 'Frameworks & Dev Tools' },
    { id: 'systems', label: 'Systems & Platforms' },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillsCategories.flatMap(cat =>
        cat.skills.map(s => ({ ...s, group: cat.title }))
      );
    }
    const target = skillsCategories.find(c => c.id === activeCategory);
    return target ? target.skills.map(s => ({ ...s, group: target.title })) : [];
  };

  const handleSimulateAnonymization = () => {
    playClickSound();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsAnonymized(!isAnonymized);
      playPopSound();
    }, 600);
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full radial-sage-glow opacity-30 pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 02 • CAPABILITY MATRIX
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            TECHNICAL ARSENAL.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          Core competencies and technologies across Machine Learning, Full-Stack engineering, and Data Analytics.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              playClickSound();
              setActiveCategory(cat.id);
            }}
            data-cursor-text="FILTER"
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 font-semibold'
                : 'glass-panel text-[#d5cbba]/70 hover:text-[#f0ebe1] hover:border-[#87a986]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Clean & Professional Skills Grid (No percentages, no progress bars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {getFilteredSkills().map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-5 rounded-2xl border border-[#87a986]/15 hover:border-[#87a986]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] text-[#87a986] uppercase tracking-wider bg-[#87a986]/10 px-2 py-0.5 rounded-full border border-[#87a986]/20">
                    {skill.group}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-base text-[#f0ebe1] group-hover:text-[#87a986] transition-colors mt-1">
                  {skill.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#87a986]/10 font-mono text-xs text-[#d5cbba]/80 leading-relaxed font-light">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Feature: Live Privacy & Data Anonymization Sandbox Demo */}
      <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border border-[#a31d3d]/30 bg-gradient-to-br from-[#121913]/90 via-[#240c14]/50 to-[#090c0a] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#87a986]/15 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#a31d3d]/20 border border-[#a31d3d]/40 flex items-center justify-center text-[#f0ebe1]">
              <ShieldCheck className="w-5 h-5 text-[#87a986]" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#87a986] uppercase tracking-wider">
                INTERACTIVE DEMO
              </div>
              <h3 className="font-syne text-lg sm:text-xl font-bold text-[#f0ebe1]">
                Data Anonymization & Privacy Risk Evaluation
              </h3>
            </div>
          </div>

          <button
            onClick={handleSimulateAnonymization}
            disabled={isScanning}
            data-cursor-text="EXECUTE"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs font-semibold uppercase tracking-wider border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 hover:scale-105 transition-all cursor-pointer"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Sanitizing...</span>
              </>
            ) : isAnonymized ? (
              <>
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Original Raw Data</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate Data Anonymizer</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#d5cbba]/80 font-light mb-6">
          This interactive test illustrates privacy preservation techniques: sensitive Personally Identifiable Information (Names, Emails) 
          is masked while demographic attributes are generalized into cohort bands ($k$-anonymity) to minimize re-identification risk.
        </p>

        {/* Live Data Table Mock */}
        <div className="overflow-x-auto rounded-xl border border-[#87a986]/20 bg-[#090c0a]/90">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-[#87a986]/20 text-[#87a986] bg-[#121913]">
                <th className="p-3">Record ID</th>
                <th className="p-3">Subject Name</th>
                <th className="p-3">Contact Email</th>
                <th className="p-3">Age Cohort</th>
                <th className="p-3">Medical Diagnosis</th>
                <th className="p-3">Privacy Status</th>
              </tr>
            </thead>
            <tbody>
              {simulatedData.map((row) => (
                <tr key={row.id} className="border-b border-[#87a986]/10 hover:bg-[#87a986]/5 transition-colors">
                  <td className="p-3 text-[#d5cbba]">#{row.id}</td>
                  <td className="p-3 font-semibold text-[#f0ebe1]">
                    {isAnonymized ? (
                      <span className="bg-[#7e142e]/40 text-[#f0ebe1] px-2 py-0.5 rounded border border-[#a31d3d]/50 font-mono">
                        [PII_NAME_REDACTED]
                      </span>
                    ) : (
                      row.name
                    )}
                  </td>
                  <td className="p-3 text-[#d5cbba]">
                    {isAnonymized ? (
                      <span className="bg-[#7e142e]/40 text-[#f0ebe1] px-2 py-0.5 rounded border border-[#a31d3d]/50 font-mono">
                        ***@***.***
                      </span>
                    ) : (
                      row.email
                    )}
                  </td>
                  <td className="p-3 text-[#f0ebe1]">
                    {isAnonymized ? (
                      <span className="text-[#87a986] font-bold">
                        [{Math.floor(row.age / 10) * 10} - {Math.floor(row.age / 10) * 10 + 9}] yrs (k=3)
                      </span>
                    ) : (
                      `${row.age} yrs`
                    )}
                  </td>
                  <td className="p-3 text-[#d5cbba]">{row.diagnosis}</td>
                  <td className="p-3">
                    {isAnonymized ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#87a986] bg-[#87a986]/10 px-2 py-0.5 rounded-full border border-[#87a986]/30">
                        <CheckCircle className="w-3 h-3" /> Sanitized
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-[#a31d3d] bg-[#a31d3d]/15 px-2 py-0.5 rounded-full border border-[#a31d3d]/40">
                        Exposed (Raw PII)
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
