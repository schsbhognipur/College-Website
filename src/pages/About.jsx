import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import StatsCounter from '../components/home/StatsCounter';
import { Target, Lightbulb, Award, CheckCircle2, Quote } from 'lucide-react';
import { college } from '../data/college';

const visionMission = [
  {
    title: 'Our Vision',
    icon: <Target className="text-secondary" size={32} />,
    text: 'To be the leading pharmacy institution in Uttar Pradesh delivering quality education and producing skilled pharmaceutical professionals who contribute to global healthcare.',
    color: 'bg-primary'
  },
  {
    title: 'Our Mission',
    icon: <Lightbulb className="text-secondary" size={32} />,
    text: 'To provide affordable, PCI-approved pharmacy education with modern infrastructure, experienced faculty, and strong placement support while fostering ethical research and lifelong learning.',
    color: 'bg-primary-light'
  }
];

const accreditations = [
  { name: 'PCI', full: 'Pharmacy Council of India', desc: 'Apex body for pharmaceutical education in India ensuring standard guidelines.' },
  { name: 'AKTU', full: 'Dr. A.P.J. Abdul Kalam Technical University', desc: 'State-level affiliation for academic excellence and degree awarding.' },
  { name: 'BTE', full: 'Board of Technical Education, UP', desc: 'Recognition for diploma pharmacy courses and vocational training.' },
  { name: 'UPPC', full: 'Uttar Pradesh Pharmacy Council', desc: 'State registration body for qualified pharmaceutical practitioners.' }
];

const timeline = [
  { year: '2012', title: 'College Established', desc: 'Founded with a vision to provide quality education. First batch of B.Pharma students enrolled.' },
  { year: '2014', title: 'D.Pharma Launched', desc: 'Diploma program introduced with BTE affiliation to cater to diverse career needs.' },
  { year: '2016', title: 'Infrastructure Expansion', desc: 'Inauguration of the new laboratory block with state-of-the-art pharmaceutical equipment.' },
  { year: '2018', title: 'Placement Milestone', desc: 'Successfully placed 100+ students in top-tier pharma companies like Sun Pharma & Cipla.' },
  { year: '2021', title: 'Lateral Entry Program', desc: 'B.Pharm Lateral Entry program started for diploma holders to upgrade their qualifications.' },
  { year: '2024', title: 'Alumni Excellence', desc: 'Achieved the 2000+ alumni milestone with graduates working across the globe.' }
];

export default function About() {
  return (
    <>
      <SEOHead 
        title="About Us" 
        description="Learn more about Sanskriti College of Higher Education and Studies (SCHES). A premier PCI approved pharmacy college in Bhognipur, Kanpur Dehat."
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
              <span className="text-secondary">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">About Sanskriti College</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium">
              Developing the next generation of healthcare leaders in the heart of Kanpur Dehat since 2012.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-pill bg-accent text-primary font-black text-xs uppercase tracking-widest">Our Legacy</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                Excellence in Pharmaceutical <br className="hidden md:block"/> Education in Kanpur Dehat
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Founded in 2012 in Bhognipur, Kanpur Dehat, Sanskriti College of Higher Education and Studies (SCHES) has emerged as a center of academic excellence. We are fully approved by the <strong>Pharmacy Council of India (PCI)</strong> and affiliated with <strong>AKTU (Lucknow)</strong> and <strong>BTE (UP)</strong>.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Our institution is committed to helping students achieve their pharmaceutical dreams through a blend of rigorous academics, hands-on lab experience, and active industry participation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['PCI Approved Institution', 'AKTU Affiliated Degree', 'BTE Approved Diploma', 'UGC Recognized Campus'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-black text-primary uppercase tracking-tighter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              {/* Campus Image */}
              <div className="relative aspect-video lg:aspect-square w-full rounded-card overflow-hidden shadow-2xl group">
                 <img src="/images/about_campus.png" alt="Sanskriti College Campus aerial view" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-10" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-20 pointer-events-none" />
                 {/* Decorative elements */}
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full z-0 blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-accent/30">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {visionMission.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-card shadow-card flex flex-col items-center text-center group transition-all hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-loose text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Logos / Badges */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">Recognitions & Approvals</h2>
            <p className="text-gray-500 font-medium tracking-wide">Our institutional quality is backed by national and state regulatory bodies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditations.map((item) => (
              <div key={item.name} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-card border border-gray-100 hover:border-secondary transition-all">
                <div className="w-24 h-12 bg-primary text-white font-black text-xl flex items-center justify-center rounded-lg mb-6 shadow-md shadow-primary/20">
                  {item.name}
                </div>
                <h4 className="text-sm font-black text-primary uppercase tracking-tight mb-2">{item.full}</h4>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="container-custom px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">Our Journey</h2>
            <p className="text-gray-500 font-medium tracking-wide">A history of excellence and growth since our inception.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, idx) => (
                <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                     <motion.div
                       initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       className="bg-white p-8 rounded-card shadow-card border border-gray-100 inline-block w-full max-w-md relative"
                     >
                        <span className="text-secondary font-black text-2xl mb-2 block">{item.year}</span>
                        <h4 className="text-xl font-black text-primary uppercase tracking-tight mb-3">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                     </motion.div>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-secondary border-4 border-white shadow-xl flex-shrink-0 flex items-center justify-center">
                    <Award size={18} className="text-primary" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
             <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-8 border-accent shadow-2xl flex-shrink-0">
                 <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
                    <User size={64} className="opacity-50" />
                 </div>
             </div>
             <div className="flex-1 relative">
                <Quote size={80} className="absolute -top-12 -left-8 text-secondary/10 -z-10" />
                <div className="pl-6 border-l-8 border-secondary">
                  <h3 className="text-xs font-black text-secondary-dark uppercase tracking-widest mb-4">Message from Principal</h3>
                  <p className="text-lg md:text-2xl font-black text-primary leading-relaxed mb-8 font-serif italic text-justify">
                    "At Sanskriti College, we don't just teach pharmacy; we prepare professionals to safeguard society's health. Our focus is on providing a learning environment where curiosity meets practical wisdom, ensuring every student leaves with the competence and confidence to excel in the global healthcare market."
                  </p>
                  <div>
                    <h4 className="text-2xl font-black text-primary">{college.principalName}</h4>
                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest mt-1">Principal & Academic Director</p>
                    <p className="text-[10px] font-bold text-gray-400 mt-0.5">M.Pharma, Ph.D. (22+ Years Experience)</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />
      
      <div className="py-20 bg-[#f8f9fc] border-t border-gray-100">
        <div className="container-custom px-4 text-center">
           <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-6">Ready to join our community of excellence?</h3>
           <a href="/admission" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-black text-lg rounded-pill shadow-xl shadow-primary/20 hover:scale-105 transition-all">
             Apply for Session 2026-27
           </a>
        </div>
      </div>
    </>
  );
}

function User({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
