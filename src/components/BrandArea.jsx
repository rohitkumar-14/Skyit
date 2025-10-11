import React from "react";

const BrandArea = () => {
  return (
    <div
      className="brand-area pt-140 pb-6"
      style={{ backgroundImage: "url('/assets/images/brand/bg/1-1.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-grid">
              <div className="brand-row d-flex align-items-center flex-wrap mb-4">
                {[...Array(5)].map((_, i) => (
                  <a className="brand-item mx-3" href="#" key={i}>
                    <img
                      src={`/assets/images/brand/${i + 1}.png`}
                      alt={`Brand ${i + 1}`}
                    />
                  </a>
                ))}
              </div>

              <div className="d-flex align-items-center flex-wrap" style={{gap: "6rem"}}>
                {[...Array(5)].map((_, i) => (
                  <a className="brand-item mx-3" href="#" key={i + 5}>
                    <img
                      src={`/assets/images/brand/${i + 6}.png`}
                      alt={`Brand ${i + 6}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
