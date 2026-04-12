const principles = [
  {
    title: "Diagnose first",
    body: "Understand the business challenge before touching a brief.",
  },
  {
    title: "Align internally",
    body: "Employees and executives are brand channels too.",
  },
  {
    title: "Deliver editorially",
    body: "Hold the content to the standard you would apply to your own name.",
  },
];

export default function Core() {
  return (
    <section className="bg-[#eeece8] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-6">
            The Core
          </p>
          <blockquote className="font-serif text-3xl lg:text-4xl text-[#1a1a1a] leading-tight mb-10">
            &ldquo;I diagnose the business challenge first. Then I apply
            editorial discipline to solve it.&rdquo;
          </blockquote>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-5 text-[#1a1a1a] text-base leading-relaxed">
            <p>
              Most content problems are not content problems. They are clarity
              problems, trust problems, or alignment problems. Companies struggle
              to communicate effectively not because they lack capable writers or
              designers, but because they have not done the harder work of
              understanding what they need to say, who they need to say it to,
              and why it should matter to that person.
            </p>
            <p>
              My approach starts there. I work with business and executive teams
              to understand the challenge before I touch a brief.
              I align internal stakeholders around a coherent narrative. Then I
              build and lead the creative operation that delivers that narrative
              externally — at the quality and scale the sector demands.
            </p>
          </div>
          <div className="space-y-5 text-[#1a1a1a] text-base leading-relaxed">
            <p>
              This discipline comes from journalism. In journalism you cannot
              hide behind vague language or impressive-sounding claims. The story
              either holds up or it does not. The same standard applies to brand
              and corporate communications in regulated and competitive
              environments.
            </p>
            <p>
              The audience is sophisticated. The stakes are real. Clarity,
              credibility, and trust are not optional.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#dddbd7]">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`py-8 ${i < 2 ? "md:pr-8 md:border-r border-[#dddbd7]" : ""} ${i > 0 ? "md:pl-8" : ""}`}
            >
              <p className="font-serif text-lg font-semibold text-[#1a1a1a] mb-2">
                {p.title}
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
