import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cradRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cradRefs.current[index];
    if (!card) return;

    //get the  postion of the mouse
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calculate the angle 
    let angle = Math.atan2(mouseY , mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start' ,angle + 60)
  };
  return (
    <div
      ref={(el) => {
        cradRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className=" card card-border timeline-card rounded-xl p-10 mb-5 break-avoid-column "
    >
      <div className="glow" />
      <div className="flex items-center  gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="sixe-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
