import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', centered && 'text-center', className)}
    >
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1 rounded-pill text-sm font-semibold mb-4',
            light
              ? 'bg-white/20 text-white'
              : 'bg-secondary/10 text-secondary-dark'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold mb-4',
          light ? 'text-white' : 'text-primary-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
