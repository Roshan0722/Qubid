import { useState } from "react";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { Btn, Check, Container, Eyebrow, G, SectionHead } from "../components/ui";
import Reveal from "../components/Reveal";
import { cn } from "../utils/cn";

/* ---------- data ---------- */

type Plan = {
  name: string;
  tag: string;
  monthly: number | null;
  tokens: number | null;
  d: string;
  feature: string;
  feats: string[];
  cta: string;
  ctaHref: string;
  note: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tag: "Sole bidder or first-time supplier",
    monthly: 149,
    tokens: 25,
    d: "Everything needed to find tenders and submit a credible first response.",
    feature: "1 workspace seat",
    feats: [
      "Unlimited tender alerts",
      "All six UK portals indexed",
      "5 proposal drafts per month",
      "Deadline calendar with reminders",
      "Email support, next working day",
    ],
    cta: "Start free trial",
    ctaHref: "#/sign-up",
    note: "14-day trial, no card required",
  },
  {
    name: "Growth",
    tag: "Bid teams of 2–10",
    monthly: 449,
    tokens: 150,
    d: "The full workflow for teams who bid every month and need reviews.",
    feature: "5 workspace seats",
    feats: [
      "Everything in Starter",
      "25 proposal drafts per month",
      "Shared answer and evidence library",
      "Compliance matrix and word limits",
      "Slack, Teams and Outlook sync",
      "Priority support, 4-hour response",
    ],
    cta: "Start free trial",
    ctaHref: "#/sign-up",
    note: "Most popular with mid-market suppliers",
  },
  {
    name: "Enterprise",
    tag: "Bid desks and multi-entity groups",
    monthly: null,
    tokens: null,
    d: "Controls, scale and support for organisations running many bids at once.",
    feature: "Unlimited seats",
    feats: [
      "Everything in Growth",
      "Unlimited proposal drafts",
      "SSO, SAML and role permissions",
      "Audit logging and full API access",
      "Dedicated bid desk and onboarding",
      "Custom DPA and security review",
    ],
    cta: "Talk to sales",
    ctaHref: "mailto:sales@qubid.co.uk?subject=Qubid%20Enterprise%20enquiry",
    note: "Annual agreement, scales to group level",
  },
];

const MATRIX: { label: string; a: string; b: string; c: string }[] = [
  { label: "Tender alerts across all six UK portals", a: "yes", b: "yes", c: "yes" },
  { label: "Workspace seats", a: "1", b: "5", c: "Unlimited" },
  { label: "Proposal drafts per month", a: "5", b: "25", c: "Unlimited" },
  { label: "Evidence and answer library", a: "part", b: "yes", c: "yes" },
  { label: "Compliance matrix and word limits", a: "no", b: "yes", c: "yes" },
  { label: "Slack, Teams and Outlook sync", a: "no", b: "yes", c: "yes" },
  { label: "SSO, SAML and audit logging", a: "no", b: "no", c: "yes" },
  { label: "API access", a: "no", b: "no", c: "yes" },
  { label: "Support", a: "Email", b: "Priority 4h", c: "Dedicated desk" },
  { label: "Custom DPA and security review", a: "no", b: "no", c: "yes" },
];

const FAQ = [
  {
    q: "Is there a free trial?",
    a: "Every plan starts with 14 days of full access, no card required. You keep any tender alerts and saved searches you create.",
  },
  {
    q: "What counts as a proposal draft?",
    a: "One initiative converted into a structured response plan with requirement extraction and a first draft. Edits, exports and re-reads are unlimited.",
  },
  {
    q: "Can I change plans mid-term?",
    a: "Yes. Upgrade at any time and pay the difference pro-rata. Downgrades take effect at the next renewal date.",
  },
  {
    q: "Do you offer charity, education or SME discounts?",
    a: "Registered charities, schools and suppliers under 10 employees receive 25% off Starter and Growth on annual plans.",
  },
];

/* ---------- cells ---------- */

function Cell({ v }: { v: string }) {
  if (v === "yes")
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <Check />
      </span>
    );
  if (v === "no")
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#C6D0D6]" fill="none" aria-hidden>
          <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  if (v === "part")
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <span className="h-[2px] w-3.5 rounded-full bg-[#C6D0D6]" />
      </span>
    );
  return <span className="text-[13px] font-medium text-navy">{v}</span>;
}

