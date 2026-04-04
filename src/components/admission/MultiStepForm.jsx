import { useState, useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, BookOpen, FileText, CheckCircle2, 
  ChevronRight, ChevronLeft, Upload, X, Loader2, Send
} from 'lucide-react';

// --- VALIDATION SCHEMAS ---
const personalSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
  fatherName: z.string().min(3, "Father's Name is required"),
  motherName: z.string().optional(),
  dob: z.string().refine((val) => new Date(val).getTime() <= new Date().getTime(), 'Date of Birth cannot be in the future'),
  gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select a gender' }),
  category: z.enum(['general', 'obc', 'sc', 'st', 'ews'], { required_error: 'Please select a category' }),
  religion: z.enum(['hindu', 'muslim', 'christian', 'sikh', 'other'], { required_error: 'Please select a religion' }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit Indian mobile number'),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit Indian WhatsApp number'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(10, 'Full Address is required (min 10 chars)'),
  district: z.string().min(3, 'District is required'),
  state: z.string().min(2, 'State is required'),
  pinCode: z.string().regex(/^\d{6}$/, 'PIN Code must be 6 digits'),
});

const academicSchema = z.object({
  tenBoard: z.string().min(2, '10th Board is required'),
  tenSchool: z.string().min(3, '10th School Name is required'),
  tenYear: z.string().min(4, '10th Pass Year is required'),
  tenPercentage: z.coerce.number().min(33, 'Min 33% required').max(100, 'Max 100% possible'),
  tenRoll: z.string().min(1, '10th Roll Number is required'),
  twelveBoard: z.string().min(2, '12th Board is required'),
  twelveSchool: z.string().min(3, '12th School Name is required'),
  twelveYear: z.string().min(4, '12th Pass Year is required'),
  twelvePercentage: z.coerce.number().min(33, 'Min 33% required').max(100, 'Max 100% possible'),
  twelveSubjects: z.array(z.string()).min(2, 'Select at least 2 subjects'),
  twelveRoll: z.string().min(1, '12th Roll Number is required'),
  // Conditional for Lateral Entry
  dpharmUniversity: z.string().optional(),
  dpharmYear: z.string().optional(),
  dpharmPercentage: z.coerce.number().optional(),
});

const courseSchema = z.object({
  selectedCourse: z.enum(['bpharma', 'dpharma', 'lateral'], { required_error: 'Please select a course' }),
  admissionYear: z.string().default('2026'),
  source: z.enum(['google', 'friend', 'social', 'newspaper', 'counselling', 'other'], { required_error: 'Please select how you heard about us' }),
  declaration: z.boolean().refine(val => val === true, 'You must accept the declaration'),
});

