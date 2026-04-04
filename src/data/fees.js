export const feeStructure = {
  bpharma: {
    name: "Bachelor of Pharmacy (B.Pharma)",
    duration: "4 Years",
    hostel: 45000,
    scholarshipAvailable: true,
    scholarshipNote: "UP State Government Scholarship available for Gen/OBC (45%+) and SC/ST (40%+) candidates.",
    years: [
      { year: "1st Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 },
      { year: "2nd Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 },
      { year: "3rd Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 },
      { year: "4th Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 }
    ],
    totalProgram: 280000
  },
  dpharma: {
    name: "Diploma in Pharmacy (D.Pharma)",
    duration: "2 Years",
    hostel: 45000,
    scholarshipAvailable: true,
    scholarshipNote: "UP Government scholarship for diploma holders under the technical education scheme.",
    years: [
      { year: "1st Year", tuition: 35000, examination: 2500, development: 3000, library: 1000, lab: 2500, misc: 1000, total: 45000 },
      { year: "2nd Year", tuition: 35000, examination: 2500, development: 3000, library: 1000, lab: 2500, misc: 1000, total: 45000 }
    ],
    totalProgram: 90000
  },
  ble: {
    name: "B.Pharm Lateral Entry",
    duration: "3 Years",
    hostel: 45000,
    scholarshipAvailable: true,
    scholarshipNote: "Scholarship applicable for students transitioning from D.Pharma to B.Pharma.",
    eligibility: "D.Pharm from PCI-recognized institution (Min 50%) or CUET-UP qualified.",
    years: [
      { year: "2nd Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 },
      { year: "3rd Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 },
      { year: "4th Year", tuition: 50000, examination: 8000, development: 5000, library: 2000, lab: 3000, misc: 2000, total: 70000 }
    ],
    totalProgram: 210000
  }
};

export const paymentModes = [
  "Online Transfer (NEFT/IMPS) via College ERP Portal",
  "Demand Draft in favor of 'Sanskriti College of Higher Education and Studies' payable at Kanpur Dehat",
  "UPI (GPay, PhonePe, Paytm) at the College Account Office",
  "Fee collection counter at the main campus (10:00 AM - 4:00 PM)"
];

export const importantNotes = [
  "University and Board Examination fees are subject to change as per AKTU/BTE-UP guidelines.",
  "Hostel and Transportation fees are optional and charged annually.",
  "Caution Money (₹5,000) is one-time, refundable after successful completion of the course.",
  "Uniform and Book-Bank charges are payable at the time of admission only.",
  "Penalties apply for late fee submission after the published due dates."
];
