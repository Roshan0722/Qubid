import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { ArrowLink, Btn, Check, Container, Eyebrow, G, SectionHead } from "../components/ui";
import Reveal from "../components/Reveal";
import { LineArt, ShotRadar, ShotStudio, ShotWide } from "../components/mockups";

/* ---------- data ---------- */

const PRODUCTS = [
  {
    cat: "Discovery",
    name: "Tender Radar",
    desc: "A single scored feed across all six UK portals, filtered by capability, value, region and buyer.",
    bullets: [
      "Live indexing of Find a Tender, Contracts Finder, Sell2Wales, PCS, eTendersNI and CCS",
      "Match scores that improve as your team accepts or rejects notices",
      "Saved searches that become morning digests for the whole bid team",
    ],
    shot: <ShotRadar />,
  },
  {
    cat: "Writing",
    name: "Proposal Studio",
    desc: "Turn a published ITT into a structured response plan and a reviewable first draft.",
    bullets: [
      "Automatic requirement extraction with a live compliance matrix",
      "Answers grounded in your own past submissions and evidence library",
      "Section owners, comments and version history for every contributor",
    ],
    shot: <ShotStudio />,
    flip: true,
  },
  {
    cat: "Delivery",
    name: "Deadline Tracking",
    desc: "Every clarification window, submission date and award notice in one calendar with named owners.",
    bullets: [
      "Owner-level reminders by email, Slack or Microsoft Teams",
      "Milestone templates for framework, DPS and open-tender routes",
      "Submission audit trail for post-bid debriefs",
    ],
    shot: <ShotWide />,
  },
];

const CAPABILITIES = [
  { t: "CPV and lot matching", d: "Understands lots, DPS and framework structures." },
  { t: "Evidence library", d: "Reusable case studies, policies and staff CVs." },
  { t: "Word limits", d: "Live counters against every published limit." },
  { t: "Social value", d: "Scoring-aligned prompts and measurable commitments." },
  { t: "Pricing tables", d: "Structured price schedules with sanity checks." },
  { t: "Debrief analysis", d: "Score feedback turned into next-bid actions." },
];

const INTEGRATIONS = [
  "Microsoft Word",
  "SharePoint",
  "Outlook",
  "Microsoft Teams",
  "Slack",
  "Google Drive",
];

/* ---------- page ---------- */

export default function Product() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={
          <>
            From notice to <G>submission</G>
          </>
        }
        sub="Qubid covers the whole UK bid workflow: discovery, requirement analysis, drafting, compliance and deadlines  in one flat, fast workspace."
        crumbs={[{ label: "Home", href: "#/" }, { label: "Product" }]}
      >
        <Reveal delay={320} variant="pop" className="mt-12 rounded-xl border border-hair bg-bgalt p-3 lift sm:p-6">
          <div className="mx-auto max-w-[900px]">
            <ShotWide />
          </div>
        </Reveal>
      </PageHero>

      {/* PRODUCTS DEEP DIVE */}
      <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="The products"
            sub="Three connected modules. Use one, or run the full workflow end to end."
          >
            Module by <G>module</G>
          </SectionHead>

          <div className="mt-12 space-y-4">
            {PRODUCTS.map((p, pi) => (
              <Reveal
                key={p.name}
                delay={pi * 60}
                variant="up"
                as="article"
                className="grid items-center gap-8 rounded-xl border border-hair bg-white p-5 lift sm:p-7 lg:grid-cols-2 lg:gap-14 lg:p-9"
              >
                <div className={p.flip ? "lg:order-2" : ""}>
                  <Eyebrow>{p.cat}</Eyebrow>
                  <h3 className="mt-3 text-[24px] sm:text-[28px]">{p.name}</h3>
                  <p className="mt-3 max-w-[420px] text-[14.5px] leading-relaxed text-ink/80">
                    {p.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink">
                        <Check className="mt-[3px]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <ArrowLink>Explore {p.name}</ArrowLink>
                  </div>
                </div>
                <div
                  className={`rounded-lg bg-bgalt p-3 sm:p-5 ${
                    p.flip ? "lg:order-1" : ""
                  }`}
                >
                  {p.shot}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CAPABILITY GRID */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="Capabilities"
            sub="The details that decide whether a bid is compliant, competitive and on time."
          >
            Built for the <G>detail</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal
                key={c.t}
                delay={(i % 3) * 100}
                variant="up"
                as="article"
                className="group rounded-xl border border-hair bg-white p-5 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hair text-green transition-transform duration-300 group-hover:rotate-90">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </span>
                <h3 className="mt-4 text-[15px]">{c.t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/75">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* INTEGRATIONS */}
      <section className="border-b border-hair bg-white py-14 sm:py-16">
        <Container>
          <p className="text-center text-[13px] font-medium text-ink/65">
            Works with the tools your <span className="font-semibold text-navy">bid team</span> already uses
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {INTEGRATIONS.map((label, i) => (
              <Reveal key={label} delay={i * 80} variant="up">
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9AA7B0] transition-colors hover:text-navy">
                  {label}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WORKFLOW BAND */}
      <section className="bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal variant="fade">
              <Eyebrow className="text-green">Workflow</Eyebrow>
              </Reveal>
              <h2 className="mt-3 max-w-[440px] text-[28px] sm:text-[32px] lg:text-[36px]">
                One workspace replaces the spreadsheet
              </h2>
              <p className="mt-4 max-w-[400px] text-[15px] leading-relaxed text-ink/80">
                Alerts arrive, requirements are extracted, drafts are written and
                deadlines are owned  all without leaving Qubid.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Unlimited alerts on every plan",
                  "Native Word and PDF export",
                  "API access on Enterprise",
                ].map((t, i) => (
                  <Reveal key={t} as="li" variant="fade" delay={200 + i * 110} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <Check className="mt-[3px]" />
                    <span>{t}</span>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={320}>
                <Btn variant="green" href="#/sign-up" className="mt-8">
                  Start free trial
                </Btn>
              </Reveal>
            </div>
            <Reveal variant="right" delay={200} className="lg:pl-6">
              <LineArt light />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
