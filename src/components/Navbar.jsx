import React,{useState ,useEffect} from "react";
import {NavLinks} from '../constants/index'

const Navbar = () => {
  const [scrolled, setscrooled] = useState(false)

               useEffect(() => {
                 const handleScrolled = () =>{
                  const isScrolled  = window.screenY > 10;
                  setscrooled(true)
                 }
                 window.addEventListener('scroll' , handleScrolled)
                 return () => window.removeEventListener
                }, [])
               
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Sharva Save
        </a>
        <nav className="desktop">
               <ul>
               {NavLinks.map(({link, name}) =>(
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline"/>
                  </a>
                </li>
               ))}
               </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div>
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
