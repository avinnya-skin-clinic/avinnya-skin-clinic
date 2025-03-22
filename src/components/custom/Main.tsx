'use client';

// System Components import
import Image from 'next/image';
import React from 'react'

// UI Components import
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const Main = () => {

    const router = useRouter();

    return (
        <React.Fragment>
            <section className='h-fit max-md:h-auto w-full overflow-hidden'>
                <section className='h-fit w-full bg-[#ff9b3e] relative'>
                    <div className='relative w-full h-auto'>
                        {/* Background Image */}
                        <div className='absolute top-0 right-0 z-0'>
                            <Image
                                src={'/assets/main.svg'}
                                alt='main page'
                                width={540}
                                height={640}
                                objectFit='contain'
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <div className='w-full h-[87.5vh] max-md:h-[75vh] flex flex-col justify-start items-center translate-y-[25%] gap-4 max-md:gap-2 px-4 py-8 max-w-4xl z-10'>
                            {/* Heading */}
                            <h2 className='text-xl md:text-3xl font-medium text-white tracking-[0.25em] text-center'>
                                WELCOME TO
                            </h2>
                            <h1 className='text-4xl md:text-7xl font-semibold text-center text-black'>
                                AVINNYA SKIN CLINIC
                            </h1>

                            {/* Description */}
                            <p className='text-sm max-md:text-xs text-white text-justify px-4'>
                                At Avinnya Skin Clinic, we offer personalized skincare treatments that cater to your unique needs. Whether you&apos;re looking for acne treatments, anti-aging solutions, or rejuvenating facials, our experienced dermatologists are here to help you achieve glowing, healthy skin.
                            </p>

                            {/* Book Appointment Button */}
                            <Button
                                variant={'default'}
                                className='my-5 max-md:my-3 flex justify-center items-center text-lg cursor-pointer p-5 max-md:p-3 rounded-none border-none bg-white text-orange-400 font-medium hover:text-white shadow-md'
                                onClick={() => router.push('/book-an-appointment')}
                            >
                                Book an Appointment
                            </Button>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
}

export default Main;
