import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <>
      <SEOHead title="Gallery" description="Explore photos from SCHES campus, labs, events, placement drives, and student life." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Campus Life</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Photo Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Snapshots from our campus, labs, events, placement drives, sports meets, and cultural celebrations.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Our Moments" title="Life at SCHES" subtitle="Filter by category to explore different aspects of campus life." />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
