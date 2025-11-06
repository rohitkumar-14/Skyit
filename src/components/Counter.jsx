import React from 'react'
import { Link } from 'react-router-dom'

const Counter = () => {
  return (
      <div className="counter-area pt-140">
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
  )
}

export default Counter