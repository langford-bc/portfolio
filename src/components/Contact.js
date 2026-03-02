// src/components/Contact.js
'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white min-h-screen pt-32 lg:pt-48 pb-24">
      <div className="container-wide">
        <div className="grid-12">
          {/* Header */}
          <div className="col-span-4 md:col-span-12 mb-16 lg:mb-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 reveal-text">
              Let’s build <br />
              something <span className="italic font-serif text-brand-gray-mid">extraordinary.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray-dark max-w-2xl reveal-text" style={{animationDelay: '0.1s'}}>
              Whether you’re looking to scale a brand story or need a strategic eye for your next campaign, I’m ready to collaborate.
            </p>
          </div>

          {/* Contact Details */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 space-y-12 mb-16 md:mb-0 reveal-text" style={{animationDelay: '0.2s'}}>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-mid mb-4 block">Direct</span>
              <a href="mailto:hello@deenkarim.com" className="text-xl md:text-2xl font-medium hover:text-brand-gray-mid transition-all border-b border-brand-black pb-1">
                hello@deenkarim.com
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-mid mb-4 block">Social</span>
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-brand-black">
                <a href="#" className="hover:text-brand-gray-mid transition-all">LinkedIn</a>
                <a href="#" className="hover:text-brand-gray-mid transition-all">Instagram</a>
                <a href="#" className="hover:text-brand-gray-mid transition-all">Vimeo</a>
              </div>
            </div>
            <div className="pt-12 border-t border-brand-gray-light max-w-xs">
               <p className="text-xs text-brand-gray-mid leading-relaxed">
                  Currently based between Hamburg and Toronto. Available for select global projects and creative consulting.
               </p>
            </div>
          </div>

          {/* Intake Form (Phase 1 Project Portal) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6 reveal-text" style={{animationDelay: '0.3s'}}>
            <div className="bg-brand-gray-light p-8 md:p-12 lg:p-18">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-mid mb-8 block">Project Brief Intake</span>

              {status === 'success' ? (
                <div className="py-12 text-center">
                  <h3 className="text-3xl font-medium mb-4 italic font-serif">Thank you.</h3>
                  <p className="text-brand-gray-dark">Your brief has been received. I will review and respond within 48 hours.</p>
                  <button onClick={() => setStatus(null)} className="mt-8 text-xs font-bold uppercase tracking-widest border-b border-brand-black pb-1 hover:text-brand-gray-mid transition-all">Send another brief</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all placeholder-transparent peer" placeholder="Name" />
                      <label htmlFor="name" className="absolute left-0 top-3 text-xs uppercase tracking-widest font-bold text-brand-gray-mid transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px]">Name</label>
                    </div>
                    <div className="relative group">
                      <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all placeholder-transparent peer" placeholder="Email" />
                      <label htmlFor="email" className="absolute left-0 top-3 text-xs uppercase tracking-widest font-bold text-brand-gray-mid transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px]">Email</label>
                    </div>
                  </div>

                  <div className="relative group">
                    <input type="text" id="company" name="company" className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all placeholder-transparent peer" placeholder="Company" />
                    <label htmlFor="company" className="absolute left-0 top-3 text-xs uppercase tracking-widest font-bold text-brand-gray-mid transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px]">Company</label>
                  </div>

                  <div className="relative group">
                    <textarea id="brief" name="brief" required rows="4" className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all placeholder-transparent peer resize-none" placeholder="Project Brief"></textarea>
                    <label htmlFor="brief" className="absolute left-0 top-3 text-xs uppercase tracking-widest font-bold text-brand-gray-mid transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px]">What are we building?</label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <select id="budget" name="budget" className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all appearance-none">
                        <option value="">Timeline Preference</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <select id="service" name="service" className="w-full bg-transparent border-b border-brand-gray-mid py-3 focus:border-brand-black outline-none transition-all appearance-none">
                        <option value="">Core Interest</option>
                        <option value="creative-direction">Creative Direction</option>
                        <option value="content-strategy">Content Strategy</option>
                        <option value="production">Full Production</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:bg-brand-gray-mid"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Send Brief →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
