import React from 'react'
import { Link } from 'react-router-dom'
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
                        <div className="col-xl-6 col-lg-3">
                            <div className="widget-item text-hawkes-blue">
                                <div className="footer-logo pb-5">
                                    <Link to="#">
                                        <img style={{width: "200px"}} src="assets/images/logo/designstyle1.png" alt="Logo"/>
                                    </Link>
                                </div>
                                <p className="short-desc font-size-16 mb-5">Construction of itself, because it is are <br/> but because some proper style design is occur in toil and pain pleasure</p>
                                <div className="inquary">
                                    <h5 className="text-primary">For inquary</h5>
                                    {/* <Link to="tel://+12345-879-854">+12345 879 854</Link> */}
                                    <Link class="text-lowercase" to="mailto://info@example.com">info@example.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-sm-6 pl-xl-80 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Information</h3>
                                <ul className="widget-list-item text-hawkes-blue">
                                    <li>
                                        <Link to="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our Services</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Recent Projects</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-3 col-sm-6 ps-lg-10 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Quick Links</h3>
                                <ul className="widget-list-item text-hawkes-blue">
                                    <li>
                                        <Link to="#">Support Center</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Offers & Promotion</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Payment Method</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Clients & Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-4 pt-8 pt-lg-0">
                            <div className="widget-item">
                                <h3 className="heading text-white mb-6">Contact Info</h3>
                                <div className="widget-list-item text-hawkes-blue">
                                    <div className="widget-address pb-5">
                                        <p className="mb-1">New Delhi, Delhi, India
                                        </p>
                                        
                                        {/* <span>+12345 698 745 / +32145 852 785</span> */}
                                    </div>
                                    {/* <div className="widget-address">
                                        <p className="mb-1">75, Victoriya Street, New Town Park Road,
                                            <span className="text-primary">Sydney, Australia</span>
                                        </p>
                                        <span>+98745 258 102 / +98745 612 301</span>
                                    </div> */}
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
                                    <Link to="#" data-tippy="Facebook" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: ".5rem"}}>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="twitter">
                                    <Link to="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: ".75rem"}}>
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </Link>
                                </li>
                                <li className="instagram">
                                    <Link to="#" data-tippy="Instagram" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{marginRight: ".75rem"}}>
                                        <i class="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-8 align-self-center">
                                    <div className="copyright">
                            <Link to="#">Terms & Conditions</Link> | &nbsp;
                                <span className="copyright-text">© 2025 Copyrights <i className="fa fa-heart text-danger"></i> by <Link to="https://Skyit.com/" rel="noopener" target="_blank">Skyit</Link> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link className="scroll-to-top" to="">
            <i className="ion-android-arrow-up"></i>
        </Link>
    </>
  )
}

export default Footer