import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Btn, Check, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { LineArt } from "./mockups";
import { cn } from "../utils/cn";

/* ---------------- shell ---------------- */

const BENEFITS = [
  "Every UK portal in one scored feed",
  "Requirement extraction and first drafts",
  "Deadlines tracked with named owners",
];

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  side,
  children,
  footer,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  side: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <section className="border-b border-hair bg-bgalt pt-[96px] sm:pt-[112px]">
      <Container className="py-10 sm:py-14">
        <div className="grid overflow-hidden rounded-2xl border border-hair bg-white lift lg:grid-cols-2">
          {/* form column */}
          <div className="p-6 sm:p-10">
            <div className="mx-auto w-full max-w-[400px]">
              <Reveal variant="fade">
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={70}>
                <h1 className="mt-3 text-[26px] sm:text-[30px]">{title}</h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink/75">{subtitle}</p>
              </Reveal>
              <Reveal delay={220} className="mt-7">
                {children}
              </Reveal>
              <Reveal delay={300} className="mt-7 border-t border-hair pt-6">
                {footer}
              </Reveal>
            </div>
          </div>

          {/* panel column */}
          <Reveal
            as="aside"
            variant="right"
            delay={120}
            className="hidden flex-col justify-between border-l border-hair bg-navy p-10 lg:flex"
          >
            <div>
              <Eyebrow className="text-green">Qubid</Eyebrow>
              <p className="mt-4 max-w-[320px] text-[20px] font-medium leading-snug text-white">
                {side}
              </p>
              <ul className="mt-8 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/75">
                    <Check className="mt-[3px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 opacity-90">
              <LineArt />
            </div>
          </Reveal>
        </div>

        <p className="mt-5 text-center text-[12px] text-ink/55">
          Protected by UK data residency · ISO 27001 · Your content is never used to train AI
        </p>
      </Container>
    </section>
  );
}

/* ---------------- google ---------------- */

export function GoogleButton({
  onStart,
  busy,
  label = "Continue with Google",
}: {
  onStart: () => void;
  busy?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onStart}
      disabled={busy}
      className={cn(
        "flex w-full items-center justify-center gap-2.5 rounded-full border border-hair bg-white px-5 py-[10px] text-[13.5px] font-medium text-navy transition-colors",
        busy ? "opacity-70" : "hover:border-[#c9d3d9] hover:bg-bgalt",
      )}
    >
      <svg viewBox="0 0 18 18" className="h-[17px] w-[17px]" aria-hidden>
        <path
          fill="#4285F4"
          d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z"
        />
        <path
          fill="#34A853"
          d="M9 18c2.43 0 4.47-.8 5.96-2.19l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"
        />
        <path
          fill="#FBBC05"
          d="M3.97 10.71a5.4 5.4 0 010-3.42V4.96H.96a9 9 0 000 8.08l3.01-2.33z"
        />
        <path
          fill="#EA4335"
          d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.96l3.01 2.33C4.68 5.17 6.66 3.58 9 3.58z"
        />
      </svg>
      {busy ? "Connecting…" : label}
    </button>
  );
}

export function OrDivider({ label = "or continue with email" }: { label?: string }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-hair" />
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink/45">
        {label}
      </span>
      <span className="h-px flex-1 bg-hair" />
    </div>
  );
}

/* ---------------- fields ---------------- */

type BaseProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };

const inputClass = (error?: string) =>
  cn(
    "w-full rounded-lg border bg-white px-3.5 py-[10px] text-[14px] text-navy outline-none transition-colors placeholder:text-ink/40",
    error
      ? "border-[#B3261E]/60 focus:border-[#B3261E]"
      : "border-hair focus:border-navy",
  );

export function Field({ label, error, hint, ...rest }: BaseProps & { hint?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
        {label}
      </span>
      <input {...rest} className={inputClass(error)} />
      {error ? (
        <span className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#B3261E]">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" aria-hidden>
            <circle cx="8" cy="8" r="7.2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 4.6v4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="8" cy="11.4" r="0.7" fill="currentColor" />
          </svg>
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1.5 block text-[12px] text-ink/55">{hint}</span>
      ) : null}
    </label>
  );
}

export function PasswordField({
  label,
  error,
  value,
  onChange,
  autoComplete,
  placeholder = "••••••••",
}: {
  label: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  placeholder?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
        {label}
      </span>
      <span className="relative block">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cn(inputClass(error), "pr-11")}
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-ink/50 transition-colors hover:text-navy"
        >
          {show ? (
            <svg viewBox="0 0 18 18" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M1.5 9s2.7-4.5 7.5-4.5S16.5 9 16.5 9s-2.7 4.5-7.5 4.5S1.5 9 1.5 9z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle cx="9" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M3 15L15 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 18 18" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M1.5 9s2.7-4.5 7.5-4.5S16.5 9 16.5 9s-2.7 4.5-7.5 4.5S1.5 9 1.5 9z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle cx="9" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          )}
        </button>
      </span>
      {error ? (
        <span className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#B3261E]">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" aria-hidden>
            <circle cx="8" cy="8" r="7.2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 4.6v4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="8" cy="11.4" r="0.7" fill="currentColor" />
          </svg>
          {error}
        </span>
      ) : null}
    </label>
  );
}

/* ---------------- password strength ---------------- */

export function strengthOf(pw: string) {
  const checks = [
    pw.length >= 8,
    /[A-Z]/.test(pw),
    /[0-9]/.test(pw),
    /[^A-Za-z0-9]/.test(pw),
  ];
  return checks.filter(Boolean).length;
}

export function StrengthMeter({ value }: { value: string }) {
  const score = strengthOf(value);
  const labels = ["Too short", "Weak", "Fair", "Good", "Strong"];
  return (
    <div className="mt-2.5">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full",
              i < score ? "bg-green" : "bg-[#E8EDF0]",
            )}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[11.5px] text-ink/60">
        {value ? `Password strength: ${labels[score]}` : "At least 8 characters, one number and one capital"}
      </p>
    </div>
  );
}

/* ---------------- success panel ---------------- */

export function SuccessPanel({
  title,
  body,
  cta,
  onReset,
}: {
  title: string;
  body: string;
  cta: string;
  onReset: () => void;
}) {
  return (
    <div className="rounded-xl border border-hair bg-bgalt p-6 text-center">
      <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <Check className="h-5 w-5" />
      </span>
      <h2 className="mt-4 text-[19px]">{title}</h2>
      <p className="mx-auto mt-2 max-w-[320px] text-[13.5px] leading-relaxed text-ink/78">
        {body}
      </p>
      <button
        onClick={onReset}
        className="mt-5 text-[13px] font-medium text-navy hover:text-green"
      >
        ← Back to the form
      </button>
      <div className="mt-5">
        <Btn variant="green" className="w-full">
          {cta}
        </Btn>
      </div>
    </div>
  );
}

export function DemoNotice({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 rounded-lg border border-hair bg-bgalt px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink/75">
      {children}
    </p>
  );
}
