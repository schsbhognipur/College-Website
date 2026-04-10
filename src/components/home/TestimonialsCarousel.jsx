import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { testimonials } from '../../data/testimonials';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-[#f4a61d] fill-[#f4a61d]' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f8f9fc' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block bg-white text-primary font-bold text-sm px-5 py-1.5 rounded-pill border border-primary/20 mb-4">
            Student Voices
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#102847] mb-3">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hear from graduates who turned their pharmacy dreams into careers
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet tcard-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active tcard-bullet-active',
          }}
          loop
          className="pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className="bg-white rounded-card p-6 h-full flex flex-col gap-4 relative"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)', minHeight: '280px' }}
              >
                {/* Large quote */}
                <div
                  className="absolute top-4 right-5 text-7xl font-serif leading-none select-none"
                  style={{ color: 'rgba(26,60,110,0.07)' }}
                >
                  "
                </div>

                <StarRating count={t.rating} />

                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 ${['bg-blue-600', 'bg-purple-600', 'bg-teal-600', 'bg-orange-600', 'bg-green-600'][t.id % 5]}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3c6e] text-sm leading-tight">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.course} · Batch {t.batchYear}</p>
                    <p className="text-[#f4a61d] text-xs font-semibold mt-0.5">
                      {t.company} — {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .tcard-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .tcard-bullet-active {
          background: #1a3c6e !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}
