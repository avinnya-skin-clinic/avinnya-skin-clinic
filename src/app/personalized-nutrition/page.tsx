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
                    className="h-[60vh] w-screen max-w-screen bg-cover bg-center flex flex-col justify-center items-center gap-2 max-md:p-4 sticky"
                    style={{ backgroundImage: "url('/assets/nutrition-main.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-25 max-md:opacity-50 max-md:backdrop-blur-md z-0"></div>
                    <h2 className="text-lg text-white font-medium z-10">
                        Our Services
                    </h2>
                    <h1 className="text-3xl text-center text-white font-bold z-10">
                        Personalized Nutrition
                    </h1>
                    <p className="text-base text-white text-justify z-10">
                        Personalized nutrition tailors dietary plans to individual needs, promoting optimal health and well-being.
                    </p>
                </section>

                {/* Weight Loss Treatment Section */}
                <section id='weight-loss' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/weight-loss.jpg"
                            alt="Personalized Nutrition"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-blue-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Weight Loss Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Struggling to shed those extra pounds? Our weight loss nutrition program is designed to help you achieve sustainable and healthy weight loss. A well-balanced diet with nutrient-dense foods plays a crucial role in effective weight loss. We focus on eliminating processed foods, incorporating high-protein and fiber-rich meals, and understanding portion control. Mindful eating practices help curb cravings and prevent overeating, ensuring you stay on track. Additionally, behavioral and lifestyle modifications are integrated to support long-term success.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Balanced Meal plans with essential nutrients</li>
                            <li>Portion control and Mindful eating techniques</li>
                            <li>High Protein and fiber-rich diet</li>
                            <li>Elimination of highly processed food and fats</li>
                            <li>Lifestyle modifications for sustainable weight loss</li>
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

                {/* Weight Gain Section */}
                <section id='weight-gain' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/weight-gain.jpg"
                            alt="Weight Gain"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-green-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Weight Gain Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Weight gain nutrition focuses on providing the right balance of calories, protein, and healthy fats to help individuals increase their weight in a healthy way. A well-balanced diet rich in essential nutrients like complex carbohydrates, lean proteins, and healthy fats plays a vital role in promoting muscle mass and ensuring overall health. Unlike unhealthy weight gain methods, which often focus on junk food and excessive sugar intake, a structured nutritional approach ensures that the weight gained is healthy and sustainable.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Promotes healthy weight gain through nutrient-dense foods.</li>
                            <li>Supports muscle building and strength through protein-rich meals.</li>
                            <li>Ensures proper fat intake to maintain healthy body functions.</li>
                            <li>Helps in maintaining overall wellness and balanced energy levels.</li>
                            <li>Reduces the risk of obesity-related health issues by focusing on quality nutrition.</li>
                        </ol>

                        <h2 className="text-2xl font-semibold mt-8 mb-2 underline underline-offset-2 text-center">
                            Skin Brightening Treatments
                        </h2>
                        <p className="text-lg text-gray-700">
                            Skin brightening treatments focus on enhancing skin luminosity, reducing dullness, and improving overall skin tone. Unlike skin bleaching, which lightens skin color, skin brightening focuses on restoring natural radiance by targeting pigmentation, sun spots, and uneven tone. The goal is to rejuvenate the skin&apos;s appearance, making it look healthy, radiant, and youthful. These treatments often involve a combination of topical products, like serums and creams, and professional procedures such as chemical peels, facials, and laser treatments.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Enhances skin glow and natural radiance.</li>
                            <li>Reduces dark spots, hyperpigmentation, and uneven skin tone.</li>
                            <li>Improves skin texture and overall hydration.</li>
                            <li>Supports skin rejuvenation and anti-aging effects.</li>
                            <li>Helps protect against sun damage and environmental stressors.</li>
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

                {/* Fat Loss Section */}
                <section id='fat-loss' className="my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/fat-loss.jpg"
                            alt="Fat Loss"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-yellow-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Fat Loss Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Fat loss nutrition involves the right combination of food, exercise, and lifestyle changes that promote healthy fat loss while maintaining muscle mass. The primary goal is to create a calorie deficit—burning more calories than you consume—while ensuring you’re still getting the nutrients your body needs to function well. A well-balanced fat loss nutrition plan incorporates lean proteins, healthy fats, and complex carbohydrates to maintain energy levels, prevent hunger, and support metabolism. Unlike crash diets, fat loss nutrition emphasizes sustainable changes that lead to long-term success, reducing fat without compromising health.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features of Fat Loss Nutrition
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Encourages a sustainable, calorie-controlled diet for long-term fat loss.</li>
                            <li>Supports muscle preservation by incorporating sufficient protein and healthy fats.</li>
                            <li>Boosts metabolism through nutrient-dense foods that promote fat burning.</li>
                            <li>Helps control cravings and overeating with fiber-rich and protein-packed meals.</li>
                            <li>Promotes overall health, energy, and well-being while shedding excess fat.</li>
                        </ol>

                        <h2 className="text-2xl font-semibold mt-8 mb-2 underline underline-offset-2 text-center">
                            Fat Loss Treatments
                        </h2>
                        <p className="text-lg text-gray-700">
                            Fat loss treatments focus on accelerating fat reduction through various methods, both natural and medical. While diet and exercise are key components of fat loss, some treatments can target stubborn fat areas more effectively. These treatments may include non-invasive procedures, body contouring, and professional treatments aimed at boosting fat metabolism and enhancing the effects of a healthy lifestyle. Fat loss treatments are designed to complement a well-rounded fat loss strategy for better results.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Types of Fat Loss Treatments
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li><strong>Cryolipolysis (CoolSculpting):</strong> A non-invasive treatment that freezes and breaks down fat cells, allowing the body to naturally eliminate them over time.</li>
                            <li><strong>Laser Lipolysis:</strong> Uses laser energy to target and break down fat cells, improving body contour and targeting problem areas.</li>
                            <li><strong>Ultrasound Fat Reduction:</strong> Uses high-frequency sound waves to target fat deposits, helping to reduce stubborn fat.</li>
                            <li><strong>Radiofrequency Therapy:</strong> Utilizes radiofrequency energy to heat and break down fat cells while tightening the skin for smoother contours.</li>
                        </ol>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Benefits of Fat Loss Treatments
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Targets stubborn fat areas that are resistant to diet and exercise.</li>
                            <li>Helps achieve a more toned and contoured body.</li>
                            <li>Reduces fat without the need for surgery or downtime.</li>
                            <li>Improves skin texture and elasticity by promoting collagen production.</li>
                            <li>Boosts overall confidence and supports long-term health goals.</li>
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

                {/* Adult Nutrition Section */}
                <section id='adult' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/adult.jpg"
                            alt="Adult"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-red-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Adult Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Adult nutrition focuses on providing the necessary nutrients to maintain optimal health, support energy levels, and prevent chronic diseases. A well-balanced diet is key to maintaining a healthy lifestyle as we age, with an emphasis on whole foods that are rich in vitamins, minerals, proteins, and healthy fats. As adults, it&apos;s important to adapt to changing dietary needs, such as increasing fiber intake for digestive health, incorporating lean proteins for muscle maintenance, and ensuring adequate intake of healthy fats for brain and heart health. Hydration, along with mindful eating, also plays a significant role in overall well-being. With a personalized approach, adult nutrition supports a balanced life and helps manage the stresses of modern-day living.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Personalized meal plans to meet specific nutritional needs.</li>
                            <li>Incorporation of whole, nutrient-dense foods for overall health.</li>
                            <li>Emphasis on high-quality protein sources for muscle maintenance and repair.</li>
                            <li>Balanced intake of healthy fats and essential fatty acids for heart and brain health.</li>
                            <li>Increased fiber intake for digestive health and weight management.</li>
                            <li>Support for hydration and mindful eating practices for better long-term health.</li>
                            <li>Behavioral and lifestyle modifications to enhance dietary habits and sustainability.</li>
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

                {/* Child Nutrition Section */}
                <section id='child' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/child.jpg"
                            alt="Child"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-orange-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Pediatric Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Pediatric nutrition is crucial for supporting the healthy growth and development of children. A well-balanced diet that includes the right mix of macronutrients, vitamins, and minerals ensures that kids get the energy and nutrients they need to thrive. Proper nutrition during childhood sets the foundation for good health throughout life. It is important to focus on nutrient-dense, whole foods, such as fruits, vegetables, lean proteins, whole grains, and healthy fats. This helps in maintaining a healthy weight, promoting cognitive development, supporting immune function, and fostering strong bones and muscles. Pediatric nutrition also addresses the importance of creating healthy eating habits that will last into adulthood.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Customized meal plans for children&apos;s specific age and developmental needs.</li>
                            <li>Incorporation of whole, nutrient-rich foods to support growth and development.</li>
                            <li>Emphasis on age-appropriate portion sizes to prevent overeating or under-eating.</li>
                            <li>Inclusion of high-quality protein sources to support muscle and brain development.</li>
                            <li>Promotion of healthy fats for brain health and overall growth.</li>
                            <li>Encouragement of healthy snacks and hydration to maintain energy levels throughout the day.</li>
                            <li>Establishing healthy eating habits and mindful eating practices early on for lifelong benefits.</li>
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

                {/* Weight Loss Treatment Section */}
                <section id='sports' className=" my-6 h-auto w-screen overflow-x-hidden flex flex-row-reverse max-md:flex-col justify-evenly items-center box-border p-6">
                    {/* Image Section */}
                    <div className="w-full max-w-lg h-[50vh] max-md:w-[100%] max-md:h-[auto] flex items-center justify-center">
                        <Image
                            src="/assets/sports.jpg"
                            alt="Sports Nutrition"
                            className="w-full h-full object-cover rounded-lg"
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>

                    {/* Information Section */}
                    <div className="w-full max-w-4xl h-fit flex flex-col justify-center gap-3 p-8 max-md:w-full bg-purple-100 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-2 underline underline-offset-2 text-center">
                            Sports Nutrition
                        </h2>
                        <p className="text-lg text-gray-700">
                            Sports nutrition focuses on providing athletes and active individuals with the necessary nutrients to enhance performance, support recovery, and optimize overall health. A well-balanced diet that includes the right balance of carbohydrates, proteins, fats, and hydration plays a key role in achieving peak performance during physical activity. Sports nutrition helps ensure that athletes have the energy they need for endurance, muscle repair, and reducing the risk of injury. It also includes the timing of meals and hydration to support training and recovery. Whether you&apos;re training for a specific event, maintaining your fitness, or simply leading an active lifestyle, sports nutrition is essential to fuel your body for success.
                        </p>

                        <h2 className="text-xl font-semibold my-2 underline underline-offset-2 text-center">
                            Key Features
                        </h2>
                        <ol className="list-decimal pl-5 text-lg text-gray-700">
                            <li>Personalized meal plans to meet specific performance and recovery needs.</li>
                            <li>Incorporation of balanced macronutrients to fuel workouts and support muscle repair.</li>
                            <li>High-quality protein for muscle growth and recovery post-exercise.</li>
                            <li>Optimal hydration strategies to maintain peak performance and prevent dehydration.</li>
                            <li>Carbohydrate loading for energy during long-duration activities and events.</li>
                            <li>Timely nutrition intake around training sessions for maximum effectiveness.</li>
                            <li>Support for healthy fat intake to promote joint and heart health, especially for endurance athletes.</li>
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
