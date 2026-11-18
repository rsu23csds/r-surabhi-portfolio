import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "PRIVACY-PRESERVING AI",
    "•",
    "RAG BASICS & EMBEDDINGS",
    "•",
    "FASTAPI & REACT",
    "•",
    "MICROSOFT POWER BI CERTIFIED",
    "•",
    "CMRIT SIH 2025 WINNER",
    "•",
    "K-ANONYMITY & L-DIVERSITY",
    "•",
    "SCIKIT-LEARN & PYTHON",
    "•",
    "MERN FULL-STACK",
    "•",
    "VTU VOLLEYBALL ATHLETE",
    "•",
  ];

  return (
    <div className="w-full py-4 bg-gradient-to-r from-[#121913] via-[#241018] to-[#121913] border-y border-[#87a986]/20 overflow-hidden select-none my-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, i) => (
          <span
            key={i}
            className={`mx-4 font-mono text-xs sm:text-sm tracking-widest ${
              text === "•"
                ? "text-[#a31d3d] font-black text-base"
                : "text-[#d5cbba]/90 font-medium hover:text-[#87a986] transition-colors"
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
