import useAnalyticsEventTracker from "./analyticsEventTracker";
import BG from "../assets/img/BGC.png";
import Bgif from "../assets/img/bgif.gif";
// .. for outside current dir

function IntroSection() {
  const gaEventTracker = useAnalyticsEventTracker("Rick Roll Counter")

  return (
    <div
      name="intro"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 justify-between w-full h-screen px-0 lg:px-24 xl:px-64">
        <div className="flex flex-col relative justify-center items-start pl-4 md:pl-0 m-auto">
        <span className="z-10 text-md text-left font-bold text-slate-50 w-full">
            Hello there, I'm
          </span>
          <span className="text-5xl lg:text-6xl text-left font-bold text-slate-50 pb-3 w-full z-10">
            Ethan Liu<span className="text-cloud">.</span>
          </span>
          <span className="text-left text-slate-50 text-lg w-full pb-5">
            For those of you on desktop, yes that is my bitmoji, so please add
            me on snap at ethanliu666.
          </span>
          <span className="text-[4rem] lg:text-[6rem] absolute top-[-30px] lg:top-[-50px] z-2 font-bold text-[#113245] tracking-wide">
            Developer
          </span>
          <button className="transition ease-in-out delay-150 hover:translate-x-[8px] text-left text-slate-50 uppercase tracking-wider underline underline-offset-8 py-3">
            <a
              href="https://www.youtube.com/watch?v=O91DT1pR1ew"
              target="_blank"
              onClick={()=>gaEventTracker("Find out more")}
            >
              Find out more
            </a>
          </button>
        </div>
        <div className="hidden md:flex pr-5 justify-center items-center">
          <img src={Bgif} alt="hello gif" />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
