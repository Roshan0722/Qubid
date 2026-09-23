import { Container, Logo } from "./ui";
import Reveal from "./Reveal";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    path: "M4.5 6.5h2.4V14H4.5V6.5zM5.7 3a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM8.6 6.5H11v1a2.6 2.6 0 012.3-1.2c1.7 0 2.4 1.1 2.4 3V14h-2.4v-3.9c0-1-.35-1.5-1.1-1.5-.8 0-1.2.55-1.2 1.55V14H8.6V6.5z",
  },
  {
    name: "X",
    path: "M4 4l5.2 6.4L4.3 16h1.5l4.1-4.7 3.8 4.7H17l-5.4-6.7L16.4 4h-1.5l-4 4.5L7.2 4H4z",
  },
  {
    name: "YouTube",
    path: "M17 7.2a2 2 0 00-1.4-1.4C14.3 5.5 10 5.5 10 5.5s-4.3 0-5.6.3A2 2 0 003 7.2 20 20 0 002.7 10 20 20 0 003 12.8a2 2 0 001.4 1.4c1.3.3 5.6.3 5.6.3s4.3 0 5.6-.3a2 2 0 001.4-1.4A20 20 0 0017.3 10 20 20 0 0017 7.2zM8.6 12.1V7.9l3.6 2.1-3.6 2.1z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-bgalt">
      <Container className="py-14 sm:py-16">
        <Reveal variant="fade" className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-ink/75 transition-colors hover:text-green"
            >
              {l.label}
            </a>
          ))}
        </Reveal>

        <Reveal
          variant="fade"
          delay={120}
          className="mt-12 flex flex-col gap-6 border-t border-hair pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Logo />
            <p className="mt-3 max-w-[420px] text-[12.5px] text-ink/60">
              © {new Date().getFullYear()} Qubid Technologies Ltd. Registered in England
              &amp; Wales No. 14820913. All rights reserved.
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px]">
              <a href="#/sign-in" className="font-medium text-navy hover:text-green">
                Sign in
              </a>
              <a href="#/sign-up" className="font-medium text-navy hover:text-green">
                Create account
              </a>
              <a href="#/pricing" className="text-ink/70 hover:text-green">
                Pricing
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hair bg-white text-navy transition-colors hover:border-green hover:text-green"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
