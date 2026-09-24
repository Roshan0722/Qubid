import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { ArrowLink, Container, Eyebrow, G, SectionHead } from "../components/ui";
import Reveal, { CountUp } from "../components/Reveal";
import { IllClock, IllDraft, IllSearch } from "../components/mockups";

/* ---------- data ---------- */

const SECTORS = [
  {
    t: "Construction & Infrastructure",
    d: "Framework and DPS bids for housing, civils and highways, with price schedules that stay consistent across lots.",
    m: "£2.4m",
    ml: "median contract won",
  },
  {
    t: "Technology & Digital",
    d: "Cloud, cyber and transformation contracts where method statements and data-security answers decide the score.",
    m: "18",
    ml: "frameworks monitored",
  },
  {
    t: "Health & Social Care",
    d: "NHS trust and local authority care contracts, with CQC evidence and staffing matrices mapped in.",
    m: "96%",
    ml: "compliance pass rate",
  },
  {
    t: "Facilities Management",
    d: "Cleaning, security and hard FM tenders across multi-site estates with TUPE and social value requirements.",
    m: "3.1×",
    ml: "more qualified notices",
  },
  {
    t: "Professional Services",
    d: "Consultancy, audit and advisory lots where team CVs and quality responses carry the most marks.",
    m: "66%",
    ml: "faster turnaround",
  },
  {
    t: "Education & Public Bodies",
    d: "School, college and council supply tenders, including traded services and multi-academy trusts.",
    m: "1 day",
    ml: "typical onboarding",
  },
];

const TEAMS = [
  {
    t: "Bid owner",
    d: "One person doing discovery, writing and submission alongside the day job.",
    b: "Alerts, drafts and a deadline calendar in a single login.",
    art: <IllSearch />,
  },
  {
    t: "Bid team of 2–10",
    d: "Shared pipeline with section owners and review stages before submission.",
    b: "Workspaces, comments and version history on every response.",
    art: <IllDraft />,
  },
  {
    t: "Enterprise & bid desks",
    d: "Multi-entity teams bidding across frameworks, regions and major contracts.",
    b: "SSO, API access, audit logging and dedicated onboarding.",
    art: <IllClock />,
  },
];

const OUTCOMES = [
  { v: "3.1×", l: "More qualified opportunities in the first quarter" },
  { v: "66%", l: "Shorter turnaround on mid-size framework responses" },
  { v: "£4.2m", l: "Additional contract value won by one customer" },
  { v: "0", l: "Missed submission deadlines in 18 months" },
];

/* ---------- page ---------- */

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Built for <G>how you bid</G>
          </>
        }
        sub="Whether you sell CCTV maintenance to a district council or a £40m transformation programme to central government, Qubid adapts to your sector and your team."
        crumbs={[{ label: "Home", href: "#/" }, { label: "Solutions" }]}
      />

      {/* SECTORS */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="By sector"
            sub="Every sector carries its own scoring weightings. Qubid is tuned to the ones that decide your bids."
          >
            Tuned to your <G>market</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 110} variant="up" className="flex">
                <article className="flex w-full flex-col rounded-xl border border-hair bg-white p-5 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df] sm:p-6">
                  <h3 className="text-[16px]">{s.t}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink/80">{s.d}</p>
                  <div className="mt-5 border-t border-hair pt-4">
                    <p className="text-[19px] font-semibold leading-none text-navy">{s.m}</p>
                    <p className="mt-1.5 text-[12px] text-ink/60">{s.ml}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BY TEAM */}
      <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="By team"
            sub="Plans scale with the number of people involved, never with the number of tenders you find."
          >
            Sized for your <G>team</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {TEAMS.map((t, i) => (
              <Reveal key={t.t} delay={i * 120} variant="up" className="flex">
              <article
                className="flex w-full flex-col rounded-xl border border-hair bg-white p-6 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]"
              >
                {t.art}
                <h3 className="mt-6 text-[18px]">{t.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/80">{t.d}</p>
                <p className="mt-4 flex-1 border-t border-hair pt-4 text-[13px] leading-relaxed text-ink/70">
                  {t.b}
                </p>
                <div className="mt-5">
                  <ArrowLink href="#/pricing">See plans</ArrowLink>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OUTCOMES  dark band */}
      <section className="bg-navy py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-[540px]">
            <Eyebrow className="text-green">Outcomes</Eyebrow>
            <h2 className="mt-3 text-[28px] text-white sm:text-[32px] lg:text-[36px]">
              What teams report back
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.l} delay={i * 130} variant="fade" className="bg-navy p-6 sm:p-7">
                <p className="text-[28px] font-semibold leading-none text-white">
                  <CountUp value={o.v} delay={i * 110} />
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">{o.l}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-white/70">
            Typical results across 400+ UK suppliers using Qubid in 2025.
          </p>
        </Container>
      </section>

      {/* QUOTE */}
      <section className="border-b border-hair bg-white py-16 sm:py-20">
        <Container>
          <figure className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Facilities Management</Eyebrow>
            <blockquote className="mt-5 text-[20px] font-medium leading-snug text-navy sm:text-[26px]">
              “We used to find out about a re-tender when a competitor asked us for TUPE
              data. Now we see it the day it publishes.”
            </blockquote>
            <figcaption className="mt-6 text-[13px] text-ink/70">
              Priya Anand · Head of Bids, Nordhall Facilities
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* SERVICE */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-xl border border-hair bg-white p-6 lift sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow>Included with every plan</Eyebrow>
              <h2 className="mt-3 text-[24px] sm:text-[28px]">
                People behind the <G>product</G>
              </h2>
              <p className="mt-4 max-w-[420px] text-[14.5px] leading-relaxed text-ink/80">
                Onboarding, template libraries and a UK-based bid desk you can actually
                reach during a live tender.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                ["Onboarding call", "Profile and alert set-up in one session."],
                ["Tender briefings", "Weekly session on new frameworks and lots."],
                ["Bid review clinic", "A senior bid manager reads your draft."],
                ["Template library", "Structure and word limits for every route."],
              ].map(([t, d]) => (
                <li key={t} className="border-t border-hair pt-4">
                  <h3 className="text-[14px]">{t}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/75">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
