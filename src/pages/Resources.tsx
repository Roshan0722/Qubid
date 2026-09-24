import { useState } from "react";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { ArrowLink, Btn, Container, Eyebrow, G, SectionHead } from "../components/ui";
import Reveal from "../components/Reveal";
import { cn } from "../utils/cn";

/* ---------- data ---------- */

type Post = {
  tag: string;
  type: string;
  title: string;
  d: string;
  meta: string;
  img: string;
};

const FEATURED: Post = {
  tag: "Playbook",
  type: "Playbook",
  title: "The UK bid desk playbook: from portal alert to submitted response",
  d: "A step-by-step walkthrough of how a two-person bid team runs four frameworks at once  including the review gates, the evidence library structure and the deadline rhythm that keeps submissions on time.",
  meta: "24 min read · Updated February 2026",
  img: "https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const POSTS: Post[] = [
  {
    tag: "Guide",
    type: "Guides",
    title: "The 2026 Procurement Act: what changed for SME bidders",
    d: "Timelines, the new notice types and where the single portal leaves gaps.",
    meta: "12 min read",
    img: "https://images.pexels.com/photos/30624812/pexels-photo-30624812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Guide",
    type: "Guides",
    title: "Writing social value answers evaluators actually score",
    d: "How to move from pledges to measurable commitments with clear baselines.",
    meta: "9 min read",
    img: "https://images.pexels.com/photos/9694853/pexels-photo-9694853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Report",
    type: "Reports",
    title: "Where UK public spend is heading in the next 12 months",
    d: "Category-by-category view of pipeline value across councils and trusts.",
    meta: "18 pages",
    img: "https://images.pexels.com/photos/39545237/pexels-photo-39545237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Template",
    type: "Templates",
    title: "Method statement template with evaluator-facing headings",
    d: "A Word template that maps to the standard quality weightings.",
    meta: ".docx download",
    img: "https://images.pexels.com/photos/7693729/pexels-photo-7693729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Webinar",
    type: "Webinars",
    title: "Live debrief clinic: how to read score feedback properly",
    d: "Recorded session with a senior bid manager on turning feedback into wins.",
    meta: "42 min watch",
    img: "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Templates",
    type: "Templates",
    title: "Evidence library starter structure for 12 common questions",
    d: "Folders, naming conventions and the case study fields that matter.",
    meta: "Notion & Word",
    img: "https://images.pexels.com/photos/9463264/pexels-photo-9463264.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

const TABS = ["All", "Guides", "Templates", "Webinars", "Reports"];

/* ---------- page ---------- */

export default function Resources() {
  const [tab, setTab] = useState("All");
  const posts = tab === "All" ? POSTS : POSTS.filter((p) => p.type === tab);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides, templates and <G>playbooks</G>
          </>
        }
        sub="Practical material from the Qubid bid desk  the same frameworks, word limits and evidence structures we use with customers every week."
        primary="Subscribe to the briefing"
        secondary="See pricing"
        primaryHref="#/sign-up"
        secondaryHref="#/pricing"
        crumbs={[{ label: "Home", href: "#/" }, { label: "Resources" }]}
      />

      {/* FEATURED */}
      <section className="border-b border-hair bg-white py-16 sm:py-20">
        <Container>
          <Reveal variant="fade">
            <Eyebrow>Featured</Eyebrow>
          </Reveal>
          <Reveal
            delay={90}
            variant="up"
            as="article"
            className="mt-6 grid items-stretch gap-0 overflow-hidden rounded-xl border border-hair bg-white lift lg:grid-cols-2"
          >
            <div className="order-1 aspect-[16/10] overflow-hidden border-b border-hair bg-bgalt lg:order-1 lg:aspect-auto lg:border-b-0 lg:border-r">
              <img src={FEATURED.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="order-2 flex flex-col p-6 sm:p-8 lg:p-10">
              <span className="w-fit rounded-full border border-green/30 bg-green/5 px-2.5 py-[3px] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-green">
                {FEATURED.tag}
              </span>
              <h2 className="mt-5 text-[22px] leading-snug sm:text-[28px]">
                {FEATURED.title}
              </h2>
              <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-ink/80">
                {FEATURED.d}
              </p>
              <p className="mt-5 text-[12.5px] text-ink/60">{FEATURED.meta}</p>
              <div className="mt-auto pt-7">
                <Btn variant="green" href="#/sign-up">
                  Read the playbook
                </Btn>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* LIBRARY */}
      <section className="border-b border-hair bg-bgalt py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHead eyebrow="Library" sub="Filter by format. Everything is free, no account required.">
            Browse the <G>library</G>
          </SectionHead>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full border px-4 py-[7px] text-[13px] font-medium transition-colors",
                  tab === t
                    ? "border-navy bg-navy text-white"
                    : "border-hair bg-white text-ink hover:border-[#c9d3d9] hover:text-navy",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div key={tab} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                variant="up"
                as="article"
                className="group flex flex-col overflow-hidden rounded-xl border border-hair bg-white lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-hair bg-bgalt">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
                    {p.tag}
                  </p>
                  <h3 className="mt-2.5 text-[16px] leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink/75">{p.d}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-hair pt-4">
                    <ArrowLink>Read more</ArrowLink>
                    <span className="text-[11.5px] text-ink/55">{p.meta}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="border-b border-hair bg-white py-16 sm:py-20">
        <Container>
          <Reveal className="grid items-center gap-8 border border-hair bg-bgalt p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:p-10">
            <div>
              <Eyebrow>The briefing</Eyebrow>
              <h2 className="mt-3 text-[24px] sm:text-[28px]">
                New UK tenders, every <G>Tuesday</G>
              </h2>
              <p className="mt-3 max-w-[420px] text-[14px] leading-relaxed text-ink/80">
                A short email on new frameworks, changing weightings and the deadlines
                worth marking down. One send a week, unsubscribe any time.
              </p>
            </div>
            <form
              className="flex flex-col gap-2.5 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.co.uk"
                className="min-w-0 flex-1 rounded-full border border-hair bg-white px-4 py-[9px] text-[13px] text-navy outline-none placeholder:text-ink/45 focus:border-navy"
              />
              <Btn variant="green" className="sm:w-auto">
                Subscribe
              </Btn>
            </form>
          </Reveal>
        </Container>
      </section>

      {/* TOPICS */}
      <section className="border-b border-hair bg-bgalt py-14 sm:py-16">
        <Container>
          <p className="text-center text-[13px] font-medium text-ink/65">
            Popular <span className="font-semibold text-navy">topics</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {[
              "Procurement Act 2023",
              "Social value",
              "Framework agreements",
              "NHS supply",
              "CPV codes",
              "Bid pricing",
              "Dynamic purchasing",
              "Debrief analysis",
            ].map((t, i) => (
              <Reveal
                key={t}
                delay={i * 60}
                variant="up"
              >
                <a
                  href="#"
                  className="inline-block border border-hair bg-white px-3.5 py-[6px] text-[12.5px] text-ink transition-colors hover:border-[#c9d3d9] hover:text-navy"
                >
                  {t}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
