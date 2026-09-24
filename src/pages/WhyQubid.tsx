import CtaBand from "../components/CtaBand";
import { Btn, Check, Container, Eyebrow, G, SectionHead } from "../components/ui";
import Reveal, { CountUp } from "../components/Reveal";
import { cn } from "../utils/cn";

/* ---------------- data ---------------- */

const STATS = [
  { v: "1,000+", l: "Notices indexed daily" },
  { v: "66%", l: "Faster response turnaround" },
  { v: "3.1×", l: "More qualified opportunities" },
  { v: "6", l: "UK portals in one feed" },
];

const PROBLEMS = [
  {
    n: "01",
    t: "Six portals, no single view",
    d: "Buyers publish across Find a Tender, Contracts Finder and four devolved systems. Most teams check two and hope for the best.",
  },
  {
    n: "02",
    t: "Keyword alerts miss the work",
    d: "Generic alerts match on job titles and boilerplate, so the inbox fills with noise while the right notice closes quietly.",
  },
  {
    n: "03",
    t: "Writing starts from zero",
    d: "Answers you have already written sit in old submissions nobody can find, so every bid is rebuilt from a blank page.",
  },
];

const WITHOUT = [
  "Manual portal checks every morning",
  "Keyword alerts with 80% irrelevant results",
  "Requirements read by hand from 90-page ITTs",
  "Past answers scattered across shared drives",
  "Deadlines tracked in a spreadsheet",
];

const WITH = [
  "One scored feed across all six UK portals",
  "Capability matching tuned to your win history",
  "Requirements extracted automatically on upload",
  "A searchable library of your winning content",
  "Deadlines synced with owners and reminders",
];

const ROWS: { label: string; qubid: string; alerts: string; manual: string }[] = [
  { label: "All six UK portals in one feed", qubid: "yes", alerts: "part", manual: "no" },
  { label: "Capability-based match scoring", qubid: "yes", alerts: "no", manual: "no" },
  { label: "Requirement extraction from ITT/PQQ", qubid: "yes", alerts: "no", manual: "no" },
  { label: "First-draft answer generation", qubid: "yes", alerts: "no", manual: "no" },
  { label: "Reusable answer library", qubid: "yes", alerts: "no", manual: "part" },
  { label: "Compliance matrix before submission", qubid: "yes", alerts: "no", manual: "part" },
  { label: "Deadline tracking with owners", qubid: "yes", alerts: "part", manual: "part" },
  { label: "UK data residency, no model training", qubid: "yes", alerts: "part", manual: "yes" },
];

const DIFFS = [
  {
    n: "01",
    t: "Built on UK procurement",
    d: "Qubid understands CPV codes, lots, frameworks, DPS and the 2023 Procurement Act  not a generic assistant with a prompt bolted on.",
  },
  {
    n: "02",
    t: "Grounded in your own content",
    d: "Drafts are written from your past submissions, case studies and policies, so the voice is yours and the evidence is real.",
  },
  {
    n: "03",
    t: "Evaluator-shaped output",
    d: "Every answer is mapped to the published scoring criteria and word limits, with gaps flagged before you submit.",
  },
  {
    n: "04",
    t: "One workspace, end to end",
    d: "Discovery, drafting, review and deadlines live in the same place, so nothing is lost between tools or inboxes.",
  },
];

const TRUST = [
  { t: "ISO 27001", d: "Certified information security management" },
  { t: "Cyber Essentials Plus", d: "Independently assessed annually" },
  { t: "UK data residency", d: "All data stored in UK regions" },
  { t: "No model training", d: "Your content is never used to train AI" },
];

/* ---------------- cells ---------------- */

function Cell({ v }: { v: string }) {
  if (v === "yes")
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <Check />
      </span>
    );
  if (v === "part")
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <span className="h-[2px] w-3.5 rounded-full bg-[#C6D0D6]" />
      </span>
    );
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center">
      <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#C6D0D6]" fill="none" aria-hidden>
        <path
          d="M4.5 4.5l7 7M11.5 4.5l-7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* ---------------- page ---------------- */

