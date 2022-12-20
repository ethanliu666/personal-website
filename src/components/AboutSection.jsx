import { useInView } from "react-intersection-observer";
import useAnalyticsEventTracker from "./analyticsEventTracker";
import Instalight from "../assets/logos/gramm.png";
import Instadark from "../assets/logos/insta-logo-dark.png";

function AboutSection() {
  const gaEventTracker = useAnalyticsEventTracker("Instagram");
  const { ref: refOne, inView: oneIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: refTwo, inView: twoIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      name="about"
      className="dark:bg-teal bg-[#c0c2ce] grid md:grid-cols-2 justify-center items-center px-5 md:px-24 lg:px-56 xl:px-80"
    >
      <div
        ref={refOne}
        className={`flex flex-col items-start mt-12 mx-5 md:my-[3.5rem] animatefu${
          oneIsVisible ? " appearfu" : ""
        }`}
      >
        <h3 className="text-left font-semibold uppercase text-md pb-3 underline underline-offset-2 dark:text-cloud text-[#4c4c55]">
          About Me
        </h3>
        <h1 className="text-5xl font-semibold ">
          Full time student, part time
          <span className="text-[#f8f8fa] dark:text-sand"> nostalgic.</span>
        </h1>
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] pt-5 pb-1 text-left uppercase tracking-wider border-b-2 dark:border-white border-stone-800 cursor-pointer"
          href="https://www.instagram.com/ethanliu8/"
          target="_blank"
          onClick={() => gaEventTracker("Hit me up on the gram")}
        >
          Instagram
          <img
            className="hidden dark:flex ml-3"
            src={Instalight}
            alt="Instagram"
            width="20px"
            height="20px"
          />
          <img
            className="flex ml-3 dark:hidden"
            src={Instadark}
            alt="Instagram"
            width="20px"
            height="20px"
          />
        </a>
      </div>
      <div
        ref={refTwo}
        className={`flex my-12 mx-5 animatefl${
          twoIsVisible ? " appearfl" : ""
        }`}
      >
        <p className="text-lg">
          Hi there, I'm Ethan, I still enjoy Fallout 4 even after 7 years. Other
          than that, I like balling, Peaky Blinders and I have a major sweet
          tooth. I currently am a first year CS student at the University of
          Waterloo. Feel free to hang around as long as you like.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
