import React from "react";
import { Link } from 'react-router-dom'
const BrandArea = () => {
  const totalBrands = 10; // total images available

  // Split into chunks of 5 items per row
  const rows = [];
  for (let i = 0; i < totalBrands; i += 5) {
    rows.push([...Array(5)].map((_, j) => i + j + 1).filter(n => n <= totalBrands));
  }

  return (
    <div
      className="brand-area pt-140 pb-6"
      style={{ backgroundImage: "url('/assets/images/brand/bg/1-1.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-grid">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="brand-row d-flex align-items-center justify-content-center flex-wrap mb-4"
                  style={{ gap: "4rem" }} // adjust spacing as you like
                >
                  {row.map((num) => (
                    <Link className="brand-item" to="#" key={num}>
                      <img
                        src={`/assets/images/skyit/clients/${num}.png`}
                        alt={`Brand ${num}`}
                        style={{ maxWidth: "150px", height: "auto" }} // optional: size control
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
