import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playChimeSound } from '../utils/audio';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          playChimeSound();
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        // Random organic jumps
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between p-8 md:p-14 bg-[#090c0a] text-[#f0ebe1]"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center font-mono text-xs text-[#87a986] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7e142e] animate-ping" />
              <span>R SURABHI // PORTFOLIO</span>
            </div>
            <span>[ SYSTEM INITIALIZING ]</span>
          </div>

          {/* Central Typography */}
          <div className="max-w-4xl mx-auto w-full text-center my-auto">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm font-mono tracking-widest text-[#87a986] uppercase mb-4"
            >
              DATA SCIENCE • PRIVACY AI • FULL-STACK INTELLIGENCE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#f0ebe1] leading-[0.95]"
            >
              R SURABHI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-sm md:text-base font-sans text-[#d5cbba] max-w-lg mx-auto font-light"
            >
              "Protecting privacy. Powering intelligence. Engineering systems for tomorrow."
            </motion.p>
          </div>

          {/* Bottom Bar: Progress Meter & Percentage */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-3 font-mono">
              <div className="text-xs text-[#87a986] tracking-wider">
                <span>CMR INSTITUTE OF TECHNOLOGY '27</span>
              </div>
              <div className="text-3xl sm:text-5xl font-syne font-bold text-[#f0ebe1]">
                {progress}
                <span className="text-lg text-[#a31d3d] font-normal">%</span>
              </div>
            </div>
            {/* Progress line */}
            <div className="w-full h-[2px] bg-[#243026] relative overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#87a986] via-[#f0ebe1] to-[#a31d3d]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
