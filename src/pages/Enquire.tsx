import { useState } from "react";
import { Container, Eyebrow, Btn, Check, G } from "../components/ui";
import { Field, SuccessPanel } from "../components/auth";
import Reveal, { CountUp } from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { cn } from "../utils/cn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ENQUIRY_TYPES = [
  "General enquiry",
  "Sales & pricing",
  "Book a demo",
  "Partnership",
  "Support",
  "Press & media",
  "Other",
];

const BENEFITS = [
  "Reply from a real person within one working day",
  "Answers from the product team, not a call centre",
  "UK-based support across every plan",
];

type Errors = {
  type?: string;
  name?: string;
  email?: string;
  subject?: string;
  details?: string;
  privacy?: string;
};

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className={cn(
          "w-full resize-y rounded-lg border bg-white px-3.5 py-[10px] text-[14px] text-navy outline-none transition-colors placeholder:text-ink/40",
          error ? "border-[#B3261E]/60 focus:border-[#B3261E]" : "border-hair focus:border-navy",
        )}
      />
      {error && <span className="mt-1.5 block text-[12px] text-[#B3261E]">{error}</span>}
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full appearance-none rounded-lg border bg-white px-3.5 py-[10px] pr-9 text-[14px] outline-none transition-colors",
            value ? "text-navy" : "text-ink/40",
            error ? "border-[#B3261E]/60 focus:border-[#B3261E]" : "border-hair focus:border-navy",
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-navy">
              {o}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 16 16"
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink/45"
          fill="none"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {error && <span className="mt-1.5 block text-[12px] text-[#B3261E]">{error}</span>}
    </label>
  );
}

export default function Enquire() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [reference, setReference] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!type) next.type = "Select an enquiry type";
    if (!name.trim()) next.name = "Enter your full name";
    if (!email.trim()) next.email = "Enter your email address";
    else if (!EMAIL_RE.test(email.trim())) next.email = "That doesn’t look like a valid email";
    if (!subject.trim()) next.subject = "Give your enquiry a subject";
    if (!details.trim()) next.details = "Tell us a bit more about your enquiry";
    if (!privacy) next.privacy = "Please confirm you’ve read the privacy notice";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  return (
    <>
    <section className="border-b border-hair bg-bgalt pt-[104px] sm:pt-[124px]">
      <Container className="pb-16 sm:pb-20">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-ink/55">
          <a href="#/" className="hover:text-green">
            Home
          </a>
          <span className="text-hair">/</span>
          <span className="text-navy">Enquire Now</span>
        </nav>

        <div className="grid overflow-hidden rounded-2xl border border-hair bg-white lift lg:grid-cols-[1.15fr_0.85fr]">
          {/* form column */}
          <Reveal variant="fade" className="p-6 sm:p-10">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 text-[28px] leading-[1.14] sm:text-[34px]">
              Enquire <G>Now</G>
            </h1>
            <p className="mt-3 max-w-[440px] text-[14.5px] leading-relaxed text-ink/78">
              Tell us what you need and a member of the Qubid team will get back to you
              within one working day.
            </p>

            <div className="mt-8">
              {done ? (
                <SuccessPanel
                  title="Enquiry sent"
                  body={`Thanks — we've received your enquiry. A member of the team will reply to ${email} within one working day.`}
                  cta="Back to homepage"
                  onReset={() => setDone(false)}
                />
              ) : (
                <form onSubmit={submit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between gap-3 border-b border-hair pb-4">
                    <h2 className="text-[15px] font-semibold text-navy">Enquiry Form</h2>
                    <span className="text-[11.5px] text-ink/45">* Required fields</span>
                  </div>

                  <SelectField
                    label="Enquiry type *"
                    value={type}
                    onChange={setType}
                    options={ENQUIRY_TYPES}
                    placeholder="Select an enquiry type"
                    error={errors.type}
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name *"
                      type="text"
                      value={name}
                      autoComplete="name"
                      placeholder="Enter your full name"
                      onChange={(e) => setName(e.target.value)}
                      error={errors.name}
                    />
                    <Field
                      label="Organisation"
                      type="text"
                      value={org}
                      autoComplete="organization"
                      placeholder="Enter your organisation or company name"
                      onChange={(e) => setOrg(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Email address *"
                      type="email"
                      value={email}
                      autoComplete="email"
                      placeholder="Enter the email address we should use to reply"
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                    />
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                        Telephone number
                      </span>
                      <div className="flex items-center rounded-lg border border-hair bg-white px-3.5 py-[10px] transition-colors focus-within:border-navy">
                        <span className="mr-2 shrink-0 text-[14px] font-medium text-ink/60">+44</span>
                        <input
                          type="tel"
                          value={phone}
                          autoComplete="tel"
                          placeholder="Enter phone number"
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent text-[14px] text-navy outline-none placeholder:text-ink/40"
                        />
                      </div>
                    </label>
                  </div>

                  <Field
                    label="Subject *"
                    type="text"
                    value={subject}
                    placeholder="Provide a concise description of your enquiry"
                    onChange={(e) => setSubject(e.target.value)}
                    error={errors.subject}
                  />

                  <TextArea
                    label="Enquiry details *"
                    value={details}
                    onChange={setDetails}
                    placeholder="Explain the matter, relevant context and the response or action required"
                    error={errors.details}
                  />

                  <Field
                    label="Reference number"
                    type="text"
                    value={reference}
                    placeholder="Include an account, case or support reference where relevant"
                    onChange={(e) => setReference(e.target.value)}
                  />

                  <label className="flex cursor-pointer items-start gap-2.5 text-[13px] text-ink">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-[3px] h-4 w-4 shrink-0 accent-[#0aa34a]"
                    />
                    <span>
                      I confirm that I have read the{" "}
                      <a href="#/enquire" className="font-medium text-navy hover:text-green">
                        Qubid Privacy Notice
                      </a>{" "}
                      and understand how my information will be processed.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="-mt-3 text-[12px] text-[#B3261E]">{errors.privacy}</p>
                  )}

                  <Btn variant="green" type="submit" className="w-full">
                    Submit Enquiry →
                  </Btn>
                </form>
              )}
            </div>
          </Reveal>

          {/* side panel */}
          <Reveal
            as="aside"
            variant="right"
            delay={120}
            className="hidden flex-col justify-between border-l border-hair bg-navy p-10 lg:flex"
          >
            <div>
              <Eyebrow className="text-green">Qubid</Eyebrow>
              <p className="mt-4 max-w-[300px] text-[20px] font-medium leading-snug text-white">
                Real people, fast replies.
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

            <div className="mt-10 space-y-5">
              <div className="border-t border-white/12 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Email us
                </p>
                <a
                  href="mailto:hello@qubid.co.uk"
                  className="mt-1 block text-[14px] font-medium text-white transition-colors hover:text-green"
                >
                  hello@qubid.co.uk
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Call us
                </p>
                <a
                  href="tel:+442079460958"
                  className="mt-1 block text-[14px] font-medium text-white transition-colors hover:text-green"
                >
                  +44 20 7946 0958
                </a>
              </div>
              <div className="flex items-baseline gap-2 border-t border-white/12 pt-6">
                <CountUp value="24h" className="text-[26px] font-semibold text-white" />
                <span className="text-[12px] text-white/55">average first reply</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
    <CtaBand />
    </>
  );
}
