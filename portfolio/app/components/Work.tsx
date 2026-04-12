import Image from "next/image";

const cards = [
  {
    sector: "Technology · Content Marketing",
    title: "Helping IBM to inspire entrepreneurs",
    image: "/images/work-ibm.jpg",
    imageAlt: "IBM Global Entrepreneur Program materials",
    body: "IBM had a perception problem. Despite having cloud infrastructure and enterprise technology that was genuinely competitive for startups and scale-ups, the company was not part of the conversation in the startup ecosystems it needed to reach. The brand carried associations with legacy enterprise that made it difficult to engage the founders and CTOs who were making platform decisions. At /newsrooms, we were commissioned to develop journalist-quality branded content that would put IBM into the conversations happening in the startup communities of Toronto, the Waterloo tech corridor, Austin, and Tel Aviv — markets where IBM needed credibility and share of voice. The content worked because it answered why, not just what.",
    outcomes: [
      "Journalist-quality branded content across four startup markets",
      "IBM commissioned TechPortfolio as a dedicated distribution platform for the work",
      "Content designed to answer why, not just what — building credibility with technically sophisticated audiences",
    ],
  },
  {
    sector: "Digital Health · Regulated Communications",
    title: "Enhancing brand, product and scientific communication",
    image: "/images/work-perfood.jpg",
    imageAlt: "Perfood team presentation",
    body: "Perfood was a regulated digital health company developing prescription digital therapeutics — apps formally approved and prescribed by doctors — for conditions including type 2 diabetes and migraine. Operating within Germany's DiGA framework, one of the world's most rigorous regulatory environments for digital health, the company needed communications that could simultaneously satisfy clinical standards, build investor confidence, and establish public credibility in a sector most people had never heard of. As Director of Brand and Corporate Communications, I built the communications function from the ground up across a complex stakeholder landscape: patients, clinicians, investors, regulators, and strategic partners.",
    outcomes: [
      "Built communications function from the ground up across clinical, investor, and public channels",
      "Established Perfood as a credible voice in Germany's DiGA policy environment",
      "Grew LinkedIn community significantly with consistently high editorial standards",
      "Relationships established with European Innovation Council and UCSF Digital Health",
    ],
  },
  {
    sector: "Public Broadcasting · Journalism",
    title: "At the center of national and international news",
    image: "/images/work-cbc.jpg",
    imageAlt: "Deen Karim at CBC News",
    body: "The Canadian Broadcasting Corporation is Canada's national public broadcaster — responsible for informing Canadians from the high North to the largest cities on the most consequential stories of the day, 24 hours a day, to the highest editorial standards. Across eleven years and multiple senior roles, I was consistently trusted with the assignments that mattered most. As a Visuals Producer I monitored live combat footage during the opening weeks of the Iraq War. As a Senior Writer I was principal writer on leading news stories. As Social Media Producer, I developed and presented the proposal for CBC's social media news strategy, contributing to its implementation and helping build a Twitter following five times larger than the network's main competitor.",
    outcomes: [
      "Principal writer on defining national and international news events",
      "Co-produced Our World — the second most-watched weekend current affairs program on the network",
      "Contributed to CBC's social media strategy — Twitter following five times larger than main competitor",
      "Lead role in social media coverage of the Vancouver 2010 Winter Olympics",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#f8f6f2] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-medium text-[#4a6fa5] tracking-widest uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-[#1a1a1a] mb-16">
          Three chapters
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col bg-[#f8f6f2] border border-[#dddbd7]"
            >
              {/* Image */}
              <div className="relative h-52 bg-[#eeece8] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-medium text-[#4a6fa5] tracking-widest uppercase mb-3">
                  {card.sector}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
                  {card.body}
                </p>

                {/* Outcomes */}
                <div className="mt-auto pt-5 border-t border-[#dddbd7]">
                  <ul className="space-y-2">
                    {card.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-xs text-[#1a1a1a] leading-relaxed">
                        <span className="text-[#4a6fa5] mt-0.5 shrink-0">—</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
