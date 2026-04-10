import { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import AdmissionHero from '../components/admission/AdmissionHero';
import CourseCards from '../components/admission/CourseCards';
import MultiStepForm from '../components/admission/MultiStepForm';
import EligibilityAccordion from '../components/admission/EligibilityAccordion';
import DocumentChecklist from '../components/admission/DocumentChecklist';
import AdmissionTimeline from '../components/admission/AdmissionTimeline';
import AdmissionContact from '../components/admission/AdmissionContact';

export default function Admission() {
  const [selectedCourse, setSelectedCourse] = useState('bpharma');

  const handleCourseSelection = (courseId) => {
    setSelectedCourse(courseId);
    console.log(`Course selected from card: ${courseId}`);
  };

  return (
    <>
      <SEOHead 
        title="Admission" 
        description="Apply for B.Pharma, D.Pharma and B.Pharm Lateral Entry at Sanskriti College for 2026-27. PCI approved and AKTU affiliated premier pharmacy education."
      />
      
      {/* 1. Hero with Countdown */}
      <AdmissionHero />
      
      {/* 2. Course Selection Cards */}
      <CourseCards onSelectCourse={handleCourseSelection} />

      {/* 3. The Main Multi-Step Form */}
      <MultiStepForm initialCourse={selectedCourse} />

      {/* 4. Detailed Eligibility */}
      <EligibilityAccordion />

      {/* 5. Document Checklist Section */}
      <DocumentChecklist />

      {/* 6. Process Timeline */}
      <AdmissionTimeline />

      {/* 7. Contact Admission Office */}
      <AdmissionContact />
    </>
  );
}
