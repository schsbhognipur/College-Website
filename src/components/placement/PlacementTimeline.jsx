import { motion } from 'framer-motion';
import { placementTimeline } from '../../data/placements';

export default function PlacementTimeline() {
  return (
    <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
      {placementTimeline.map((item, i) => (
        <motion.div
          key={item.month}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="relative"
        >
          <div className="absolute -left-10 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-card" />
          <div className="bg-primary/5 rounded-card p-4">
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{item.month}</p>
            <p className="font-bold text-primary">{item.event}</p>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
