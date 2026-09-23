import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { CountUp } from "./Reveal";
import logoUrl from "../assets/qubid-logo.png";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true,
  );
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/* ---------- small atoms ---------- */

function Bar({
  w,
  h = 6,
  tone = "grey",
  anim = false,
  delay = 0,
}: {
  w: string;
  h?: number;
  tone?: "grey" | "navy" | "green";
  anim?: boolean;
  delay?: number;
}) {
  return (
    <div
      style={{ width: w, height: h, animationDelay: `${delay}ms` }}
      className={cn(
        "rounded-full",
        anim && "mock-line",
        tone === "grey" && "bg-[#E8EDF0]",
        tone === "navy" && "bg-navy/25",
        tone === "green" && "bg-green/35",
      )}
    />
  );
}

type Tone = "navy" | "teal" | "deep";

export function Chrome({
  label,
  tone,
  flush = false,
}: {
  label: string;
  tone?: Tone;
  flush?: boolean;
}) {
  if (!tone)
    return (
      <div className="flex items-center gap-2 border-b border-hair px-3 py-2">
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-[#DCE3E7]" style={{ animationDelay: "60ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-[#DCE3E7]" style={{ animationDelay: "120ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-[#DCE3E7]" style={{ animationDelay: "180ms" }} />
        <span className="ml-1 text-[9px] font-medium uppercase tracking-[0.12em] text-ink/40">
          {label}
        </span>
      </div>
    );

  return (
    <div
      className={cn(
        "flex items-center gap-1.5",
        flush ? "px-3.5 py-2.5" : "border-b border-hair px-3 py-2",
        tone === "navy" && "bg-navy",
        tone === "teal" && "bg-teal",
        tone === "deep" && "bg-navy-deep",
      )}
    >
      <span className="mock-cell h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" style={{ animationDelay: "60ms" }} />
      <span className="mock-cell h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" style={{ animationDelay: "120ms" }} />
      <span className="mock-cell h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" style={{ animationDelay: "180ms" }} />
      <span className="ml-1 min-w-0 flex-1 truncate text-[8.5px] font-semibold uppercase tracking-[0.06em] text-white/75">
        {label}
      </span>
    </div>
  );
}

/* ---------- hero mosaic cards ---------- */

export function ProfileCard() {
  const items = [
    {
      t: "Company Information",
      d: "Business details, sector, location",
      icon: (
        <path
          d="M3.5 2.5h6v11h-6v-11zM9.5 6l3.5 2v5.5h-3.5M5.5 5h2M5.5 7.5h2M5.5 10h2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      t: "Financial Details",
      d: "Turnover, balance sheet, key figures",
      icon: (
        <path
          d="M4 2.5h5.5l3 3v8H4v-11zM9.5 2.5v3h3M6 8.5h4M6 10.5h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      t: "Certifications",
      d: "ISO, GST, MSME, etc.",
      icon: (
        <path
          d="M8 2l4.5 1.8V7c0 3.2-2 5.3-4.5 6-2.5-.7-4.5-2.8-4.5-6V3.8L8 2z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ),
    },
  ];
  return (
    <div className="overflow-hidden rounded-xl bg-navy p-3.5 lift">
      <div className="flex items-center gap-1.5">
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "60ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "120ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "180ms" }} />
        <span className="ml-1 min-w-0 flex-1 truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
          Complete company profile
        </span>
      </div>

      <div className="mock-row mt-3 mb-2.5 flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 ring-1 ring-inset ring-white/15">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white/50" fill="none">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-white/50">Tell us about your business...</span>
      </div>

      <div className="space-y-1">
        {items.map((it, i) => (
          <div
            key={it.t}
            style={{ animationDelay: `${200 + i * 90}ms` }}
            className="mock-row flex items-center gap-2 rounded-md bg-white px-2 py-1.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-bgalt text-navy">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                {it.icon}
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium text-navy">{it.t}</p>
              <p className="truncate text-[8.5px] text-ink/55">{it.d}</p>
            </div>
            <svg
              style={{ animationDelay: `${460 + i * 90}ms` }}
              className="mock-cell h-3.5 w-3.5 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <circle cx="8" cy="8" r="8" fill="#0aa34a" />
              <path
                d="M4.5 8.2l2.2 2.2 4.6-4.6"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SearchCard() {
  const rows = [
    { t: "AI & Digital Transformation Services", b: "Cabinet Office, UK", m: "94% Match" },
    { t: "IT Support and Cloud Services", b: "NHS England", m: "89% Match" },
    { t: "Data & Analytics Platform", b: "Ministry of Defence", m: "82% Match" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-hair bg-white lift">
      <Chrome label="Find & match tenders" tone="navy" flush />

      <div className="p-3.5">
        <div className="mock-row flex items-center justify-between gap-2 rounded-md border border-hair bg-bgalt px-2.5 py-1.5">
          <span className="flex min-w-0 items-center gap-2">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ink/40" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="truncate text-[11px] text-ink/45">Search tenders...</span>
          </span>
          <span
            style={{ animationDelay: "900ms" }}
            className="mock-cell shrink-0 rounded-full bg-green px-2 py-[2px] text-[9px] font-semibold text-white"
          >
            12 new
          </span>
        </div>

        <div className="mt-2.5 space-y-1.5">
          {rows.map((r, i) => (
            <div
              key={r.t}
              style={{ animationDelay: `${200 + i * 120}ms` }}
              className="mock-row flex items-center justify-between gap-3 rounded-md border border-hair px-2.5 py-2 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#cfd9df]"
            >
              <div className="min-w-0">
                <p className="truncate text-[11.5px] font-medium text-navy">{r.t}</p>
                <p className="truncate text-[10px] text-ink/55">{r.b}</p>
              </div>
              <span
                style={{ animationDelay: `${460 + i * 120}ms` }}
                className="mock-cell shrink-0 rounded-full bg-green/10 px-2 py-0.5 text-[9.5px] font-semibold text-green"
              >
                {r.m}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UploadCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-hair bg-white lift">
      <Chrome label="Upload & manage tender requirements" tone="teal" flush />

      <div className="p-3.5">
        <div className="mock-row flex flex-col items-center gap-1 rounded-lg border border-dashed border-hair bg-bgalt/60 px-3 py-4 text-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy/60" fill="none" aria-hidden>
            <path
              d="M12 15V5m0 0l-4 4m4-4l4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <p className="mt-1 text-[10.5px] font-semibold text-navy">Upload Tender Documents</p>
          <p className="text-[9px] text-ink/55">Drag &amp; drop files here, or click to choose</p>
          <p className="text-[8px] text-ink/40">Supports PDF, Word, Excel, Images, TXT &amp; MD files</p>
          <span
            style={{ animationDelay: "500ms" }}
            className="mock-cell mt-1.5 rounded-full border border-hair bg-white px-3 py-1 text-[9px] font-medium text-navy"
          >
            Choose Files
          </span>
        </div>

        <div
          style={{ animationDelay: "700ms" }}
          className="mock-row mt-2.5 flex items-center gap-2 rounded-md bg-green/10 px-2.5 py-2"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" aria-hidden>
            <circle cx="8" cy="8" r="8" fill="#0aa34a" />
            <path
              d="M4.5 8.2l2.2 2.2 4.6-4.6"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[9.5px] font-medium text-green-deep">
            AI will automatically extract and fill the form fields
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProposalReadyCard() {
  return (
    <div className="overflow-hidden rounded-xl bg-navy p-3.5 lift">
      <div className="flex items-center gap-1.5">
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "60ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "120ms" }} />
        <span className="mock-cell h-1.5 w-1.5 rounded-full bg-white/30" style={{ animationDelay: "180ms" }} />
        <span className="ml-1 min-w-0 flex-1 truncate text-[8.5px] font-semibold uppercase tracking-[0.06em] text-white/75">
          Generate winning proposal
        </span>
      </div>

      <p className="mock-row mt-3 text-[9.5px] leading-relaxed text-white/70" style={{ animationDelay: "140ms" }}>
        Let AI create compliant, high-quality proposals tailored to the tender requirements.
      </p>

      <div className="mock-pop mt-3 rounded-lg bg-white p-3" style={{ animationDelay: "300ms" }}>
        <img src={logoUrl} alt="" className="h-3.5 w-auto" />
        <p className="mt-2 text-[10px] font-semibold text-navy">Winning Proposal</p>
        <div className="mt-2 space-y-1">
          <div className="h-[3px] w-[75%] rounded-full bg-[#DCE3E7]" />
          <div className="h-[3px] w-[58%] rounded-full bg-[#DCE3E7]" />
        </div>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span
            style={{ animationDelay: "560ms" }}
            className="mock-cell inline-flex shrink-0 items-center gap-1 rounded-full bg-green/10 px-2 py-[3px] text-[8.5px] font-semibold text-green"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="none" aria-hidden>
              <circle cx="8" cy="8" r="8" fill="#0aa34a" />
              <path
                d="M4.5 8.2l2.2 2.2 4.6-4.6"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Approved
          </span>
          <span className="truncate text-[8.5px] font-medium italic text-green/80">
            Save time. Increase win rate.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- feature screenshots ---------- */

export function ShotRadar() {
  const rows = [
    ["Highways maintenance", "£2.4m", "94%"],
    ["Digital transformation", "£860k", "89%"],
    ["Facilities management", "£1.1m", "83%"],
    ["Training & development", "£310k", "77%"],
  ];
  return (
    <div className="overflow-hidden rounded-md border border-hair bg-white">
      <Chrome label="Tender radar" tone="navy" />
      <div className="p-3">
        <div className="mb-2 flex gap-1.5">
          {["All", "Live", "Matched", "Saved"].map((t, i) => (
            <span
              key={t}
              style={{ animationDelay: `${80 + i * 70}ms` }}
              className={cn(
                "mock-cell rounded-full px-2 py-[3px] text-[9.5px] font-medium",
                i === 2 ? "bg-teal text-white" : "border border-hair text-ink/60",
              )}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="divide-y divide-hair rounded-md border border-hair">
          {rows.map((r, i) => (
            <div
              key={r[0]}
              style={{ animationDelay: `${240 + i * 100}ms` }}
              className="mock-row flex items-center justify-between gap-2 px-2.5 py-[7px] transition-colors hover:bg-bgalt"
            >
              <span className="truncate text-[10.5px] text-navy">{r[0]}</span>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[10px] text-ink/55">{r[1]}</span>
                <span
                  className={cn(
                    "w-9 shrink-0 rounded-full py-[2px] text-center text-[10px] font-semibold",
                    i === 0 ? "bg-green text-white" : "bg-green/10 text-green",
                  )}
                >
                  {r[2]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShotStudio() {
  const tabs = ["Executive Summary", "Method", "Social value", "Pricing", "Annexes"];
  return (
    <div className="overflow-hidden rounded-md border border-hair bg-white">
      <Chrome label="Proposal studio" tone="navy" />
      <div className="grid grid-cols-[104px_1fr]">
        <div className="space-y-1.5 border-r border-hair bg-bgalt p-2.5">
          {tabs.map((s, i) => (
            <div
              key={s}
              style={{ animationDelay: `${120 + i * 80}ms` }}
              className={cn(
                "mock-row truncate rounded px-1.5 py-1 text-[9px]",
                i === 1 ? "bg-navy font-medium text-white" : "text-ink/55",
              )}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="space-y-2.5 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="mock-row text-[11px] font-medium text-navy">
              Section 3 — Method Statement
            </p>
            <span
              style={{ animationDelay: "600ms" }}
              className="mock-cell shrink-0 rounded-full bg-green px-2 py-[2px] text-[9px] font-semibold text-white"
            >
              3 of 5
            </span>
          </div>

          <div className="space-y-1.5">
            <Bar w="100%" anim delay={320} />
            <Bar w="88%" anim delay={420} />
            <Bar w="55%" anim delay={520} />
          </div>

          <div
            style={{ animationDelay: "800ms" }}
            className="mock-pop inline-flex items-center gap-1 rounded-full bg-green/10 px-2 py-[4px]"
          >
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-green" fill="currentColor" aria-hidden>
              <path d="M6 0l1.1 3.2L10.4 4.5 7.1 5.8 6 9 4.9 5.8 1.6 4.5l3.3-1.3z" />
            </svg>
            <span className="text-[9px] font-semibold text-green">AI suggestion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShotWide() {
  return (
    <div className="overflow-hidden rounded-md border border-hair bg-white">
      <Chrome label="Qubid workspace" tone="navy" />
      <div className="grid gap-2 p-3 sm:grid-cols-2">
        <div
          className="mock-row rounded-md border border-hair bg-bgalt p-2.5"
          style={{ animationDelay: "120ms" }}
        >
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-navy/60">
            Compliance matrix
          </p>
          <div className="mt-2 space-y-1.5">
            {[100, 100, 64].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    i < 2 ? "bg-green" : "bg-[#D6DEE3]",
                  )}
                />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#DFE5E9]">
                  <div
                    style={{ width: `${w}%`, animationDelay: `${280 + i * 180}ms` }}
                    className={cn(
                      "mock-line h-full rounded-full",
                      i < 2 ? "bg-green" : "bg-navy/40",
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mock-row rounded-md border border-hair p-2.5"
          style={{ animationDelay: "220ms" }}
        >
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-navy/60">
            Draft quality
          </p>
          <div className="mt-2 flex items-end gap-1.5">
            {[40, 52, 48, 70, 84, 92].map((b, i) => (
              <div
                key={i}
                style={{ height: `${b * 0.42}px`, animationDelay: `${340 + i * 90}ms` }}
                className={cn(
                  "mock-bar flex-1 rounded-t-[2px]",
                  i > 3 ? "bg-green" : "bg-[#E4EAEE]",
                )}
              />
            ))}
          </div>
        </div>
        <div
          className="mock-row rounded-md bg-navy-deep p-2.5 sm:col-span-2"
          style={{ animationDelay: "320ms" }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-white">Bid readiness</span>
            <CountUp value="92%" className="text-[10px] font-semibold text-white" delay={500} />
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
            <div
              style={{ animationDelay: "600ms" }}
              className="mock-line h-full w-[92%] rounded-full bg-green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const TENDER = {
  t: "Cyber Security Audit & Assurance Services",
  org: "Ministry of Defence",
  value: "£680,000",
  location: "UK",
  due: "Due 14 Mar 2026",
  daysLeft: "21 days left",
};
const MATCH_TARGET = 94;

const PROFILE_FIELDS = [
  {
    t: "Company information",
    icon: (
      <path
        d="M3.5 2.5h6v11h-6v-11zM9.5 6l3.5 2v5.5h-3.5M5.5 5h2M5.5 7.5h2M5.5 10h2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    t: "Financial details",
    icon: (
      <path
        d="M4 2.5h5.5l3 3v8H4v-11zM9.5 2.5v3h3M6 8.5h4M6 10.5h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    t: "Certifications",
    icon: (
      <path
        d="M8 2l4.5 1.8V7c0 3.2-2 5.3-4.5 6-2.5-.7-4.5-2.8-4.5-6V3.8L8 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
];

export function ProductPreview() {
  const reduceMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"profile" | "processing" | "results">(
    reduceMotion ? "results" : "profile",
  );
  const [filled, setFilled] = useState(reduceMotion ? PROFILE_FIELDS.length : 0);
  const [matchPct, setMatchPct] = useState(reduceMotion ? MATCH_TARGET : 0);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let raf = 0;
    const timers: number[] = [];
    const after = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(() => !cancelled && fn(), ms));
    };

    const countTo = (target: number, setter: (n: number) => void, duration: number) => {
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const p = Math.min(1, (now - start) / duration);
        setter(Math.round(target * p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const runCycle = () => {
      setPhase("profile");
      setFilled(0);
      setMatchPct(0);

      PROFILE_FIELDS.forEach((_, i) => {
        after(() => setFilled(i + 1), 500 + i * 550);
      });
      const profileDone = 500 + PROFILE_FIELDS.length * 550 + 900;
      after(() => setPhase("processing"), profileDone);

      const processingDone = profileDone + 2000;
      after(() => {
        setPhase("results");
        countTo(MATCH_TARGET, setMatchPct, 700);
      }, processingDone);

      after(runCycle, processingDone + 4200);
    };

    runCycle();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  const profileReady = filled === PROFILE_FIELDS.length;

  return (
    <div className="overflow-hidden rounded-xl border border-hair bg-white lift">
      <div className="flex items-center justify-between border-b border-hair px-4 py-3 sm:px-5">
        <span className="text-[14px] font-semibold text-navy">Qubid</span>
        <div className="flex items-center gap-5 text-[11.5px] font-medium text-ink/60">
          <span>Search</span>
          <span>Profile</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] font-semibold text-navy">Company profile</p>
          <p className="text-[10.5px] text-ink/50">{filled}/{PROFILE_FIELDS.length} complete</p>
        </div>

        <div className="mt-2.5 space-y-1.5">
          {PROFILE_FIELDS.map((f, i) => (
            <div
              key={f.t}
              className="flex items-center gap-2 rounded-md border border-hair px-2.5 py-1.5"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-bgalt text-navy">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  {f.icon}
                </svg>
              </span>
              <span className="flex-1 text-[11px] font-medium text-navy">{f.t}</span>
              <svg
                viewBox="0 0 16 16"
                className={cn(
                  "h-3.5 w-3.5 shrink-0 transition-all duration-300",
                  i < filled ? "scale-100 opacity-100" : "scale-50 opacity-0",
                )}
                fill="none"
                aria-hidden
              >
                <circle cx="8" cy="8" r="8" fill="#0aa34a" />
                <path
                  d="M4.5 8.2l2.2 2.2 4.6-4.6"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-3.5 flex items-center gap-2">
          <div
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-[12px] font-semibold text-white transition-colors duration-300",
              phase === "processing"
                ? "bg-green/55"
                : profileReady
                  ? "bg-green"
                  : "bg-green/35",
            )}
          >
            {phase === "processing" ? (
              <>
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 animate-spin" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.35" />
                  <path d="M14 8a6 6 0 00-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Processing…
              </>
            ) : (
              <>
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="8" cy="8" r="2.4" fill="currentColor" />
                </svg>
                Match Tenders
              </>
            )}
          </div>
          {phase === "processing" && (
            <div className="mock-pop flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-[#e0453d] px-3 py-2.5 text-[11px] font-semibold text-white">
              <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="none">
                <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
                <rect x="6" y="6" width="4" height="4" fill="currentColor" />
              </svg>
              Stop
            </div>
          )}
        </div>

        <div className="mt-3.5 flex items-center gap-2">
          {phase === "processing" ? (
            <>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy/40" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                Matching against your profile…
              </span>
            </>
          ) : (
            <>
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full bg-green",
                  phase === "results" && "pulse-dot",
                )}
              />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                {phase === "results" ? "1 tender matched" : "Complete your profile to start matching"}
              </span>
            </>
          )}
        </div>

        <div className="mt-2.5 rounded-lg border border-hair p-3 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#cfd9df]">
          {phase === "results" ? (
            <>
              <p className="text-[12.5px] font-semibold text-navy">{TENDER.t}</p>
              <p className="mt-1 text-[11px] text-ink/55">{TENDER.org}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-ink/55">
                <span>{TENDER.value}</span>
                <span>{TENDER.location}</span>
                <span>{TENDER.due}</span>
              </div>
              <div className="mt-2.5 border-t border-hair pt-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-green">{matchPct}% Match Score</span>
                  <span className="text-[10.5px] text-ink/50">{TENDER.daysLeft}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E8EDF0]">
                  <div
                    className="h-full rounded-full bg-green transition-[width] duration-300"
                    style={{ width: `${matchPct}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-2 py-0.5">
              <div className="h-[9px] w-[75%] rounded-full bg-[#E8EDF0]" />
              <div className="h-[8px] w-[45%] rounded-full bg-[#EEF2F4]" />
              <div className="mt-1.5 h-[8px] w-[60%] rounded-full bg-[#EEF2F4]" />
              <div className="mt-1.5 h-[6px] w-full rounded-full bg-[#EEF2F4]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const SETUP_STEPS = [
  "Connecting to UK tender portals",
  "Importing your company profile",
  "Turning on daily match alerts",
];

export function WorkspaceSetupPreview() {
  const reduceMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"setup" | "ready">(reduceMotion ? "ready" : "setup");
  const [done, setDone] = useState(reduceMotion ? SETUP_STEPS.length : 0);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const timers: number[] = [];
    const after = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(() => !cancelled && fn(), ms));
    };

    const runCycle = () => {
      setPhase("setup");
      setDone(0);

      SETUP_STEPS.forEach((_, i) => {
        after(() => setDone(i + 1), 700 + i * 750);
      });
      const setupDone = 700 + SETUP_STEPS.length * 750 + 900;
      after(() => setPhase("ready"), setupDone);

      after(runCycle, setupDone + 4200);
    };

    runCycle();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  return (
    <div className="overflow-hidden rounded-xl border border-hair bg-white lift">
      <div className="flex items-center justify-between border-b border-hair px-4 py-3 sm:px-5">
        <span className="text-[14px] font-semibold text-navy">Qubid</span>
        <span
          className={cn(
            "rounded-full px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300",
            phase === "ready" ? "bg-green/10 text-green" : "bg-bgalt text-ink/50",
          )}
        >
          {phase === "ready" ? "Ready" : "Setting up"}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {phase === "setup" ? (
          <>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 animate-spin text-navy/50" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                <path d="M14 8a6 6 0 00-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                Setting up your workspace…
              </span>
            </div>

            <div className="mt-3.5 space-y-1.5">
              {SETUP_STEPS.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-2.5 rounded-md border border-hair px-2.5 py-2"
                >
                  <span className="flex-1 text-[11px] font-medium text-navy">{step}</span>
                  {i < done ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" aria-hidden>
                      <circle cx="8" cy="8" r="8" fill="#0aa34a" />
                      <path
                        d="M4.5 8.2l2.2 2.2 4.6-4.6"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : i === done ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 animate-spin text-navy/40" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                      <path d="M14 8a6 6 0 00-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-hair" />
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mock-pop py-1 text-center">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-green/10">
              <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="8" fill="#0aa34a" />
                <path
                  d="M4.5 8.2l2.2 2.2 4.6-4.6"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-3 text-[14px] font-semibold text-navy">You're all set</p>
            <p className="mx-auto mt-1 max-w-[220px] text-[11.5px] leading-relaxed text-ink/55">
              128 live tenders are already scored against your profile.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- small flat illustrations for three cards ---------- */

const S = { navy: "#0C2E64", green: "#0aa34a", hair: "#E3E8EB" };

export function IllSearch() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="119" height="71" fill="#F4F7F8" stroke={S.hair} />
      <rect x="12" y="14" width="60" height="6" fill={S.navy} opacity="0.2" />
      <rect x="12" y="28" width="86" height="6" fill={S.hair} />
      <rect x="12" y="42" width="44" height="6" fill={S.hair} />
      <g className="ill-search-glass" style={{ transformOrigin: "90px 48px" }}>
        <circle
          cx="90"
          cy="48"
          r="12"
          stroke={S.green}
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="la-draw"
          style={{ animationDelay: "420ms" }}
        />
        <path
          d="M99 57l8 8"
          stroke={S.green}
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="la-draw"
          style={{ animationDelay: "620ms" }}
        />
      </g>
    </svg>
  );
}

export function IllDraft() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="119" height="71" fill="#F4F7F8" stroke={S.hair} />
      <rect x="26" y="10" width="52" height="52" fill="#fff" stroke={S.hair} />
      <rect x="33" y="19" width="26" height="5" fill={S.navy} opacity="0.25" />
      <rect x="33" y="30" width="38" height="4" fill={S.hair} />
      <rect x="33" y="39" width="34" height="4" fill={S.hair} />
      <rect
        x="33"
        y="48"
        width="22"
        height="4"
        fill={S.green}
        opacity="0.5"
        className="ill-pen-line"
        style={{ transformOrigin: "33px 50px" }}
      />
      <g className="ill-pen" style={{ transformOrigin: "84px 49px" }}>
        <path
          d="M84 44l14-14a3.5 3.5 0 015 5L89 49l-6.5 1.5L84 44z"
          fill="#fff"
          stroke={S.green}
          strokeWidth="2"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="la-draw"
          style={{ animationDelay: "520ms" }}
        />
      </g>
    </svg>
  );
}

export function IllClock() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-full" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="119" height="71" fill="#F4F7F8" stroke={S.hair} />
      <rect x="14" y="16" width="52" height="42" fill="#fff" stroke={S.hair} />
      <path d="M14 26h52" stroke={S.hair} />
      <rect x="20" y="32" width="8" height="8" fill={S.hair} className="mock-cell" style={{ animationDelay: "200ms" }} />
      <rect x="33" y="32" width="8" height="8" fill={S.green} opacity="0.55" className="mock-cell" style={{ animationDelay: "300ms" }} />
      <rect x="46" y="32" width="8" height="8" fill={S.hair} className="mock-cell" style={{ animationDelay: "400ms" }} />
      <rect x="20" y="45" width="8" height="8" fill={S.hair} className="mock-cell" style={{ animationDelay: "500ms" }} />
      <rect x="33" y="45" width="8" height="8" fill={S.hair} className="mock-cell" style={{ animationDelay: "600ms" }} />
      <circle
        cx="88"
        cy="38"
        r="17"
        fill="#fff"
        stroke={S.navy}
        strokeWidth="2"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        className="la-draw"
        style={{ animationDelay: "360ms" }}
      />
      <g className="ill-clock-hand" style={{ transformOrigin: "88px 38px" }}>
        <path
          d="M88 28v11l7 4"
          stroke={S.green}
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="la-draw"
          style={{ animationDelay: "820ms" }}
        />
      </g>
    </svg>
  );
}

/* ---------- dark band line art ---------- */

export function LineArt({ light = false }: { light?: boolean } = {}) {
  const w = "#FFFFFF";
  const line = light ? "#0C2E64" : "#FFFFFF";
  const draw = (delay: number, extra: Record<string, unknown> = {}) => ({
    style: { animationDelay: `${delay}ms` },
    className: "la-draw",
    pathLength: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    ...extra,
  });
  const fill = (delay: number) => ({
    style: { animationDelay: `${delay}ms` },
    className: "la-fill",
  });

  return (
    <svg viewBox="0 0 420 300" className="h-auto w-full" fill="none" aria-hidden>
      <rect
        x="20.5"
        y="24.5"
        width="250"
        height="150"
        stroke={line}
        strokeOpacity="0.35"
        {...draw(0)}
      />
      <path d="M20.5 52.5h250" stroke={line} strokeOpacity="0.35" {...draw(200)} />
      <circle cx="36" cy="38" r="3" stroke={line} strokeOpacity="0.5" {...draw(340)} />
      <circle cx="48" cy="38" r="3" stroke={line} strokeOpacity="0.5" {...draw(400)} />
      <rect x="40" y="72" width="120" height="8" fill={line} fillOpacity="0.5" {...fill(300)} />
      <rect x="40" y="94" width="200" height="6" fill={line} fillOpacity="0.16" {...fill(420)} />
      <rect x="40" y="110" width="170" height="6" fill={line} fillOpacity="0.16" {...fill(500)} />
      <rect x="40" y="126" width="188" height="6" fill="#0aa34a" fillOpacity="0.75" {...fill(620)} />
      <rect x="40" y="142" width="96" height="6" fill="#0aa34a" fillOpacity="0.45" {...fill(720)} />

      <rect
        x="196.5"
        y="120.5"
        width="200"
        height="110"
        fill="#0C2E64"
        stroke="#0aa34a"
        {...draw(520)}
      />
      <path d="M196.5 148.5h200" stroke="#0aa34a" strokeOpacity="0.6" {...draw(700)} />
      <rect x="212" y="132" width="60" height="6" fill="#0aa34a" {...fill(760)} />
      <g stroke={w} strokeOpacity="0.5">
        <path
          d="M212 210v-28M236 210v-46M260 210v-18M284 210v-56M308 210v-34"
          {...draw(880)}
        />
      </g>
      <path
        d="M212 182l24-18 24 28 24-46 24 22"
        stroke="#0aa34a"
        strokeWidth="2"
        strokeLinejoin="round"
        {...draw(1000)}
      />
      <circle cx="332" cy="168" r="18" stroke={w} strokeOpacity="0.45" {...draw(1100)} />
      <path
        d="M326 168l4.5 4.5 9-9"
        stroke="#0aa34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(1240)}
      />

      <rect
        x="40.5"
        y="212.5"
        width="120"
        height="56"
        stroke={line}
        strokeOpacity="0.35"
        {...draw(900)}
      />
      <circle
        cx="68"
        cy="240"
        r="13"
        stroke="#0aa34a"
        strokeWidth="1.5"
        {...draw(1050)}
      />
      <path d="M68 232v8l5 3" stroke={line} strokeOpacity="0.7" strokeLinecap="round" {...draw(1180)} />
      <rect x="92" y="230" width="52" height="6" fill={line} fillOpacity="0.3" {...fill(1120)} />
      <rect x="92" y="244" width="34" height="6" fill={line} fillOpacity="0.16" {...fill(1200)} />
    </svg>
  );
}
