import { motion } from 'framer-motion';

const timelineSteps = [
  { id: 1, label: 'Online Application', desc: 'Fill the registration form on this portal.' },
  { id: 2, label: 'Document Verification', desc: 'Bring originals for physical verification.' },
  { id: 3, label: 'Shortlisting & Merit List', desc: 'Based on 12th marks or entrance rank.' },
  { id: 4, label: 'Personal Counseling', desc: 'Meet the department heads & faculty.' },
  { id: 5, label: 'Fee Payment & Admission', desc: 'Secure your seat by paying the first installment.' },
];

export default function AdmissionTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
       <div className="container-custom max-w-5xl px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">Admission Process Timeline</h2>
             <p className="text-gray-500 font-medium tracking-wide">Step-by-step procedure to secure your admission for 2026-27.</p>
          </div>

          <div className="relative pt-10">
             {/* Desktop Timeline Line */}
             <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-1 bg-accent/30 -z-10" />

             <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 lg:gap-8">
                {timelineSteps.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                     {/* Number Circle */}
                     <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center font-black text-2xl text-primary shadow-xl mb-6 group-hover:border-secondary transition-all">
                        {step.id}
                     </div>

                     <div className="space-y-2">
                        <h3 className="text-sm font-black text-primary uppercase tracking-widest">{step.label}</h3>
                        <p className="text-xs text-gray-400 font-medium leading-relaxed font-sans max-w-[160px] mx-auto md:max-w-none">{step.desc}</p>
                     </div>

                     {/* Mobile connector line */}
                     <div className="md:hidden w-1 h-10 bg-accent/30 mt-10 -mb-6" />
                  </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
