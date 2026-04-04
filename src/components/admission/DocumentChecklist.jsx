import { motion } from 'framer-motion';
import { FileText, UserCheck, ShieldCheck, MailCheck, CheckCircle2 } from 'lucide-react';

const docs = {
  academic: [
    { label: '10th Marksheet (Official)', desc: 'High school passing certificate' },
    { label: '12th Marksheet (Official)', desc: 'Senior secondary passing certificate' },
    { label: 'Transfer Certificate (TC)', desc: 'From last attended school/college' },
    { label: 'Character Certificate', desc: 'Issued by Principal/Gazetted Officer' },
    { label: 'Migration Certificate', desc: 'Required for non-UP Board candidates' },
  ],
  personal: [
    { label: 'Aadhar Card Scan', desc: 'Valid identity and residence proof' },
    { label: 'Passport Size Photos', desc: 'Min 6 color photographs requested' },
    { label: 'Income Certificate', desc: 'Necessary for scholarship applications' },
    { label: 'Caste Certificate', desc: 'Required for OBC/SC/ST reservations' },
    { label: 'Domicile Certificate', desc: 'Proof of residence in Uttar Pradesh' },
  ],
};

const iconMap = {
  academic: <FileText size={20} className="text-secondary" />,
  personal: <UserCheck size={20} className="text-primary" />,
};

export default function DocumentChecklist() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fc]">
       <div className="container-custom max-w-5xl px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">Required Document Checklist</h2>
             <p className="text-gray-500 font-medium tracking-wide">Please keep original and 3 photocopies of the following documents ready for physical verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {Object.entries(docs).map(([key, list]) => (
               <motion.div
                 key={key}
                 initial={{ opacity: 0, x: key === 'academic' ? -30 : 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-card shadow-card p-8 border border-gray-100 flex flex-col h-full overflow-hidden relative"
               >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-accent/20 rounded-xl">
                        {iconMap[key]}
                     </div>
                     <h3 className="text-xl font-black text-primary uppercase tracking-widest">{key === 'academic' ? 'Educational Records' : 'Identity & Residence'}</h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                     {list.map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                           <div className="mt-1 w-5 h-5 rounded-md border-2 border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-green-500 transition-all">
                              <CheckCircle2 size={12} className="text-green-500 opacity-20 group-hover:opacity-100 transition-all" />
                           </div>
                           <div>
                              <p className="text-sm font-black text-primary uppercase tracking-tighter mb-0.5">{doc.label}</p>
                              <p className="text-xs text-gray-400 font-medium">{doc.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-10 p-4 bg-accent/20 rounded-xl flex items-center gap-3">
                     <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                     <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest leading-relaxed">Verified by the Admission Committee as per PCI/AKTU guidelines.</p>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
