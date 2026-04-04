import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo / Icon */}
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-hover">
          <span className="text-white text-3xl font-black">S</span>
        </div>

        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-accent rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-secondary rounded-full animate-spin" />
        </div>

        <p className="text-primary font-medium text-sm animate-pulse">Loading…</p>
      </motion.div>
    </AnimatePresence>
  );
}
