import React from "react";
import image from "../assets/images/hero.png";
import car from "../assets/images/herocar.png";
import car2 from "../assets/images/herocar-mobile.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Hero() {
  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container-fluid h-screen p-0">
      <div className="row h-100" style={containerStyle}>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-white">
          <div>
            <h2 style={{ fontSize: "70px" }}>Drive with Confidence,</h2>
            <h1 style={{ fontSize: "73px" }}>Service with Precision</h1>
            <p style={{ fontSize: "30px" }}>
              Your Trusted Destination for Expert Automotive <br /> Care.
              Experience Excellence on Every Road.
            </p>
            <div className="buttons gap-2 col-12">
              <div className="btn bg-white h-5 col-12 col-md-5 mb-2 mb-md-0">
                Schedule Service Now.
              </div>
              <div className="btn m-2 border-white text-white col-12 col-md-5">
                Contact Us
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-end justify-content-end">
          <img src={car2} alt="heroimage" className="car2 col-12" />
        </div>
      </div>
    </div>
  );
}
