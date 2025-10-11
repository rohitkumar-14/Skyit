import React from "react";
import AboutArea from "../components/AboutArea";
import Counter from "../components/Counter";
import ProjectArea from "../components/ProjectArea";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <>
      <div
        class="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: "url('assets/images/breadcrumb/bg/1.jpg')",
        }}>
        <div class="container">
          <div class="breadcrumb-content">
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
      <div class="banner banner-style-3">
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
      <Counter />
      <ProjectArea />
      <Team />
      <Testimonials />
    </>
  );
};

export default About;
