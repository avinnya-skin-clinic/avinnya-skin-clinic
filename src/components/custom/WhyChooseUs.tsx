'use client';

// System Components import
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced & Certified Professionals",
      icon: "✅",
    },
    {
      title: "State-Of-The-Art Technology & Equipment",
      icon: "🖥️",
    },
    {
      title: "Relaxing & Comfortable Atmosphere",
      icon: "🛏️",
    },
    {
      title: "Commitment to Client Satisfaction",
      icon: "⭐",
    },
  ];

  return (
    <div className="bg-blue-100 text-black py-10 px-6 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wider">
        Why Choose Avinnya Skin Care Clinic?
      </h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center transition-transform transform hover:scale-105 cursor-pointer">
            <span className="text-4xl bg-transparent text-white p-6 rounded-full mb-4">
              {feature.icon}
            </span>
            <p className="text-lg font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs