import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import SEOHead from '../components/common/SEOHead';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return (
    <div className="section-padding text-center">
      <h1 className="text-2xl font-bold text-primary">Article not found</h1>
      <Link to="/blog" className="btn-primary mt-4">Back to Blog</Link>
    </div>
  );

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} image={post.image} />

      <article>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 container-custom">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm">
              <ArrowLeft size={14} /> Blog
            </Link>
            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-pill block w-fit mb-3">{post.category}</span>
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">{post.title}</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="bg-white border-b py-4">
          <div className="container-custom flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            <span className="font-medium text-gray-700">By {post.author}, {post.authorRole}</span>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {post.content.replace(/^#+ /gm, '').replace(/\n## /g, '\n\n').replace(/\n### /g, '\n')}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card p-5">
                <h3 className="font-bold text-primary mb-3">About the Author</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">{post.author.charAt(0)}</div>
                  <div>
                    <p className="font-bold text-sm text-gray-800">{post.author}</p>
                    <p className="text-gray-500 text-xs">{post.authorRole}</p>
                  </div>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-primary mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-accent text-primary text-xs px-3 py-1 rounded-pill">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card p-5 bg-primary text-white">
                <h3 className="font-bold mb-2">Interested in Admission?</h3>
                <p className="text-sm text-white/80 mb-4">Admissions for 2025–26 are open.</p>
                <Link to="/admission" className="btn-secondary text-sm w-full justify-center">Apply Now</Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