export default function WhyQubid() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="border-b border-hair bg-white pt-[104px] sm:pt-[124px]">
        <Container className="pb-14 sm:pb-16">
          <nav className="mb-8 flex items-center gap-2 text-[12px] text-ink/55">
            <a href="#/" className="hover:text-green">
              Home
            </a>
            <span className="text-hair">/</span>
            <span className="text-navy">Why Qubid</span>
          </nav>

          <div className="max-w-[640px]">
            <Reveal variant="fade">
              <Eyebrow>Why Qubid</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-[34px] leading-[1.12] sm:text-[42px] lg:text-[48px]">
                The case for <G>switching</G>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/85">
                Tender alert services tell you a notice exists. Qubid tells you whether it
                is worth bidding, then helps you write the response.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <Btn variant="green" href="#/sign-up">
                  Try for Free
                </Btn>
                <Btn variant="white" href="#/product">
                  Book a Demo
                </Btn>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 border-t border-hair sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.l}
                delay={200 + i * 110}
                variant="fade"
                className={cn(
                  "border-b border-hair px-1 py-6 sm:border-b-0 sm:px-0",
                  i > 0 && "sm:border-l sm:border-hair sm:pl-6",
                  i % 2 === 1 && "border-l border-hair pl-5 sm:pl-6",
                )}
              >
                <p className="text-[26px] font-semibold leading-none text-navy sm:text-[30px]">
                  <CountUp value={s.v} delay={i * 90} />
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-ink/65">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="The problem"
            sub="Public procurement is one of the largest markets in the UK, and most suppliers still work it by hand."
          >
            Bidding is still <G>mostly manual</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120} variant="up" className="flex">
                <article className="w-full rounded-xl border border-hair bg-white p-6 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]">
                  <h3 className="text-[17px]">{p.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/80">{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead eyebrow="The difference">
            What changes in the <G>first week</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal variant="left" className="rounded-xl border border-hair bg-bgalt p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                Without Qubid
              </p>
              <ul className="mt-6 space-y-4">
                {WITHOUT.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14px] text-ink/75">
                    <svg
                      viewBox="0 0 16 16"
                      className="mt-[3px] h-4 w-4 shrink-0 text-[#B9C4CB]"
                      fill="none"
                      aria-hidden
                    >
                      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.3" />
                      <path
                        d="M5.4 5.4l5.2 5.2M10.6 5.4l-5.2 5.2"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" delay={120} className="rounded-xl border border-hair bg-white p-6 lift sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
                With Qubid
              </p>
              <ul className="mt-6 space-y-4">
                {WITH.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14px] text-ink">
                    <Check className="mt-[3px]" />
                    <span>{t}</span>
                  </li>
                 ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="Compare"
            sub="How Qubid sits against a standard alert subscription and running the process in-house."
          >
            One platform instead of <G>three habits</G>
          </SectionHead>

          <Reveal delay={80} className="mt-12 overflow-x-auto rounded-xl border border-hair bg-white lift">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hair">
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    Capability
                  </th>
                  <th className="w-[130px] px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
                    Qubid
                  </th>
                  <th className="w-[150px] px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    Alert services
                  </th>
                  <th className="w-[130px] px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    In-house
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-b border-hair last:border-b-0">
                    <td className="px-5 py-3.5 text-[14px] text-navy">{r.label}</td>
                    <td className="bg-green/[0.03] px-4 py-3.5 text-center">
                      <Cell v={r.qubid} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={r.alerts} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={r.manual} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal variant="fade" delay={200}>
            <p className="mt-4 text-center text-[12px] text-ink/55">
              Green check = included · dash = partial · cross = not available
            </p>
          </Reveal>
        </Container>
      </section>

      {/* DIFFERENTIATORS  dark band */}
      <section className="bg-navy py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-[560px]">
            <Eyebrow className="text-green">What makes it different</Eyebrow>
            <h2 className="mt-3 text-[28px] text-white sm:text-[32px] lg:text-[36px]">
              Procurement software that happens to use AI
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Not a chatbot with a tender filter. Every part of Qubid is shaped by how UK
              public sector bids are actually scored.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-2">
            {DIFFS.map((d, i) => (
              <Reveal key={d.n} variant="fade" delay={i * 130} as="article" className="bg-navy p-6 sm:p-8">
                <h3 className="text-[17px] text-white">{d.t}</h3>
                <p className="mt-2 max-w-[400px] text-[13.5px] leading-relaxed text-white/65">
                  {d.d}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Btn variant="green">See the product</Btn>
          </div>
        </Container>
      </section>

      {/* QUOTE */}
      <section className="border-b border-hair bg-white py-16 sm:py-20">
        <Container>
          <Reveal as="figure" variant="pop" className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Customer</Eyebrow>
            <blockquote className="mt-5 text-[20px] font-medium leading-snug text-navy sm:text-[26px]">
              “We trialled two alert services before Qubid. The difference is that Qubid
              does something with the notice once it finds it.”
            </blockquote>
            <figcaption className="mt-6 text-[13px] text-ink/70">
              Priya Anand · Head of Bids, Nordhall Facilities
            </figcaption>
          </Reveal>
        </Container>
      </section>

      {/* TRUST */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead eyebrow="Trust">
            Safe for <G>public sector work</G>
          </SectionHead>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t, i) => (
              <Reveal key={t.t} delay={i * 100} variant="up" as="article" className="rounded-xl border border-hair bg-white p-5 lift">
                <Check />
                <h3 className="mt-4 text-[15px]">{t.t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/75">{t.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