/* ---------- page ---------- */

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [open, setOpen] = useState(0);

  const price = (p: Plan) => {
    if (p.monthly === null) return "Custom";
    const m = annual ? Math.round(p.monthly * 0.8) : p.monthly;
    return `£${m}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple pricing that <G>scales with bids</G>
          </>
        }
        sub="Flat monthly pricing per workspace with unlimited tender alerts. All plans include the same portal coverage, UK data residency and no model training on your content."
        crumbs={[{ label: "Home", href: "#/" }, { label: "Pricing" }]}
      >
        {/* billing toggle */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-hair bg-white p-1">
            {[
              { k: false, l: "Monthly" },
              { k: true, l: "Annual · save 20%" },
            ].map((o) => (
              <button
                key={o.l}
                onClick={() => setAnnual(o.k)}
                className={cn(
                  "rounded-full px-4 py-[7px] text-[13px] font-medium transition-colors",
                  annual === o.k ? "bg-navy text-white" : "text-ink hover:text-navy",
                )}
              >
                {o.l}
              </button>
            ))}
          </div>
          <p className="text-[12.5px] text-ink/60">
            All prices exclude VAT · billed per workspace
          </p>
        </div>
      </PageHero>

      {/* PLANS */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {PLANS.map((p, pi) => {
              const featured = p.name === "Growth";
              return (
                <Reveal
                  key={p.name}
                  delay={pi * 130}
                  variant="up"
                  className="flex"
                >
                <article
                  className={cn(
                    "relative flex w-full flex-col rounded-xl border bg-white p-6 lift transition-[border-color,transform] duration-300 hover:-translate-y-1 sm:p-7",
                    featured ? "border-navy" : "border-hair",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[18px]">{p.name}</h2>
                    {featured && (
                      <span className="rounded-full border border-green/30 bg-green/5 px-2.5 py-[3px] text-[10.5px] font-semibold uppercase tracking-[0.1em] text-green">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-ink/65">{p.tag}</p>

                  <div className="mt-6 flex items-baseline gap-2 border-t border-hair pt-6">
                    <span className="text-[32px] font-semibold leading-none text-navy">
                      {price(p)}
                    </span>
                    {p.monthly !== null && (
                      <span className="text-[13px] text-ink/60">/ month</span>
                    )}
                  </div>
                  <p className="mt-2 text-[12.5px] text-ink/60">
                    {p.feature} · {p.tokens === null ? "unlimited drafts" : `${p.tokens} drafts / month`}
                  </p>

                  <p className="mt-5 text-[13.5px] leading-relaxed text-ink/80">{p.d}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {p.feats.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-ink">
                        <Check className="mt-[3px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Btn
                    variant={featured ? "green" : "white"}
                    href={p.ctaHref}
                    className="mt-7 w-full"
                  >
                    {p.cta}
                  </Btn>
                  <p className="mt-3 text-center text-[11.5px] text-ink/55">{p.note}</p>
                </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* COMPARISON */}
      <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow="Compare"
            sub="Every plan includes all six UK portals, unlimited alerts, UK data residency and no model training."
          >
            Plan <G>details</G>
          </SectionHead>

          <Reveal delay={80} className="mt-12 overflow-x-auto rounded-xl border border-hair bg-white lift">
            <table className="w-full min-w-[660px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hair">
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    Included
                  </th>
                  {["Starter", "Growth", "Enterprise"].map((h) => (
                    <th
                      key={h}
                      className={cn(
                        "w-[140px] px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em]",
                        h === "Growth" ? "text-green" : "text-ink/50",
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((r) => (
                  <tr key={r.label} className="border-b border-hair last:border-b-0">
                    <td className="px-5 py-3.5 text-[14px] text-navy">{r.label}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={r.a} />
                    </td>
                    <td className="bg-green/[0.03] px-4 py-3.5 text-center">
                      <Cell v={r.b} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={r.c} />
                    </td>
                  </tr>
                 ))}
               </tbody>
             </table>
           </Reveal>
         </Container>
       </section>

      {/* VALUE BAND */}
      <section className="bg-navy py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <Eyebrow className="text-green">What every plan includes</Eyebrow>
              <h2 className="mt-3 max-w-[400px] text-[28px] text-white sm:text-[32px]">
                The essentials are never paywalled
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-2">
              {[
                ["All six portals", "Find a Tender, Contracts Finder, Sell2Wales, PCS, eTendersNI, CCS."],
                ["Unlimited alerts", "Save as many searches and recipients as you need."],
                ["UK data residency", "Stored in UK regions, never used to train models."],
                ["14-day trial", "Full access, no card, cancel in one click."],
              ].map(([t, d], i) => (
                <Reveal key={t} variant="fade" delay={i * 120} className="bg-navy p-6">
                  <h3 className="text-[14.5px] text-white">{t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING FAQ */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead eyebrow="Pricing FAQ">Billing <G>questions</G></SectionHead>

          <Reveal delay={100} className="mx-auto mt-12 max-w-[760px] border-t border-hair">
            {FAQ.map((f, i) => {
              const on = i === open;
              return (
                <Reveal key={f.q} delay={i * 90} className="block border-b border-hair">
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium leading-snug text-navy">
                      {f.q}
                    </span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-navy">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8h10" strokeLinecap="round" />
                        {!on && <path d="M8 3v10" strokeLinecap="round" />}
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      on ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[620px] pb-5 pr-8 text-[14px] leading-relaxed text-ink/80">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
