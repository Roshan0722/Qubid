import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** entry variant */
  variant?: "up" | "fade" | "left" | "right" | "pop" | "none";
  /** delay in ms */
  delay?: number;
  as?: ElementType;
  threshold?: number;
  style?: CSSProperties;
  id?: string;
};

/**
 * Reveals children once they scroll into view and exposes an `.in` class
 * on the wrapper, which mockup children use to run their own micro-animations.
 */
/** true on phone-width viewports */
function useIsMobile() {
  const [mobile, setMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return mobile;
}

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  threshold = 0.12,
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  // On phones every block is its own full-width stack item, so trigger on any
  // part of it entering the lower band of the viewport, and keep the stagger
  // short so blocks arrive one after another as you scroll.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      isMobile
        ? { threshold: 0.01, rootMargin: "0px 0px -12% 0px" }
        : { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, isMobile]);

  // Keep the ordering of a stagger group but compress it on small screens,
  // so each block still arrives one after the other while scrolling.
  const effectiveDelay = isMobile
    ? Math.min(Math.round(delay * 0.55), 240)
    : delay;

  return (
    <Tag
      id={id}
      ref={ref as never}
      style={{ ...style, transitionDelay: `${effectiveDelay}ms` }}
      className={cn("rv", `rv-${variant}`, visible && "in", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------------- count up ---------------- */

function parse(value: string) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const raw = m[2].replace(/,/g, "");
  const num = Number(raw);
  if (!Number.isFinite(num) || num === 0) return null;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { prefix: m[1], value: num, suffix: m[3], decimals, grouped: m[2].includes(",") };
}

function format(n: number, decimals: number, grouped: boolean) {
  const fixed = n.toFixed(decimals);
  if (!grouped) return fixed;
  const [whole, frac] = fixed.split(".");
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac ? `${withCommas}.${frac}` : withCommas;
}

export function CountUp({
  value,
  duration = 1300,
  className,
  delay = 0,
}: {
  value: string;
  duration?: number;
  className?: string;
  delay?: number;
}) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}${format(0, parsed.decimals, parsed.grouped)}${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(
          `${parsed.prefix}${format(eased * parsed.value, parsed.decimals, parsed.grouped)}${parsed.suffix}`,
        );
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            window.setTimeout(run, delay);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
