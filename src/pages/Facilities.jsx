import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';

const facilities = [
  { icon: '🔬', title: 'Pharmaceutical Labs', desc: 'State-of-the-art labs for pharmaceutics, chemistry, pharmacognosy, and pharmacology with industry-standard equipment including HPLC, UV Spectrophotometer, and dissolution apparatus.' },
  { icon: '📚', title: 'Library & E-Resources', desc: 'A rich library with 15,000+ books, national/international pharmaceutical journals, PubMed, Springer Link, and access to AKTU digital content and video lectures.' },
  { icon: '💻', title: 'Computer Lab', desc: 'A 60-system computer lab with internet connectivity, pharmaceutical software (ChemDraw, MOE), and e-learning platforms for students and research scholars.' },
  { icon: '🌿', title: 'Medicinal Herb Garden', desc: 'A sprawling herbal garden with 200+ medicinal plants used for practical pharmacognosy training and phytochemical research — one of the finest in Kanpur Dehat region.' },
  { icon: '🏠', title: 'Hostels', desc: 'Separate hostels for male and female students with 24/7 security, Wi-Fi, mess facilities, and indoor recreation. Located within walking distance of the college.' },
  { icon: '🍽', title: 'Cafeteria', desc: 'A clean, hygienic cafeteria serving nutritious meals and snacks at subsidized rates for students and staff, with a separate seating area.' },
  { icon: '🏃', title: 'Sports & Recreation', desc: 'Cricket ground, badminton courts, table tennis, and indoor games. Annual sports day with inter-college competitions encourages physical development.' },
  { icon: '🏥', title: 'Medical Facility', desc: 'An on-campus dispensary with a part-time medical officer providing basic healthcare to students. Partnership with nearest government hospital for emergencies.' },
  { icon: '🔒', title: 'Safety & Security', desc: '24/7 CCTV surveillance across campus, security staff at all entry points, and anti-ragging committee as mandated by UGC. Safe and secure environment for all.' },
  { icon: '🌐', title: 'Wi-Fi Campus', desc: 'High-speed Wi-Fi connectivity across the campus — classrooms, library, hostels, and recreational areas — enabling seamless digital learning.' },
  { icon: '🚌', title: 'Transport Facility', desc: 'College buses connecting Bhognipur to major towns in Kanpur Dehat and Kanpur city, with affordable monthly passes for students.' },
  { icon: '🔭', title: 'Central Research Center', desc: 'A dedicated interdisciplinary research center with HPLC, Mass Spectrometry facility, NMR access, and computational chemistry lab for faculty and research students.' },
];

export default function Facilities() {
  return (
    <>
      <SEOHead title="Facilities" description="Explore the world-class facilities at SCHS: labs, library, hostel, sports, and more." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Campus Life</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Facilities</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A comprehensive campus ecosystem designed to support academic excellence, research, and holistic development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Infrastructure" title="World-Class Campus Facilities" subtitle="Everything a pharmacy student needs — under one roof." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="card p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-primary text-base mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading badge="Campus Gallery" title="A Glimpse of Our Campus" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-card overflow-hidden aspect-square"
              >
                <img
                  src={`https://picsum.photos/seed/facility${i + 10}/400/400`}
                  alt={`Facility ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
