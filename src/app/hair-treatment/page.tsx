'use client';

import Navbar from '@/components/custom/Navbar';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <React.Fragment>
      <main className="h-fit w-screen max-w-screen overflow-x-hidden overflow-y-auto">
        <Navbar />

        {/* Hero Section */}
        <section
          className="h-[60vh] w-screen max-w-screen bg-cover bg-center flex flex-col justify-center items-center gap-2 max-md:p-2 sticky"
          style={{ backgroundImage: "url('/assets/hair-treatment-main.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
          <h2 className="text-lg text-white font-medium z-10">
            Our Services
          </h2>
          <h1 className="text-3xl text-white font-bold z-10">
            Hair Treatment
          </h1>
          <p className="text-base text-white text-justify z-10">
            Hair Treatment therapy aims to promote and enhance natural hair regrowth for healthier, fuller locks.
          </p>
        </section>

        {/* Hair Treatment Section */}
        <section className="h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
          {/* Image Section */}
          <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
            <Image
              src="/assets/hair-thinning.jpg"
              alt="Hair Thinning"
              className="w-full h-full object-cover rounded-lg"
              layout="intrinsic"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Information Section */}
          <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full">
            <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
              Hair Thinning PRP Treatment
            </h2>
            <p className="text-lg text-gray-700">
              Hair thinning is a common issue faced by both men and women, leading to reduced confidence and self-esteem. Various factors such as genetics, hormonal changes, stress, and nutritional deficiencies contribute to hair thinning. Platelet-Rich Plasma (PRP) therapy has emerged as an advanced, non-surgical treatment to combat hair thinning and promote natural hair regrowth.
            </p>
            <h3 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                What is PRP Therapy for Hair Thinning?
            </h3>
            <p className="text-lg text-gray-700">
              PRP therapy involves drawing a small amount of the patient&apos;s blood, processing it to extract platelet-rich plasma, and injecting it into the scalp. The platelets contain growth factors that stimulate hair follicles, enhancing hair thickness and density. This procedure strengthens existing hair and encourages the regrowth of new, healthy strands.
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Page;
