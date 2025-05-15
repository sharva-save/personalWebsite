import React from "react";
import { LogoIconList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} srcSet="" />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className=" md:my-20 my-20 relative">
      <div className="gradient-edge"/>
      <div className="gradient-edge"/>
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {LogoIconList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
            {LogoIconList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default LogoSection;
