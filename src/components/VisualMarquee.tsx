import img1 from "../assets/marquee/1.png";
import img2 from "../assets/marquee/2.png";
import img3 from "../assets/marquee/3.png";
import img4 from "../assets/marquee/4.png";

const IMAGES = [img2, img1, img3, img4];

export default function VisualMarquee() {
  const set = [...IMAGES, ...IMAGES, ...IMAGES];
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-b border-hair bg-bgalt py-10 sm:py-14"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max items-center gap-10 sm:gap-16">
        {set.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-28 w-auto shrink-0 select-none sm:h-36"
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}
