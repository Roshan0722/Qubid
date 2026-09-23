import { ArrowLink, Container, G, SectionHead } from "./ui";
import Reveal from "./Reveal";
import { IllClock, IllDraft, IllSearch } from "./mockups";

const CARDS = [
  {
    title: "Tender Discovery",
    body: "Capability-matched notices from all six UK portals, filtered by value, region, buyer and CPV code.",
    art: <IllSearch />,
    href: "#/product",
  },
  {
    title: "Proposal Drafting",
    body: "Turn a 90-page ITT into a structured response plan and a first draft in a single working session.",
    art: <IllDraft />,
    href: "#/product",
  },
  {
    title: "Deadline Tracking",
    body: "Clarification windows, submission dates and award notices synced to your calendar with owner alerts.",
    art: <IllClock />,
    href: "#/product",
  },
];

export default function ThreeCards() {
  return (
    <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHead eyebrow="Capabilities">
          Built for how bids <G>actually get won</G>
        </SectionHead>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} variant="up" className="flex">
              <article className="group flex w-full flex-col rounded-xl border border-hair bg-white p-6 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]">
                {c.art}
                <h3 className="mt-6 text-[18px]">{c.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink/80">{c.body}</p>
                <div className="mt-6 border-t border-hair pt-4">
                  <ArrowLink href={c.href}>Learn more</ArrowLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
