'use client';

import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Reviews = () => {

    // Sample Array of 20 reviews about Avinnya Skin Clinic
    const reviews = [
        { name: "Amit Sharma", text: "Avinnya Skin Clinic helped me with my acne treatment, and my skin has never been clearer. Highly recommend!" },
        { name: "Priya Desai", text: "Amazing experience! The HydraFacial treatment left my skin feeling refreshed and glowing." },
        { name: "Ravi Kumar", text: "The staff at Avinnya Skin Clinic is so professional and friendly. I felt at ease the entire time." },
        { name: "Anjali Gupta", text: "I had a hair loss treatment at Avinnya Skin Clinic, and I'm seeing amazing results. My hair is growing back!" },
        { name: "Neha Mehta", text: "The pigmentation correction treatment worked wonders on my skin. My complexion is much more even now." },
        { name: "Arjun Reddy", text: "I've been going to Avinnya Skin Clinic for my skin tightening treatments, and I'm so happy with the results. My skin feels firmer!" },
        { name: "Sanya Patel", text: "I received the best advice for my skin concerns here. The personalized care is truly what makes Avinnya Skin Clinic stand out." },
        { name: "Vikas Yadav", text: "The best facial I've ever had! My skin looks rejuvenated and youthful. Will definitely come back for more treatments." },
        { name: "Shreya Nair", text: "After my PRP hair treatment at Avinnya Skin Clinic, my hair feels thicker and healthier. Definitely worth the investment!" },
        { name: "Karan Singh", text: "I had a bridal package at Avinnya Skin Clinic, and I looked radiant on my big day. I couldn't have asked for a better experience." },
        { name: "Madhuri Kapoor", text: "The team here is incredibly knowledgeable and takes the time to understand your unique needs. I trust them with all my skincare." },
        { name: "Rajesh Choudhury", text: "I've struggled with acne scars for years, but after just a few treatments at Avinnya Skin Clinic, I can see a big difference." },
        { name: "Pooja Verma", text: "Great experience overall. The skin rejuvenation treatment was amazing and my skin feels like new." },
        { name: "Siddharth Rao", text: "I've been coming here for a few months now, and I can see a noticeable difference in my skin's texture and tone." },
        { name: "Tanya Soni", text: "I did a laser hair removal session, and I'm so happy with the results. Quick, painless, and effective!" },
        { name: "Deepak Mishra", text: "I've been seeing incredible results with my anti-aging treatments here. My wrinkles have significantly reduced!" },
        { name: "Simran Kaur", text: "I had an excellent consultation and treatment plan. The staff made sure I understood everything and tailored the treatment to my skin." },
        { name: "Suresh Babu", text: "The clinic is very clean and has a relaxing atmosphere. I felt pampered the whole time I was there." },
        { name: "Aarti Joshi", text: "My skin looks more radiant than ever thanks to the treatments at Avinnya Skin Clinic. I'm finally seeing the results I've always wanted." },
        { name: "Rohit Bhardwaj", text: "Highly recommend the services at Avinnya Skin Clinic! The treatments are tailored to your individual skin type, and the results speak for themselves." }
    ];
    return (
        <React.Fragment>
            <div className=' h-fit py-8 px-3 w-screen flex flex-col justify-center items-center gap-5 bg-orange-100'>
                <h1 className=' text-3xl max-md:text-2xl font-semibold'>
                    See What our Patients talk about us
                </h1>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full max-w-[90vw]"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className=' bg-green-50 border-none'>
                                        <CardContent className=" h-[20vh] flex flex-col items-center justify-center gap-3 p-6">
                                            <h1 className=' text-xl font-bold'>{review.name}</h1>
                                            <span className="text-sm text-justify">{review.text}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className=' max-md:hidden' />
                    <CarouselNext className=' max-lg:hidden' />
                </Carousel>
            </div>
        </React.Fragment>
    )
}

export default Reviews;
