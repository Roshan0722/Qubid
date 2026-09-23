import { Btn, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { ProductPreview } from "./mockups";

const STEPS = [
  {
    n: "01",
    t: "Build your profile",
    d: "Tell Qubid what you deliver, where, and at what contract value.",
  },
  {
    n: "02",
    t: "Get matched",
    d: "Scored opportunities land in your feed the morning they publish.",
  },
  {
    n: "03",
    t: "Bid with confidence",
    d: "Draft, review and submit against a live compliance checklist.",
  },
];

export default function DarkBand() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-navy py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade">
              <Eyebrow className="text-green">How it works</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 max-w-[440px] text-[28px] text-white sm:text-[32px] lg:text-[36px]">
                From Search to Submission in Minutes
              </h2>
            </Reveal>

            <ol className="mt-9 space-y-0">
              {STEPS.map((s, i) => (
                <Reveal
                  key={s.n}
                  as="li"
                  delay={180 + i * 130}
                  className={`py-5 ${i === 0 ? "border-t" : ""} border-b border-white/12`}
                >
                  <h3 className="text-[16px] text-white">{s.t}</h3>
                  <p className="mt-1 max-w-[380px] text-[13.5px] leading-relaxed text-white/65">
                    {s.d}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={580}>
              <Btn variant="green" href="#/sign-up" className="mt-8">
                Start free trial
              </Btn>
            </Reveal>
          </div>

          <Reveal variant="right" delay={220} className="lg:pl-6">
            <ProductPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
