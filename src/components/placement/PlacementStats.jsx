import { motion } from 'framer-motion';
import { placementStats } from '../../data/placements';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

function StatBox({ value, suffix, label, delay }) {
  const { count, ref } = useCounterAnimation(Math.round(value), 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="card p-6 text-center"
    >
      <div className="text-4xl font-black text-secondary">{count}{suffix}</div>
      <div className="text-gray-600 text-sm font-medium mt-2">{label}</div>
    </motion.div>
  );
}

export default function PlacementStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <StatBox value={placementStats.placementRate} suffix="%" label="Placement Rate" delay={0} />
      <StatBox value={placementStats.avgPackage * 10} suffix="L+" label="Avg Package (PA)" delay={0.1} />
      <StatBox value={placementStats.highestPackage * 10} suffix="L+" label="Highest Package (PA)" delay={0.2} />
      <StatBox value={placementStats.companiesVisited} suffix="+" label="Companies Visited" delay={0.3} />
      <StatBox value={placementStats.studentsPlaced2023} suffix="+" label="Placed in 2023" delay={0.4} />
      <StatBox value={placementStats.studentsPlaced2022} suffix="+" label="Placed in 2022" delay={0.5} />
    </div>
  );
}
