import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const departments = [
  {
    name: 'Pharmaceutics',
    shortDesc: 'Drug formulation, delivery & dosage form design',
    color: 'from-blue-500 to-blue-700',
    accent: '#3b82f6',
    lightBg: 'bg-blue-50',
    highlights: ['Novel Drug Delivery Systems', 'Quality Control & Assurance'],
    slug: 'pharmaceutics',
  },
  {
    name: 'Pharmacology',
    shortDesc: 'Drug mechanisms, clinical pharmacology & toxicology',
    color: 'from-emerald-500 to-emerald-700',
    accent: '#10b981',
    lightBg: 'bg-emerald-50',
    highlights: ['Clinical Pharmacology', 'Drug Interactions & Safety'],
    slug: 'pharmacology',
  },
  {
    name: 'Pharmaceutical Chemistry',
    shortDesc: 'Drug synthesis, analysis & medicinal chemistry',
    color: 'from-violet-500 to-violet-700',
    accent: '#8b5cf6',
    lightBg: 'bg-violet-50',
    highlights: ['Medicinal Chemistry & QSAR', 'Analytical Method Development'],
    slug: 'pharmaceutical-chemistry',
  },
  {
    name: 'Pharmacognosy',
    shortDesc: 'Natural products, herbal medicine & phytochemistry',
    color: 'from-teal-500 to-teal-700',
    accent: '#14b8a6',
    lightBg: 'bg-teal-50',
    highlights: ['Herbal Drug Technology', 'Plant-based Drug Discovery'],
    slug: 'pharmacognosy',
  },
  {
    name: 'Pharmacy Practice',
    shortDesc: 'Clinical pharmacy, hospital practice & patient care',
    color: 'from-orange-500 to-orange-700',
    accent: '#f97316',
    lightBg: 'bg-orange-50',
    highlights: ['Hospital & Clinical Pharmacy', 'Patient Counselling'],
    slug: 'pharmacy-practice',
  },
  {
    name: 'Central Research Center',
    shortDesc: 'Interdisciplinary pharmaceutical research & innovation',
    color: 'from-rose-500 to-rose-700',
    accent: '#f43f5e',
    lightBg: 'bg-rose-50',
    highlights: ['Industry-Sponsored Research', 'HPLC & Spectroscopy'],
    slug: 'research-center',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function DepartmentsPreview() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f8f9fc' }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block bg-white text-primary font-bold text-sm px-5 py-1.5 rounded-pill border border-primary/20 mb-4">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#102847] mb-3">
            Our Pharmacy Departments
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Five specialised departments and a central research center
          </p>
        </motion.div>

        {/* Grid — horizontal scroll on mobile */}
        <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
          <motion.div
            className="flex gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 min-w-max md:min-w-0"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                variants={cardVariant}
                className="group bg-white rounded-card overflow-hidden w-64 md:w-auto flex-shrink-0 md:flex-shrink"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Color top bar */}
                <div className={`h-2 bg-gradient-to-r ${dept.color}`} />

                <div className="p-5">
                  <h3 className="font-bold text-[#1a3c6e] text-base mb-1 leading-snug">{dept.name}</h3>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">{dept.shortDesc}</p>

                  <ul className="space-y-2 mb-5">
                    {dept.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: dept.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/departments/${dept.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                    style={{ color: dept.accent }}
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-pill border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm"
          >
            View All Departments <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
