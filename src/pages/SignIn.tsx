import { useState } from "react";
import {
  AuthShell,
  DemoNotice,
  Field,
  GoogleButton,
  OrDivider,
  PasswordField,
  SuccessPanel,
} from "../components/auth";
import { Btn } from "../components/ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [done, setDone] = useState(false);
  const [google, setGoogle] = useState<{ busy: boolean; msg: string | null }>({
    busy: false,
    msg: null,
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Enter your email address";
    else if (!EMAIL_RE.test(email.trim())) next.email = "That doesn’t look like a valid email";
    if (!password) next.password = "Enter your password";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  function startGoogle() {
    setGoogle({ busy: true, msg: null });
    window.setTimeout(
      () =>
        setGoogle({
          busy: false,
          msg: "Google sign-in needs an OAuth client ID and redirect URI, which aren’t configured in this demo. Use the email form below, or connect Google in your workspace settings.",
        }),
      900,
    );
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Qubid"
      subtitle="Pick up your tender feed, drafts and deadlines where you left off."
      side="The bid desk for UK suppliers — one workspace from notice to submission."
      footer={
        <p className="text-[13.5px] text-ink/75">
          New to Qubid?{" "}
          <a href="#/sign-up" className="font-medium text-green hover:underline">
            Create a free account
          </a>
        </p>
      }
    >
      {done ? (
        <SuccessPanel
          title="Check your inbox"
          body={`We’ve sent a secure sign-in link to ${email}. Open it on this device to continue to your workspace.`}
          cta="Go to my workspace"
          onReset={() => setDone(false)}
        />
      ) : (
        <>
          <GoogleButton onStart={startGoogle} busy={google.busy} label="Continue with Google" />
          {google.msg && <DemoNotice>{google.msg}</DemoNotice>}
          <OrDivider />

          <form onSubmit={submit} noValidate className="space-y-4">
            <Field
              label="Email address"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              placeholder="you@company.co.uk"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <PasswordField
              label="Password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
              error={errors.password}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
              <label className="flex cursor-pointer items-center gap-2 text-[13px] text-ink">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 shrink-0 accent-[#0aa34a]"
                />
                Keep me signed in
              </label>
              <a href="#/sign-in" className="text-[13px] font-medium text-navy hover:text-green">
                Forgot password?
              </a>
            </div>

            <Btn variant="green" type="submit" className="w-full">
              Sign in
            </Btn>
          </form>
        </>
      )}
    </AuthShell>
  );
}
