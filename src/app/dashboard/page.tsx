import React from 'react'

const page = () => {
  return (
    <div
      className='relative w-[90vw] max-md:w-screen h-[95vh] flex justify-center items-center overflow-hidden text-4xl max-md:text-xl text-white font-bold uppercase '
      style={{ backgroundImage: 'url(/assets/admin-main.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Blur effect div */}
      <div 
        className='absolute inset-0 bg-black opacity-60' 
        style={{ filter: 'blur(8px)' }}
      ></div>

      {/* Content */}
      <div className='relative z-10'>
        Welcome to Avinnya Skin Clinic
      </div>
    </div>
  )
}

export default page
