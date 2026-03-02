// src/components/AboutMe.js
import Link from 'next/link';

export default function AboutMe() {
  return (
    <section className="cinematic-pacing bg-brand-gray-light">
      <div className="container-wide">
        <div className="grid-12">
          {/* Section Header */}
          <div className="col-span-4 md:col-span-12 mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-6">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The Director’s <span className="italic font-serif">Eye.</span></h2>
            <p className="text-brand-gray-mid text-sm uppercase tracking-widest font-bold">
              Background & Expertise
            </p>
          </div>

          {/* Left Column - Core Narrative */}
          <div className="col-span-4 md:col-span-6 lg:col-span-7 pr-4 lg:pr-18">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-snug text-brand-black mb-12">
              Deen Karim is a Content Director with over 20 years of experience crafting stories that inspire, engage, and connect.
            </p>
            <div className="space-y-6 text-lg md:text-xl text-brand-gray-dark leading-relaxed">
              <p>
                Specializing in transforming marketing events for large companies and brands into immersive visual experiences, Deen amplifies thought leadership and fosters meaningful relationships with valuable audiences and stakeholders.
              </p>
              <p>
                Based in Hamburg and Toronto, his collaborations span technology, healthcare, financial services, and sports—delivering impactful content that resonates across industries and cultures.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Call to Action */}
          <div className="col-span-4 md:col-span-6 lg:col-span-5 flex flex-col justify-end mt-12 md:mt-0">
             <div className="border-t border-brand-gray-mid pt-8 space-y-8">
                <div>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-mid mb-4 block">Specializations</span>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm font-bold uppercase tracking-widest text-brand-black">
                      <li>Storytelling</li>
                      <li>Scripting</li>
                      <li>Video Production</li>
                      <li>Strategic Communication</li>
                      <li>Brand Experience</li>
                      <li>Creative Direction</li>
                   </ul>
                </div>

                <div className="pt-8">
                   <Link href="/contact" className="btn-primary w-full text-center">
                      Let’s Collaborate
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
