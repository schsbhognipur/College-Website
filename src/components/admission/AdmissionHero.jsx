import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2026-07-31T23:59:59').getTime();

export default function AdmissionHero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('admission-form-section');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28" style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2354a0 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-white/5 rounded-bl-full -z-0 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-secondary/10 rounded-tr-full -z-0 blur-3xl" />
      
      <div className="container-custom relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-pill bg-secondary text-primary font-bold text-sm mb-6">
            Admissions Open 2026-27
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            Start Your Journey to <br className="hidden md:block"/> Excellence in Pharmacy
          </h1>
          <p className="text-white/85 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join Bhognipur's premier pharmacy college. Applications are open for B.Pharma, D.Pharma, and Lateral Entry programs.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-6 underline decoration-secondary decoration-2 underline-offset-8">
              Application Closes In
            </p>
            <div className="flex justify-center gap-3 sm:gap-6">
              {timerItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-16 h-18 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-md rounded-card border border-white/20 flex items-center justify-center mb-2 shadow-xl">
                    <span className="text-3xl sm:text-5xl font-black text-white min-w-[2ch]">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-tighter sm:tracking-widest capitalize">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-primary font-black text-lg rounded-pill shadow-2xl hover:shadow-secondary/20 transition-all"
          >
            Apply Online Now
          </motion.button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/50 text-sm font-semibold">
            <span>✓ No Entrance Required*</span>
            <span>✓ Direct 2nd Year Entry</span>
            <span>✓ Scholarship Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
