import { useState } from "react";
import {
  AuthShell,
  DemoNotice,
  Field,
  GoogleButton,
  OrDivider,
  PasswordField,
  StrengthMeter,
  SuccessPanel,
  strengthOf,
} from "../components/auth";
import { Btn, Check } from "../components/ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  terms?: string;
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [google, setGoogle] = useState<{ busy: boolean; msg: string | null }>({
    busy: false,
    msg: null,
  });

  const score = strengthOf(password);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your full name";
    else if (name.trim().split(/\s+/).length < 2) next.name = "Please include first and last name";
    if (!email.trim()) next.email = "Enter your email address";
    else if (!EMAIL_RE.test(email.trim())) next.email = "That doesn’t look like a valid email";
    if (!password) next.password = "Choose a password";
    else if (score < 2) next.password = "Use at least 8 characters with one number or capital";
    if (!confirm) next.confirm = "Confirm your password";
    else if (confirm !== password) next.confirm = "Passwords do not match";
    if (!terms) next.terms = "Please accept the terms to continue";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  function startGoogle() {
    setGoogle({ busy: true, msg: null });
    window.setTimeout(
      () =>
        setGoogle({
          busy: false,
          msg: "Google sign-up needs an OAuth client ID and redirect URI, which aren’t configured in this demo. Create an account with the form below, or connect Google in your workspace settings.",
        }),
      900,
    );
  }

  return (
    <AuthShell
      eyebrow="Free 14-day trial"
      title="Create your Qubid account"
      subtitle="No card required. Full access to every portal, draft and deadline for 14 days."
      side="Set up in about four minutes and see your first matched tenders tomorrow morning."
      footer={
        <p className="text-[13.5px] text-ink/75">
          Already have an account?{" "}
          <a href="#/sign-in" className="font-medium text-green hover:underline">
            Sign in
          </a>
        </p>
      }
    >
      {done ? (
            <SuccessPanel
          title="Account created"
          body={`We’ve sent a verification link to ${email}. Confirm it and your first matched tender feed will be ready in the workspace.`}
          cta="Set up my profile"
          onReset={() => setDone(false)}
        />
      ) : (
        <>
          <GoogleButton onStart={startGoogle} busy={google.busy} label="Sign up with Google" />
          {google.msg && <DemoNotice>{google.msg}</DemoNotice>}
          <OrDivider label="or sign up with email" />

          <form onSubmit={submit} noValidate className="space-y-4">
            <Field
              label="Full name"
              type="text"
              name="name"
              value={name}
              autoComplete="name"
              placeholder="Alex Whitfield"
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
            <Field
              label="Email address"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              placeholder="alex@company.co.uk"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              hint="Use your work address so we can match you to buyers."
            />

            <div>
              <PasswordField
                label="Password"
                value={password}
                onChange={setPassword}
                autoComplete="new-password"
                error={errors.password}
              />
              <StrengthMeter value={password} />
            </div>

            <PasswordField
              label="Confirm password"
              value={confirm}
              onChange={setConfirm}
              autoComplete="new-password"
              error={errors.confirm}
            />

            <label className="flex cursor-pointer items-start gap-2.5 pt-0.5 text-[13px] text-ink">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="mt-[3px] h-4 w-4 shrink-0 accent-[#0aa34a]"
              />
              <span>
                I agree to the{" "}
                <a href="#/sign-up" className="font-medium text-navy hover:text-green">
                  terms of service
                </a>{" "}
                and{" "}
                <a href="#/sign-up" className="font-medium text-navy hover:text-green">
                  privacy policy
                </a>
                .
              </span>
            </label>
            {errors.terms && (
              <p className="text-[12px] text-[#B3261E]">{errors.terms}</p>
            )}

            <Btn variant="green" type="submit" className="w-full">
              Create account
            </Btn>
          </form>

          <ul className="mt-6 space-y-2.5 border-t border-hair pt-6">
            {[
              "Unlimited tender alerts across all six UK portals",
              "5 proposal drafts a month on the trial",
              "Cancel or export your data in one click",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[13px] text-ink/80">
                <Check className="mt-[3px]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </AuthShell>
  );
}
