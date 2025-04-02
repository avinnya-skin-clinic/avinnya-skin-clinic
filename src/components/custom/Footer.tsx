'use client';

// System Components import
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { InstagramIcon } from 'lucide-react';

const Footer = () => {

  const location = "2nd floor, Narayan chembers, behind Vitthal HP petrol pump, Bhekrai Nagar, Hadapsar, Phursungi, Pune, Maharashtra 412308";

  return (
    <footer className="w-full bg-[#F5F5DC] text-black py-8">
      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Company Info Section */}
        <div className="text-center max-md:text-left mb-6">
          <h3 className="text-2xl font-semibold">Avinnya Skin Clinic</h3>
          <p className="text-sm">Providing personalized skincare treatments with care and professionalism. Located in Mumbai, India.</p>
        </div>

        {/* Links and Location */}
        <div className="flex flex-col md:flex-row justify-evenly items-stretch gap-8 max-md:gap-4">

          {/* Quick Links Section */}
          <div className="text-center flex flex-col justify-center items-start gap-1 max-md:text-left">
            <h3 className="text-2xl font-semibold underline">Quick Links</h3>
            <Link href="/hair-treatment" className="text-orange-600 text-base font-medium hover:underline">Hair Treatments</Link>
            <Link href="/skin-rejuvenation" className="text-orange-600 text-base font-medium hover:underline">Skin Rejuvenation</Link>
            <Link href="/personalized-nutrition" className="text-orange-600 text-base font-medium hover:underline">Personalized Nutrition</Link>
            <Link href="/advanced-laser-treatments" className="text-orange-600 text-base font-medium hover:underline">Advanced Laser Treatments</Link>
          </div>

          <div className="text-center flex flex-col justify-center items-start gap-1 max-md:text-left">
            <h3 className="text-2xl font-semibold underline">Contact Us</h3>
            <div className=' flex flex-row gap-1'>
              <span className=' font-bold'>Address: </span>
              <p className=' text-orange-600 font-medium max-w-[17.5vw] max-md:max-w-[100vw] text-justify text-sm'>{location}</p>
            </div>
            <div className=' flex flex-row gap-1'>
              <span className=' font-bold'>Phone: </span>
              <Button
                variant={'link'}
                className='text-orange-600 p-1 h-fit cursor-pointer font-medium'
                onClick={() => { window.open('tel:+919130759132', '_self'); }}
              >
                +91-9130759132
              </Button>
            </div>
            <div className=' flex flex-row gap-1'>
              <span className=' font-bold'>Email: </span>
              <Button
                className="text-orange-600 p-1 h-fit cursor-pointer font-medium"
                variant={"link"}
                onClick={() => {
                  window.location.href = 'mailto:avinnyaskinclinic.info@gmail.com';
                }}
              >
                avinnyaskinclinic.info@gmail.com
              </Button>
            </div>
            <div className=' flex flex-row gap-1'>
              <span className=' font-bold'>Social Handles: </span>
              <Button
                className="text-orange-600 border border-orange-300 p-1 h-fit cursor-pointer font-medium"
                variant={"link"}
                onClick={() => {
                  window.open('https://www.instagram.com/avinnyaskinclinic/', '_blank');
                }}
              >
                <InstagramIcon className=' h-full w-full' /> Instagram
              </Button>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="w-full md:max-w-xl">
            <h5 className="text-lg font-semibold text-center md:text-left">Our Location</h5>
            <div className="relative w-full h-[400px] rounded-lg shadow-lg">
              <iframe
                title="Avinnya Skin Clinic Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.9430%2C18.4743%2C73.9630%2C18.4943&layer=mapnik&marker=18.4843%2C73.9530&zoom=12"
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className=' w-full h-[1px] bg-gray-700 my-5'></div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2025 Avinnya Skin Clinic. All Rights Reserved. Developed By <Link href={'https://github.com/KushalHarsora'} className=' font-bold cursor-pointer'>Kushal Harsora</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
