import React from "react";
import "../AutoScrollLogos/autoscroll.css";
import logo1 from "../../assets/image/core-img/logo.png";
import logo2 from "../../assets/image/core-img/logo.png";
import logo3 from "../../assets/image/core-img/logo.png";
import logo4 from "../../assets/image/core-img/logo.png";
// import logo2 from "../../assets/logo2.png";
// import logo3 from "../../assets/logo3.png";
// import logo4 from "../../assets/logo4.png";

function AutoScrollLogos() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        {/* Repeat for smooth infinite scroll */}
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
      </div>
    </div>
  );
}

export default AutoScrollLogos;
