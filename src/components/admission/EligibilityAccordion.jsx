import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

const eligibilityData = [
  {
    course: 'Bachelor of Pharmacy (B.Pharma)',
    years: '4 Years',
    criteria: [
      'Candidate must have passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics / Biology.',
      'Minimum 45% marks in the aggregate of P.C.M. / P.C.B. (40% for SC/ST/OBC candidates).',
      'Lateral Entry: Candidate must have passed D.Pharma from a PCI recognized institution.',
      'Age: Minimum 17 years as on 31st December 2026.',
    ],
    documents: ['10th Marksheet', '12th Marksheet', 'Transfer Certificate', 'Character Certificate'],
  },
  {
    course: 'Diploma in Pharmacy (D.Pharma)',
    years: '2 Years',
    criteria: [
      'Candidate must have passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics / Biology.',
      'Must have qualified JEECUP entrance exam or merit-based direct entry as per BTEUP guidelines.',
      'Minimum aggregate of 33% in 10+2.',
    ],
    documents: ['10th Marksheet', '12th Marksheet', 'JEECUP Scorecard', 'Aadhar Card'],
  },
  {
    course: 'B.Pharm Lateral Entry (Direct 2nd Year)',
    years: '3 Years',
    criteria: [
      'Candidate must have completed D.Pharma from a Pharmacy Council of India (PCI) recognized institute.',
      'Aggregate marks in D.Pharma should be 50% or above.',
      'Admission as per AKTU Lateral Entry counseling guidelines.',
    ],
    documents: ['D.Pharma Marksheets (All Years)', 'D.Pharma Diploma Certificate', 'Transfer Certificate', 'Aadhar Card'],
  },
];

export default function EligibilityAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-custom max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight">Eligibility Criteria</h2>
          <p className="text-gray-500 font-medium tracking-wide">Detailed requirements for each of our pharmaceutical programs.</p>
        </div>

        <div className="space-y-4">
          {eligibilityData.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-xl border-2 transition-all duration-300 ${openIndex === index ? 'border-primary shadow-lg' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div>
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-1">{item.course}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.years} Course Duration</p>
                </div>
                <div className={`p-2 rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-white text-primary border border-gray-200'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100 mt-2 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Criteria */}
                          <div className="space-y-4">
                             <div className="flex items-center gap-2 mb-2">
                                <AlertCircle size={16} className="text-primary" strokeWidth={2.5} />
                                <span className="text-[10px] font-black uppercase text-primary tracking-widest">Core Requirements</span>
                             </div>
                             <ul className="space-y-3">
                               {item.criteria.map((c, idx) => (
                                 <li key={idx} className="flex items-start gap-3">
                                   <div className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                   <p className="text-xs font-bold text-gray-600 leading-relaxed font-sans">{c}</p>
                                 </li>
                               ))}
                             </ul>
                          </div>

                          {/* Documents */}
                          <div className="space-y-4">
                             <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 size={16} className="text-green-500" strokeWidth={2.5} />
                                <span className="text-[10px] font-black uppercase text-primary tracking-widest">Required Proofs</span>
                             </div>
                             <div className="grid grid-cols-1 gap-2">
                               {item.documents.map((doc, idx) => (
                                 <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 text-xs font-black text-primary/70 uppercase tracking-tight flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-[8px]">✓</span>
                                    {doc}
                                 </div>
                               ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
