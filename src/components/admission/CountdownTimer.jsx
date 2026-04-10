import { useState, useEffect } from 'react';

const DEADLINE = new Date('2025-07-30T23:59:59');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = DEADLINE - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary rounded-card p-6 text-center">
      <p className="text-white/80 text-sm font-medium mb-4">Admission Deadline: July 30, 2025</p>
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(timeLeft).map(([unit, val]) => (
          <div key={unit} className="bg-white/10 rounded-input p-3">
            <div className="text-3xl font-black text-secondary">{String(val).padStart(2, '0')}</div>
            <div className="text-white/60 text-xs uppercase mt-1">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
