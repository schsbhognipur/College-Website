import { motion } from 'framer-motion';

export default function FacultyCard({ member, index = 0 }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="card p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
    >
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-black mb-4 group-hover:scale-105 transition-transform shadow-card">
        {initials}
      </div>

      <h3 className="font-bold text-primary text-base leading-tight">{member.name}</h3>
      <p className="text-secondary text-sm font-semibold mt-1">{member.designation}</p>
      <p className="text-gray-500 text-xs mt-1">{member.department}</p>

      <div className="mt-3 w-full border-t pt-3">
        <p className="text-xs text-gray-600 mb-1">
          <span className="font-medium">Qualification:</span> {member.qualification}
        </p>
        <p className="text-xs text-gray-600 mb-1">
          <span className="font-medium">Experience:</span> {member.experience}
        </p>
        <p className="text-xs text-gray-600 line-clamp-1">
          <span className="font-medium">Specialization:</span> {member.specialization}
        </p>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
        <span className="bg-accent text-primary px-2 py-1 rounded-pill font-medium">
          {member.publications} Publications
        </span>
      </div>
    </motion.div>
  );
}
