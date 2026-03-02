// src/components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-brand-black flex flex-col justify-end overflow-hidden">
      {/* Background Graphic Element - Minimalist and Abstract */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] border border-white/10 rounded-full scale-110"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 rounded-full scale-125"></div>
      </div>

      <div className="container-wide relative z-10 pb-24 md:pb-30 lg:pb-40">
        <div className="max-w-4xl">
           <span className="text-white/60 text-sm uppercase tracking-widest font-medium mb-6 block reveal-text">
            Creative Direction & Content Strategy
          </span>
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] reveal-text">
            Crafting narratives <br />
            that resonate at <br />
            <span className="italic font-serif">scale.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center reveal-text" style={{animationDelay: '0.2s'}}>
             <Link href="#projects" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-black">
                Explore Work
             </Link>
             <p className="text-white/60 text-lg max-w-sm">
                20+ years of experience transforming brand stories into immersive visual experiences.
             </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
}
