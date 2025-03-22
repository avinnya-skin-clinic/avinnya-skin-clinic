// System Components import
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#fc843f] text-white py-8">
            {/* Main Wrapper */}
            <div className="max-w-7xl mx-auto px-6">

                {/* Company Info Section */}
                <div className="text-center max-md:text-left mb-6">
                    <h3 className="text-2xl font-semibold">Avinnya Skin Clinic</h3>
                    <p className="text-sm">Providing personalized skincare treatments with care and professionalism. Located in Mumbai, India.</p>
                </div>

                {/* Links and Location */}
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 max-md:gap-4">

                    {/* Quick Links Section */}
                    <div className="text-center flex flex-col justify-center items-center gap-1 max-md:text-left">
                        <h3 className="text-2xl font-semibold underline">Quick Links</h3>
                        <Link href="/hair-treatment" className="text-base font-medium hover:underline">Hair Treatments</Link>
                        <Link href="/skin-rejuvenation" className="text-base font-medium hover:underline">Skin Rejuvenation</Link>
                        <Link href="/personalized-nutrition" className="text-base font-medium hover:underline">Personalized Nutrition</Link>
                        <Link href="/advanced-laser-treatments" className="text-base font-medium hover:underline">Advanced Laser Treatments</Link>
                    </div>

                    {/* Location Map Section */}
                    <div className="w-full md:max-w-xl">
                        <h5 className="text-lg font-semibold text-center md:text-left">Our Location</h5>
                        <div className="relative pb-[56.25%]">
                            <iframe
                                title="Avinnya Skin Clinic Location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8745%2C19.0730%2C72.8820%2C19.0795&layer=mapnik&marker=19.0760%2C72.8777"
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
