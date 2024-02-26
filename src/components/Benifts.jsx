import React from "react";
import car from "../assets/images/car.png";
import { MDBContainer } from "mdb-react-ui-kit";
import skill from "../assets/icons/skill.png";
import communications from "../assets/icons/communications.png";
import badge from "../assets/icons/badge.png";
import image from "../assets/images/hero.png"
export default function Benefits() {
  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="container-fluid Benifts_section  underline d-flex w-full h-screen" style={{backgroundColor:'#1E1E1E'}}>
      <div className="col-lg-8 col-md-12 image p-4 d-flex align-items-center justify-content-center" >
        {/* <img src={car} alt="car" className="img-fluid" /> */}
        <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
         src="https://www.youtube.com/embed/VTDB3mKx7jM?si=fwa4zq_llSx5N5dq"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="heading col-12 p-3 mt-3 text-left text-white">
          <h1 style={{ fontSize: "3rem" }}>
            Choose Us for Unmatched <br /> Auto and Bike Care
          </h1>
         
          <p>
            Experience superior automotive care with expert technicians, <br />
            cutting-edge equipment, and a customer-centric approach, <br />
            making us your go-to destination for car and bike needs.
          </p>
        </div>

        <div className="items_area m-4 p-4 ">
          <div className="item-1 d-flex  ">
            <div>
              <img src={skill} alt="" />
            </div>
            <div className="texts p-4 text-white ">
              <h1 className="benifts_icon_heading">Skilled Technicians</h1>
              <p>
                Our team of certified technicians ensures your <br />
                vehicle receives the highest standard of care.
              </p>
            </div>
          </div>
          <div className="item-2  d-flex  ">
            <div>
              <img src={communications} alt="" />
            </div>
            <div className="texts p-4 text-white ">
              <h1 className="benifts_icon_heading">Transparent Communication</h1>
              <p>
                Your satisfaction is our priority; we tailor our <br />
                services to meet your unique needs.
              </p>
            </div>
          </div>
          <div className="item-3 d-flex  ">
            <div>
              <img src={badge} alt="" />
            </div>
            <div className="texts p-4 text-white ">
              <h1 className="benifts_icon_heading">Affordable Excellence</h1>
              <p>
                Quality services at competitive prices, <br />
                ensuring value for every visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
