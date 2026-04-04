import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { college } from '../../data/college';

export default function WhatsAppButton() {
  const { whatsapp, whatsappMessage } = college.contact;
  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-hover flex items-center justify-center transition-colors"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
      <MessageCircle size={26} fill="white" />
    </motion.a>
  );
}
