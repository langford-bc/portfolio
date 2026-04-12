const credentials = [
  { school: "Columbia University", degree: "MS Journalism" },
  { school: "Rotman School of Management", degree: "Executive MBA" },
  { school: "IBM SkillsBuild", degree: "AI Fundamentals" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f8f6f2] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Pull quote / label */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-6">
              About
            </p>
            <blockquote className="font-serif text-2xl text-[#1a1a1a] leading-snug">
              &ldquo;A journalist-trained strategist who diagnoses business
              challenges and builds coherent content operations to solve
              them.&rdquo;
            </blockquote>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8">
            <div className="space-y-5 text-[#1a1a1a] text-base leading-relaxed">
              <p>
                Communications strategist with 20+ years of experience helping
                companies in technology, financial services, healthcare, and
                energy solve complex business challenges through editorial-quality
                content and brand strategy.
              </p>
              <p>
                Trained as a journalist at Columbia University and grounded in
                business practice through an Executive MBA at the Rotman School
                of Management, I bring a disciplined approach to diagnosing what
                a company needs to say, to whom, and why it matters — then
                building the creative operations to deliver it.
              </p>
              <p>
                My work spans external brand positioning and internal stakeholder
                alignment, because lasting confidence in a company and its
                products depends on both being coherent. I have led content and
                communications programmes for organisations including IBM, KPMG,
                Suncor Energy, Norton Rose Fulbright, and Perfood, working across
                regulated and competitive environments where clarity, credibility,
                and trust are not optional.
              </p>
              <p>
                I build and lead high-performance editorial teams — writers,
                producers, videographers, editors — and hold them to the
                standards I would apply to my own work.
              </p>
              <p>
                Most recently I have developed hands-on competency in applied AI,
                building working applications across the OpenAI, Anthropic, Google
                Gemini, and xAI platforms — with a specific focus on how AI tools
                can accelerate research, content intelligence, and communications
                workflows in enterprise settings.
              </p>
              <p>
                I am based in Hamburg, where I have lived since 2018. I work in
                English at full professional level and am at an intermediate level
                in German, improving steadily.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-12 pt-8 border-t border-[#dddbd7]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {credentials.map((c) => (
                  <div key={c.school}>
                    <p className="text-xs font-medium text-[#4a6fa5] tracking-widest uppercase mb-1">
                      {c.school}
                    </p>
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      {c.degree}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
