import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import logoUrl from "../assets/qubid-logo.png";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "green",
}: {
  children: ReactNode;
  className?: string;
  tone?: "green" | "muted";
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.16em]",
        tone === "green" ? "text-green" : "text-ink/55",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  children,
  sub,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  sub?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-[640px]",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <Reveal variant="fade">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-3 text-[28px] leading-[1.18] sm:text-[32px] lg:text-[36px]",
            light && "text-white",
          )}
        >
          {children}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed",
              light ? "text-white/70" : "text-ink/80",
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function G({ children }: { children: ReactNode }) {
  return <span className="text-green">{children}</span>;
}

type BtnProps = {
  children: ReactNode;
  variant?: "green" | "white" | "ghostDark";
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Btn({
  children,
  variant = "green",
  className,
  href = "#",
  type,
  onClick,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-[9px] text-[13px] font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-150 active:translate-y-[1px]";
  const styles = {
    green: "bg-green text-white hover:bg-[#0a8a3e]",
    white:
      "bg-white text-navy border border-hair hover:border-[#c9d3d9] hover:bg-bgalt",
    ghostDark:
      "bg-transparent text-white border border-white/30 hover:bg-white/10",
  }[variant];

  if (type) {
    return (
      <button type={type} onClick={onClick} className={cn(base, styles, className)}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={cn(base, styles, className)}>
      {children}
    </a>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#/" className="inline-flex items-center select-none">
      <img
        src={logoUrl}
        alt="Qubid"
        className={cn("h-7 w-auto", light && "brightness-0 invert")}
      />
    </a>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-4 w-4 shrink-0", className)}
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
  );
}

export function ArrowLink({
  children,
  className,
  href = "#/product",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[13px] font-medium text-navy transition-colors hover:text-green",
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
