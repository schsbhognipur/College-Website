import { motion } from 'framer-motion';
import {
  Award, Building2, Users, FlaskConical, IndianRupee, Briefcase,
} from 'lucide-react';

const cards = [
  {
    icon: Award,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'PCI Approved',
    desc: 'Pharmacy Council of India approved programs — ensuring your degree meets the highest national standards.',
  },
  {
    icon: Building2,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'AKTU Affiliated',
    desc: 'Affiliated to prestigious Dr APJ Abdul Kalam Technical University, Lucknow — nationally recognized degree.',
  },
  {
    icon: Users,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Expert Faculty',
    desc: 'Highly qualified faculty with Ph.D. qualifications and pharmaceutical industry experience.',
  },
  {
    icon: FlaskConical,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Modern Labs',
    desc: 'State-of-the-art pharmaceutical laboratories with HPLC, spectroscopy and advanced instruments.',
  },
  {
    icon: IndianRupee,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Affordable Fees',
    desc: 'Quality pharmaceutical education with UP Government scholarship and education loan assistance options.',
  },
  {
    icon: Briefcase,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: '95% Placement',
    desc: 'Dedicated placement cell with strong connections to 60+ top pharma companies across India.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#e8f0fe] text-primary font-bold text-sm px-5 py-1.5 rounded-pill mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#102847] mb-3">
            Why Choose Sanskriti College
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            The preferred pharmacy college in Kanpur Dehat
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="group bg-white rounded-card border border-gray-100 p-7 flex flex-col gap-4 cursor-default"
                style={{
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 32px rgba(26,60,110,0.12)',
                }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.iconBg} flex-shrink-0`}>
                  <Icon size={26} className={card.iconColor} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a3c6e] mb-1.5">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
