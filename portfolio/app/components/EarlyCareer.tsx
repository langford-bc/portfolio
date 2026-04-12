const engagements = [
  {
    label: "South Africa, 1994",
    description:
      "Covered the first multi-racial democratic elections. Published in Queen's Alumni Review.",
  },
  {
    label: "Vickers and Benson",
    description:
      "Principal writer on the Possibility Network Online, one of Canada's first digital banking platforms, for Bank of Montreal.",
  },
  {
    label: "RBC Technology Ventures",
    description:
      "Worked with the Managing Director to reconceptualise how an established financial institution communicated with startup founders and entrepreneurs.",
  },
  {
    label: "XPV Capital",
    description:
      "Principal coordinator on the funding prospectus for a multi-million dollar venture capital fund, managing a complex multi-contributor document with legal and commercial consequences.",
  },
  {
    label: "Ontario Power Generation",
    description:
      "Media training and communications assessment for a nuclear emergency preparedness simulation.",
  },
  {
    label: "Baan World Users Group",
    description:
      "Communications Manager, redesigning the primary channel from newsletter to live online seminars.",
  },
];

export default function EarlyCareer() {
  return (
    <section className="bg-[#eeece8] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Label + intro */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-6">
              The Foundation
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#1a1a1a] mb-6 leading-tight">
              Before the headline roles
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-5 text-[#1a1a1a] text-base leading-relaxed mb-12">
              <p>
                Before the CBC, I spent several years doing something most
                journalists do not: working directly inside the business
                challenges of organisations in financial services, venture
                capital, enterprise software, energy, and advertising. It was a
                deliberate choice to build the business fluency that would make
                me a different kind of journalist — and later, a different kind
                of content strategist.
              </p>
              <p>
                It started in 1994, when I borrowed camera equipment, pitched a
                documentary assignment to fund the trip, and spent 38 days in
                South Africa covering the first multi-racial democratic elections
                in the country&apos;s history. That experience established a
                principle that has held ever since: find a way, do the work,
                deliver the result.
              </p>
            </div>

            {/* Engagement list */}
            <div className="space-y-0">
              {engagements.map((e, i) => (
                <div
                  key={e.label}
                  className={`py-5 flex flex-col sm:flex-row sm:gap-8 ${
                    i < engagements.length - 1 ? "border-b border-[#dddbd7]" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-[#1a1a1a] sm:w-48 shrink-0 mb-1 sm:mb-0">
                    {e.label}
                  </p>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
