import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const SkillsCarousel = () => {

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Stripe",
  "Firebase",
  "Vercel",
  "Git"
];

const [emblaRef] = useEmblaCarousel(
  {
    loop: true,
    dragFree: false,
    watchDrag: false,
  },
  [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]
);

  return (
    <section id="skills" ref={emblaRef}>
  <div className="skills__track">
    {skills.map((skill) => (
      <div className="skills__slide" key={skill}>
        <p className="skills__name">{skill}</p>
        <span className="skills__separator">✦</span>
      </div>
    ))}
  </div>
</section>
  );
};

export default SkillsCarousel;
