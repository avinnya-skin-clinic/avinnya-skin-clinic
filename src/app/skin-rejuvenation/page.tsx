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
                    className="h-[60vh] w-screen max-w-screen bg-cover bg-center flex flex-col justify-center items-center gap-2 max-md:p-2 sticky"
                    style={{ backgroundImage: "url('/assets/skin-rejuvenation-main.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
                    <h2 className="text-lg text-white font-medium z-10">
                        Our Services
                    </h2>
                    <h1 className="text-3xl text-white font-bold z-10">
                        Skin Rejuvenation
                    </h1>
                    <p className="text-base text-white text-justify z-10">
                        Skin rejuvenation therapy enhances skin health, promoting a youthful appearance and improving texture.
                    </p>
                </section>

                {/* Skin Pigmentation Treatment Section */}
                <section id='skin-pigmentation-treatment' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/skin-pigmentation-treatment.jpg"
                            alt="Skin Pigmentation Treatment"
                            className="w-full h-full object-cover rounded-lg"
                            layout="intrinsic"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-blue-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Skin Pigmentation Treatment
                        </h2>
                        <p className="text-lg text-gray-700">
                            Skin pigmentation issues, such as dark spots, melasma, and hyperpigmentation, can affect your complexion and confidence. These conditions arise due to excessive melanin production, sun exposure, hormonal changes, and post-inflammatory hyperpigmentation from acne.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Causes of Pigmentation
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Sun exposure</li>
                            <li>Hormonal changes (pregnancy, birth control use)</li>
                            <li>Acne Scars</li>
                            <li>Aging</li>
                        </ol>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Our Advanced Pigmentation Treatments
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li><strong>Laser Therapy:</strong> Breaks down pigmentation clusters for an even skin tone.</li>
                            <li><strong>Chemical Peels:</strong> Exfoliates the skin, reducing dark patches and promoting fresh skin growth.</li>
                            <li><strong>Microdermabrasion:</strong> A gentle procedure that removes the top layer of skin to improve pigmentation.</li>
                            <li><strong>Topical Treatments:</strong> Prescription creams with hydroquinone, retinoids, and vitamin C to reduce pigmentation over time.</li>
                        </ol>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Treatment Benefits
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Brightens dull skin</li>
                            <li>Reduces uneven skin tone</li>
                            <li>Minimizes the appearance of dark spots</li>
                            <li>Promotes skin cell renewal</li>
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
                            width={500}
                            height={500}
                            loading='lazy'
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
                            loading='lazy'
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
