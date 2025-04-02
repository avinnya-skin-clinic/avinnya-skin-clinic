'use client';

import Footer from '@/components/custom/Footer';
import Navbar from '@/components/custom/Navbar';
import WhyChooseUs from '@/components/custom/WhyChooseUs';
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
                    style={{ backgroundImage: "url('/assets/laser-treatment-main.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
                    <h2 className="text-lg text-white font-medium z-10">
                        Our Services
                    </h2>
                    <h1 className="text-3xl text-center text-white font-bold z-10">
                        Advanced Laser Treatment
                    </h1>
                    <p className="text-base text-white text-justify z-10">
                        Advanced laser treatments use cutting-edge technology to address skin concerns, rejuvenate skin, and improve texture with minimal downtime.
                    </p>
                </section>

                {/* HIFU Section */}
                <section id='hifu' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/hifu.jpg"
                            alt="HIFU"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-blue-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Weight Loss with HIFU
                        </h2>
                        <p className="text-lg text-gray-700">
                            Struggling with stubborn fat? Our Weight Loss with HIFU treatment utilizes cutting-edge ultrasound technology to target and break down fat cells, promoting body contouring and helping you achieve a toned, sculpted appearance. HIFU is a non-invasive, painless treatment that stimulates collagen production, improves skin elasticity, and reduces fat in problem areas without the need for surgery or downtime. This revolutionary approach helps you achieve lasting results while complementing a healthy lifestyle.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Non-invasive fat reduction using high-intensity focused ultrasound.</li>
                            <li>Targets stubborn fat areas for body contouring and slimming.</li>
                            <li>Improves skin elasticity and tightens the skin for a smoother appearance.</li>
                            <li>No downtime or recovery needed, with minimal discomfort.</li>
                            <li>Safe and effective treatment to achieve a toned, sculpted body.</li>
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

                {/* Carbon Laser Section */}
                <section id='carbon' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/carbon.jpg"
                            alt="Carbon Laser"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-green-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Carbon Laser
                        </h2>
                        <p className="text-lg text-gray-700">
                            Carbon laser treatments, also known as the &quot;China Doll Facial&quot; are a non-invasive skincare procedure that uses laser technology to target and treat various skin concerns. The treatment involves applying a carbon lotion to the skin, which is then treated with a laser that penetrates deep into the pores to remove impurities, reduce oil, and promote skin rejuvenation. Carbon laser facials are known for improving skin texture, reducing acne, minimizing pores, and leaving the skin looking bright and smooth with minimal downtime.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Improves skin texture and radiance for a smoother, more youthful appearance.</li>
                            <li>Targets acne, blackheads, and enlarged pores for clearer skin.</li>
                            <li>Non-invasive treatment with minimal downtime and discomfort.</li>
                            <li>Stimulates collagen production, promoting skin rejuvenation and elasticity.</li>
                            <li>Reduces excess oil and minimizes pore size for a balanced complexion.</li>
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

                {/* Tattoo Removal Section */}
                <section id='tattoo' className="my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/tattoo.jpg"
                            alt="Tattoo Removal"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-yellow-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Tattoo Removal
                        </h2>
                        <p className="text-lg text-gray-700">
                            Tattoo removal is a non-invasive procedure that uses advanced laser technology to break down and eliminate unwanted ink from the skin. The process involves targeting the tattoo with high-intensity light pulses, which are absorbed by the ink particles, causing them to break apart. Over time, the body naturally eliminates these broken-down particles. Tattoo removal is effective for various types of tattoos, including those that are old, faded, or poorly done. While multiple sessions may be required for complete removal, it offers a safe and efficient way to regain clear skin without permanent scarring.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features of Tattoo Removal
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Uses advanced laser technology to break down and remove tattoo ink.</li>
                            <li>Non-invasive procedure with minimal risk of scarring or skin damage.</li>
                            <li>Effective for various types of tattoos, including old and faded designs.</li>
                            <li>Multiple sessions may be required for complete removal, depending on tattoo size and ink color.</li>
                            <li>Safe and efficient solution for regaining clear skin without permanent scarring.</li>
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

                {/* Laser Hair Removal Section */}
                <section id='laser-hair' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/laser-hair.jpg"
                            alt="Laser Hair Removal"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-red-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Laser Hair Removal
                        </h2>
                        <p className="text-lg text-gray-700">
                            Laser hair removal is a safe and effective procedure that uses focused laser light to target and disable hair follicles, preventing future hair growth. This treatment is suitable for all skin types and can be used on various areas of the body, including the face, legs, underarms, and bikini line. The procedure works by emitting concentrated light that is absorbed by the pigment in the hair, converting it into heat energy, which damages the follicle and inhibits regrowth. With multiple sessions, laser hair removal offers long-lasting results and is a great alternative to traditional hair removal methods such as shaving, waxing, or plucking.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Safe and effective for all skin types and hair colors.</li>
                            <li>Targets hair follicles to prevent future hair growth.</li>
                            <li>Long-lasting results with minimal maintenance after multiple sessions.</li>
                            <li>Suitable for various body areas, including sensitive areas like the face and bikini line.</li>
                            <li>Non-invasive procedure with little to no downtime.</li>
                            <li>Cost-effective in the long term compared to traditional hair removal methods.</li>
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
                <section id='skin-brightening' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/skin-brightening.jpg"
                            alt="Skin Brightening"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-orange-100 rounded-2xl">
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

                {/* Freckles Section */}
                <section id='freckles' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/freckles.jpg"
                            alt="Freckles Removal"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-purple-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Freckles Removal
                        </h2>
                        <p className="text-lg text-gray-700">
                            Freckles removal is a cosmetic treatment aimed at reducing or eliminating the appearance of freckles caused by sun exposure or genetic factors. This treatment uses advanced technologies such as laser therapy to target and break down the excess melanin in the skin, which causes freckles. Over time, the skin naturally eliminates these broken-down pigments, leading to a more even complexion. Freckles removal is a non-invasive procedure with minimal downtime and is suitable for individuals seeking to improve their skin&apos;s appearance by reducing sunspots, pigmentation, and freckles.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Uses advanced laser technology to target and reduce freckles and sunspots.</li>
                            <li>Non-invasive procedure with minimal risk of scarring or side effects.</li>
                            <li>Improves skin tone and promotes a more even complexion.</li>
                            <li>Minimal downtime with most patients resuming daily activities shortly after treatment.</li>
                            <li>Safe and effective for all skin types, with personalized treatment options.</li>
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

                <WhyChooseUs />
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Page;
