import { useState } from 'react';
import { blogPosts, blogCategories } from '../../data/blog';
import BlogCard from './BlogCard';

export default function BlogGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-pill text-sm font-medium transition-all border ${
              active === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}
