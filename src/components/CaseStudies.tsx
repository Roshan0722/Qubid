import { useState } from "react";
import { Container, G, SectionHead } from "./ui";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const ITEMS = [
  {
    label: "Nordhall Facilities",
    sector: "Facilities Management",
    quote:
      "We went from chasing three portals a week to a single scored feed. Our team now spends its time writing, not searching.",
    person: "Priya Anand · Head of Bids",
    stat: "3.1× more qualified opportunities",
    img: "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    label: "Marrow Digital",
    sector: "Technology",
    quote:
      "The first draft is genuinely usable. We cut turnaround on a mid-size framework response from nine days to three.",
    person: "Tom Weatherby · Managing Director",
    stat: "66% faster response turnaround",
    img: "https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    label: "Kestrel Care Group",
    sector: "Health & Social Care",
    quote:
      "Deadline tracking alone paid for itself. We haven't missed a clarification window since we switched to Qubid.",
    person: "Ellen Mbeki · Commercial Lead",
    stat: "Zero missed deadlines in 18 months",
    img: "https://images.pexels.com/photos/7693729/pexels-photo-7693729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    label: "Bridgeworth Councils",
    sector: "Public Sector Supply",
    quote:
      "Qubid gave our small commercial team the reach of a department three times the size.",
    person: "David Rowe · Procurement Partner",
    stat: "£4.2m contract value won",
    img: "https://images.pexels.com/photos/9463264/pexels-photo-9463264.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHead eyebrow="Case Studies">
          Teams <G>winning more work</G>
        </SectionHead>

        <Reveal delay={100} className="mt-12 block">
        <div className="flex flex-col gap-3 md:h-[380px] md:flex-row md:gap-2">
          {ITEMS.map((it, i) => {
            const isOpen = i === active;
            return (
              <div
                key={it.label}
                className={cn(
                  "transition-[flex-grow] duration-500 ease-out md:min-w-0",
                  isOpen ? "md:flex-[6]" : "md:flex-[1]",
                )}
              >
              <Reveal delay={i * 110} variant="up" className="block h-full">
              <button
                key={it.label}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isOpen}
                className="group relative h-[300px] w-full overflow-hidden rounded-xl border border-hair bg-white text-left transition-all duration-500 ease-out md:h-full"
              >
                <img
                  src={it.img}
                  alt={it.label}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-100 md:opacity-0",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-navy transition-opacity duration-300",
                    isOpen ? "opacity-70" : "opacity-70 md:opacity-0",
                  )}
                />

                {/* expanded content */}
                <div
                  className={cn(
                    "relative flex h-full flex-col justify-end p-6 transition-opacity duration-200 sm:p-8",
                    isOpen
                      ? "opacity-100"
                      : "opacity-100 md:pointer-events-none md:hidden md:opacity-0",
                  )}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {it.sector}
                  </p>
                  <p className="mt-3 max-w-[520px] text-[18px] font-medium leading-snug text-white sm:text-[21px]">
                    “{it.quote}”
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/20 pt-4">
                    <span className="text-[13px] font-medium text-white">{it.person}</span>
                    <span className="rounded-full bg-green px-2.5 py-[3px] text-[11.5px] font-semibold text-white">
                      {it.stat}
                    </span>
                  </div>
                </div>

                {/* collapsed vertical label */}
                <div
                  className={cn(
                    "absolute inset-0 hidden items-center justify-center md:flex",
                    isOpen && "md:hidden",
                  )}
                >
                  <span
                    className="whitespace-nowrap text-[13px] font-medium tracking-[0.06em] text-navy group-hover:text-green"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {it.label}
                  </span>
                 </div>
                </button>
              </Reveal>
              </div>
            );
          })}
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
