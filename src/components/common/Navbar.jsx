import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { college } from '../../data/college';
import { cn } from '../../utils/cn';

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About College', to: '/about' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: 'Principal\'s Message', to: '/about#principal' },
      { label: 'Committees', to: '/committees' },
    ],
  },
  {
    label: 'Academics',
    to: '/departments',
    children: [
      { label: 'Departments', to: '/departments' },
      { label: 'Faculty', to: '/faculty' },
      { label: 'Results', to: '/results' },
    ],
  },
  { label: 'Admission', to: '/admission' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Placement', to: '/placement' },
  { label: 'Gallery', to: '/gallery' },
  {
    label: 'More',
    to: '#',
    children: [
      { label: 'Fee Structure', to: '/fee-structure' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-card shadow-hover border border-gray-100 overflow-hidden z-50"
    >
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              'block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-primary',
              isActive ? 'text-primary bg-accent' : 'text-gray-700'
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex bg-primary-dark text-white text-xs py-2">
        <div className="container-custom flex justify-between items-center w-full">
          <div className="flex items-center gap-6">
            <a href={`tel:${college.contact.phone[0]}`} className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone size={12} /> {college.contact.phone[0]}
            </a>
            <a href={`mailto:${college.contact.email[0]}`} className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail size={12} /> {college.contact.email[0]}
            </a>
          </div>
          <div className="flex items-center gap-3 font-medium">
            {college.affiliations.map((a) => (
              <span key={a} className="flex items-center gap-1">
                <span className="text-secondary">✓</span> {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          scrolled ? 'bg-white shadow-card' : 'bg-white'
        )}
      >
        <div className="container-custom flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img src="/images/logo.png" alt="Sanskriti College Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-primary font-extrabold text-sm leading-tight">Sanskriti College</p>
              <p className="text-gray-500 text-xs">of Higher Education & Studies</p>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md transition-colors">
                    {link.label} <ChevronDown size={14} />
                  </button>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                        isActive ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <DropdownMenu items={link.children} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/admission" className="hidden lg:inline-flex btn-secondary text-sm">
            Apply Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={cn('transition-transform', openDropdown === link.label && 'rotate-180')}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4 border-l-2 border-accent ml-3"
                            >
                              {link.children.map((child) => (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            'block px-3 py-2 text-sm font-medium rounded-md',
                            isActive ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
                <Link to="/admission" className="btn-secondary text-sm mt-3 justify-center">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
