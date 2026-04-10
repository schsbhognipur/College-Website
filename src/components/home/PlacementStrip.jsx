import { motion } from 'framer-motion';

import { placements } from '../../data/placements';

const companies = placements.companies.map(c => c.name);

export default function PlacementStrip() {
  // Duplicate for seamless infinite loop
  const items = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 overflow-hidden" style={{ background: '#1a3c6e' }}>
      <div className="container-custom mb-8">
        <motion.h2
          className="text-center text-white/80 text-sm font-bold uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Students Work At
        </motion.h2>
      </div>

      {/* Marquee wrapper */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-4 whitespace-nowrap placement-marquee"
          style={{ width: 'max-content', cursor: 'default' }}
        >
          {items.map((company, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-pill flex-shrink-0"
              style={{
                background: 'rgba(244,166,29,0.15)',
                border: '1px solid rgba(244,166,29,0.35)',
                color: '#f4a61d',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#f4a61d' }}
              />
              {company}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .placement-marquee {
          animation: placementScroll 28s linear infinite;
        }
        .placement-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes placementScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
