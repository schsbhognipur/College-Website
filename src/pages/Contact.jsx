import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import { college } from '../data/college';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(3, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Valid mobile required'),
  subject: z.string().min(3, 'Subject required'),
  message: z.string().min(20, 'Please write at least 20 characters'),
});

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log('Contact form:', data);
    setSent(true);
  };

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with SCHES Bhognipur. Call, email, or visit us for admission and other enquiries." />

      <section className="gradient-primary section-padding">
        <div className="container-custom text-center text-white">
          <p className="text-secondary font-bold mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">We're here to answer your questions about admissions, courses, fees, and campus life.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading badge="Our Contact Details" title="Reach Us Directly" centered={false} />

            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: 'Address', value: college.address.full },
                { icon: Phone, label: 'Phone', value: college.contact.phone.join(' / ') },
                { icon: Mail, label: 'Email', value: college.contact.email.join(' / ') },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{label}</p>
                    <p className="text-gray-600 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-card overflow-hidden shadow-card h-64">
              <iframe
                title="SCHES Location Map"
                src="https://maps.google.com/maps?q=Bhognipur,Kanpur+Dehat,Uttar+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading badge="Send a Message" title="Write to Us" centered={false} />

            {sent ? (
              <div className="card p-10 text-center">
                <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll respond within 24 working hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 card p-6">
                {[
                  { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
                  { id: 'phone', label: 'Mobile *', type: 'tel', placeholder: '10-digit mobile' },
                  { id: 'subject', label: 'Subject *', type: 'text', placeholder: 'e.g. Admission 2025 Enquiry' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input type={type} {...register(id)} className="input-field" placeholder={placeholder} />
                    {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]?.message}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea {...register('message')} rows={4} className="input-field resize-none" placeholder="Write your message..." />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
