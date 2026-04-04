import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { college } from '../../data/college';

// Simple social SVG icons (brand icons not available in lucide-react)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Admission', to: '/admission' },
  { label: 'Fee Structure', to: '/fee-structure' },
  { label: 'Placement', to: '/placement' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Results', to: '/results' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const importantLinks = [
  { label: 'PCI (Pharmacy Council of India)', href: 'https://www.pci.nic.in' },
  { label: 'AKTU Official Website', href: 'https://aktu.ac.in' },
  { label: 'UP Scholarship Portal', href: 'https://scholarship.up.gov.in' },
  { label: 'UPCPAT Counseling', href: 'https://upcpat.admissions.nic.in' },
  { label: 'CDSCO (Drug Controller)', href: 'https://cdsco.gov.in' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer */}
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1.5 shrink-0 shadow-lg">
              <img src="/images/logo.png" alt="Sanskriti College Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div>
              <p className="font-extrabold text-sm">Sanskriti College</p>
              <p className="text-xs text-white/60">of Higher Education & Studies</p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            {college.taglines[0]} &mdash; A premier pharmacy college in Bhognipur, Kanpur Dehat, UP, dedicated to producing skilled pharmaceutical professionals.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: SocialIcons.Facebook, href: college.social.facebook, label: 'Facebook' },
              { Icon: SocialIcons.Instagram, href: college.social.instagram, label: 'Instagram' },
              { Icon: SocialIcons.Youtube, href: college.social.youtube, label: 'YouTube' },
              { Icon: SocialIcons.Linkedin, href: college.social.linkedin, label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-base mb-5 text-secondary">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/70 hover:text-secondary text-sm transition-colors flex items-center gap-1"
                >
                  <span className="text-secondary text-xs">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important links */}
        <div>
          <h3 className="font-bold text-base mb-5 text-secondary">Important Links</h3>
          <ul className="space-y-2">
            {importantLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary text-sm transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} className="shrink-0" /> {l.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-base mt-8 mb-4 text-secondary">Approved By</h3>
          <div className="flex flex-wrap gap-2">
            {college.affiliations.map((a) => (
              <span key={a} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-pill">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-base mb-5 text-secondary">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>{college.address.full}</span>
            </li>
            {college.contact.phone.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors">
                  <Phone size={15} className="shrink-0 text-secondary" /> {p}
                </a>
              </li>
            ))}
            {college.contact.email.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors break-all">
                  <Mail size={15} className="shrink-0 text-secondary" /> {e}
                </a>
              </li>
            ))}
          </ul>

          <Link
            to="/admission"
            className="mt-6 inline-flex btn-secondary text-sm"
          >
            Apply for Admission
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {year} {college.name}. All rights reserved.</p>
          <p>Established {college.established} | Bhognipur, Kanpur Dehat, UP</p>
        </div>
      </div>
    </footer>
  );
}
