import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import { feeStructure, paymentModes, importantNotes } from '../data/fees';
import { motion } from 'framer-motion';

function FeeTable({ data }) {
  const cols = ['Year', 'Tuition', 'Exam', 'Development', 'Library', 'Lab', 'Misc', 'Total'];
  return (
    <div className="overflow-x-auto rounded-card shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="gradient-primary text-white">
            {cols.map((c) => (
              <th key={c} className="px-4 py-3 text-left font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.years.map((row, i) => (
            <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium text-primary">{row.year}</td>
              <td className="px-4 py-3">₹{row.tuition.toLocaleString()}</td>
              <td className="px-4 py-3">₹{row.examination.toLocaleString()}</td>
              <td className="px-4 py-3">₹{row.development.toLocaleString()}</td>
              <td className="px-4 py-3">₹{row.library.toLocaleString()}</td>
              <td className="px-4 py-3">₹{row.lab.toLocaleString()}</td>
              <td className="px-4 py-3">₹{row.misc.toLocaleString()}</td>
              <td className="px-4 py-3 font-bold text-secondary">₹{row.total.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="bg-primary/5 font-bold">
            <td className="px-4 py-3 text-primary">Total ({data.duration})</td>
            <td colSpan={6} />
            <td className="px-4 py-3 text-secondary text-base">₹{data.totalProgram.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function FeeStructure() {
  return (
    <>
      <SEOHead title="Fee Structure" description="View detailed fee structure for B.Pharma and D.Pharma at SCHES. UP Scholarship and education loans available." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Transparency in Fees</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Fee Structure 2025–26</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Affordable, transparent fee structure for B.Pharma and D.Pharma programs. UP Scholarship available.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          {[feeStructure.bpharma, feeStructure.dpharma].map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-2">{course.name} Fee Structure</h2>
              <p className="text-gray-500 text-sm mb-4">Duration: {course.duration} · Hostel (optional): ₹{course.hostel.toLocaleString()} per year</p>
              <FeeTable data={course} />
              {course.scholarshipAvailable && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-card p-4 text-sm text-green-800">
                  🎓 <strong>Scholarship Note:</strong> {course.scholarshipNote}
                </div>
              )}
            </motion.div>
          ))}

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-primary text-lg mb-4">💳 Payment Modes</h3>
              <ul className="space-y-2">
                {paymentModes.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-secondary mt-0.5">•</span> {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-primary text-lg mb-4">⚠️ Important Notes</h3>
              <ul className="space-y-2">
                {importantNotes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-secondary mt-0.5">•</span> {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
