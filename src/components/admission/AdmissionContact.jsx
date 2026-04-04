import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contacts = [
  { icon: <Phone size={20} />, label: 'Admission Inquiry', value: '+91 8604502237', href: 'tel:+918604502237' },
  { icon: <Mail size={20} />, label: 'Email Address', value: 'admissions@sches.ac.in', href: 'mailto:admissions@sches.ac.in' },
  { icon: <Clock size={20} />, label: 'Office Hours', value: '10:00 AM - 05:00 PM', href: '#' },
];

export default function AdmissionContact() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fc] overflow-hidden">
       <div className="container-custom max-w-5xl px-4 text-center">
          <div className="mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">Need Help with Admission?</h2>
             <p className="text-gray-500 font-medium tracking-wide">Connect with our dedicated admission counselors for personalized guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {contacts.map((contact, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white p-8 rounded-card border border-gray-100 shadow-card flex flex-col items-center group transition-all hover:border-secondary"
               >
                  <div className="w-14 h-14 rounded-full bg-accent/20 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-all">
                     {contact.icon}
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{contact.label}</p>
                  <a 
                    href={contact.href} 
                    className="text-lg font-black text-primary hover:text-secondary-dark transition-all"
                  >
                    {contact.value}
                  </a>
               </motion.div>
             ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
             <a 
               href="https://wa.me/918604502237?text=Hello, I have an inquiry about admission for 2026." 
               target="_blank"
               className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black text-lg rounded-pill shadow-xl shadow-green-200 hover:brightness-110 active:scale-95 transition-all"
             >
                <MessageCircle size={24} /> WhatsApp Inquiry
             </a>
             <div className="p-4 rounded-xl border-2 border-dashed border-gray-200 text-xs font-black text-gray-400 uppercase tracking-widest">
                Walk-ins welcome (10 AM - 4 PM)
             </div>
          </motion.div>
       </div>
    </section>
  );
}
