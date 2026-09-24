import { Btn, Check, Container, G, SectionHead } from "./ui";
import Reveal from "./Reveal";
import { ShotRadar, ShotStudio, ShotWide } from "./mockups";

const CARDS = [
  {
    cat: "Discovery",
    name: "Tender Radar",
    desc: "One live feed of every UK notice, scored against your capability profile so nothing relevant slips past.",
    shot: <ShotRadar />,
  },
  {
    cat: "Writing",
    name: "Proposal Studio",
    desc: "Structured drafting with your past answers, evidence library and evaluator-ready language built in.",
    shot: <ShotStudio />,
  },
];

export default function Features() {
  return (
    <section id="platform" className="scroll-mt-24 border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHead
          eyebrow="The Platform"
          sub="Two products, one workspace  from the first notice you see to the file you submit."
        >
          Everything you need to <G>bid better</G>
        </SectionHead>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {CARDS.map((c, idx) => (
            <Reveal
              key={c.name}
              delay={idx * 110}
              className="flex"
              variant="up"
            >
            <article
              className="relative flex w-full flex-col rounded-xl border border-hair bg-white p-5 lift transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#cfd9df] sm:p-6"
            >
              <div className="rounded-lg bg-bgalt p-3 sm:p-4">{c.shot}</div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
                {c.cat}
              </p>
              <h3 className="mt-2 text-[20px]">{c.name}</h3>
              <p className="mt-2 max-w-[380px] pr-8 text-[14px] leading-relaxed text-ink/80">
                {c.desc}
              </p>
              <a
                href="#/product"
                aria-label={`More about ${c.name}`}
                className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-hair text-navy transition-colors hover:border-green hover:text-green sm:bottom-6 sm:right-6"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                </svg>
              </a>
            </article>
            </Reveal>
          ))}
        </div>

        {/* full width card */}
        <Reveal delay={120} className="block">
        <article className="mt-4 grid items-center gap-8 rounded-xl border border-hair bg-white p-6 lift sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 lg:p-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Automation
            </p>
            <h3 className="mt-3 text-[26px] sm:text-[30px]">AI that does the work.</h3>
            <p className="mt-3 max-w-[420px] text-[14.5px] leading-relaxed text-ink/80">
              Qubid reads the specification, maps the requirements and returns a first
              draft your bid team can actually use.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Requirement extraction from every ITT and PQQ document",
                "First-draft answers grounded in your own winning content",
                "Automatic compliance checks before you submit",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <Check className="mt-[3px]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Btn variant="green" className="mt-7">
              See how it works
            </Btn>
          </div>
          <div className="rounded-lg bg-bgalt p-3 sm:p-5">
            <ShotWide />
          </div>
        </article>
        </Reveal>
      </Container>
    </section>
  );
}
