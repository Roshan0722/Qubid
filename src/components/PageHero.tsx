import type { ReactNode } from "react";
import { Btn, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";

export type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
  primary = "Try for Free",
  secondary = "Book a Demo",
  primaryHref = "#/sign-up",
  secondaryHref = "#/product",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  crumbs: Crumb[];
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-hair bg-white pt-[104px] sm:pt-[124px]">
      <Container className="pb-14 sm:pb-16">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-ink/55">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-hair">/</span>}
              {c.href ? (
                <a href={c.href} className="hover:text-green">
                  {c.label}
                </a>
              ) : (
                <span className="text-navy">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-[660px]">
          <Reveal variant="fade">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-[34px] leading-[1.12] sm:text-[42px] lg:text-[48px]">
              {title}
            </h1>
          </Reveal>
          {sub && (
            <Reveal delay={160}>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/85">{sub}</p>
            </Reveal>
          )}
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <Btn variant="green" href={primaryHref}>
                {primary}
              </Btn>
              <Btn variant="white" href={secondaryHref}>
                {secondary}
              </Btn>
            </div>
          </Reveal>
        </div>

        {children}
      </Container>
    </section>
  );
}
