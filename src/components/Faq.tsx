import { useState } from "react";
import { Container, G, SectionHead } from "./ui";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const TABS = ["General", "Tender Search", "Setup", "Security"] as const;

const DATA: Record<string, { q: string; a: string }[]> = {
  General: [
    {
      q: "What exactly does Qubid do?",
      a: "Qubid monitors every UK public sector tender portal, scores each notice against your capability profile, drafts your response using your own winning content, and tracks every deadline through to submission.",
    },
    {
      q: "Who is Qubid built for?",
      a: "Bid teams of one to fifty. Most of our customers are SMEs and mid-market suppliers who sell to councils, NHS trusts, central government and blue-light services.",
    },
    {
      q: "Do I need bid writing experience?",
      a: "No. Qubid produces a structured first draft with a requirement-by-requirement compliance matrix, so a subject matter expert can review rather than write from scratch.",
    },
    {
      q: "How is Qubid priced?",
      a: "A flat monthly subscription per workspace with unlimited tender alerts. Proposal drafting is metered by document, and annual plans include onboarding.",
    },
  ],
  "Tender Search": [
    {
      q: "Which portals do you index?",
      a: "Find a Tender, Contracts Finder, Sell2Wales, Public Contracts Scotland, eTendersNI and Crown Commercial frameworks — plus selected buyer-side systems.",
    },
    {
      q: "How quickly do new notices appear?",
      a: "Most notices are indexed within fifteen minutes of publication and appear in your morning digest the same day.",
    },
    {
      q: "Can I filter by CPV code and region?",
      a: "Yes. Filter by CPV, buyer, framework, contract value, region and closing window, then save any filter as a live alert.",
    },
    {
      q: "How accurate is the match score?",
      a: "Scores blend your capability profile, past bid history and the wording of the specification. Teams typically see relevance above ninety percent after two weeks of feedback.",
    },
  ],
  Setup: [
    {
      q: "How long does onboarding take?",
      a: "About four minutes to create a profile and receive your first matched feed. Full content library import usually completes within a day.",
    },
    {
      q: "Can I import past bids?",
      a: "Yes. Upload previous submissions as PDF or Word and Qubid builds a reusable answer library automatically.",
    },
    {
      q: "Does it integrate with our tools?",
      a: "Native exports to Word and PDF, calendar sync for deadlines, plus Slack, Teams and email notifications. An API is available on Enterprise plans.",
    },
    {
      q: "Can multiple people collaborate?",
      a: "Every plan includes shared workspaces, section owners, commenting and version history.",
    },
  ],
  Security: [
    {
      q: "Where is our data stored?",
      a: "All customer data is stored in UK data centres. Nothing leaves the region without your explicit instruction.",
    },
    {
      q: "Is our content used to train models?",
      a: "Never. Your documents and drafts are excluded from model training by contract and by default.",
    },
    {
      q: "What certifications do you hold?",
      a: "ISO 27001 and Cyber Essentials Plus, with annual third-party penetration testing and SOC 2 Type II underway.",
    },
    {
      q: "How is access controlled?",
      a: "SSO and SAML on Enterprise, role-based permissions on every plan, and full audit logging of document access.",
    },
  ],
};

export default function Faq() {
  const [tab, setTab] = useState<string>(TABS[0]);
  const [open, setOpen] = useState(0);

  const items = DATA[tab];

  return (
    <section id="faq" className="scroll-mt-24 border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHead eyebrow="FAQ">
          Answers to your <G>questions</G>
        </SectionHead>

        <div className="mt-12 grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
          {/* tab rail */}
          <Reveal variant="left" className="flex gap-1 overflow-x-auto border-b border-hair pb-px lg:block lg:overflow-visible lg:border-b-0 lg:border-l lg:pb-0">
            {TABS.map((t) => {
              const on = t === tab;
              return (
                <button
                  key={t}
                  onClick={() => {
                    setTab(t);
                    setOpen(0);
                  }}
                  className={cn(
                    "whitespace-nowrap px-4 py-2.5 text-left text-[13.5px] font-medium transition-colors",
                    "border-b-2 lg:w-full lg:border-b-0 lg:border-l-2 lg:-ml-px",
                    on
                      ? "border-green text-navy"
                      : "border-transparent text-ink/60 hover:text-navy",
                  )}
                >
                  {t}
                </button>
              );
            })}
          </Reveal>

          {/* accordion */}
          <Reveal delay={140} className="border-t border-hair">
            {items.map((it, i) => {
              const on = i === open;
              return (
                <Reveal
                  key={it.q}
                  delay={i * 90}
                  className="block border-b border-hair"
                >
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "text-[15px] font-medium leading-snug",
                        on ? "text-navy" : "text-navy/85",
                      )}
                    >
                      {it.q}
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
                        {it.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
