import React from 'react'

const Footer = () => {
  return (
    <>
     <div className="footer-area">
            <div className="footer-top pt-100 pb-80" 
            // style={{ backgroundImage: "url('/assets/images/footer/bg/1-1-1920x454.png')" }}
            style={{ backgroundColor: "#0B1E33" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="widget-item text-hawkes-blue">
                                <div className="footer-logo pb-5">
                                    <a href="#">
                                        <img src="assets/images/logo/white.png" alt="Logo"/>
                                    </a>
                                </div>
                                <p className="short-desc font-size-16 mb-5">Construction of itself, because it is are <br/> but because some proper style design is occur in toil and pain pleasure</p>
                                <div className="inquary">
                                    <h5 className="text-primary">For inquary</h5>
                                    <a href="tel://+12345-879-854">+12345 879 854</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-sm-6 pl-xl-80 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Information</h3>
                                <ul className="widget-list-item text-hawkes-blue">
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Recent Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6 ps-lg-10 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Quick Links</h3>
                                <ul className="widget-list-item text-hawkes-blue">
                                    <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                    <li>
                                        <a href="#">Offers & Promotion</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Payment Method</a>
                                    </li>
                                    <li>
                                        <a href="#">Clients & Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Contact Info</h3>
                                <div className="widget-list-item text-hawkes-blue">
                                    <div className="widget-address pb-5">
                                        <p className="mb-1">215 Central Road, North Street Central Park,
                                            <span className="text-primary">New York, USA</span>
                                        </p>
                                        <span>+12345 698 745 / +32145 852 785</span>
                                    </div>
                                    <div className="widget-address">
                                        <p className="mb-1">75, Victoriya Street, New Town Park Road,
                                            <span className="text-primary">Sydney, Australia</span>
                                        </p>
                                        <span>+98745 258 102 / +98745 612 301</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3 text-hawkes-blue" style={{ backgroundColor: "#0B1E33" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-4">
                            <ul className="social-link">
                                <li className="facebook">
                                    <a href="#" data-tippy="Facebook" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: "8px"}}>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: "10px"}}>
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="#" data-tippy="Instagram" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: "10px"}}>
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-8 align-self-center">
                            <div className="copyright">
                                <span className="copyright-text">© 2022 OxyBuild Made with <i className="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/" rel="noopener" target="_blank">HasThemes</a> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="scroll-to-top" href="">
            <i className="ion-android-arrow-up"></i>
        </a>
    </>
  )
}

export default Footer