import React from 'react';
import add1 from '../assets/images/add1.jpg';
import add2 from '../assets/images/add2.png';

export default function Adds() {
  return (
    <div className='col-12 d-flex flex-wrap  '>
      <img className='p-5 col-md-5 col-12' src={add1} alt="" />
      <img className='p-5 col-md-7 col-12 ' src={add2} alt="" />
    </div>
  );
}
