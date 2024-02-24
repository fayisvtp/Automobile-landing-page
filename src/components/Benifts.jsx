import React from 'react';
import car from '../assets/images/car.png';
import skill from '../assets/icons/skill.png'
export default function Benefits() {
  return (
    <div className="col-12 Benifts_section underline d-flex h-screen" style={{ background: '#1E1E1E' }}>
      <div className="col-8 image ">
        <img src={car} alt="car" />
      </div>
      <div className="col-4 ">
      <div className='heading col-12 p-3 mt-3 text-center text-white' >
  <h1 style={{ fontSize: '45px' }}>Choose Us for Unmatched <br /> Auto and Bike Care</h1>
  <div className="underline" style={{ borderBottom: '2px solid white', width: '100%', margin: 'auto' }}></div>
  <p>Experience superior automotive care with expert technicians,  <br />
    cutting-edge equipment, and a customer-centric approach,  <br />
    making us your go-to destination for car and bike needs.</p>
</div>

<div className='items_area '>
<div className='d-flex  '>
    <div className='icon'>
 <img src={skill} alt="" />
    </div>
    <div className='texts text '>

<h3 className=''>Skilled Technicians</h3>
<p>Our team of certified technicians ensures your vehicle receives the highest standard of care.</p>
    </div>
</div>
</div>
      </div>
    </div>
  );
}
