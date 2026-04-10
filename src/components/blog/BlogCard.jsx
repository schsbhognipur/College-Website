import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="card overflow-hidden group hover:-translate-y-1 transition-transform"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-pill">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>

          <h3 className="font-bold text-primary text-base leading-snug mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              By <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <span className="text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
