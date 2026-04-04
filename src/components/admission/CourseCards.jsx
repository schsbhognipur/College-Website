import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, BookOpen, ChevronRight } from 'lucide-react';

import { feeStructure } from '../../data/fees';

const courses = [
  {
    id: 'bpharma',
    name: feeStructure.bpharma.name,
    duration: feeStructure.bpharma.duration,
    seats: '60 Seats',
    level: 'UG Degree',
    color: 'bg-primary',
    accent: 'text-secondary',
    eligibility: feeStructure.bpharma.eligibility,
    highlights: ['PCI Approved', 'AKTU Affiliated', 'Industrial Focus'],
    fee: `₹ ${feeStructure.bpharma.years[0].tuition.toLocaleString()} / year (Tuition)`,
    featured: true,
  },
  {
    id: 'dpharma',
    name: feeStructure.dpharma.name,
    duration: feeStructure.dpharma.duration,
    seats: '60 Seats',
    level: 'Diploma',
    color: 'bg-green-600',
    accent: 'text-green-100',
    eligibility: feeStructure.dpharma.eligibility,
    highlights: ['BTE Approved', 'Quick Entry to Pharmacy', 'Job Ready'],
    fee: `₹ ${feeStructure.dpharma.years[0].tuition.toLocaleString()} / year (Tuition)`,
    featured: false,
  },
  {
    id: 'lateral',
    name: feeStructure.ble?.name || 'B.Pharm Lateral Entry',
    duration: feeStructure.ble?.duration || '3 Years',
    seats: '6 Seats',
    level: 'UG Degree',
    color: 'bg-purple-600',
    accent: 'text-purple-100',
    eligibility: feeStructure.ble?.eligibility || 'D.Pharm holders only',
    highlights: ['Saves 1 Year', 'Direct 2nd Year', 'For Diploma Holders'],
    fee: `₹ ${feeStructure.ble?.years[0]?.tuition.toLocaleString() || '50,000'} / year`,
    featured: false,
  },
];

export default function CourseCards({ onSelectCourse }) {
  const handleSelect = (courseId) => {
    onSelectCourse(courseId);
    const form = document.getElementById('admission-form-section');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight">
            Academic Pathways at Sanskriti College
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Select the course that matches your career goals and check your eligibility. 
            Direct admission and counseling routes are both available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className={`relative rounded-card overflow-hidden flex flex-col h-full bg-white transition-all duration-300 ${course.featured ? 'ring-2 ring-secondary ring-offset-2' : 'border border-gray-100 shadow-card hover:shadow-hover'}`}
            >
              {course.featured && (
                <div className="absolute top-4 right-4 bg-secondary text-primary font-bold text-xs px-3 py-1 rounded-pill z-10 shadow-lg">
                  ★ MOST POPULAR
                </div>
              )}

              {/* Course Header */}
              <div className={`p-8 pb-10 ${course.color} text-white`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <GraduationCap size={20} className={course.accent} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-6 leading-tight">{course.name}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-white/60" />
                    <span className="text-sm font-bold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-white/60" />
                    <span className="text-sm font-bold">{course.seats}</span>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Eligibility */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={16} className="text-secondary" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary">Eligibility</h4>
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {course.eligibility}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Core Highlights</h4>
                  <ul className="space-y-3">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fee Info */}
                <div className="mb-8 p-4 bg-accent/30 rounded-xl border border-accent/60">
                   <p className="text-xs font-bold text-primary/50 uppercase mb-1">Annual Fee Estimate</p>
                   <p className="text-lg font-black text-primary">{course.fee}</p>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => handleSelect(course.id)}
                  className={`w-full py-4 rounded-pill font-black text-sm flex items-center justify-center gap-2 transition-all transition-duration-300 ${course.featured ? 'bg-secondary text-primary' : 'bg-primary text-white hover:brightness-110'}`}
                >
                  Apply for this Course <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
