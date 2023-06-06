import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA"; //here we import the CTA component inside our header
import me from "../../assets/coffe.jpg";
import HeaderSocial from "./HeaderSocial"; //import of headerSocial component

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>HI GUYS I'M</h5>
        <h1>MATHO MAYELLE</h1>
        <h5 className="text-light">SOFTWARE ENGINEER </h5>
        <CTA />
        <HeaderSocial />
        <div className="my_image">
          <img src={me} alt="my img" />
        </div>
        <a href="#contact" className="scroll__down">
          {" "}
          "Explore further down
        </a>
      </div>
    </header>
  );
};
export default Header;
