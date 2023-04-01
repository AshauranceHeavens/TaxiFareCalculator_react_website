import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";

import taxi from "./../images/minibus.png";

const Header = ({ title }) => {
  const slider = useRef(null);
  const header = useRef(null);

  const tl = gsap.timeline();

  const ham = () => {
    slider.current.style.right = "0vw";
  };

  const cross = () => {
    slider.current.style.right = "-70vw";
  };

  useEffect(() => {
    //to fix glitchy display before animation
    header.current.style = "visibility: visible";
    tl.from(".stagger1", {
      opacity: 0,
      y: -40,
      ease: Power4.easeOut,
      duration: 2,
      stagger:0.3
    });
  }, []);

  return (
    <header className="header" ref={header}>
      <div className="header-wrapper">
        <nav className="nav">
          <figcaption>TaxiFareCalculator</figcaption>
          <div id="ham" onClick={() => ham()}>
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
          </div>
          <div id="slider" ref={slider}>
            <div id="cross" onClick={() => cross()}>
              <div className="div1"></div>
              <div className="div2"></div>
            </div>
            <div className="ul-container">
              <ul>
                <li>
                  <Link to="/TaxiFareCalculator">Home</Link>
                </li>
                <li>
                  <Link to="https://www.github.com/ashauranceheavens">
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="hero">
          <div className="img-container">
           <img src={taxi} alt="Minibus taxi" className="img stagger1" />
          </div>
          <h1 className="heading stagger1">TaxiFareCalculator</h1>
          <p className="subheading stagger1" >No more running away from the front seat again</p>
          <div className="button-container">
            <a href="/TaxiFareCalculator/Taxifarecalculator.apk" download className="button stagger1">Download Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
