'use client';

// System Components import
import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced & Certified Professionals",
      icon: "/assets/icon-1.svg",
    },
    {
      title: "State-Of-The-Art Technology & Equipment",
      icon: "/assets/icon-2.svg",
    },
    {
      title: "Relaxing & Comfortable Atmosphere",
      icon: "/assets/icon-3.svg",
    },
    {
      title: "Commitment to Client Satisfaction",
      icon: "/assets/icon-4.svg",
    },
  ];

  return (
    <div className="bg-[#D8CAB8] text-black py-10 px-6 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wider">
        Why Choose Avinnya Skin Care Clinic?
      </h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center transition-transform transform hover:scale-105 cursor-pointer">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={275}
              height={275}
              className="object-contain mb-4"
            />
            <p className="text-lg font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
