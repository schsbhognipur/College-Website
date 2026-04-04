import { useState } from 'react';
import { faculty } from '../../data/faculty';
import FacultyCard from './FacultyCard';

const departments = ['All', ...new Set(faculty.map((f) => f.department))];

export default function FacultyGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? faculty : faculty.filter((f) => f.department === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={`px-4 py-2 rounded-pill text-sm font-medium transition-all border ${
              active === d
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((member, i) => (
          <FacultyCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </div>
  );
}
