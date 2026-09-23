import { ArrowLink, Container, G, SectionHead } from "./ui";
import Reveal from "./Reveal";
import imgProcurementAct from "../assets/resources/procurement-act.jpg";
import imgSocialValue from "../assets/resources/social-value.jpg";
import imgUkSpend from "../assets/resources/uk-spend.jpg";

const POSTS = [
  {
    tag: "Guide",
    title: "The 2026 Procurement Act: what changed for SME bidders",
    img: imgUkSpend,
  },
  {
    tag: "Playbook",
    title: "Writing social value answers evaluators actually score",
    img: imgSocialValue,
  },
  {
    tag: "Report",
    title: "Where UK public spend is heading in the next 12 months",
    img: imgProcurementAct,
  },
];

export default function Resources() {
  return (
    <section className="border-b border-hair bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHead eyebrow="Resources">
          Guidance from the <G>bid desk</G>
        </SectionHead>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} variant="up" className="flex">
            <article
              className="group flex w-full flex-col overflow-hidden rounded-xl border border-hair bg-white lift transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#cfd9df]"
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
                <h3 className="mt-2.5 flex-1 text-[16px] leading-snug">{p.title}</h3>
                <div className="mt-5">
                  <ArrowLink href="#/resources">Read more</ArrowLink>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
