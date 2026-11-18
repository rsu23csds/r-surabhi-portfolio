import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return; // Disable on touch devices
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const handleLinkHover = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor]');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovered(true);
          const customText = el.getAttribute('data-cursor-text');
          if (customText) setCursorText(customText);
        });
        el.addEventListener('mouseleave', () => {
          setIsHovered(false);
          setCursorText('');
        });
      });
    };

    handleLinkHover();

    // Re-bind when DOM mutations occur
    const observer = new MutationObserver(handleLinkHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#87a986]/60 pointer-events-none flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 18),
          y: mousePosition.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? '#a31d3d' : 'rgba(135, 169, 134, 0.6)',
          backgroundColor: isHovered ? 'rgba(126, 20, 46, 0.15)' : 'rgba(135, 169, 134, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-widest text-[#f0ebe1] uppercase font-bold animate-pulse">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Pin Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#f0ebe1] pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
      />
    </div>
  );
}
