'use client';

// System Components import
import { useRouter } from 'next/navigation'
import React from 'react'

// UI Component import
import { Button } from '../ui/button';

const Appointment = () => {

    const router = useRouter();

  return (
    <React.Fragment>
        <section className=' h-fit my-5 w-screen bg-white flex flex-col justify-center items-center gap-2'>
                <p className=' text-base'>
                    Appointment
                </p>
                <h1 className=' text-4xl max-md:text-3xl text-center'>
                    Want to make booking or have a question?
                </h1>
                <p className=' text-sm'>
                    Call us or simply book an appointment
                </p>
                <Button
                    variant={'default'}
                    className=' my-5 max-md:my-0 flex justify-center items-center text-lg cursor-pointer p-5 max-md:p-3 rounded-none bg-orange-400 border-[2px] border-orange-400 text-white font-medium hover:bg-white hover:text-orange-400 hover:border-[2px] hover:border-orange-400 duration-200 ease-in-out'
                    onClick={() => router.push('/book-an-appointment')}
                >
                    Book an Appointment
                </Button>
            </section>
    </React.Fragment>
  )
}

export default Appointment