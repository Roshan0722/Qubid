import { Container } from "./ui";
import Reveal, { CountUp } from "./Reveal";

const SOURCES = [
  "Find a Tender",
  "Contracts Finder",
  "Sell2Wales",
  "Public Contracts Scotland",
  "eTendersNI",
  "Crown Commercial",
];

export default function SourceStrip() {
  return (
    <section className="border-b border-hair bg-white py-12 sm:py-14">
      <Container>
        <Reveal variant="fade">
          <p className="text-center text-[13px] font-medium text-ink/65">
            <CountUp value="1,000+" className="font-semibold text-navy" /> new tenders
            indexed every day
          </p>
        </Reveal>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {SOURCES.map((s, i) => (
            <Reveal key={s} delay={120 + i * 90} variant="up">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9AA7B0] transition-colors hover:text-navy">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
