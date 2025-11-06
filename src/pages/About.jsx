import React from "react";
import AboutArea from "../components/AboutArea";
import Counter from "../components/Counter";
import ProjectArea from "../components/ProjectArea";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div
        class="breadcrumb-area breadcrumb-height position-relative"
        style={{
          backgroundImage: "url('assets/images/breadcrumb/bg/1.jpg')",
        }}>
          <div
    className="overlay"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  ></div>
        <div class="container position-relative" style={{ zIndex: 2 }}>
          <div class="breadcrumb-content text-white py-5">
            <span class="breadcrumb-sub-title">What we do</span>
            <h1 class="breadcrumb-title mb-1">About us</h1>
            <p class="breadcrumb-desc font-size-20">
              Construction of itself, because it is pain some proper style
              design occur are pleasure
            </p>
          </div>
        </div>
      </div>
      <AboutArea />
      <div class="banner banner-style-3" style={{marginBottom: "100px"}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="banner-item text-white banner-secondary-bg">
                <div class="banner-content" data-count="01">
                  <h3 class="title mb-3">Our Mission</h3>
                  <p class="short-desc mb-0">
                    Top rated construction packages we provide page editors now
                    use Lorem as their default model text
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 pt-6 pt-md-0">
              <div class="banner-item text-white banner-primary-bg">
                <div
                  class="banner-content different-data-color"
                  data-count="02">
                  <h3 class="title mb-3">Our Vision</h3>
                  <p class="short-desc mb-0">
                    Top rated construction packages we provide page editors now
                    use Lorem as their default model text
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 pt-6 pt-lg-0">
              <div class="banner-item text-white banner-secondary-bg">
                <div class="banner-content" data-count="03">
                  <h3 class="title mb-3">Our Values</h3>
                  <p class="short-desc mb-0">
                    Top rated construction packages we provide page editors now
                    use Lorem as their default model text
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-area pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <h3 className="count mb-0" data-counterup-time="1500">
                  985
                </h3>
                <h2 className="count-inner-text mb-0">985</h2>
                <h4 className="count-title mb-0">Projects</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <h3 className="count mb-0" data-counterup-time="2000">
                  527
                </h3>
                <h2 className="count-inner-text mb-0">527</h2>
                <h4 className="count-title mb-0">Clients</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <h3 className="count mb-0" data-counterup-time="2500">
                  856
                </h3>
                <h2 className="count-inner-text mb-0">856</h2>
                <h4 className="count-title mb-0">Success</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <h3 className="count mb-0" data-counterup-time="3000">
                  120
                </h3>
                <h2 className="count-inner-text mb-0">120</h2>
                <h4 className="count-title mb-0">Awards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProjectArea /> */}
      <Team />
      <Testimonials />
    </>
  );
};

export default About;
