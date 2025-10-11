import React from 'react'

const AboutArea = () => {
  return (
    <div className="about-area about-style-2 py-130">
  <div className="container">
    <div className="section-title-area style-01 pb-70">
      <div className="section-title-wrap">
        <div className="section-title with-border text-lg-end">
          <span>ABOUT US</span>
          <h2 className="mb-0">We Construct Your Needs</h2>
        </div>
        <div className="section-desc">
          <p className="font-size-20 mb-0">
            <strong>Skyit Construction Pvt. Ltd.</strong> stands as a testament
            to remarkable growth, having successfully undertaken numerous
            projects across India. Originating from humble beginnings in Delhi,
            the company has now expanded its reach nationwide, achieving
            consistent success in all its endeavors.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="about-img-wrap">
          <div className="about-pattern">
            <img src="assets/images/about/pattern.png" alt="Pattern" />
          </div>
          <div className="about-img">
            <img
              className="img-full"
              src="https://images.unsplash.com/photo-1653991119112-cf9d7eaa7735?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Banner"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="about-content">
          <div className="experience style-2 text-primary">
            <div className="experience-content">
              <span className="year">25</span>
              <h2 className="our-progress">
                Years of <span>Experience</span>
              </h2>
            </div>
            <div className="experience-img">
              <img src="assets/images/about/avatar.png" alt="Avatar" />
            </div>
          </div>
          <h3 className="sub-title mb-4">
            Provide the best Constructing services for our clients with
            satisfaction
          </h3>
          <p className="short-desc mb-7">
            <strong>Skyit Construction</strong> has been built on a foundation
            of unwavering commitment to client satisfaction and diligent
            execution by its founders, employees, and every associate.
            Headquartered in New Delhi, <strong>Skyit Construction</strong>{" "}
            remains rooted in its values while reaching for new heights.
          </p>
          <ul className="list-item">
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <span>
                  Successfully undertaken numerous projects across India with
                  consistent results.
                </span>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <span>
                  Expanded reach nationwide, originating from humble beginnings
                  in Delhi.
                </span>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <span>
                  Rooted in values, committed to client satisfaction, and aiming
                  for new heights.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AboutArea