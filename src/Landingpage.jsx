import React from 'react'
import Hero from './components/Hero'
import Adds from './components/Adds'
import ContactPage from './components/ContactPage'
import Benifts from './components/Benifts'
import Service from './components/Service'
import Tags from './components/Tags'
import CarouselSlider from './components/CarouselSlider'
import Footer1 from './components/Footer1'


export default function Landingpage() {
  return (
    <div className='w-full h-screen'>
      <Hero/>
      <Adds/>
      <Service/>
      <Tags/>
      <Benifts/>
      <ContactPage/>
      <CarouselSlider/>
      <Footer1/>
     
    </div>
  )
}