// Full Step Manager
export default function MultiStepForm({ initialCourse = 'bpharma' }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [documents, setDocuments] = useState({});

  const methods = useForm({
    resolver: zodResolver(
      step === 1 ? personalSchema : 
      step === 2 ? academicSchema : courseSchema
    ),
    defaultValues: {
      selectedCourse: initialCourse,
      admissionYear: '2026',
      state: 'Uttar Pradesh',
      twelveSubjects: [],
    }
  });

  const { register, handleSubmit, watch, setValue, formState: { errors, isValid } } = methods;

  const currentCourse = watch('selectedCourse');
  const sameAsMobile = watch('sameAsMobile');

  useEffect(() => {
    if (sameAsMobile) {
      setValue('whatsapp', watch('mobile'));
    }
  }, [sameAsMobile, watch('mobile'), setValue]);

  useEffect(() => {
    if (initialCourse) {
      setValue('selectedCourse', initialCourse);
    }
  }, [initialCourse, setValue]);

  const handleNext = async () => {
    const triggerStep = step === 1 ? personalSchema : 
                       step === 2 ? academicSchema : courseSchema;
    
    const result = await methods.trigger();
    if (result) setStep(prev => prev + 1);
  };

  const handlePrev = () => setStep(prev => prev - 1);

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const appNo = `SC2026${Math.floor(10000 + Math.random() * 90000)}`;
      setSuccessData({ ...data, appNo });
      setIsLoading(false);
    }, 2500);
  };

  const handleFileUpload = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments(prev => ({
        ...prev,
        [name]: { name: file.name, size: (file.size / 1024).toFixed(1) + ' KB' }
      }));
    }
  };

  const removeFile = (name) => {
    setDocuments(prev => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const stepNames = ['Personal', 'Academic', 'Course & Docs', 'Review'];

  return (
    <section id="admission-form-section" className="py-20 md:py-28 bg-[#f8f9fc]">
      <div className="container-custom max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight">Online Admission Portal</h2>
          <p className="text-gray-500 font-medium tracking-wide">Enter your details accurately to register your application.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative max-w-2xl mx-auto">
             {/* Progress Line */}
             <div className="absolute top-[1.15rem] left-0 right-0 h-1 bg-gray-200 -z-10" />
             <motion.div 
               className="absolute top-[1.15rem] left-0 h-1 bg-secondary -z-10"
               initial={{ width: '0%' }}
               animate={{ width: `${((step - 1) / 3) * 100}%` }}
               transition={{ duration: 0.5 }}
             />
             
             {stepNames.map((name, i) => (
               <div key={name} className="flex flex-col items-center">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step > i + 1 ? 'bg-secondary text-primary' : step === i + 1 ? 'bg-primary text-white border-4 border-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                   {step > i + 1 ? <CheckCircle2 size={18} strokeWidth={3} /> : i + 1}
                 </div>
                 <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest mt-2 ${step >= i + 1 ? 'text-primary' : 'text-gray-400'}`}>{name}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="bg-white rounded-card shadow-card border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-1 md:col-span-2 flex items-center gap-2 mb-4">
                       <User size={18} className="text-secondary" />
                       <h3 className="text-lg font-black text-primary uppercase tracking-widest">Personal Details</h3>
                    </div>

                    <FormField label="Full Name*" error={errors.fullName}>
                      <input {...register('fullName')} className="input-field" placeholder="Student's Legal Name" />
                    </FormField>

                    <FormField label="Father's Name*" error={errors.fatherName}>
                      <input {...register('fatherName')} className="input-field" placeholder="Father's Name" />
                    </FormField>

                    <FormField label="Mother's Name" error={errors.motherName}>
                      <input {...register('motherName')} className="input-field" placeholder="Mother's Name" />
                    </FormField>

                    <FormField label="Date of Birth*" error={errors.dob}>
                      <input type="date" {...register('dob')} className="input-field" />
                    </FormField>

                    <FormField label="Gender*" error={errors.gender}>
                      <div className="flex gap-4 p-2 bg-accent/20 rounded-lg">
                        {['male', 'female', 'other'].map(g => (
                          <label key={g} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg cursor-pointer bg-white border border-gray-100 hover:border-secondary transition-all">
                            <input type="radio" value={g} {...register('gender')} className="accent-secondary h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">{g}</span>
                          </label>
                        ))}
                      </div>
                    </FormField>

                    <FormField label="Category*" error={errors.category}>
                      <select {...register('category')} className="input-field">
                        <option value="">Select Category</option>
                        {['General', 'OBC', 'SC', 'ST', 'EWS'].map(c => <option key={c} value={c.toLowerCase()}>{c}</option>)}
                      </select>
                    </FormField>

                    <FormField label="Religion*" error={errors.religion}>
                      <select {...register('religion')} className="input-field">
                        <option value="">Select Religion</option>
                        {['Hindu', 'Muslim', 'Christian', 'Sikh', 'Other'].map(r => <option key={r} value={r.toLowerCase()}>{r}</option>)}
                      </select>
                    </FormField>

                    <FormField label="Mobile Number*" error={errors.mobile}>
                      <input type="tel" {...register('mobile')} className="input-field" placeholder="10-digit mobile" />
                    </FormField>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pt-2">
                        <input type="checkbox" id="sameAsMobile" {...register('sameAsMobile')} className="accent-secondary h-4 w-4" />
                        <label htmlFor="sameAsMobile" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Same as mobile</label>
                      </div>
                      <FormField label="WhatsApp Number" error={errors.whatsapp}>
                        <input type="tel" {...register('whatsapp')} className="input-field" placeholder="WhatsApp Number" />
                      </FormField>
                    </div>

                    <FormField label="Email Address*" error={errors.email}>
                      <input type="email" {...register('email')} className="input-field" placeholder="Your @email.com" />
                    </FormField>

                    <FormField label="Full Address*" error={errors.address} className="md:col-span-2">
                      <textarea {...register('address')} className="input-field min-h-[100px]" placeholder="Street name, Village, P.O." />
                    </FormField>

                    <FormField label="District*" error={errors.district}>
                      <input {...register('district')} className="input-field" placeholder="e.g. Kanpur Dehat" />
                    </FormField>

                    <FormField label="PIN Code*" error={errors.pinCode}>
                      <input type="tel" {...register('pinCode')} className="input-field" placeholder="6-digit PIN" />
                    </FormField>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="md:col-span-2 flex items-center gap-2 mb-4">
                       <BookOpen size={18} className="text-secondary" />
                       <h3 className="text-lg font-black text-primary uppercase tracking-widest">Academic Details</h3>
                    </div>

                    {/* 10th Standard */}
                    <div className="md:col-span-2 p-5 bg-accent/20 rounded-xl border border-accent/60">
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Secondary (10th) Record</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Board*" error={errors.tenBoard}>
                          <select {...register('tenBoard')} className="input-field">
                             <option value="">Select Board</option>
                             {['UP Board', 'CBSE', 'ICSE', 'Other'].map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </FormField>
                        <FormField label="Percentage*" error={errors.tenPercentage}>
                          <input type="number" step="0.1" {...register('tenPercentage')} className="input-field" placeholder="e.g. 78.5" />
                        </FormField>
                        <FormField label="School Name*" error={errors.tenSchool} className="sm:col-span-2">
                          <input {...register('tenSchool')} className="input-field" placeholder="Enter Full School Name" />
                        </FormField>
                        <FormField label="Pass Year*" error={errors.tenYear}>
                           <select {...register('tenYear')} className="input-field">
                              <option value="">Select Year</option>
                              {Array.from({ length: 8 }, (_, i) => 2018 + i).map(y => <option key={y} value={y}>{y}</option>)}
                           </select>
                        </FormField>
                        <FormField label="Roll Number*" error={errors.tenRoll}>
                           <input {...register('tenRoll')} className="input-field" placeholder="10th Roll No." />
                        </FormField>
                      </div>
                    </div>

                    {/* 12th Standard */}
                    <div className="md:col-span-2 p-5 bg-white rounded-xl border border-gray-100 shadow-sm mt-4">
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Senior Secondary (12th) Record</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Board*" error={errors.twelveBoard}>
                          <select {...register('twelveBoard')} className="input-field">
                             <option value="">Select Board</option>
                             {['UP Board', 'CBSE', 'ICSE', 'Other'].map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </FormField>
                        <FormField label="Percentage*" error={errors.twelvePercentage}>
                          <input type="number" step="0.1" {...register('twelvePercentage')} className="input-field" placeholder="e.g. 82.0" />
                        </FormField>
                        <FormField label="School Name*" error={errors.twelveSchool} className="sm:col-span-2">
                          <input {...register('twelveSchool')} className="input-field" placeholder="Enter Full School Name" />
                        </FormField>
                        
                        <div className="sm:col-span-2 bg-gray-50 p-4 rounded-lg">
                          <p className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest">Select Core Subjects*</p>
                          <div className="flex flex-wrap gap-4">
                            {['Physics', 'Chemistry', 'Biology', 'Maths', 'English'].map(s => (
                              <label key={s} className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" value={s} {...register('twelveSubjects')} className="accent-secondary w-4 h-4" />
                                <span className="text-xs font-bold text-primary/70 group-hover:text-primary">{s}</span>
                              </label>
                            ))}
                          </div>
                          {errors.twelveSubjects && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase">{errors.twelveSubjects.message}</p>}
                        </div>

                        <FormField label="Pass Year*" error={errors.twelveYear}>
                           <select {...register('twelveYear')} className="input-field">
                              <option value="">Select Year</option>
                              {Array.from({ length: 7 }, (_, i) => 2020 + i).map(y => <option key={y} value={y}>{y}</option>)}
                           </select>
                        </FormField>
                        <FormField label="Roll Number*" error={errors.twelveRoll}>
                           <input {...register('twelveRoll')} className="input-field" placeholder="12th Roll No." />
                        </FormField>
                      </div>
                    </div>

                    {/* Conditional Lateral Entry Details */}
                    {currentCourse === 'lateral' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:col-span-2 p-5 bg-purple-50 rounded-xl border border-purple-100 mt-4"
                      >
                         <p className="text-xs font-black text-purple-700 uppercase tracking-widest mb-4">D.Pharm Record (Required for Lateral Entry)</p>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField label="University / Board*" error={errors.dpharmUniversity}>
                              <input {...register('dpharmUniversity')} className="input-field" placeholder="e.g. BTEUP" />
                            </FormField>
                            <FormField label="Percentage / CGPA*" error={errors.dpharmPercentage}>
                              <input type="number" step="0.1" {...register('dpharmPercentage')} className="input-field" placeholder="D.Pharm %" />
                            </FormField>
                            <FormField label="Pass Year*" error={errors.dpharmYear} className="sm:col-span-2">
                               <select {...register('dpharmYear')} className="input-field">
                                  <option value="">Select Passing Year</option>
                                  {Array.from({ length: 11 }, (_, i) => 2015 + i).map(y => <option key={y} value={y}>{y}</option>)}
                               </select>
                            </FormField>
                         </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-2">
                       <FileText size={18} className="text-secondary" />
                       <h3 className="text-lg font-black text-primary uppercase tracking-widest">Course & Documents</h3>
                    </div>

                    {/* Course Selection */}
                    <div className="grid grid-cols-1 gap-4">
                      <p className="text-xs font-black text-primary uppercase tracking-widest">Confirm Selected Course*</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: 'bpharma', label: 'B.Pharma' },
                          { id: 'dpharma', label: 'D.Pharma' },
                          { id: 'lateral', label: 'B.Pharm Lateral' }
                        ].map(c => (
                          <label key={c.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${currentCourse === c.id ? 'border-secondary bg-accent/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                            <input type="radio" value={c.id} {...register('selectedCourse')} className="accent-secondary h-4 w-4" />
                            <span className="text-sm font-black text-primary uppercase tracking-tighter">{c.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Source Selection */}
                    <FormField label="How did you hear about us?*" error={errors.source}>
                      <select {...register('source')} className="input-field">
                         <option value="">Select Source</option>
                         {[
                           { id: 'google', label: 'Google Search' },
                           { id: 'friend', label: 'From Friend / Alumni' },
                           { id: 'social', label: 'Social Media' },
                           { id: 'newspaper', label: 'Newspaper Ad' },
                           { id: 'counselling', label: 'JEE / UPCPAT Counselling' },
                           { id: 'other', label: 'Other' }
                         ].map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                      </select>
                    </FormField>

                    {/* Document Upload Fake Logic */}
                    <div className="space-y-6">
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Required Document Scans (Optional for Pre-Registration)</p>
                      <p className="text-[10px] text-gray-400 -mt-3 italic">You can upload later or bring during counseling. Max 2MB per file.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <UploadBox 
                          label="10th Marksheet" 
                          name="tenMarksheet" 
                          info={documents.tenMarksheet} 
                          onUpload={(e) => handleFileUpload(e, 'tenMarksheet')} 
                          onRemove={() => removeFile('tenMarksheet')}
                        />
                         <UploadBox 
                          label="12th Marksheet" 
                          name="twelveMarksheet" 
                          info={documents.twelveMarksheet} 
                          onUpload={(e) => handleFileUpload(e, 'twelveMarksheet')} 
                          onRemove={() => removeFile('twelveMarksheet')}
                        />
                         <UploadBox 
                          label="Aadhar Card (Front/Back)" 
                          name="aadhar" 
                          info={documents.aadhar} 
                          onUpload={(e) => handleFileUpload(e, 'aadhar')} 
                          onRemove={() => removeFile('aadhar')}
                        />
                         <UploadBox 
                          label="Passport Size Photo" 
                          name="photo" 
                          info={documents.photo} 
                          onUpload={(e) => handleFileUpload(e, 'photo')} 
                          onRemove={() => removeFile('photo')}
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" {...register('declaration')} className="accent-secondary w-5 h-5 mt-0.5" />
                        <span className="text-xs font-bold text-gray-600 leading-relaxed uppercase tracking-wider">
                          I hereby declare that all the information provided by me is true and correct to the best of my knowledge. I understand that any false information may lead to the cancellation of my candidature.
                        </span>
                      </label>
                      {errors.declaration && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase">{errors.declaration.message}</p>}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between">
                       <h3 className="text-lg font-black text-primary uppercase tracking-widest">Review Application</h3>
                       <span className="text-[10px] font-black bg-secondary px-3 py-1 rounded-pill">Final Step</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ReviewSection title="Personal Information" onEdit={() => setStep(1)}>
                         <SummaryItem label="Full Name" value={watch('fullName')} />
                         <SummaryItem label="Mobile" value={watch('mobile')} />
                         <SummaryItem label="Email" value={watch('email')} />
                         <SummaryItem label="Address" value={`${watch('district')}, ${watch('state')}`} />
                      </ReviewSection>

                      <ReviewSection title="Academic Information" onEdit={() => setStep(2)}>
                         <SummaryItem label="12th Board" value={watch('twelveBoard')} />
                         <SummaryItem label="12th %" value={`${watch('twelvePercentage')}%`} />
                         <SummaryItem label="Subjects" value={watch('twelveSubjects')?.join(', ')} />
                      </ReviewSection>

                      <ReviewSection title="Course Selected" onEdit={() => setStep(3)}>
                         <SummaryItem label="Course" value={watch('selectedCourse')?.toUpperCase()} />
                         <SummaryItem label="Admission Year" value="2026-27" />
                      </ReviewSection>

                      <ReviewSection title="Document Status" onEdit={() => setStep(3)}>
                         {Object.keys(documents).length > 0 ? (
                           Object.keys(documents).map(k => (
                             <div key={k} className="flex justify-between text-[10px] font-bold text-green-600 uppercase mb-1">
                               <span>✓ {k.replace('ten', '10th ').replace('twelve', '12th ')}</span>
                             </div>
                           ))
                         ) : (
                           <p className="text-[10px] text-gray-400 font-bold uppercase italic">No documents uploaded yet</p>
                         )}
                      </ReviewSection>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-card border-2 border-dashed border-secondary/30 mt-8">
                       <p className="text-xs font-black text-secondary-dark uppercase tracking-widest text-center mb-1">Confirmation Ready</p>
                       <p className="text-[10px] text-[#102847]/60 text-center uppercase font-bold">Please check all data before submitting. Changes cannot be made after submission.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-gray-100">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 py-4 px-6 rounded-pill border-2 border-gray-100 font-black text-xs uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-[2] py-4 px-6 rounded-pill bg-primary text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:brightness-110 flex items-center justify-center gap-2 group ml-auto"
                  >
                    Next Step <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-[2] py-4 px-6 rounded-pill bg-secondary text-primary font-black text-xs uppercase tracking-widest shadow-xl shadow-secondary/20 hover:shadow-secondary/40 flex items-center justify-center gap-2 ml-auto"
                  >
                    {isLoading ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={16} /> Submit Application</>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {successData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm">
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               className="bg-white rounded-card max-w-lg w-full p-8 text-center shadow-2xl relative overflow-hidden"
             >
                {/* CSS Confetti */}
                <div className="absolute inset-0 pointer-events-none">
                   {Array.from({ length: 20 }).map((_, i) => (
                     <div 
                       key={i} 
                       className="absolute animate-confetti-fall"
                       style={{
                         left: `${Math.random() * 100}%`,
                         top: `-20px`,
                         backgroundColor: ['#f4a61d', '#1a3c6e', '#e8f0fe', '#10b981'][Math.floor(Math.random() * 4)],
                         width: `${Math.random() * 8 + 8}px`,
                         height: `${Math.random() * 8 + 8}px`,
                         animationDelay: `${Math.random() * 3}s`,
                         borderRadius: i % 2 === 0 ? '50%' : '2px',
                         transform: `rotate(${Math.random() * 360}deg)`
                       }}
                     />
                   ))}
                </div>

                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">Application Submitted!</h3>
                <p className="text-gray-500 font-medium mb-8">Your preliminary admission data has been recorded.</p>
                
                <div className="bg-[#f8f9fc] border border-gray-100 rounded-xl p-6 mb-8 text-left">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Application ID</p>
                   <p className="text-2xl font-black text-primary font-mono tracking-tighter">{successData.appNo}</p>
                   <div className="h-px bg-gray-200 my-4" />
                   <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed">
                     A confirmation has been sent to <span className="text-primary">{successData.email}</span>. Our representative will contact you within 24 hours.
                   </p>
                </div>

                <div className="flex flex-col gap-3">
                   <button 
                     onClick={() => alert(`Downloading SC2026 Application PDF...`)}
                     className="w-full py-4 bg-primary text-white font-black text-sm rounded-pill shadow-xl"
                   >
                     Download Application PDF
                   </button>
                   <a 
                     href={`https://wa.me/918604502237?text=Hi, My application ID is ${successData.appNo}. I would like to inquire about my admission status.`}
                     target="_blank"
                     className="w-full py-4 bg-[#25D366] text-white font-black text-sm rounded-pill flex items-center justify-center gap-2"
                   >
                     Connect on WhatsApp
                   </a>
                   <button 
                     onClick={() => setSuccessData(null)}
                     className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-all"
                   >
                     Close Window
                   </button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .animate-confetti-fall {
           animation: confettiFall 4s linear infinite;
        }
        @keyframes confettiFall {
           0% { transform: translateY(0) rotate(0); opacity: 1; }
           100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

// --- HELPER COMPONENTS ---

function FormField({ label, error, children, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-[10px] font-black text-primary uppercase tracking-[0.15em] ml-1">{label}</label>
      {children}
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
          className="text-[10px] text-red-500 font-black uppercase tracking-tight ml-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
}

function UploadBox({ label, name, info, onUpload, onRemove }) {
  return (
    <div className="relative">
       {!info ? (
         <label htmlFor={name} className="flex flex-col items-center justify-center py-6 px-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-accent/10 hover:border-secondary transition-all">
            <Upload size={20} className="text-gray-400 mb-2" />
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
            <input type="file" id={name} className="hidden" onChange={onUpload} />
         </label>
       ) : (
         <div className="flex items-center justify-between p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-primary">
                  <CheckCircle2 size={16} strokeWidth={3} />
               </div>
               <div>
                  <p className="text-[10px] font-black text-primary uppercase truncate max-w-[120px]">{info.name}</p>
                  <p className="text-[8px] font-bold text-secondary-dark">{info.size}</p>
               </div>
            </div>
            <button onClick={onRemove} className="p-1 hover:bg-red-100 rounded text-red-500 transition-all">
               <X size={14} />
            </button>
         </div>
       )}
    </div>
  );
}

function ReviewSection({ title, onEdit, children }) {
  return (
    <div className="bg-accent/10 border border-accent/40 rounded-xl overflow-hidden shadow-sm">
       <div className="bg-accent/40 px-4 py-2 flex justify-between items-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">{title}</span>
          <button onClick={onEdit} className="text-[10px] font-black text-secondary-dark hover:underline uppercase">Edit</button>
       </div>
       <div className="p-5 space-y-3">
          {children}
       </div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{label}</span>
       <span className="text-sm font-black text-primary">{value || '---'}</span>
    </div>
  );
}
