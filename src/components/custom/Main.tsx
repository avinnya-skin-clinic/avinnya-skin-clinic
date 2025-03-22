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
            <section className=' h-fit w-full overflow-hidden'>
                <section className='h-fit w-full bg-[#ff9b3e] relative'>
                    <div className=' relative w-screen h-fit'>
                        <div className=' absolute top-0 right-0 z-0'>
                            <Image
                                src={'/assets/main.svg'}
                                alt='main page'
                                width={540}
                                height={640}
                                objectFit='contain'
                                priority
                            />
                        </div>
                        <div className=' w-screen h-[87.5vh] max-md:h-[75vh] flex flex-col flex-nowrap justify-start items-center translate-y-[25%] gap-4 max-md:gap-1 px-4 py-8 max-w-4xl z-10'>
                            <h2 className=' text-xl md:text-3xl font-medium text-white tracking-[0.25em] text-center'>
                                WELCOME TO
                            </h2>
                            <h1 className=' text-4xl md:text-7xl font-semibold text-center text-black'>
                                AVINNYA SKIN CLINIC
                            </h1>

                            <p className=' text-sm max-md:text-xs w-full text-white text-justify px-4'>
                                At Avinnya Skin Clinic, we offer personalized skincare treatments that cater to your unique needs. Whether you&apos;re looking for acne treatments, anti-aging solutions, or rejuvenating facials, our experienced dermatologists are here to help you achieve glowing, healthy skin.
                            </p>

                            <Button
                                variant={'default'}
                                className=' my-5 max-md:my-0 flex justify-center items-center text-lg cursor-pointer p-5 rounded-none border-none bg-white text-orange-400 font-medium hover:text-white shadow-md'
                                onClick={() => router.push('/book-an-appointment')}
                            >
                                Book an Appointment
                            </Button>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Main;
