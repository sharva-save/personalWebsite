import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ShowCaseSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".first-project-wrapper",
      { y: 50, opacity: 0 },
      { opacity: 1, y: 0, stagger: 0.5, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(".project", { y: 50, opacity: 0 },
               { opacity: 1, y: 0, stagger: 0.5, duration: 1, ease: "power1.inOut" })
  });
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left side */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="" />
            </div>
            <div className="text-content">
              <h2>
                On- Demand Rides Simple with powerfull user friendly App called
                Rydes - (OnGoing Project) 
              </h2>
              <p className="text-white-50 md:text-xl">
                An app with react native expo and tailwind for a fast user
                friendly experince
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-amber-300">
                <img src="/images/project2.png" alt="" />
              </div>
              <h2>HRMS Software</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-violet-500">
                <img src="/images/project3.png" alt="" />
              </div>
              <h2>Portfolio Website</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
