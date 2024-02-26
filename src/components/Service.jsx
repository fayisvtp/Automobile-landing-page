import React from "react";
import bike from "../assets/images/bike.png";
import icon1 from "../assets/icons/periodic.png";
import icon2 from "../assets/icons/repair.png";
import icon3 from "../assets/icons/zoom.png";
import icon4 from "../assets/icons/tune.png";
import icon5 from "../assets/icons/wheel.png";
import icon6 from "../assets/icons/fluid.png";
import arrow from "../assets/icons/arrow.png";
const services = [
  { title: "Periodic Maintenance", icon: icon1 },
  { title: "Repair Services", icon: icon2 },
  { title: "Zoom Services", icon: icon3 },
  { title: "Tune-Up Services", icon: icon4 },
  { title: "Wheel Services", icon: icon5 },
  { title: "Fluid Services", icon: icon6 },
];

export default function Service() {
  return (
    <>
      <div
        className="servce_section col-12  "
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="hedinag_btn d-flex col-9">
          <div className="col-6 heading m-2 text-white ">
            <h1 style={{ fontSize: "70px" }}>Our Services</h1>
          </div>

          <div className=" p-2 d-flex align-items-end justify-content-end">
            <button
              style={{ backgroundColor: "#FFA500", fontSize: "20px" }}
              className="p-2 text-white rounded"
            >
              See All services
            </button>
          </div>
        </div>

        <div className="servce_section p-5 col-12 d-flex">
  <div className="col-7 d-flex row underline">
    {services.map((service, index) => (
      <div key={index} className=" col-4 hover-section text-white">
        <img src={service.icon} alt={service.title} className="p-3 icon" />
        <h3 className="">{service.title}</h3>
        <div className="button_area">
          <button className="service_btn d-flex align-items-center m-2">
            <img
              src={arrow}
              alt="Service Icon"
              className="icon-hover-effect icon"
            />
            <span className="ml-2">Service Details</span>
          </button>
        </div>
      </div>
    ))}
  </div>
  <div className="col d-flex justify-content-end align-items-end">
    <img src={bike} alt="" />
  </div>
</div>

      </div>
    </>
  );
}
