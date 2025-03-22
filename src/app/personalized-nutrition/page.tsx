'use client';

import Footer from '@/components/custom/Footer';
import Navbar from '@/components/custom/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {

    const router = useRouter();

    return (
        <React.Fragment>
            <main className="h-fit w-screen max-w-screen overflow-x-hidden overflow-y-auto">
                <Navbar />

                {/* Hero Section */}
                <section
                    className="h-[60vh] w-screen max-w-screen bg-cover bg-center flex flex-col justify-center items-center gap-2 max-md:p-4 sticky"
                    style={{ backgroundImage: "url('/assets/nutrition-main.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
                    <h2 className="text-lg text-white font-medium z-10">
                        Our Services
                    </h2>
                    <h1 className="text-3xl text-white font-bold z-10">
                        Personalized Nutrition
                    </h1>
                    <p className="text-base text-white text-justify z-10">
                        Personalized nutrition tailors dietary plans to individual needs, promoting optimal health and well-being.
                    </p>
                </section>

                {/* Skin Pigmentation Treatment Section */}
                <section id='weight-loss' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/weight-loss.jpg"
                            alt="Personalized Nutrition"
                            className="w-full h-full object-cover rounded-lg"
                            layout="intrinsic"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-blue-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Weight Loss Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                        Struggling to shed those extra pounds? Our weight loss nutrition program is designed to help you achieve sustainable and healthy weight loss. A well-balanced diet with nutrient-dense foods plays a crucial role in effective weight loss. We focus on eliminating processed foods, incorporating high-protein and fiber-rich meals, and understanding portion control. Mindful eating practices help curb cravings and prevent overeating, ensuring you stay on track. Additionally, behavioral and lifestyle modifications are integrated to support long-term success.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Balanced Meal plans with essential nutrients</li>
                            <li>Portion control and Mindful eating techniques</li>
                            <li>High Protein and fiber-rich diet</li>
                            <li>Elimination of highly processed food and fats</li>
                            <li>Lifestyle modifications for sustainable weight loss</li>
                        </ol>

                        {/* Book Appointment Button */}
                        <Button
                            variant={'default'}
                            className='my-5 max-md:my-3 flex justify-center items-center text-lg cursor-pointer p-5 max-md:p-3 rounded-none border-none bg-white text-orange-400 font-medium hover:text-white shadow-md'
                            onClick={() => router.push('/book-an-appointment')}
                        >
                            Book an Appointment
                        </Button>
                    </div>
                </section>

                {/* Skin Brightening Section */}
                <section id='skin-brightening' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/skin-brightening.jpg"
                            alt="Skin Brightening"
                            className="w-full h-full object-cover rounded-lg"
                            layout="intrinsic"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-green-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Skin Brightening
                        </h2>
                        <p className="text-lg text-gray-700">
                            Skin brightening treatments focus on enhancing skin luminosity, reducing dullness, and improving overall skin tone. Unlike skin bleaching, which lightens skin color, skin brightening focuses on restoring natural radiance.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Benefits of Skin Brightening
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Enhances skin glow.</li>
                            <li>Reduces dark spots and uneven tone.</li>
                            <li>Improves hydration and texture.</li>
                        </ol>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Effective Skin Brightening Treatments
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li><strong>Glutathione Therapy:</strong> Antioxidant treatment that detoxifies the skin and enhances brightness.</li>
                            <li><strong>Vitamin C Infusions:</strong> Promotes collagen production and fights dullness.</li>
                            <li><strong>Brightening Facials:</strong> Advanced facial treatments that deeply cleanse, exfoliate, and rejuvenate the skin.</li>
                        </ol>

                        {/* Book Appointment Button */}
                        <Button
                            variant={'default'}
                            className='my-5 max-md:my-3 flex justify-center items-center text-lg cursor-pointer p-5 max-md:p-3 rounded-none border-none bg-white text-orange-400 font-medium hover:text-white shadow-md'
                            onClick={() => router.push('/book-an-appointment')}
                        >
                            Book an Appointment
                        </Button>
                    </div>
                </section>

                {/* Sking Tanning Treatment Section */}
                <section id='skin-tanning' className="my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/skin-tanning.jpg"
                            alt="Skin Tanning"
                            className="w-full h-full object-cover rounded-lg"
                            layout="intrinsic"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-yellow-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Skin Tanning Treatment
                        </h2>
                        <p className="text-lg text-gray-700">
                            Excess exposure to the sun&apos;s UV rays triggers melanin production, leading to skin tanning. While some prefer a tanned look, excessive tanning can cause skin damage, premature aging, and uneven tone.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Tan Removal Treatments
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li><strong>Laser Tan Removal:</strong> Breaks down melanin deposits to restore natural skin tone.</li>
                            <li><strong>Chemical Peels:</strong> Exfoliates the skin to remove tanned layers.</li>
                            <li><strong>De-tan Facials:</strong> Uses brightening agents to eliminate tan and hydrate skin.</li>
                        </ol>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Benefits of Tan Removal
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Restores natural skin tone</li>
                            <li>Removes sun damage</li>
                            <li>Improves skin texture and glow</li>
                        </ol>

                        {/* Book Appointment Button */}
                        <Button
                            variant={'default'}
                            className='my-5 max-md:my-3 flex justify-center items-center text-lg cursor-pointer p-5 max-md:p-3 rounded-none border-none bg-white text-orange-400 font-medium hover:text-white shadow-md'
                            onClick={() => router.push('/book-an-appointment')}
                        >
                            Book an Appointment
                        </Button>
                    </div>
                </section>

                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Page;
