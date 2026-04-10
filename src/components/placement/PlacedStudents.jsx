import { motion } from 'framer-motion';
import { placedStudents } from '../../data/placements';

export default function PlacedStudents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {placedStudents.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="card p-5 flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shrink-0">
            {s.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-primary text-sm">{s.name}</p>
            <p className="text-secondary text-xs font-semibold">{s.company}</p>
            <p className="text-gray-500 text-xs">{s.role}</p>
            <p className="text-gray-400 text-xs">Batch {s.batch} · {s.package}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
