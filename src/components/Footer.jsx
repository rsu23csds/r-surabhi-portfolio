import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function Footer() {
  const { personal } = portfolioData;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-8 border-t border-[#87a986]/20 bg-[#090c0a] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Top Footer Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#87a986]/15">
          <div className="flex flex-col">
            <span className="font-syne text-2xl font-black text-[#f0ebe1] tracking-wider">
              R SURABHI
            </span>
            <span className="font-mono text-xs text-[#87a986] mt-1">
              Computer Science & Data Science • CMRIT '27
            </span>
          </div>

          {/* Live Bengaluru Time Badge */}
          <div className="flex items-center gap-4">
            <div className="glass-panel px-4 py-2 rounded-full border border-[#87a986]/25 flex items-center gap-2.5 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#87a986] animate-pulse" />
              <span className="text-[#d5cbba]">BENGALURU, IN:</span>
              <span className="text-[#f0ebe1] font-bold">{time || '10:00 PM IST'}</span>
            </div>

            <button
              onClick={scrollToTop}
              title="Return to top"
              data-cursor-text="TOP"
              className="w-10 h-10 rounded-full glass-panel border border-[#87a986]/30 flex items-center justify-center text-[#f0ebe1] hover:text-[#a31d3d] hover:border-[#a31d3d] transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Oversized Signature Typography */}
        <div className="my-10 select-none overflow-hidden">
          <div className="font-syne font-black text-4xl sm:text-7xl md:text-8xl lg:text-[115px] tracking-tight text-[#f0ebe1]/90 uppercase leading-none hover:text-[#87a986] transition-colors duration-500">
            R SURABHI
          </div>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#d5cbba]/60 pt-6 border-t border-[#87a986]/10">
          <div>
            <span>© {new Date().getFullYear()} R Surabhi. Inspired by Awwwards Design & Modern AI Systems.</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0ebe1] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0ebe1] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0ebe1] transition-colors flex items-center gap-1.5"
            >
              <LeetcodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
