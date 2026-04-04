import { AnimatePresence, motion } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { useState } from 'react';
import { notices } from '../../data/notices';

export default function NoticeTicker() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary-dark text-white overflow-hidden relative z-50"
      >
        <div className="flex items-center">
          {/* Label */}
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 shrink-0 font-bold text-sm text-white">
            <Bell size={14} />
            <span className="hidden sm:inline">NOTICES</span>
          </div>

          {/* Ticker */}
          <div className="flex-1 overflow-hidden py-2">
            <div className="ticker-animate inline-block text-sm">
              {notices.map((n, i) => (
                <span key={n.id} className="mr-8">
                  {n.priority === 'high' && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded px-2 py-0.5 mr-2">
                      URGENT
                    </span>
                  )}
                  <span className="hover:text-secondary transition-colors">
                    {n.text}
                  </span>
                  {i < notices.length - 1 && (
                    <span className="text-secondary mx-4">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 px-3 py-2 hover:bg-white/10 transition-colors"
            aria-label="Dismiss notices"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
