'use client';

// System Components import
import React from 'react'
import Image from 'next/image'

const Hero = () => {

    const location = "Mumbai";

    return (
        <React.Fragment>
            <section className='w-full h-auto flex flex-col lg:flex-row justify-between items-center bg-white px-3 py-5'>
                {/* Left Column: Text */}
                <div className='w-full max-w-[90%] lg:max-w-[30vw] flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-2xl lg:text-4xl font-bold max-md:text-center'>
                        The Best of our services in {location}
                    </h1>
                    <p className='text-base max-md:text-sm text-justify'>
                        Discover The Avinnya Skin Clinic, a premier skin clinic that redefines the beauty experience with top-tier dermatological services designed to bring out the best in your skin. Whether you are looking to rejuvenate your complexion, address skin concerns, or enhance your natural beauty, we offer a comprehensive range of treatments that cater to every individual need. From advanced Laser Hair Removal and effective Hair Loss Treatments to luxurious HydraFacials, Pigmentation Correction, and Skin Tightening, we specialize in delivering results that leave you feeling confident and radiant.
                    </p>
                    <p className='text-base max-md:text-sm text-justify'>
                        If you&apos;re searching for a dermatologist who understands your unique beauty goals and is committed to delivering exceptional results, look no further. Our experienced team is here to help you achieve the glowing, youthful skin you’ve always dreamed of. With an unwavering commitment to excellence, we tailor each treatment to fit your skin&apos;s needs, ensuring a customized and effective approach to your skincare journey.
                    </p>
                    <p className='text-base max-md:text-sm text-justify'>
                        Let The Avinnya Skin Clinic be your trusted partner in unlocking the true potential of your skin, helping you radiate confidence and beauty with every treatment. Your path to healthy, glowing skin starts here.
                    </p>
                </div>

                {/* Image: Displayed only on large screens */}
                <Image 
                    src={'/assets/skin-clinic.jpg'} 
                    alt='Skin Clinic' 
                    width={450} 
                    height={450} 
                    className='lg:block hidden translate-x-[10%] rounded-4xl'
                />

                {/* Right Column: Services */}
                <div className='w-full lg:w-[35vw] flex flex-col justify-center items-center'>
                    <div className='h-auto my-12 py-12 bg-green-200 px-16 max-lg:px-6 rounded-l-4xl max-md:rounded-none w-full'>
                        {/* Hair Treatment */}
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-2xl lg:text-xl'>
                                Hair Treatment
                            </h1>
                            <p className='text-sm max-md:text-xs text-justify'>
                                Hair treatments at Avinnya Skin Clinic are designed to address a variety of hair concerns, including hair loss, thinning, and scalp issues. Our expert dermatologists offer a range of solutions, from non-invasive therapies to more advanced treatments like PRP (Platelet-Rich Plasma) therapy, aimed at stimulating hair growth and restoring thickness and volume. We work with you to create a tailored treatment plan to meet your unique hair restoration needs.
                            </p>
                        </div>
                        <div className='h-[1px] w-full bg-gray-700 my-2'></div>

                        {/* Skin Rejuvenation */}
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-2xl lg:text-xl'>
                                Skin Rejuvenation
                            </h1>
                            <p className='text-sm max-md:text-xs text-justify'>
                                Skin rejuvenation treatments at Avinnya Skin Clinic aim to restore your skin&apos;s youthful appearance and vitality. Using advanced techniques such as HydraFacial, chemical peels, and microdermabrasion, we target issues like fine lines, wrinkles, sun damage, uneven skin tone, and texture. Our treatments help promote collagen production, improve skin clarity, and give your skin a refreshed, glowing look.
                            </p>
                        </div>
                        <div className='h-[1px] w-full bg-gray-700 my-2'></div>

                        {/* Personalized Nutrition */}
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-2xl lg:text-xl'>
                                Personalized Nutrition
                            </h1>
                            <p className='text-sm max-md:text-xs text-justify'>
                                Personalized nutrition at Avinnya Skin Clinic is a holistic approach to skin health that emphasizes the importance of diet in maintaining glowing, healthy skin. Our nutritionists work with you to create a customized meal plan that supports your skin&apos;s needs, incorporating nutrient-rich foods that promote hydration, collagen production, and overall skin health. By addressing your internal health, we help improve your skin from the inside out.
                            </p>
                        </div>
                        <div className='h-[1px] w-full bg-gray-700 my-2'></div>

                        {/* Advanced Laser Treatments */}
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-2xl lg:text-xl'>
                                Advanced Laser Treatments
                            </h1>
                            <p className='text-sm max-md:text-xs text-justify'>
                                Advanced laser treatments at Avinnya Skin Clinic provide effective solutions for skin concerns like pigmentation, scars, wrinkles, and uneven texture. Using cutting-edge laser technology, we target specific skin layers to stimulate collagen production, improve tone, and reduce imperfections. Our treatments, including skin resurfacing and acne scar removal, deliver visible and long-lasting results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Hero;
