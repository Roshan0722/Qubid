import { Btn, Container, Eyebrow, G } from "./ui";
import Reveal from "./Reveal";
import { ProfileCard, ProposalReadyCard, SearchCard, UploadCard } from "./mockups";

export default function Hero() {
  return (
    <section className="border-b border-hair bg-white pt-[104px] sm:pt-[124px]">
      <Container className="pb-16 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* left */}
          <div className="max-w-[520px]">
            <Reveal variant="fade">
              <Eyebrow>AI-Powered Tender Discovery</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-[34px] leading-[1.12] sm:text-[44px] lg:text-[52px]">
                Find Every Tender <G>Worth Winning</G>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/85">
                Qubid scans every UK public sector portal, drafts your proposal and keeps
                every deadline on track.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <Btn variant="green" href="#/sign-up">
                  Try for Free
                </Btn>
                <Btn variant="white" href="#/product">
                  Book a Demo
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hair pt-5 text-[12.5px] text-ink/65">
                <span>6 UK portals in one feed</span>
                <span className="hidden h-3 w-px bg-hair sm:block" />
                <span>ISO 27001 certified</span>
                <span className="hidden h-3 w-px bg-hair sm:block" />
                <span>UK data residency</span>
              </div>
            </Reveal>
          </div>

          {/* right — asymmetric mosaic */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="space-y-3 sm:space-y-4 lg:pt-6">
              <Reveal variant="pop" delay={200} className="soft-float [animation-delay:1.2s]">
                <ProfileCard />
              </Reveal>
              <Reveal variant="pop" delay={360} className="soft-float [animation-delay:1.9s]">
                <UploadCard />
              </Reveal>
            </div>
            <div className="space-y-3 sm:space-y-4 lg:pb-8">
              <Reveal variant="pop" delay={280} className="soft-float [animation-delay:900ms]">
                <SearchCard />
              </Reveal>
              <Reveal variant="pop" delay={440} className="soft-float [animation-delay:2.5s]">
                <ProposalReadyCard />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
