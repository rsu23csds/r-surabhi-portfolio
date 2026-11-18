import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/audio';

export default function ContactSection({ onOpenResume }) {
  const { personal } = portfolioData;

  const [copiedItem, setCopiedItem] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    playPopSound();
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    playClickSound();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      playPopSound();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-[480px] h-[480px] rounded-full radial-burgundy-glow opacity-30 pointer-events-none blur-3xl -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#87a986]/20 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase block mb-2">
            // 06 • INITIATE DIALOGUE
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f0ebe1] tracking-tight">
            LET'S CONNECT.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#d5cbba]/70 max-w-sm mt-4 sm:mt-0">
          Open for Summer 2025/2026 internships, research fellowships, and high-impact engineering conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Inquiries, Fast Copy & Dossier */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#87a986]/20 bg-gradient-to-br from-[#121913] to-[#090c0a] shadow-xl">
            <span className="font-mono text-xs text-[#87a986] uppercase tracking-widest block mb-3">
              DIRECT REACHOUT
            </span>

            {/* Primary Email */}
            <div className="group mb-5">
              <span className="font-mono text-[10px] text-[#d5cbba]/60 uppercase tracking-wider block mb-1">
                Personal Email
              </span>
              <div className="flex items-center justify-between p-3 rounded-2xl glass-panel border border-[#87a986]/15 group-hover:border-[#87a986]/40 transition-colors">
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-xs sm:text-sm text-[#f0ebe1] hover:text-[#87a986] transition-colors truncate mr-2"
                >
                  {personal.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  title="Copy email address"
                  className="w-8 h-8 rounded-xl bg-[#87a986]/10 flex items-center justify-center text-[#87a986] hover:bg-[#87a986] hover:text-[#090c0a] transition-all cursor-pointer shrink-0"
                >
                  {copiedItem === 'email' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Academic Email */}
            <div className="group mb-5">
              <span className="font-mono text-[10px] text-[#d5cbba]/60 uppercase tracking-wider block mb-1">
                Institutional Email (CMRIT)
              </span>
              <div className="flex items-center justify-between p-3 rounded-2xl glass-panel border border-[#87a986]/15 group-hover:border-[#87a986]/40 transition-colors">
                <a
                  href={`mailto:${personal.collegeEmail}`}
                  className="font-mono text-xs sm:text-sm text-[#f0ebe1] hover:text-[#87a986] transition-colors truncate mr-2"
                >
                  {personal.collegeEmail}
                </a>
                <button
                  onClick={() => copyToClipboard(personal.collegeEmail, 'collegeEmail')}
                  title="Copy college email"
                  className="w-8 h-8 rounded-xl bg-[#87a986]/10 flex items-center justify-center text-[#87a986] hover:bg-[#87a986] hover:text-[#090c0a] transition-all cursor-pointer shrink-0"
                >
                  {copiedItem === 'collegeEmail' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="group mb-5">
              <span className="font-mono text-[10px] text-[#d5cbba]/60 uppercase tracking-wider block mb-1">
                Direct Telephone
              </span>
              <div className="flex items-center justify-between p-3 rounded-2xl glass-panel border border-[#87a986]/15 group-hover:border-[#87a986]/40 transition-colors">
                <a
                  href={`tel:${personal.phone}`}
                  className="font-mono text-xs sm:text-sm text-[#f0ebe1] hover:text-[#87a986] transition-colors"
                >
                  {personal.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  title="Copy telephone"
                  className="w-8 h-8 rounded-xl bg-[#87a986]/10 flex items-center justify-center text-[#87a986] hover:bg-[#87a986] hover:text-[#090c0a] transition-all cursor-pointer shrink-0"
                >
                  {copiedItem === 'phone' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Details */}
            <div className="pt-4 border-t border-[#87a986]/15 space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2.5 text-[#d5cbba]/80">
                <MapPin className="w-4 h-4 text-[#87a986] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f0ebe1] font-semibold block">Current Base (Bengaluru):</span>
                  <span className="text-[11px] text-[#d5cbba]/70">
                    SLN Classic Ladies PG, Marathahalli, AECS Layout, Bengaluru - 560037
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-[#d5cbba]/80">
                <MapPin className="w-4 h-4 text-[#a31d3d] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f0ebe1] font-semibold block">Hometown:</span>
                  <span className="text-[11px] text-[#d5cbba]/70">
                    Jawaharnagar, Raichur, Karnataka - 584103
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier Button */}
            <div className="mt-6 pt-4 border-t border-[#87a986]/15">
              <button
                onClick={() => {
                  playClickSound();
                  if (onOpenResume) onOpenResume();
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs font-semibold uppercase tracking-wider border border-[#a31d3d] shadow-lg shadow-[#7e142e]/30 hover:scale-[1.01] transition-transform cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Complete Dossier / Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#87a986]/25 bg-gradient-to-br from-[#121913]/90 via-[#240c14]/40 to-[#090c0a] shadow-2xl relative">
            <span className="font-mono text-xs text-[#87a986] uppercase tracking-widest block mb-2">
              MESSAGE DISPATCH
            </span>
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#f0ebe1] mb-6">
              Send an Encrypted Note or Inquiry
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#87a986]/20 border border-[#87a986] text-[#87a986] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-syne text-2xl font-bold text-[#f0ebe1]">
                  Transmission Dispatched
                </h4>
                <p className="font-mono text-xs text-[#d5cbba] mt-2 max-w-md mx-auto">
                  Thank you, {formState.name}! Your message has been logged. R Surabhi will respond via {formState.email} shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full glass-panel border border-[#87a986]/40 text-xs font-mono text-[#f0ebe1] hover:border-[#87a986] cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#87a986] uppercase mb-1">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Priya Rao / DeepMind"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090c0a]/80 border border-[#87a986]/25 text-[#f0ebe1] text-xs font-mono focus:outline-none focus:border-[#87a986] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#87a986] uppercase mb-1">
                      Your Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya.rao@research.org"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090c0a]/80 border border-[#87a986]/25 text-[#f0ebe1] text-xs font-mono focus:outline-none focus:border-[#87a986] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#87a986] uppercase mb-1">
                    Subject / Discussion Scope
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer 2025 AI Research Fellowship / Privacy Systems"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090c0a]/80 border border-[#87a986]/25 text-[#f0ebe1] text-xs font-mono focus:outline-none focus:border-[#87a986] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#87a986] uppercase mb-1">
                    Your Message / Proposition *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090c0a]/80 border border-[#87a986]/25 text-[#f0ebe1] text-xs font-mono focus:outline-none focus:border-[#87a986] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor-text="SEND"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7e142e] via-[#991b3b] to-[#a31d3d] text-[#f0ebe1] font-mono text-xs uppercase tracking-widest font-semibold border border-[#a31d3d] shadow-xl shadow-[#7e142e]/30 hover:scale-[1.01] transition-transform cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Dispatching...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
