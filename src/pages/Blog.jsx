import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import BlogGrid from '../components/blog/BlogGrid';

export default function Blog() {
  return (
    <>
      <SEOHead title="Blog" description="Pharmacy career tips, AKTU exam guides, scholarship info, and pharmaceutical industry insights from SCHS experts." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Knowledge Center</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">SCHS Blog</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Career guidance, exam tips, scholarship updates, and pharmaceutical industry insights from our faculty experts.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Latest Articles" title="From Our Knowledge Center" subtitle="Expert content to guide your pharmacy education journey." />
          <BlogGrid />
        </div>
      </section>
    </>
  );
}
