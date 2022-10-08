import { useState } from "react";
import Map from "./Map";
import Timeline from "./Timeline";

function Locations() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div name="places" className="flex flex-col bg-storm px-5 md:px-24 lg:px-56 xl:px-80">
      <>
        <h1 className="text-4xl font-semibold text-center text-slate-50 py-10">
          Where I've Lived
        </h1>

        <div
          className={`toggle${toggle ? " second" : ""}`}
          onClick={handleToggle}
        >
          <div className="notch"></div>
        </div>
        <div className="text-center text-slate-50 text-2xl pt-3">
          {!toggle? "See Timeline" : "See Map"}
        </div>
      </>

      <div className={!toggle ? "" : "hidden"}>
        <Map />
      </div>
      <div className={toggle ? "" : "hidden"}>
        <Timeline />
      </div>
    </div>
  );
}

export default Locations;