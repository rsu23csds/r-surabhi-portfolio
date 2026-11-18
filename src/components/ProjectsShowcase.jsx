import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Shield, Sun, Eye, X, CheckCircle2, Cpu, Activity, Server } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/audio';

export default function ProjectsShowcase() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [modalProject, setModalProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'privacy-guardian':
        return Shield;
      case 'sunsafe-uv':
        return Sun;
      case 'phishguard-ai':
        return Eye;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full radial-burgundy-glow opacity-30 pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 03 • PRODUCTION & RESEARCH
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            SELECTED WORKS.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          Flagship platforms engineered for data privacy, cybersecurity intelligence, and high-performance telemetry.
        </p>
      </div>

      {/* Project Selector Navigation Pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {projects.map((proj, idx) => {
          const Icon = getProjectIcon(proj.id);
          const isSelected = selectedProject.id === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => {
                playClickSound();
                setSelectedProject(proj);
              }}
              data-cursor-text="EXPLORE"
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] border border-[#a31d3d] shadow-xl shadow-[#7e142e]/30 font-semibold scale-[1.02]'
                  : 'glass-panel text-[#d5cbba]/80 hover:text-[#f0ebe1] hover:border-[#87a986]/40'
              }`}
            >
              <span className="text-[10px] text-[#87a986] font-bold">0{idx + 1}</span>
              <Icon className="w-4 h-4 text-[#f0ebe1]" />
              <span>{proj.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Main Feature Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl border border-[#87a986]/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#121913]/90 via-[#1e0a12]/60 to-[#090c0a]"
        >
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#87a986]/15 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold text-[#87a986] bg-[#87a986]/10 border border-[#87a986]/30">
                {selectedProject.category}
              </span>
              <span className="text-xs font-mono text-[#d5cbba]/60">
                {selectedProject.timeline}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#a31d3d] bg-[#a31d3d]/10 px-3 py-1 rounded-full border border-[#a31d3d]/30 font-semibold">
                {selectedProject.badge}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Project Description & Features */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-[#f0ebe1] tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-[#d5cbba] font-light leading-relaxed text-sm sm:text-base">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Core Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-1">
                  // ARCHITECTURAL CAPABILITIES
                </span>
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#f0ebe1] font-mono font-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-[#87a986]/15">
                <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-3">
                  // TECHNOLOGIES & LIBRARIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-[#f0ebe1] bg-[#121913] border border-[#87a986]/20 hover:border-[#87a986] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    playPopSound();
                    setModalProject(selectedProject);
                  }}
                  data-cursor-text="INSPECT"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs uppercase tracking-wider font-semibold border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Deep Architecture Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  data-cursor-text="CODE"
                  className="px-5 py-3 rounded-full glass-panel border border-[#87a986]/30 text-[#f0ebe1] font-mono text-xs uppercase tracking-wider hover:border-[#87a986] transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Visual Mockup / Metrics Panel */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Interactive Telemetry Box */}
              <div className="p-6 rounded-2xl glass-panel border border-[#87a986]/25 bg-[#090c0a]/80 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#87a986]/15 pb-3 mb-4 font-mono text-xs">
                  <span className="text-[#87a986] flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#87a986] animate-pulse" />
                    SYSTEM TELEMETRY
                  </span>
                  <span className="text-[#f0ebe1]/60">LIVE BENCHMARKS</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="p-3.5 rounded-xl bg-[#121913]/90 border border-[#87a986]/15">
                      <div className="font-syne font-bold text-base sm:text-lg text-[#f0ebe1]">
                        {m.val}
                      </div>
                      <div className="font-mono text-[10px] text-[#87a986] mt-1 tracking-wider uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Preview / Pipeline Blueprint Box */}
              <div className="p-5 rounded-2xl glass-panel border border-[#87a986]/20 bg-[#090c0a]/90 font-mono text-xs">
                <div className="flex items-center justify-between text-[#87a986] border-b border-[#87a986]/15 pb-2 mb-3 text-[11px]">
                  <span>PIPELINE FLOW</span>
                  <span className="text-[#d5cbba]/60">FASTAPI / ML ENGINE</span>
                </div>
                <pre className="text-[11px] text-[#d5cbba]/90 overflow-x-auto leading-relaxed">
{selectedProject.id === 'privacy-guardian'
? `# PII Risk Evaluation & Anonymization
from anonymizer import KAnonymityVerifier, RiskScorer

# Automated entity detection & attack simulation
risk_report = RiskScorer.evaluate_exposure(dataset)
anonymized = KAnonymityVerifier(k=5, l=3).generalize(dataset)
assert risk_report.is_sanitized == True`
: selectedProject.id === 'sunsafe-uv'
? `// Real-Time UV Telemetry Aggregator
router.get('/api/uv/realtime', async (req, res) => {
  const { lat, lon } = req.query;
  const solarData = await fetchSolarIndex(lat, lon);
  const burnTime = calculateFitzpatrickBurn(solarData.uvi);
  res.json({ uvi: solarData.uvi, burnTime, status: 'SECURE' });
});`
: `# Explainable Phishing Classifier
from sklearn.ensemble import RandomForestClassifier
from threat_intel import VirusTotalFeed

features = extract_lexical_entropy(target_url)
threat_score = rf_model.predict_proba([features])[0][1]
vt_report = VirusTotalFeed.verify_domain(target_url)`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Deep Architecture Breakdown Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#090c0a]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#a31d3d]/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#0d120f] shadow-2xl relative"
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full glass-panel border border-[#87a986]/30 flex items-center justify-center text-[#f0ebe1] hover:text-[#a31d3d] hover:border-[#a31d3d] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-[#87a986] uppercase tracking-widest block mb-2">
                SYSTEM DEEP-DIVE
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f0ebe1] mb-4">
                {modalProject.title}
              </h3>

              <p className="text-[#d5cbba] text-sm leading-relaxed mb-6 font-light">
                {modalProject.longDescription}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-syne font-bold text-sm text-[#f0ebe1] uppercase tracking-wider text-[#87a986]">
                  Key Architectural Accomplishments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modalProject.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-xl glass-panel border border-[#87a986]/15 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f0ebe1] font-mono">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#121913] border border-[#87a986]/20 font-mono text-xs text-[#d5cbba]/90 flex items-center justify-between">
                <span>Verified Stack: {modalProject.techStack.join(" • ")}</span>
                <span className="text-[#87a986] font-bold">Tested & Built</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
