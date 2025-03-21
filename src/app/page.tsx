// Project Components Routes
import Appointment from '@/components/custom/Appointment'
import Footer from '@/components/custom/Footer'
import Hero from '@/components/custom/Hero'
import Main from '@/components/custom/Main'
import Navbar from '@/components/custom/Navbar'
import Reviews from '@/components/custom/Reviews'
import WhyChooseUs from '@/components/custom/WhyChooseUs'

// System Components import
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <main className=' h-screen w-screen overflow-x-hidden overflow-y-auto'>
        <Navbar />
        <Main />
        <WhyChooseUs />
        <Hero />
        <Appointment />
        <Reviews />
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Page