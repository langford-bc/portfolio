import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8f6f2] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1a1a1a] mb-6 leading-tight">
            Let&apos;s talk
          </h2>
          <p className="text-base text-[#6b6b6b] leading-relaxed mb-10">
            I am currently based in Hamburg and open to new opportunities in
            communications strategy, content leadership, and brand communications
            — particularly in technology, healthcare, financial services, and
            regulated sectors.
          </p>

          <div className="space-y-4 mb-12">
            <div>
              <a
                href="mailto:deen.karim@icloud.com"
                className="text-lg font-medium text-[#1a1a1a] hover:text-[#4a6fa5] transition-colors"
              >
                deen.karim@icloud.com
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/editorial-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#4a6fa5] hover:text-[#3a5a8f] transition-colors font-medium"
              >
                linkedin.com/in/editorial-creative →
              </a>
            </div>
            <p className="text-sm text-[#6b6b6b]">
              Hamburg, Germany &nbsp;·&nbsp; Available immediately
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 border-t border-[#dddbd7] mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative h-8 w-28">
            <Image
              src="/images/s-karim.png"
              alt="S Karim signature"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-xs text-[#6b6b6b]">
            © {new Date().getFullYear()} Deen Karim. Hamburg, Germany.
          </p>
        </div>
      </div>
    </section>
  );
}
