import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import img1 from "../assets/marquee/1.png";
import img2 from "../assets/marquee/2.png";
import img3 from "../assets/marquee/3.png";
import img4 from "../assets/marquee/4.png";

type Slide = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  cta: string;
  href: string;
  img: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "UK Tender Opportunities",
    title: "Find Every Tender",
    accent: "Worth Winning",
    body: "Discover, track and bid on relevant UK tenders with AI-powered insights. Save time, stay ahead and grow your business.",
    cta: "Explore Tenders",
    href: "#/product",
    img: img1,
  },
  {
    eyebrow: "Every Portal, One Feed",
    title: "Find Tenders",
    accent: "Matched to Your Profile",
    body: "Qubid scans every UK portal daily and surfaces only the tenders that fit your business, so nothing relevant slips through.",
    cta: "See How It Works",
    href: "#/product",
    img: img3,
  },
  {
    eyebrow: "Bid Library",
    title: "Upload Once,",
    accent: "Reuse Everywhere",
    body: "Drop in your past bids, policies and case studies. Qubid learns from your documents to draft stronger proposals.",
    cta: "Start Uploading",
    href: "#/sign-up",
    img: img2,
  },
  {
    eyebrow: "Compliance Ready",
    title: "Submit With",
    accent: "Total Confidence",
    body: "Automatic checks against every requirement, from social value to security, so every bid is complete before the deadline.",
    cta: "Try for Free",
    href: "#/sign-up",
    img: img4,
  },
];

const INTERVAL = 6000;

export default function VisualMarquee() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = SLIDES.length;

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Qubid highlights"
      className="border-b border-hair bg-[#eef3f9] py-8 sm:py-10"
    >
      <div className="relative mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[18px] bg-[#f7f9fc] shadow-[0_24px_60px_-28px_rgba(12,46,100,0.35)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <NavyPanel />
          <div className="grid">
            {SLIDES.map((s, i) => (
              <SlideView key={i} slide={s} active={i === index} n={i + 1} total={count} />
            ))}
          </div>
        </div>

        {/* arrows */}
        <ArrowBtn dir="prev" onClick={() => go(index - 1)} />
        <ArrowBtn dir="next" onClick={() => go(index + 1)} />

        {/* dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-2 bg-green" : "w-2 bg-[#c3cfdc] hover:bg-[#a9b8c9]",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* text lines fade up one after another; on exit they all fade out together */
function stagger(active: boolean, step: number) {
  return {
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(10px)",
    transition: active
      ? `opacity 600ms ease ${120 + step * 70}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${120 + step * 70}ms`
      : "opacity 250ms ease, transform 250ms ease",
  };
}

function SlideView({
  slide,
  active,
  n,
  total,
}: {
  slide: Slide;
  active: boolean;
  n: number;
  total: number;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${n} of ${total}`}
      aria-hidden={!active}
      className={cn(
        "relative grid [grid-area:1/1] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]",
        active ? "z-10" : "pointer-events-none z-0",
      )}
    >
      {/* copy */}
      <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10">
        <p style={stagger(active, 0)} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          {slide.eyebrow}
        </p>
        <h2 style={stagger(active, 1)} className="mt-3 text-[24px] font-bold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[30px] lg:text-[34px]">
          {slide.title}
          <br />
          <span className="text-green">{slide.accent}</span>
        </h2>
        <p style={stagger(active, 2)} className="mt-3 max-w-[400px] text-[14px] leading-relaxed text-ink/85">
          {slide.body}
        </p>
        {/* <a
          href={slide.href}
          tabIndex={active ? 0 : -1}
          style={stagger(active, 3)}
          className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_10px_22px_-12px_rgba(10,163,74,0.7)] transition-colors hover:bg-green-dark"
        >
          {slide.cta}
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </a> */}
      </div>

      {/* illustration */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-[#123f8a] to-navy-deep px-6 py-8 md:bg-none md:py-8">
        <img
          src={slide.img}
          alt=""
          draggable={false}
          className={cn(
            "relative z-10 w-[170px] select-none drop-shadow-[0_24px_32px_rgba(2,20,60,0.45)] transition-[opacity,transform] sm:w-[200px] lg:w-[230px]",
            active
              ? "translate-y-0 scale-100 opacity-100 delay-150 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "translate-y-4 scale-[0.96] opacity-0 duration-300 ease-in",
          )}
        />
      </div>
    </div>
  );
}

/* static background: stays put while slide content crossfades over it */
function NavyPanel() {
  return (
    <div
      aria-hidden
      className="absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-br from-[#123f8a] via-navy to-navy-deep md:block"
      style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M120 400 C 200 240, 260 190, 360 200"
          stroke="url(#vm-green)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M430 400 C 470 250, 540 150, 640 120"
          stroke="#2a5fb8"
          strokeWidth="18"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="vm-green" x1="120" y1="400" x2="360" y2="200">
            <stop stopColor="#0aa34a" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0aa34a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ArrowBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
      onClick={onClick}
      className={cn(
        "absolute top-[calc(50%-14px)] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_10px_24px_-8px_rgba(12,46,100,0.35)] transition-transform hover:scale-105 sm:flex",
        dir === "prev" ? "left-0 sm:left-1" : "right-0 sm:right-1",
      )}
    >
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={dir === "prev" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"} />
      </svg>
    </button>
  );
}
