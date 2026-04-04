import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center section-padding">
        <div className="text-8xl font-black text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.
        </p>
        <Link to="/" className="btn-primary">
          <Home size={18} /> Go to Home
        </Link>
      </div>
    </>
  );
}
