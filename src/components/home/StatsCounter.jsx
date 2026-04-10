import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { college } from '../../data/college';

const statsData = [
  { value: college.stats.years, suffix: '+', label: 'Years of Excellence', icon: '📅' },
  { value: college.stats.alumni, suffix: '+', label: 'Alumni Network', icon: '🎓' },
  { value: college.stats.placements, suffix: '%', label: 'Placement Rate', icon: '🏆' },
  { value: 6, suffix: '', label: 'Academic Units', icon: '🔬' },
];

function useCountUp(target, duration = 2200, active = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active, index }) {
  const count = useCountUp(stat.value, 2200, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center text-center py-8 px-4"
    >
      <span className="text-4xl mb-3" role="img" aria-label={stat.label}>
        {stat.icon}
      </span>
      <div className="text-5xl md:text-6xl font-black text-white leading-none mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white/75 font-medium text-base tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2354a0 100%)' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15 divide-y divide-white/15 lg:divide-y-0">
          {statsData.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={triggered} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
