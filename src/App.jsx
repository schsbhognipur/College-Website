import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';
import NoticeTicker from './components/common/NoticeTicker';
import PageLoader from './components/common/PageLoader';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Lazy-loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Departments = React.lazy(() => import('./pages/Departments'));
const DepartmentDetail = React.lazy(() => import('./pages/DepartmentDetail'));
const Faculty = React.lazy(() => import('./pages/Faculty'));
const Facilities = React.lazy(() => import('./pages/Facilities'));
const Committees = React.lazy(() => import('./pages/Committees'));
const Admission = React.lazy(() => import('./pages/Admission'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Placement = React.lazy(() => import('./pages/Placement'));
const FeeStructure = React.lazy(() => import('./pages/FeeStructure'));
const Results = React.lazy(() => import('./pages/Results'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Scroll reset on route change
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NoticeTicker />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollReset />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/departments/:slug" element={<DepartmentDetail />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/placement" element={<Placement />} />
                <Route path="/fee-structure" element={<FeeStructure />} />
                <Route path="/results" element={<Results />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
