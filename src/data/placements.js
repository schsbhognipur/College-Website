export const placementCompanies = [
  { name: "Sun Pharmaceutical Industries Ltd.", sector: "Pharmaceutical Manufacturing" },
  { name: "Cipla Ltd.", sector: "Generic Drugs & Formulations" },
  { name: "Lupin Limited", sector: "Biotech & Pharma" },
  { name: "Apollo Pharmacy", sector: "Pharmacy Retail" },
  { name: "Dr. Reddy's Laboratories", sector: "R&D and API" },
  { name: "Abbott India Limited", sector: "Global Healthcare" },
  { name: "Glenmark Pharmaceuticals", sector: "Generic & Branded Drugs" },
  { name: "Zydus Lifesciences", sector: "Biomedical & Biosimilars" },
  { name: "Aurobindo Pharma", sector: "Generic Drug Manufacturing" },
  { name: "MedPlus Health Services", sector: "Retail Healthcare Chain" }
];

export const placements = { companies: placementCompanies };

export const placedStudents = [
  { id: 1, name: "Sunil Kumar Gupta", course: "B.Pharma", batch: "2018-22", company: "Sun Pharma", role: "QA Associate", package: "4.2 LPA" },
  { id: 2, name: "Pooja Verma", course: "D.Pharma", batch: "2019-21", company: "Apollo Pharmacy", role: "Senior Pharmacist", package: "2.8 LPA" },
  { id: 3, name: "Mohammad Arif", course: "B.Pharma", batch: "2020-24", company: "Cipla Ltd.", role: "Production Officer", package: "3.8 LPA" },
  { id: 4, name: "Deepanshi Srivastava", course: "B.Pharma", batch: "2017-21", company: "Lupin Pharma", role: "Research Scientist", package: "4.5 LPA" },
  { id: 5, name: "Rajesh Chandra Yadav", course: "B.Pharm Lateral Entry", batch: "2021-24", company: "Abbott Healthcare", role: "Territory Manager", package: "5.1 LPA" },
  { id: 6, name: "Anchal Mishra", course: "D.Pharma", batch: "2022-24", company: "MedPlus", role: "Pharmacy Manager", package: "3.2 LPA" },
  { id: 7, name: "Vikas Trivedi", course: "B.Pharma", batch: "2016-20", company: "Dr. Reddy's Lab", role: "QC Analyst", package: "4.0 LPA" },
  { id: 8, name: "Shweta Pandey", course: "B.Pharma", batch: "2018-22", company: "Glenmark Pharmaceuticals", role: "Drug Safety Associate", package: "3.6 LPA" },
  { id: 9, name: "Anil Baranwal", course: "B.Pharma", batch: "2019-23", company: "Zydus Lifesciences", role: "Medical Representative", package: "4.8 LPA" },
  { id: 10, name: "Kirti Rawal", course: "B.Pharma", batch: "2020-24", company: "Aurobindo Pharma", role: "Analytical Chemist", package: "3.9 LPA" }
];

export const placementStats = {
  placementRate: 95,
  avgPackage: 0.35, // 0.35 * 10 = 3.5 L
  highestPackage: 1.2, // 1.2 * 10 = 12 L
  companiesVisited: 80,
  studentsPlaced2023: 145,
  studentsPlaced2022: 130
};

export const placementTimeline = [
  { month: "September-October", event: "Pre-Placement Talks", description: "Companies visit campus to interact with students and explain their roles and expectations." },
  { month: "November-December", event: "Resume Building & Mock Interviews", description: "Dedicated workshops to refine resumes and conduct professional mock interview sessions." },
  { month: "January-February", event: "Campus Recruitment Drives", description: "Core recruitment phase including written aptitude tests, group discussions, and HR interviews." },
  { month: "March-April", event: "Offer Letters & Final Onboarding", description: "Selected candidates receive formal offer letters and complete their onboarding requirements." }
];
