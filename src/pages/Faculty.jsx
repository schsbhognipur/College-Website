import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { faculty as allFaculty } from '../data/faculty';
import { Search, BookOpen, Clock, Users, GraduationCap, Mail, ChevronRight } from 'lucide-react';

const departments = ['All', 'Pharmaceutics', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Pharmacology', 'Pharmacy Practice', 'Central Research Center'];

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDept, setActiveDept] = useState('All');

  const filteredFaculty = useMemo(() => {
    return allFaculty.filter(member => {
      const name = member?.name || '';
      const specialization = member?.specialization || '';
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            specialization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = activeDept === 'All' || member?.department === activeDept;
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, activeDept]);

  return (
    <>
      <SEOHead 
        title="Faculty Members" 
        description="Meet the highly qualified and experienced faculty members at Sanskriti College of Higher Studies. Led by Dr. Anjali Srivastava."
      />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-90" />
        <div className="container-custom relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex justify-center items-center space-x-2 text-white/60 text-sm mb-6 font-bold uppercase tracking-widest">
              <a href="/" className="hover:text-secondary transition-colors">Home</a>
              <span>/</span>
              <span className="text-secondary">Faculty</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Faculty Experts</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Highly committed educators and researchers bringing industry-leading expertise to the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-white sticky top-[64px] z-30 shadow-sm border-b border-gray-100">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
             <div className="w-full lg:max-w-md relative group">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                <input 
                  type="text"
                  placeholder="Search by name or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-pill border-2 border-gray-100 focus:border-secondary transition-all outline-none font-bold text-sm text-primary"
                />
             </div>

             <div className="w-full overflow-x-auto pb-2 -mb-2 no-scrollbar">
                <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
                   {departments.map((dept) => (
                     <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={`px-6 py-2.5 rounded-pill text-[10px] font-black uppercase tracking-widest transition-all ${activeDept === dept ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-accent/30 text-primary/60 hover:bg-accent'}`}
                     >
                        {dept === 'All' ? 'Showing All' : dept}
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="container-custom px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredFaculty.map((member, idx) => (
                   <motion.div
                     key={member.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: idx * 0.05 }}
                     viewport={{ once: true }}
                     className="bg-white rounded-card overflow-hidden shadow-card border border-gray-100 transition-all flex flex-col h-full group"
                   >
                     <div className="p-8 pt-10 flex flex-col items-center">
                        <div className={`w-28 h-28 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-primary/10 border-4 border-white mb-6 bg-gradient-to-br ${getDeptColor(member.department)}`}>
                           {member.name ? member.name.split(' ').slice(-2).map(n => n?.[0]).join('') : 'FD'}
                        </div>
                        <div className="text-center">
                           <h3 className="text-lg font-black text-primary uppercase tracking-tighter mb-1 select-none">{member.name}</h3>
                           <p className="text-[10px] font-black text-secondary-dark uppercase tracking-widest">{member.designation}</p>
                           <span className="inline-block mt-3 px-3 py-1 bg-accent/30 rounded text-[9px] font-black text-primary uppercase tracking-widest">Dept. {member.department}</span>
                        </div>
                     </div>

                     <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50 flex-grow">
                        <div className="space-y-3 mt-6">
                           <div className="flex items-center gap-3">
                              <GraduationCap size={16} className="text-primary/40 flex-shrink-0" />
                              <span className="text-[10px] font-black text-primary/80 uppercase tracking-tight">{member.qualification}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <Clock size={16} className="text-primary/40 flex-shrink-0" />
                              <span className="text-[10px] font-black text-primary/80 uppercase tracking-tight">{member.experience} Experience</span>
                           </div>
                           <div className="flex items-start gap-3 mt-4 pt-4 border-t border-gray-200/50">
                              <BookOpen size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                              <p className="text-[9px] font-black text-gray-400 uppercase leading-relaxed tracking-tight">{member.specialization}</p>
                           </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-8 pt-4">
                           <div className="flex gap-2">
                             <a href={`mailto:${member.email}`} className="p-2 rounded bg-white text-primary border border-gray-100 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Mail size={14} strokeWidth={3} />
                             </a>
                             <a href="#" className="p-2 rounded bg-white text-[#0077b5] border border-gray-100 hover:bg-[#0077b5] hover:text-white transition-all shadow-sm">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                  <circle cx="4" cy="4" r="2" />
                                </svg>
                             </a>
                           </div>
                           <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-2">
                              View Profile <ChevronRight size={12} className="text-secondary" strokeWidth={4} />
                           </button>
                        </div>
                     </div>
                   </motion.div>
                ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-card shadow-card">
               <Users size={64} className="mx-auto text-gray-100 mb-6" />
               <p className="text-xl font-black text-primary uppercase tracking-widest">No faculty found</p>
               <button 
                 onClick={() => { setSearchTerm(''); setActiveDept('All'); }}
                 className="mt-8 px-10 py-4 bg-primary text-white rounded-pill font-black text-xs uppercase"
               >
                 Clear Filters
               </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-accent overflow-hidden">
        <div className="container-custom px-4 text-center">
           <h2 className="text-3xl font-black text-primary mb-6 leading-tight uppercase tracking-tight">Interested in joining our team?</h2>
           <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
             We are always looking for exceptional educators and researchers. If you share our passion for pharmaceutical excellence, send your CV to our career cell.
           </p>
           <a href="mailto:careers@sches.ac.in" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-black text-lg rounded-pill shadow-xl shadow-primary/20 hover:scale-105 transition-all">
             Send Your CV
           </a>
        </div>
      </section>
    </>
  );
}

function getDeptColor(dept) {
  switch (dept) {
    case 'Pharmaceutics': return 'from-blue-500 to-blue-700';
    case 'Pharmaceutical Chemistry': return 'from-purple-500 to-purple-700';
    case 'Pharmacognosy': return 'from-green-500 to-green-700';
    case 'Pharmacology': return 'from-red-500 to-red-700';
    case 'Pharmacy Practice': return 'from-teal-500 to-teal-700';
    case 'Central Research Center': return 'from-yellow-500 to-orange-500';
    default: return 'from-primary to-primary-dark';
  }
}
