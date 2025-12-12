import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div class="breadcrumb-area breadcrumb-height position-relative" style={{
      backgroundImage: "url('/assets/images/breadcrumb/bg/1.jpg')",
    }}><div
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
                    <span class="breadcrumb-sub-title">Contact us</span>
                    <h1 class="breadcrumb-title mb-1">Get in Touch</h1>
                    <p class="breadcrumb-desc font-size-20">Construction of itself, because it is pain some proper style design occur are pleasure</p>
                </div>
            </div>
        </div>
        <main class="main-content">
            <div class="contact-area pt-140">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-img-wrap">
                                <div class="contact-img">
                                    <img src="assets/images/contact/1-1-510x587.jpg" alt="Contact Image"/>
                                </div>
                                <div class="contact-pattern">
                                    <img src="assets/images/contact/pattern.png" alt="Pattern"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ps-lg-10 pt-10 pt-lg-0">
                            <div class="contact-content">
                                <span class="sub-title mb-2">Do you have a project? let’s start</span>
                                <h2 class="title mb-3">Contact with us</h2>
                                <p class="short-desc mb-0">Construction of itself, because it is pain, but because some are proper style design occur in toil and pain pleasure we have a expert team some of the main features..
                                </p>
                                <div class="contact-info pt-5">
                                    <h3 class="title mb-0">Office Address</h3>
                                    <p class="short-desc with-border mb-0">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia
                                    </p>
                                </div>
                                <div class="contact-info pt-4">
                                    <h3 class="title mb-0">Contact Info</h3>
                                    <ul>
                                        <li>
                                            Phone:
                                            <Link to="tel://+096-12458-875-895">+12345 879 854</Link>
                                        </li>
                                        <li>
                                            Fax:
                                            <Link to="tel://+096-12547-895-874">(+096) 12547 895 874</Link>
                                        </li>
                                        <li>
                                            Email:
                                            <Link class="text-lowercase" to="mailto://info@example.com">info@example.com</Link>
                                        </li>
                                        <li>
                                            Web:
                                            <Link class="text-lowercase" to="mailto://www.example.com">www.example.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-form-area pt-130 pb-115">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="contact-form-title mb-3">Leave a Message</h2>
                            <p class="contact-form-desc mb-0">Top rated construction packages we pleasure ationally obtain simple and easy</p>
                            <form id="contact-form" class="contact-form pt-10" action="#">
                                <div class="group-input">
                                    <input type="text" name="con_name" id="con_name" placeholder="Your Name*" class="input-field me-6" />
                                    <input type="text" name="con_email" id="con_email" placeholder="Your Email*" class="input-field mt-6 mt-sm-0" />
                                </div>
                                <div class="form-field mt-6">
                                    <textarea name="con_message" id="con_message" placeholder="Message" class="textarea-field"></textarea>
                                </div>
                                <div class="button-wrap mt-8">
                                    <button type="submit" value="submit" class="btn btn-custom btn-secondary btn-primary-hover" name="submit">Submit</button>
                                    <p class="form-messege mt-5 mb-0"></p>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 ps-lg-10">
                            <div class="map-with-pattern pt-9">
                                <iframe class="map-size" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"></iframe>
                                <div class="contact-pattern">
                                    <img src="assets/images/contact/pattern.png" alt="Pattern"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
  )
}

export default Contact