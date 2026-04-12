"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f8f6f2] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-6">
              Hamburg, Germany
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Deen Karim
            </h1>
            <p className="text-xl lg:text-2xl text-[#1a1a1a] font-medium mb-4 leading-snug">
              Communications Strategist.{" "}
              <span className="text-[#6b6b6b]">Editorial Leader.</span>
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-10 max-w-lg">
              I help companies in competitive and regulated sectors solve complex
              business challenges through editorial-quality content and brand
              strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#work")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 bg-[#1a1a1a] text-[#f8f6f2] text-sm font-medium tracking-wide hover:bg-[#4a6fa5] transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium tracking-wide hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] overflow-hidden bg-[#eeece8]">
              <Image
                src="/images/deen-karim-photo.jpg"
                alt="Deen Karim"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
