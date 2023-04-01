import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import video from "./../images/taxifarecalculator.mp4";
import poster from "./../images/taxi_1.png";
import poster1 from "./../images/taxi_2.png";
import poster2 from "./../images/taxi_3.png";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".transition", {
      scrollTrigger: {
        trigger: ".transition",
        start: "center bottom",
      },
      y: 50,
      stagger: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".transition1", {
      scrollTrigger: {
        trigger: ".transition1",
        start: "center center",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });

    gsap.from(".transition2", {
      scrollTrigger: {
        trigger: ".transition2",
        start: "center bottom",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });

    gsap.from(".transition3", {
      scrollTrigger: {
        trigger: ".transition3",
        start: "center bottom",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });
  }, []);

  return (
    <section id="main">
      <section className="first-section">
        <div className="text">
          <h2 className="stagger2 transition">Is This You?</h2>
          <p className="stagger2 transition">
            Are you always avoiding the front seat in a minibus taxi because
            taxi math gives you anxiety? The TaxiFareCalculator app helps you
            calculate change in a taxi with ease.
          </p>
          <a href="/TaxiFareCalculator/Taxifarecalculator.apk" download className="main_button transition">
            Download Now
          </a>
        </div>
        <div className="video_container">
          <video
            src={video}
            controls
            poster={poster}
            className="video transition">
            Can't play video, sorry!
          </video>
        </div>
      </section>
      <section className="second-section">
        <div className="grid-container">
          <div className="feature  transition1">
            <h3>Clean Display</h3>
            <p>
              Answers are displayed in a nice and clean layout so you can easily
              see them.
            </p>
          </div>

          <div className="feature  transition1">
            <h3>Colors</h3>
            <p>
              Bright colours to help you distinguish between different
              calculations.
            </p>
          </div>
          <div className="feature transition1">
            <h3>Money keyboard</h3>
            <p>Money keyboard that saves you from all forms of calculations</p>
          </div>
          <div className="feature  transition1">
            <h3>Speed</h3>
            <p>The App is fast, lightweight and provides answers instantly</p>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="img-grid">
          <img
            src={poster}
            className="poster transition2"
            alt="TaxiFareCalculator"
          />
          <img
            src={poster1}
            className="poster transition2"
            alt="TaxiFareCalculator"
          />
          <img
            src={poster2}
            className="poster transition2"
            alt="TaxiFareCalculator"
          />
        </div>
      </section>
      <section className="call_to_action">
        <h3 className="transition3">You will never be intimidated again</h3>
        <div className="centerButton">
          <a href="/TaxiFareCalculator/Taxifarecalculator.apk" download className="cta_button transition3">
            Download Now
          </a>
        </div>
      </section>
    </section>
  );
};

export default Main;
