import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { departments } from '../data/departments';
import { User, Users, FlaskConical, Beaker, ChevronRight } from 'lucide-react';

export default function Departments() {
  return (
    <>
      <SEOHead 
        title="Departments" 
        description="Explore the specialized pharmaceutical departments at Sanskriti College, from Pharmaceutics to Pharmacology and our Central Research Center."
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
              <span className="text-secondary">Departments</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Academic Departments</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium">
              Interdisciplinary specialized units dedicated to pharmaceutical excellence and breakthrough research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-card overflow-hidden shadow-card border border-gray-100 flex flex-col h-full group"
              >
                {/* Colored Gradient Top */}
                <div className={`h-2.5 bg-gradient-to-r ${dept.color}`} />
                
                <div className="p-8 flex flex-col h-full flex-grow">
                   <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${dept.bgColor} flex items-center justify-center text-3xl shadow-sm border border-gray-100 transition-transform group-hover:scale-110`}>
                        {dept.icon}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <Users size={12} />
                        <span>{dept.faculty} Faculty</span>
                      </div>
                   </div>

                   <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-3 leading-tight min-h-[50px]">
                     {dept.name}
                   </h3>

                   <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
                         <User size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Head of Dept</p>
                        <p className="text-xs font-black text-primary truncate">{dept.head}</p>
                      </div>
                   </div>

                   <div className="space-y-4 mb-8 flex-grow">
                      <div>
                         <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                           <FlaskConical size={12} className="text-secondary" /> Research Focus
                         </p>
                         <p className="text-xs text-gray-500 font-medium leading-relaxed italic truncate">"{dept.research}"</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                           <FlaskConical size={12} className="text-secondary" /> Lab Facilities
                         </p>
                         <div className="flex flex-wrap gap-1.5">
                            {dept.labs.slice(0, 3).map(lab => (
                              <span key={lab} className="px-2 py-0.5 rounded bg-accent/30 text-[9px] font-black text-primary uppercase">{lab}</span>
                            ))}
                         </div>
                      </div>
                   </div>

                   <a 
                     href={`/departments/${dept.slug}`}
                     className="mt-auto py-3.5 rounded-pill bg-primary/5 text-primary font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group/btn"
                   >
                     Explore Department <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Research Facility Notice */}
      <section className="py-20 bg-primary overflow-hidden relative">
         <div className="container-custom px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="max-w-xl">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-tight">Interdisciplinary Excellence</h3>
                  <p className="text-white/70 font-medium leading-relaxed">
                    Our departments work in synergistic collaboration supported by the Central Research Center, ensuring students get exposure to cross-functional pharmaceutical sciences.
                  </p>
               </div>
               <div className="flex flex-wrap items-center gap-4">
                  <a href="/admission" className="px-8 py-4 bg-secondary text-primary font-black rounded-pill shadow-xl">Apply for Admission</a>
                  <a href="/contact" className="px-8 py-4 bg-white/10 text-white font-black border border-white/20 rounded-pill hover:bg-white/20 transition-all">Connect with Faculty</a>
               </div>
            </div>
         </div>
         {/* Decorative SVG/Background */}
         <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-[-20deg] flex-shrink-0" />
      </section>
    </>
  );
}
