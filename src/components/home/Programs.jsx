import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';

const programs = [
  {
    id: 'bpharma',
    featured: true,
    name: 'B.Pharma',
    fullName: 'Bachelor of Pharmacy',
    duration: '4 Years',
    seats: '60 Seats',
    badge: 'Most Popular',
    color: '#1a3c6e',
    points: [
      'PCI Approved & AKTU Affiliated',
      'Covers Pharmaceutics, Pharmacology, Chemistry & more',
      'Industry-oriented curriculum with 6-month internship',
      'Eligible for M.Pharma, GPAT, Drug Inspector',
    ],
  },
  {
    id: 'dpharma',
    featured: false,
    name: 'D.Pharma',
    fullName: 'Diploma in Pharmacy',
    duration: '2 Years',
    seats: '60 Seats',
    badge: 'Quick Entry',
    color: '#0d6e4a',
    points: [
      'PCI Approved — recognized across India',
      'Eligible for pharmacy store license (Reg. Pharmacist)',
      'Pathway to B.Pharma via Lateral Entry scheme',
      'Affordable tuition — scholarships available',
    ],
  },
  {
    id: 'lateral',
    featured: false,
    name: 'Lateral Entry',
    fullName: 'B.Pharma (2nd Year Direct)',
    duration: '3 Years',
    seats: '10 Seats',
    badge: 'For D.Pharma Holders',
    color: '#6d3b9c',
    points: [
      'Direct admission to B.Pharma 2nd year',
      'Only for D.Pharma degree holders',
      'Complete B.Pharma in 3 years',
      'AKTU Lateral Entry counseling',
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Programs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block bg-[#e8f0fe] text-primary font-bold text-sm px-5 py-1.5 rounded-pill mb-4">
            Programs Offered
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#102847] mb-3">
            Choose Your Program
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three pathways into the world of pharmaceutical sciences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              variants={item}
              className="relative rounded-card overflow-hidden flex flex-col"
              style={{
                boxShadow: prog.featured
                  ? '0 0 0 2px #f4a61d, 0 8px 32px rgba(244,166,29,0.2)'
                  : '0 2px 12px rgba(0,0,0,0.07)',
                background: 'white',
              }}
            >
              {/* Featured ribbon */}
              {prog.featured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-pill"
                  style={{ background: '#f4a61d', color: '#102847' }}
                >
                  <Star size={11} className="fill-current" /> {prog.badge}
                </div>
              )}

              {/* Header */}
              <div className="p-7 pb-5" style={{ background: prog.color }}>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{prog.fullName}</p>
                <h3 className="text-3xl font-black text-white mb-3">{prog.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-pill">
                    ⏱ {prog.duration}
                  </span>
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-pill">
                    👥 {prog.seats}
                  </span>
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-pill">
                    ✅ PCI Approved
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1 mb-6">
                  {prog.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-pill transition-all duration-300"
                  style={
                    prog.featured
                      ? { background: '#f4a61d', color: '#102847' }
                      : { background: prog.color, color: 'white' }
                  }
                >
                  Apply Now <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
