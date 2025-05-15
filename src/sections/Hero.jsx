import React from "react"; 
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperince from "../components/HeroModels/HeroExperince";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Hero = () => {
//   const words = [
//     { text: "Ideas", imgPath: "/images/ideas.svg" },
//     { text: "Concepts", imgPath: "/images/concepts.svg" },
//   ];

useGSAP(() =>{
  gsap.fromTo('.hero-text h1' ,
    {y:50,
      opacity:0
    },
    
    {opacity:1,
      y:0,
      stagger:0.5,
      duration:1,
      ease:'power1.inOut'
    }
  )
})
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" srcSet="" />
      </div>

      <div className="hero-layout">
        {/* left section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-12 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="this is image"
                          className="xl:12 md:size-10 size-7 rounded-b-full bg-white-50"
                        />

                        <span> {word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              
              <h1>Into Real Projects</h1>
              <h1>That Deliver Result </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hii Im Sharva A react js and Next js deloper word fo the Uni5 tech</p>
            <Button className="md:w-80 md:h-16 w-70 h-12"
            id="button"
            text="See My Works"/>
          </div>

          
        </header>
        {/* right side */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperince/>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
