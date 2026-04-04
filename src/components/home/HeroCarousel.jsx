import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero_campus.png',
    bg: 'linear-gradient(135deg, rgba(26,60,110,0.85) 0%, rgba(35,84,160,0.85) 100%)',
    badge: '🎓 PCI Approved | AKTU Affiliated | Est. 2012',
    headline: 'Build Your Future in Pharmacy',
    sub: "Bhognipur's leading pharmacy college with 15+ years of excellence",
    ctaPrimary: { label: 'Apply Now 2026', to: '/admission' },
    ctaSecondary: { label: 'Know More', to: '/about' },
    accent: '#f4a61d',
    pills: ['60 Seats B.Pharma', '60 Seats D.Pharma'],
  },
  {
    id: 2,
    image: '/images/pharma_lab.png',
    bg: 'linear-gradient(135deg, rgba(16,40,71,0.85) 0%, rgba(26,60,110,0.85) 100%)',
    badge: '🔬 Best Infrastructure in Kanpur Dehat',
    headline: 'World-Class Labs & Expert Faculty',
    sub: 'State-of-the-art pharmaceutical laboratories with experienced faculty',
    ctaPrimary: { label: 'Explore Departments', to: '/departments' },
    ctaSecondary: null,
    accent: '#f4a61d',
    pills: ['6 Departments', '12+ Labs'],
  },
  {
    id: 3,
    image: '/images/students_walking.png',
    bg: 'linear-gradient(135deg, rgba(13,59,46,0.85) 0%, rgba(26,92,69,0.85) 100%)',
    badge: '🏆 95% Placement Record',
    headline: 'Your Career Starts Here',
    sub: 'Join 2000+ successful alumni working in top pharma companies',
    ctaPrimary: { label: 'View Placements', to: '/placement' },
    ctaSecondary: null,
    accent: '#f4a61d',
    pills: ['60+ Companies', 'Top Package: 8.5 LPA'],
  },
];

const slideVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: 'easeOut' },
  }),
};

function SlideContent({ slide, active }) {
  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="container-custom w-full">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="inline-block text-sm md:text-base font-bold px-5 py-2 rounded-pill border border-white/30 text-white/90 backdrop-blur-sm mb-6"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              {slide.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            {slide.headline}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-white/82 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto"
          >
            {slide.sub}
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {slide.pills.map((p) => (
              <span
                key={p}
                className="text-sm font-semibold px-4 py-1.5 rounded-pill text-white"
                style={{ background: 'rgba(244,166,29,0.28)', border: '1px solid rgba(244,166,29,0.5)' }}
              >
                ✓ {p}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.52, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to={slide.ctaPrimary.to}
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-pill transition-all duration-300 hover:brightness-110 hover:shadow-2xl active:scale-95"
              style={{ background: '#f4a61d', color: '#102847' }}
            >
              {slide.ctaPrimary.label} <ChevronRight size={18} />
            </Link>
            {slide.ctaSecondary && (
              <Link
                to={slide.ctaSecondary.to}
                className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-pill border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                {slide.ctaSecondary.label} <ArrowRight size={18} />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full" style={{ height: 'calc(100svh - 0px)', minHeight: '560px', maxHeight: '900px' }}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active',
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        loop
        speed={900}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="h-full">
            {({ isActive }) => (
              <div
                className="relative h-full w-full overflow-hidden"
              >
                <img src={slide.image} alt={slide.headline} className="absolute inset-0 w-full h-full object-cover z-0 object-center" />
                <div className="absolute inset-0 z-1" style={{ background: slide.bg }}></div>
                {/* Decorative shapes */}
                <div
                  className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
                  style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
                />
                <div
                  className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-8"
                  style={{ background: 'radial-gradient(circle, #f4a61d 0%, transparent 70%)' }}
                />
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                  }}
                />
                <SlideContent slide={slide} active={isActive} />
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom nav arrows — hidden on mobile */}
        <button className="hero-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 items-center justify-center text-white backdrop-blur-sm transition-all">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button className="hero-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 items-center justify-center text-white backdrop-blur-sm transition-all">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5">
        <div className="w-[1px] h-10 bg-white/30" style={{ animation: 'scrollIndicator 1.6s ease-in-out infinite' }} />
      </div>

      <style>{`
        .hero-bullet {
          width: 28px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: rgba(255,255,255,0.4) !important;
          opacity: 1 !important;
          margin: 0 3px !important;
          transition: all 0.35s ease !important;
        }
        .hero-bullet-active {
          background: #f4a61d !important;
          width: 44px !important;
        }
        @keyframes scrollIndicator {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
