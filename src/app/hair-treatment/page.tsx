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
          className="h-[60vh] w-screen max-w-screen bg-cover bg-center flex flex-col justify-center items-center gap-2 max-md:p-2 sticky"
          style={{ backgroundImage: "url('/assets/hair-treatment-main.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
          <h2 className="text-lg text-white font-medium z-10">
            Our Services
          </h2>
          <h1 className="text-3xl text-center text-white font-bold z-10">
            Skin Hair Laser Treatment
          </h1>
          <p className="text-base text-white text-justify z-10">
            Skin Hair Laser Treatment aims to promote natural hair regrowth and improve the health and fullness of your hair.
          </p>
        </section>

        {/* Hair Thinning Section */}
        <section id='hair-thinning' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
          {/* Image Section */}
          <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
            <Image
              src="/assets/hair-thinning.jpg"
              alt="Hair Thinning"
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
              loading='lazy'
            />
          </div>

          {/* Information Section */}
          <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-green-100 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
              Hair Thinning PRP Treatment
            </h2>
            <p className="text-lg text-gray-700">
              Hair thinning is a common issue faced by both men and women, leading to reduced confidence and self-esteem. Various factors such as genetics, hormonal changes, stress, and nutritional deficiencies contribute to hair thinning. Platelet-Rich Plasma (PRP) therapy has emerged as an advanced, non-surgical treatment to combat hair thinning and promote natural hair regrowth.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              What is PRP Therapy for Hair Thinning?
            </h2>
            <p className="text-lg text-gray-700">
              PRP therapy involves drawing a small amount of the patient&apos;s blood, processing it to extract platelet-rich plasma, and injecting it into the scalp. The platelets contain growth factors that stimulate hair follicles, enhancing hair thickness and density. This procedure strengthens existing hair and encourages the regrowth of new, healthy strands.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Benefits of PRP for Hair Thinning
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li>Stimulates hair follicles to promote natural hair regrowth.</li>
              <li>Increases hair density by thickening existing strands.</li>
              <li>Non-surgical and minimally invasive with no downtime.</li>
              <li>Safe and natural since it uses the patient&apos;s own blood, reducing the risk of allergic reactions.</li>
            </ol>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Procedure Overview
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li><strong>Consultation:</strong> A thorough scalp assessment is conducted to determine eligibility for PRP therapy.</li>
              <li><strong>Blood Collection:</strong> A small sample of blood is drawn from the patient&apos;s arm.</li>
              <li><strong>PRP Processing:</strong> The blood is spun in a centrifuge to separate the platelet-rich plasma.</li>
              <li><strong>Injection Process:</strong> The PRP is injected into targeted areas of the scalp using fine needles.</li>
              <li><strong>Post-Treatment Care:</strong> Mild scalp massage and avoidance of harsh hair treatments are recommended.</li>
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

        {/* Hair Loss PRP Treatment Section */}
        <section id='hair-loss' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
          {/* Image Section */}
          <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
            <Image
              src="/assets/hair-loss.jpg"
              alt="Hair Thinning"
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
              loading='lazy'
            />
          </div>

          {/* Information Section */}
          <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-blue-100 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
              Hair Loss PRP Treatment
            </h2>
            <p className="text-lg text-gray-700">
              Hair loss is a widespread concern affecting individuals of all ages. PRP therapy offers a scientifically backed solution to combat hair loss by activating dormant hair follicles and stimulating hair regrowth. This procedure is especially effective for those experiencing early-stage hair loss.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              What is PRP Therapy for Hair Loss?
            </h2>
            <p className="text-lg text-gray-700">
              PRP therapy uses the patient&apos;s blood to extract platelet-rich plasma, which is then injected into the scalp. The growth factors present in PRP encourage hair follicle regeneration, prevent further hair loss, and promote new hair growth.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Benefits of PRP for Hair Loss
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li>Reduces hair fall and strengthens existing hair.</li>
              <li>Encourages new hair growth by revitalizing dormant follicles.</li>
              <li>Minimally invasive and does not require surgery.</li>
              <li>Improves scalp health, creating an optimal environment for hair growth.</li>
            </ol>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Procedure Overview
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li><strong>Initial Consultation:</strong> Hair loss patterns are assessed to determine the need for PRP therapy.</li>
              <li><strong>Blood Draw & PRP Processing:</strong> The patient&apos;s blood is processed to isolate platelet-rich plasma.</li>
              <li><strong>Injection Process:</strong> PRP is injected into areas of the scalp experiencing hair loss.</li>
              <li><strong>Post-Treatment Guidance:</strong> Patients are advised to avoid excessive sun exposure and hair treatments.</li>
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

        {/* Vampire Facial Section */}
        <section id='vampire-facial' className="my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
          {/* Image Section */}
          <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
            <Image
              src="/assets/vampire-facial.jpg"
              alt="Vampire Facial"
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
              loading='lazy'
            />
          </div>

          {/* Information Section */}
          <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-yellow-100 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
              Vampire Facial
            </h2>
            <p className="text-lg text-gray-700">
              The Vampire Facial, also known as Platelet-Rich Plasma (PRP) therapy, is a non-surgical skin rejuvenation treatment that uses your own blood to promote collagen production and address skin concerns such as wrinkles, fine lines, acne scars, and uneven skin tone. By harnessing the regenerative power of platelets and growth factors, this procedure enhances the texture, tone, and overall appearance of the skin.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              What is a Vampire Facial?
            </h2>
            <p className="text-lg text-gray-700">
              The Vampire Facial involves drawing a small amount of your blood, processing it in a centrifuge to extract platelet-rich plasma (PRP), and then injecting or microneedling it back into your skin. The growth factors present in PRP stimulate collagen production, helping to rejuvenate the skin, reduce the appearance of fine lines, and improve texture and elasticity. The procedure is popular for its natural approach to skin regeneration and its minimal downtime.
            </p>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Benefits of the Vampire Facial
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li>Reduces fine lines and wrinkles by stimulating collagen production.</li>
              <li>Improves skin texture and tone, resulting in a smoother and more even complexion.</li>
              <li>Minimally invasive with little to no downtime, making it ideal for busy individuals.</li>
              <li>Can reduce the appearance of acne scars and hyperpigmentation.</li>
              <li>Uses natural growth factors from your own blood, minimizing the risk of allergic reactions.</li>
            </ol>

            <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
              Procedure Overview
            </h2>
            <ol className="list-decimal pl-5 text-lg text-gray-700">
              <li><strong>Initial Consultation:</strong> A skin assessment is conducted to determine if the Vampire Facial is right for you, and your medical history is reviewed.</li>
              <li><strong>Blood Draw & PRP Processing:</strong> A small amount of blood is drawn from your arm, and the PRP is isolated using a centrifuge.</li>
              <li><strong>Microneedling or Injection:</strong> The PRP is either microneedled into the skin or injected into targeted areas to stimulate collagen production.</li>
              <li><strong>Post-Treatment Care:</strong> Mild redness and swelling may occur, but this typically resolves within a few hours to a day. Avoid sun exposure and harsh skincare treatments post-treatment.</li>
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
