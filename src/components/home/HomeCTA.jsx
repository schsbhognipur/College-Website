import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#f4a61d' }}>
      <div className="container-custom">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-pill mb-5"
            style={{ background: 'rgba(16,40,71,0.15)', color: '#102847' }}
          >
            Admissions 2026
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102847] mb-4 leading-tight">
            Ready to Start Your<br className="hidden sm:block" /> Pharmacy Journey?
          </h2>

          <p className="text-[#1a3c6e]/80 text-lg mb-10 max-w-lg mx-auto font-medium">
            Admission 2026 open. Limited seats available for B.Pharma & D.Pharma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 font-bold text-base px-9 py-4 rounded-pill text-[#f4a61d] transition-all duration-300 hover:shadow-2xl"
                style={{ background: '#102847' }}
              >
                Apply Now <ChevronRight size={18} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-2 font-bold text-base px-9 py-4 rounded-pill border-2 border-[#102847] text-[#102847] hover:bg-[#102847] hover:text-white transition-all duration-300"
              >
                <Download size={17} /> Download Brochure
              </a>
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">
            {[
              '✓ PCI Approved',
              '✓ AKTU Affiliated',
              '✓ UP Scholarship Available',
              '✓ 95% Placement Record',
            ].map((badge) => (
              <span
                key={badge}
                className="text-sm font-semibold text-[#102847]/75"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
