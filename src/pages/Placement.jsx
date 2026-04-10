import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import PlacementStats from '../components/placement/PlacementStats';
import PlacedStudents from '../components/placement/PlacedStudents';
import CompanyLogos from '../components/placement/CompanyLogos';
import PlacementTimeline from '../components/placement/PlacementTimeline';

export default function Placement() {
  return (
    <>
      <SEOHead title="Placements" description="SCHS achieves 95% placement rate. Our graduates work at Sun Pharma, Cipla, Lupin, Dr. Reddy's, Mankind & 60+ top pharma companies." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Career Outcomes</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Placement Record</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">95% placement rate, 60+ recruiting companies, and growing year after year.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Our Numbers" title="Placement Statistics" />
          <PlacementStats />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading badge="Our Recruiters" title="Companies That Hire from SCHS" subtitle="60+ pharma companies have visited our campus for recruitment." />
          <CompanyLogos />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Success Stories" title="Recently Placed Students" subtitle="A glimpse into the career journeys of our recent graduates." />
          <PlacedStudents />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              badge="Placement Process"
              title="Placement Timeline"
              centered={false}
              subtitle="Our structured placement process runs from August to March every academic year."
            />
            <PlacementTimeline />
          </div>
          <div>
            <SectionHeading badge="Placement Support" title="What We Provide" centered={false} />
            <div className="space-y-4">
              {[
                { icon: '📝', title: 'Resume Building', desc: 'Expert sessions on crafting pharma-specific CVs that catch recruiter attention.' },
                { icon: '🎤', title: 'Interview Training', desc: 'Mock interviews with industry professionals and HR experts to build confidence.' },
                { icon: '🧪', title: 'Aptitude & Technical Tests', desc: 'Rigorous preparation for written tests conducted by top pharma companies.' },
                { icon: '🤝', title: 'Industry Connect', desc: 'Strong alumni network and industry partnerships ensuring regular campus drives.' },
              ].map((item) => (
                <div key={item.title} className="card p-5 flex gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
