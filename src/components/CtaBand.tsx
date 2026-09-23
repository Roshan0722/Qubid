import { Btn, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[620px] text-center">
          <Reveal variant="fade">
            <Eyebrow className="text-green">Get started</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-3 text-[28px] text-white sm:text-[34px]">
              Start winning more tenders today
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Join the UK suppliers using Qubid to find, write and submit better bids.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              <Btn variant="white" href="#/product">
                Request a Demo
              </Btn>
              <Btn variant="green" href="#/sign-up">
                Try for Free
              </Btn>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
