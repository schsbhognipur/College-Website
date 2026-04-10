import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';

const committees = [
  { name: 'Anti-Ragging Committee', chair: 'Dr. Anjali Srivastava (Principal)', members: 8, mandate: 'Prevention of ragging and maintaining a safe, respectful campus environment as per UGC regulations.' },
  { name: 'Internal Complaints Committee (ICC)', chair: 'Dr. Meena Gupta', members: 6, mandate: 'Redressal of complaints related to sexual harassment in the workplace as per POSH Act 2013.' },
  { name: 'Students Welfare Committee', chair: 'Dr. Alok Yadav', members: 7, mandate: 'Overall welfare of students including scholarships, counselling, peer support, and grievance redressal.' },
  { name: 'Examination Committee', chair: 'Mr. Rajiv Mishra', members: 5, mandate: 'Coordination of university examinations, internal assessments, and academic schedule management.' },
  { name: 'Library Advisory Committee', chair: 'Ms. Kavita Tiwari', members: 4, mandate: 'Development and management of library resources, including book procurement, e-resource subscriptions, and library rules.' },
  { name: 'NSS & Sports Committee', chair: 'Mr. Sanjay Rawat', members: 6, mandate: 'Organization of NSS activities, blood donation camps, sports events, and annual pharmafest.' },
  { name: 'Research & Innovation Committee', chair: 'Dr. Vikram Singh', members: 8, mandate: 'Promoting research culture, guiding faculty and student projects, patent filing, and industry collaboration.' },
  { name: 'Placement & Training Committee', chair: 'Ms. Pooja Agarwal', members: 5, mandate: 'Organizing campus recruitments, pre-placement training, industry visits, and alumni networking.' },
  { name: 'IQAC (Internal Quality Assurance Cell)', chair: 'Dr. Anjali Srivastava', members: 10, mandate: 'Ensuring continuous quality improvement in teaching, learning, research, and administration.' },
];

export default function Committees() {
  return (
    <>
      <SEOHead title="Committees" description="View all statutory and academic committees at SCHS — anti-ragging, ICC, IQAC, placement, and more." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Governance</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Committees & Cells</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Statutory and advisory committees ensuring transparent governance, student welfare, and quality education.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Our Governance" title="Committees at SCHS" subtitle="All committees operate as per UGC, PCI, and AKTU regulations." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card p-6"
              >
                <h3 className="font-bold text-primary text-base mb-2">{c.name}</h3>
                <p className="text-xs text-secondary font-semibold mb-1">Chairperson: {c.chair}</p>
                <p className="text-xs text-gray-400 mb-3">{c.members} Members</p>
                <p className="text-gray-600 text-sm leading-relaxed">{c.mandate}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
