import React from "react";

const Breadcrumb = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.5)", 
}) => {
  return (
    <div
      className="breadcrumb-area breadcrumb-height position-relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="overlay position-absolute"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: overlayColor,
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="breadcrumb-content text-white">
          {subtitle && <span className="breadcrumb-sub-title">{subtitle}</span>}
          {title && <h1 className="breadcrumb-title mb-1">{title}</h1>}
          {description && (
            <p className="breadcrumb-desc font-size-20">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
