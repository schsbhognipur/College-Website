import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { departments } from '../data/departments';
import { faculty as allFaculty } from '../data/faculty';
import { 
  User, Users, FlaskConical, Beaker, 
  BookOpen, Award, CheckCircle2, ChevronRight, MessageSquare 
} from 'lucide-react';

export default function DepartmentDetail() {
  const { slug } = useParams();
  const dept = departments.find(d => d.slug === slug);

  if (!dept) {
    return <Navigate to="/departments" replace />;
  }

  // Filter faculty for this department
  const deptFaculty = allFaculty.filter(f => f.department === dept.name || f.department === dept.shortName);
  const hod = deptFaculty.find(f => f.name === dept.head) || deptFaculty[0];

  return (
    <>
      <SEOHead 
        title={dept.name} 
        description={`Explore the ${dept.name} at Sanskriti College. Learn about our research in ${dept.research}, faculty, and state-of-the-art laboratory facilities.`}
      />

      {/* Hero Banner */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${dept.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-primary opacity-20 -z-0" />
        <div className="container-custom relative z-10 px-4 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex justify-center lg:justify-start items-center space-x-2 text-white/70 text-[10px] mb-8 font-black uppercase tracking-[0.2em]">
              <a href="/" className="hover:text-secondary-dark transition-colors">Home</a>
              <span>/</span>
              <a href="/departments" className="hover:text-secondary-dark transition-colors">Departments</a>
              <span>/</span>
              <span className="text-secondary-dark">{dept.shortName}</span>
            </nav>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
               <div className="flex-1 space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-pill bg-white/20 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md">
                     {dept.icon} Academic Unit
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    {dept.name}
                  </h1>
                  <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed italic">
                    {dept.research}
                  </p>
               </div>
               {/* HOD Quick Card */}
               <div className="flex-shrink-0 bg-white/10 backdrop-blur-xl p-8 rounded-card border border-white/20 shadow-2xl max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-inner">
                        <User size={32} />
                     </div>
                     <div className="text-left">
                        <p className="text-[10px] font-black text-secondary-dark uppercase tracking-widest mb-1">Head of Department</p>
                        <h4 className="text-lg font-black text-white truncate">{dept.head}</h4>
                     </div>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                     <div className="flex items-center gap-2">
                        <Users size={16} className="text-white/60" />
                        <span className="text-xs font-black text-white/80 uppercase">{dept.faculty} Faculty</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <FlaskConical size={16} className="text-white/60" />
                        <span className="text-xs font-black text-white/80 uppercase">{dept.labs.length} Labs</span>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             {/* Left Column: Details */}
             <div className="space-y-16">
                {/* Description */}
                <div>
                   <h2 className="text-3xl font-black text-primary mb-6 flex items-center gap-4">
                      Academic Overview <div className="h-1 flex-grow bg-accent rounded-full" />
                   </h2>
                   <p className="text-lg text-gray-500 font-medium leading-loose text-justify">
                      {dept.description} Our department aims to provide the best practical knowledge in pharmaceutical sciences so that students can understand the complexity of the drug manufacturing and action processes.
                   </p>
                </div>

                {/* Research Focus */}
                <div>
                   <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-3">
                      <FlaskConical className="text-secondary" /> Areas of Focus & Research
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dept.areasOfFocus.map(area => (
                        <div key={area} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary transition-all group">
                           <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                           <span className="text-xs font-black text-primary uppercase tracking-tight">{area}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Facilities */}
                <div>
                   <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-3">
                      <FlaskConical className="text-secondary" /> Laboratory Facilities
                   </h3>
                   <div className="space-y-4">
                      {dept.labs.map(lab => (
                        <div key={lab} className="flex items-start gap-4 p-5 bg-accent/20 rounded-xl border border-accent/60">
                           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                              <Beaker size={18} />
                           </div>
                           <div>
                              <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-1">{lab}</h4>
                              <p className="text-xs text-primary/60 font-medium">Equipped with specialized instruments for {dept.shortName} practicals.</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Right Column: Faculty & Achievements */}
             <div className="space-y-16">
                {/* Faculty List */}
                <div>
                   <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                      <h3 className="text-xl font-black text-primary flex items-center gap-3 uppercase tracking-tight">
                         Expert Faculty
                      </h3>
                      <a href="/faculty" className="text-[10px] font-black text-secondary-dark uppercase tracking-widest hover:underline">View All</a>
                   </div>
                   <div className="space-y-6">
                      {deptFaculty.slice(0, 4).map(member => (
                        <div key={member.id} className="flex items-center gap-4 group">
                           <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-black overflow-hidden shadow-lg border-2 border-accent">
                              {member.name.split(' ').slice(1,3).map(n => n[0]).join('')}
                           </div>
                           <div>
                              <h4 className="text-sm font-black text-primary uppercase tracking-tighter mb-0.5">{member.name}</h4>
                              <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">{member.designation}</p>
                              <div className="flex items-center gap-3 mt-1.5">
                                 <span className="text-[8px] font-black bg-accent px-2 py-0.5 rounded text-primary">{member.qualification}</span>
                                 <span className="text-[8px] font-black text-primary/40 uppercase">{member.experience} Exp</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Achievements Card */}
                <div className="bg-primary p-8 rounded-card shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0" />
                   <div className="relative z-10 text-white space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="p-3 bg-white/10 rounded-xl">
                            <Award className="text-secondary" size={24} />
                         </div>
                         <h3 className="text-lg font-black uppercase tracking-widest">Recent Achievements</h3>
                      </div>
                      <div className="space-y-4">
                         {[
                           `Highest Scorer in ${dept.shortName} (AKTU 2024)`,
                           'Departmental Scientific Seminar 2023',
                           'National Level Pharmacy Poster Winner',
                           'Innovation in Research Project Grant'
                         ].map(text => (
                           <div key={text} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                              <p className="text-xs font-bold text-white/80 leading-relaxed uppercase tracking-tight">{text}</p>
                           </div>
                         ))}
                      </div>
                      <div className="pt-6">
                         <a href="/admission" className="w-full py-4 bg-secondary text-primary font-black text-xs rounded-pill uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-secondary/10">
                            Admission Query <ChevronRight size={14} />
                         </a>
                      </div>
                   </div>
                </div>

                {/* Newsletter-ish Box */}
                <div className="p-10 bg-[#f8f9fc] rounded-card border-2 border-dashed border-gray-200 text-center">
                   <MessageSquare size={32} className="mx-auto text-secondary mb-6" />
                   <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-2">Want to know more?</h3>
                   <p className="text-xs text-gray-500 font-bold mb-6">Talk to our counselors about specific research opportunities in this department.</p>
                   <a href="https://wa.me/918604502237" target="_blank" className="text-sm font-black text-primary flex items-center justify-center gap-2 hover:translate-x-2 transition-all">
                      Connect on WhatsApp <ChevronRight size={16} className="text-secondary" />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
