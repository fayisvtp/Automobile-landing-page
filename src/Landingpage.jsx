import React from 'react'
import Hero from './components/Hero'
import Adds from './components/Adds'
import ContactPage from './components/ContactPage'
import Benifts from './components/Benifts'

export default function Landingpage() {
  return (
    <div className='w-full h-screen'>
      <Hero/>
      <Adds/>
      <Benifts/>
      <ContactPage/>
    </div>
  )
}
