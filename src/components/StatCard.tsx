'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter animation hook
function useCounter(target: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return { count, ref };
}

// Stat Card Component with counting animation
export default function StatCard({ stat, index }: { 
  stat: { 
    name: string; 
    value: number; 
    suffix: string; 
    icon: React.ComponentType<{ className?: string }>; 
    isText?: boolean 
  }; 
  index: number 
}) {
  const { count, ref } = useCounter(stat.value, 2.5);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
    >
      <div className="relative">
        <stat.icon className="h-8 w-8 text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
        <div className="text-4xl font-bold text-white mb-2">
          {stat.isText ? (
            <span>Zero{stat.suffix}</span>
          ) : (
            <>
              {count}
              <span className="text-amber-400">{stat.suffix}</span>
            </>
          )}
        </div>
        <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{stat.name}</div>
        
        {/* Decorative glow effect */}
        <div className="absolute -inset-1 bg-linear-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"></div>
      </div>
    </motion.div>
  );
}
