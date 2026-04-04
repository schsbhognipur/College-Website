import HeroCarousel from '../components/home/HeroCarousel';
import HomeNoticeTicker from '../components/home/HomeNoticeTicker';
import StatsCounter from '../components/home/StatsCounter';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DepartmentsPreview from '../components/home/DepartmentsPreview';
import Programs from '../components/home/Programs';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import PlacementStrip from '../components/home/PlacementStrip';
import HomeCTA from '../components/home/HomeCTA';
import SEOHead from '../components/common/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Home" 
        description="Welcome to Sanskriti College of Higher Education and Studies, Bhognipur. PCI approved and AKTU affiliated premier pharmacy college in Kanpur Dehat."
      />
      
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Dynamic Ticker below Hero */}
      <HomeNoticeTicker />
      
      {/* Key Stats */}
      <StatsCounter />
      
      {/* Core Value Proposition */}
      <WhyChooseUs />
      
      {/* Academic Highlights */}
      <DepartmentsPreview />
      
      {/* Detailed Course Cards */}
      <Programs />
      
      {/* Student Success Stories */}
      <TestimonialsCarousel />
      
      {/* Recruiter Logos / Names */}
      <PlacementStrip />
      
      {/* Final Call to Action */}
      <HomeCTA />
    </>
  );
}
