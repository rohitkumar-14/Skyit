import React from 'react'

const NewsLetter = () => {
  return (
    <div
        className="newsletter-area pt-9 pb-8"
        style={{
          backgroundImage:
            "url('/assets/images/newsletter/bg/1-1-1920x198.png')",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-item text-white">
                <div className="newsletter-content">
                  <h2 className="title text-lg-end text-center mb-0">
                    Subscribe our Newsletter
                  </h2>
                </div>
                <div className="newsletter-form_wrap align-self-center">
                  <form
                    className="newsletter-form mt-5"
                    id="mc-form"
                    action="#">
                    <div className="form-field">
                      <input
                        className="input-field"
                        id="mc-email"
                        type="email"
                        autoComplete="off"
                        name="To get update, enter your email"
                        placeholder="To get update, enter your email"
                      />
                    </div>
                    <div className="form-btn_wrap">
                      <button
                        className="btn btn-secondary btn-secondary-hover btn-lg rounded-0"
                        id="mc-submit">
                        Subscribe now
                      </button>
                    </div>
                  </form>
                  <div className="mailchimp-alerts text-centre pt-5">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success"></div>
                    <div className="mailchimp-error"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewsLetter