import { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import { results, aktuExamInfo } from '../data/results';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

export default function Results() {
  const years = Object.keys(results).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);
  const data = results[activeYear];

  return (
    <>
      <SEOHead title="Results" description="AKTU exam results and academic toppers for SCHS B.Pharma and D.Pharma students." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Academic Performance</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Exam Results</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">AKTU examination results and college toppers for B.Pharma & D.Pharma programs.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* AKTU info */}
          <div className="card p-5 mb-8 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">University: <span className="font-medium text-gray-700">{aktuExamInfo.university}</span></p>
              <p className="text-sm text-gray-500 mt-1">Exam Schedule: <span className="font-medium text-gray-700">{aktuExamInfo.examSchedule}</span></p>
            </div>
            <a href={aktuExamInfo.resultLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <ExternalLink size={14} /> Check Results on AKTU
            </a>
          </div>

          {/* Year tabs */}
          <div className="flex gap-3 mb-8">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`px-5 py-2 rounded-pill text-sm font-semibold border transition-all ${
                  activeYear === y ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
                }`}
              >
                {results[y].session}
              </button>
            ))}
          </div>

          {/* Pass % */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'B.Pharma Pass %', value: `${data.passPercentage.bpharma}%` },
              { label: 'D.Pharma Pass %', value: `${data.passPercentage.dpharma}%` },
              { label: 'B.Pharma Distinctions', value: data.distinctionCount.bpharma },
              { label: 'D.Pharma Distinctions', value: data.distinctionCount.dpharma },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-3xl font-black text-secondary">{s.value}</div>
                <div className="text-gray-600 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <SectionHeading badge="🏆 Toppers" title={`Academic Toppers — ${data.session}`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.toppers.map((t, i) => (
              <motion.div
                key={`${t.rollNo}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-5 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 ${
                  t.rank === 1 ? 'bg-yellow-400' : t.rank === 2 ? 'bg-gray-300' : 'bg-orange-300'
                }`}>
                  <Trophy size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.course}</p>
                  <p className="text-xs text-secondary font-semibold">Rank {t.rank} · {t.percentage}%</p>
                  <p className="text-xs text-gray-400">Roll No: {t.rollNo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
