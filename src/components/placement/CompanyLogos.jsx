import { motion } from 'framer-motion';
import { placementCompanies } from '../../data/placements';

export default function CompanyLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {placementCompanies.map((company, i) => (
        <motion.div
          key={company.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          className="bg-white border border-gray-200 rounded-card p-4 flex flex-col items-center justify-center gap-2 hover:border-secondary hover:shadow-hover transition-all text-center"
        >
          <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-base">
            {company.name.charAt(0)}
          </div>
          <p className="text-xs font-semibold text-gray-700 leading-tight">{company.name}</p>
          <span className="text-xs text-secondary font-medium">{company.sector}</span>
        </motion.div>
      ))}
    </div>
  );
}
