

const Navbar = () => {
  return (
    <header className="main-header_area position-relative">
      <div
        className="header-top py-6 py-lg-3"
        style={{ backgroundColor: "#ff5e13" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-xl-2 offset-lg-3 col-xl-4 col-lg-5 d-none d-lg-block ms-auto">
              <div className="header-top-right text-end">
                <div className="contact-number d-flex align-items-center">
                  <i class="fa-regular fa-envelope text-white"></i>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 d-block d-lg-none">
              <div className="header-logo d-flex">
                <a href="/">
                  {/* <img className="d-none d-lg-block" src="assets/images/logo/dark.png" alt="Header Logo"/>
                                    <img className="d-block d-lg-none" src="assets/images/logo/light.png" alt="Header Logo"/> */}
                  <h1>SKYIT CONSTRUCTION </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main-header header-sticky"
        style={{ backgroundColor: "#00225a" }}>
        <div className="container">
          <div className="main-header_nav">
            <div className="row align-items-center">
              <div className="offset-xl-2 col-xl-10 d-none d-lg-block">
                <div className="main-menu text-center">
                  <nav className="main-nav">
                    <ul>
                      <li className="drop-holder">
                        <a href="/">
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="about">
                          <span>About Us</span>
                        </a>
                      </li>
                      <li className="drop-holder">
                        <a href="#">
                          <span>Services</span>
                        </a>
                        <ul className="drop-menu">
                          <li>
                            <a href="/services/project-management">
                              <span className="mm-text">
                                Project Management
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/services/pre-design">
                              <span className="mm-text">
                                Pre-Design Activity
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/services/construction-implementation">
                              <span className="mm-text">
                                Construction Implementation
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/services/specialized-construction">
                              <span className="mm-text">
                                Specialized Construction
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <a href="#">
                          <span>Project</span>
                        </a>
                        <ul className="drop-menu">
                          <li>
                            <a href="/project/hospitality-sector-projects">
                              Hospitality Sector
                            </a>
                          </li>
                          <li>
                            <a href="/project/logistics-industrial-projects">
                              Logistics & Industrial
                            </a>
                          </li>
                          <li>
                            <a href="/project/corporate-commercial-projects">
                              Corporate & Commercial
                            </a>
                          </li>
                          <li>
                            <a href="/project/residential-projects">
                              Residential
                            </a>
                          </li>
                          <li>
                            <a href="/project/healthcare-projects">
                              Healthcare
                            </a>
                          </li>
                          <li>
                            <a href="/project/entertainment-multiplex-projects">
                              Entertainment & Multiplex
                            </a>
                          </li>
                          <li>
                            <a href="/project/educational-sector-projects">
                              Educational Sector
                            </a>
                          </li>
                          <li>
                            <a href="/project/urban-development-smart-city-projects">
                              Urban Development & Smart City
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact">
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-logo-wrap d-none d-lg-flex">
            <div className="header-fixed-logo">
              <a href="/">
                {/* <img src="assets/images/logo/dark.png" alt="Header Logo"/> */}
                <h5>SKYIT CONSTRUCTION PVT LTD</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu_wrapper" id="mobileMenu">
        <div className="offcanvas-body">
          <div className="inner-body">
            <div className="offcanvas-top">
              <a href="#" className="button-close">
                <i className="ion-ios-close-empty"></i>
              </a>
            </div>
            <div className="offcanvas-menu_area">
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li>
                    <a href="/">
                      <span className="mm-text">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="about">
                      <span className="mm-text">About Us</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">
                        Services
                        <i className="ion-ios-arrow-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="service">
                          <span className="mm-text">Services</span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/project-management">
                          <span className="mm-text">
                            Project Management Services
                          </span>
                        </a>
                        <a href="/services/pre-design">
                          <span className="mm-text">
                            Pre-Design Activity Services
                          </span>
                        </a>
                        <a href="/services/construction-implementation">
                          <span className="mm-text">
                            Construction Implementation Services
                          </span>
                        </a>
                        <a href="/services/specialized-construction">
                          <span className="mm-text">
                            Specialized Construction Services
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">
                        Project
                        <i className="ion-ios-arrow-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="project">
                          <span className="mm-text">Project Default</span>
                        </a>
                      </li>
                      <li>
                        <a href="project-2-column">
                          <span className="mm-text">Project 2 Column</span>
                        </a>
                      </li>
                      <li>
                        <a href="project-gallery">
                          <span className="mm-text">Project Gallery</span>
                        </a>
                      </li>
                      <li>
                        <a href="project-slider">
                          <span className="mm-text">Project Slider</span>
                        </a>
                      </li>
                      <li>
                        <a href="project-detail">
                          <span className="mm-text">Project Detail</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">
                        Pages
                        <i className="ion-ios-arrow-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="our-clients">
                          <span className="mm-text">Our Clients</span>
                        </a>
                      </li>
                      <li>
                        <a href="our-team">
                          <span className="mm-text">Our Team</span>
                        </a>
                      </li>
                      <li>
                        <a href="our-working-process">
                          <span className="mm-text">Our Working Process</span>
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">
                            Multi Dropdown
                            <i className="ion-ios-arrow-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">
                              <span className="mm-text">
                                Level 02
                                <i className="ion-ios-arrow-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <a href="#">
                                  <span className="mm-text">Level 03</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">
                        Blog
                        <i className="ion-ios-arrow-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog">
                          <span className="mm-text">Blog Default</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-leftsidebar">
                          <span className="mm-text">Blog Left Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-rightsidebar">
                          <span className="mm-text">Blog Right Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail">
                          <span className="mm-text">Blog Detail</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">
                        Shop
                        <i className="ion-ios-arrow-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop">
                          <span className="mm-text">Shop Default</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-leftsidebar">
                          <span className="mm-text">Shop Left Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-rightsidebar">
                          <span className="mm-text">Shop Right Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="product-detail">
                          <span className="mm-text">Product Detail</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact">
                      <span className="mm-text">Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-minicart_wrapper" id="miniCart">
        <div className="offcanvas-body">
          <div className="minicart-content">
            <div className="minicart-heading">
              <h4 className="mb-0">Shopping Cart</h4>
              <a href="#" className="button-close">
                <i className="ion-ios-close-empty"></i>
              </a>
            </div>
            <ul className="minicart-list">
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i className="ion-ios-close-empty"></i>
                </a>
                <div className="product-item_img">
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/1-1-100x103.jpg"
                    alt="Product Image"
                  />
                </div>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop">
                    Cutting Pliers
                  </a>
                  <span className="product-item_quantity">1 x $80.00</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i className="ion-ios-close-empty"></i>
                </a>
                <div className="product-item_img">
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/1-2-100x103.jpg"
                    alt="Product Image"
                  />
                </div>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop">
                    Safety Helmet
                  </a>
                  <span className="product-item_quantity">1 x $120.00</span>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="#">
                  <i className="ion-ios-close-empty"></i>
                </a>
                <div className="product-item_img">
                  <img
                    className="img-full"
                    src="assets/images/product/small-size/1-3-100x103.jpg"
                    alt="Product Image"
                  />
                </div>
                <div className="product-item_content">
                  <a className="product-item_title" href="shop">
                    Jack Hammer Drill
                  </a>
                  <span className="product-item_quantity">1 x $230.00</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">$91.05</span>
          </div>
          <div className="group-btn_wrap d-grid gap-2">
            <a href="cart" className="btn btn-secondary btn-primary-hover">
              View Cart
            </a>
            <a href="checkout" className="btn btn-secondary btn-primary-hover">
              Checkout
            </a>
          </div>
        </div>
      </div>
      <div className="global-overlay"></div>
    </header>
  );
};

export default Navbar;
