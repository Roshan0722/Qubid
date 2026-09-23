import { useEffect, useState } from "react";
import { Btn, Logo } from "./ui";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav({ route = "/" }: { route?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [route]);

  return (
    <div className="nav-enter fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={cn(
          "relative mx-auto w-full max-w-[1180px] rounded-full border border-hair bg-white px-3 transition-shadow duration-300 sm:px-4",
          scrolled ? "lift" : "",
        )}
      >
        {/* scroll progress — hairline green fill */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[3px] left-[32px] right-[32px] h-[2px] overflow-hidden rounded-full"
        >
          <span
            style={{ width: `${progress}%` }}
            className="block h-full rounded-full bg-green/70 transition-[width] duration-150 ease-out"
          />
        </span>

        <div className="flex h-[54px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13px] font-medium transition-[background-color,color] duration-200 hover:bg-bgalt hover:text-navy",
                    route === l.href.slice(1) ? "bg-bgalt text-navy" : "text-ink",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              aria-label="Search"
              className="hidden h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-bgalt hover:text-navy sm:inline-flex"
            >
              <svg viewBox="0 0 16 16" className="h-[15px] w-[15px]" fill="none">
                <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <a
              href="#/sign-in"
              className={cn(
                "hidden rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors hover:text-green sm:inline-block",
                route === "/sign-in" ? "text-green" : "text-navy",
              )}
            >
              Sign In
            </a>
            <Btn variant="green" href="#/sign-up" className="hidden sm:inline-flex">
              Try for Free
            </Btn>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hair text-navy transition-colors hover:bg-bgalt lg:hidden"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" strokeLinecap="round" />
                ) : (
                  <path d="M2.5 5h11M2.5 11h11" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0">
            <div className="border-t border-hair px-1 pb-4 pt-3">
              <ul className="space-y-1">
                {LINKS.map((l, i) => (
                  <li
                    key={l.label}
                    style={{ animationDelay: `${60 + i * 50}ms` }}
                    className={cn("mock-row", open && "in")}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-bgalt"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2 px-1">
                <Btn variant="white" href="#/sign-in" className="flex-1">
                  Sign In
                </Btn>
                <Btn variant="green" href="#/sign-up" className="flex-1">
                  Try for Free
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
