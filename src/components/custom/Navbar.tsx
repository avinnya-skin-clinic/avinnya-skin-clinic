'use client';

// System Components import
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// UI Components import
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '../ui/drawer';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { AlignLeft } from 'lucide-react';

// CSS import
import '@/app/globals.css'

const Navbar = () => {

    const router = useRouter();

    return (
        <React.Fragment>

            {/* Navbar for PC and wide media devices */}
            <section
                className=' sticky top-0 left-0 custom-container h-22 w-screen border-b-[1px] border-b-white flex justify-evenly items-center shadow-lg shadow-orange-200 bg-white z-20'
            >
                <Image
                    src={'/logo.svg'}
                    alt='logo'
                    width={300}
                    height={300}
                    className=' cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <NavigationMenu className=' flex flex-row gap-3'>
                    <NavigationMenuList>

                        {/* Hair Treatment Section */}

                        <NavigationMenuItem className=' mx-2'>
                            <NavigationMenuTrigger className=' w-full h-full border border-orange-300 bg-transparent rounded-md p-3 cursor-pointer'>Hair Treatment</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-orange-50'>
                                <ul className=' flex flex-row md:w-[500px] bg-transparent text-orange-400 gap-1'>
                                    <span>
                                        <li className="h-full w-[200px] relative">
                                            <NavigationMenuLink className="overflow-hidden" asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md border border-orange-400 bg-orange-300 relative"
                                                    href="/hair-treatment"
                                                >
                                                    <Image
                                                        src={'/assets/hair-treatment.jpg'}
                                                        alt="Hair Treatment"
                                                        width={400}
                                                        height={400}
                                                        className="absolute left-0 top-0 h-full w-full object-cover z-0"
                                                        priority
                                                    />
                                                    <div className="absolute inset-0 bg-black/15 backdrop-blur-sm p-4 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                                                        <div className="text-xl text-white font-extrabold underline mb-2">
                                                            Hair Treatment
                                                        </div>
                                                        <p className="text-[12.75px] text-white leading-tight">
                                                            Hair thinning, caused by factors like genetics, hormones, stress, and nutrition, can be treated with Platelet-Rich Plasma (PRP) therapy to promote natural hair regrowth.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </span>
                                    <span className=' flex flex-col gap-2 w-[300px]'>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/hair-treatment#hair-thinning'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Hair Thinning PRP Treatment
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    PRP treatment for hair thinning uses the patient&apos;s blood plasma to stimulate hair growth.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/hair-treatment#hair-loss'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Hair Loss PRP Treatment
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    PRP treatment for hair loss uses the patient&apos;s blood plasma to promote hair growth and rejuvenate the scalp.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/hair-treatment#vampire-facial'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Vampire Facial
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    A Vampire Facial uses PRP from your blood to rejuvenate and improve skin texture.
                                                </p>
                                            </Link>
                                        </li>
                                    </span>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Skin Rejuvenation Section */}

                        <NavigationMenuItem className=' mx-2'>
                            <NavigationMenuTrigger className=' w-full h-full border border-orange-300 bg-transparent rounded-md p-3 cursor-pointer'>Skin Rejuvenation</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-orange-50'>
                                <ul className=' flex flex-row md:w-[500px] bg-transparent text-orange-400 gap-1'>
                                    <span>
                                        <li className="h-full w-[200px] relative">
                                            <NavigationMenuLink className="overflow-hidden" asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md border border-orange-400 bg-orange-300 relative"
                                                    href="/skin-rejuvenation"
                                                >
                                                    <Image
                                                        src={'/assets/skin-rejuvenation.jpg'}
                                                        alt="Skin Rejuvenation"
                                                        width={400}
                                                        height={400}
                                                        className="absolute left-0 top-0 h-full w-full object-cover z-0"
                                                        priority
                                                    />
                                                    <div className="absolute inset-0 bg-black/15 backdrop-blur-sm p-4 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                                                        <div className="text-lg text-white font-extrabold underline mb-2">
                                                            Skin Rejuvenation
                                                        </div>
                                                        <p className="text-[12.75px] text-white leading-tight">
                                                            Our skin rejuvenation treatments restore hydration, boost collagen, and improve texture for a youthful appearance.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </span>
                                    <span className=' flex flex-col gap-2 w-[300px]'>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/skin-rejuvenation#skin-pigmentation-treatment'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Skin Pigmentation Treatment
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Skin pigmentation treatment targets discoloration to even out skin tone and restore a more uniform appearance.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/skin-rejuvenation#skin-brightening'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Skin Brightening/Lightening
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Skin brightening/lightening treatments reduce dark spots and even skin tone for a radiant complexion.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/skin-rejuvenation#skin-tanning'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Skin Tanning Treatment
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Skin tanning treatments enhance skin tone by giving a sun-kissed glow without sun exposure.
                                                </p>
                                            </Link>
                                        </li>
                                    </span>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Personalized Nutrition Section */}

                        <NavigationMenuItem className=' mx-2'>
                            <NavigationMenuTrigger className=' w-full h-full border border-orange-300 bg-transparent rounded-md p-3 cursor-pointer'>Personalized Nutrition</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-orange-50'>
                                <ul className=' flex flex-row md:w-[700px] bg-transparent text-orange-400 gap-1'>
                                    <span>
                                        <li className="h-full w-[200px] relative">
                                            <NavigationMenuLink className="overflow-hidden" asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md border border-orange-400 bg-orange-300 relative"
                                                    href="/personalized-nutrition"
                                                >
                                                    <Image
                                                        src={'/assets/nutrition.jpg'}
                                                        alt="Personalized Nutrition "
                                                        width={400}
                                                        height={400}
                                                        className="absolute left-0 top-0 h-full w-full object-cover z-0"
                                                        priority
                                                    />
                                                    <div className="absolute inset-0 bg-black/15 backdrop-blur-sm p-4 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                                                        <div className="text-lg text-white font-extrabold underline mb-2">
                                                            Personalized Nutrition
                                                        </div>
                                                        <p className="text-[12.75px] text-white leading-tight">
                                                            At Avinnya Skin Clinic, we provide personalized nutrition plans to help you reach your health goals.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </span>
                                    <span className=' gap-2 w-[500px] grid-cols-2 grid'>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#weight-loss'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Weight Loss Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    A well-balanced diet with nutrient-dense foods plays a crucial role in effective weight loss.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#weight-gain'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Weight Gain Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Healthy weight gain is more than just increasing calorie intake; it’s about consuming the right balance of macronutrients.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#fat-loss'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Fat Loss Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Our fat loss program is designed to help you reduce excess body fat while preserving lean muscle mass.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#adult'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Adult Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Maintaining a well-balanced diet is crucial for overall health, disease prevention, and longevity.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#child'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Pediatric Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Proper nutrition is essential for children&apos;s growth and development, laying the foundation for lifelong health.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/personalized-nutrition#sports'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Sports Nutrition
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Athletes require specialized nutrition to optimize performance, endurance, and recovery.
                                                </p>
                                            </Link>
                                        </li>
                                    </span>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Advanced Laser Treatments Section */}

                        <NavigationMenuItem className=' mx-2'>
                            <NavigationMenuTrigger className=' w-full h-full border border-orange-300 bg-transparent rounded-md p-3 cursor-pointer'>Advanced Laser Treatments</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-orange-50'>
                                <ul className=' flex flex-row md:w-[700px] bg-transparent text-orange-400 gap-1'>
                                    <span>
                                        <li className="h-full w-[200px] relative">
                                            <NavigationMenuLink className="overflow-hidden" asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md border border-orange-400 bg-orange-300 relative"
                                                    href="/advanced-laser-treatments"
                                                >
                                                    <Image
                                                        src={'/assets/laser-treatment.jpg'}
                                                        alt="Advanced Laser Treatment"
                                                        width={400}
                                                        height={400}
                                                        className="absolute left-0 top-0 h-full w-full object-cover z-0"
                                                        priority
                                                    />
                                                    <div className="absolute inset-0 bg-black/35 backdrop-blur-sm p-4 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                                                        <div className="text-xl text-white font-extrabold underline mb-2">
                                                            Advanced Laser Treatments
                                                        </div>
                                                        <p className="text-[12.75px] text-white leading-tight">
                                                            At Avinnya Skin Clinic, we provide advanced laser treatments to enhance beauty, improve skin health, and achieve body sculpting goals.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </span>
                                    <span className='  grid grid-cols-2 gap-2 w-[500px]'>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#hifu'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Weight Loss with HIFU
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    HIFU is a revolutionary non-surgical treatment designed for body contouring and fat reduction.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#carbon'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Carbon Laser
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    The Carbon Laser Facial, also known as the Black Doll Facial, is a powerful treatment for deep cleansing and skin rejuvenation.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#tattoo'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Tattoo Removal
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Our advanced laser technology helps in the safe and effective removal of unwanted tattoos.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#laser-hair'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Laser Hair Removal
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    The procedure uses laser technology to target hair follicles, reducing hair growth permanently over multiple sessions.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#skin-brightening'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Skin Brightening
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Achieve a radiant complexion with our skin brightening laser treatments.
                                                </p>
                                            </Link>
                                        </li>
                                        <li className=' border-[1px] border-orange-400 p-2 rounded-md hover:bg-orange-100'>
                                            <Link href='/advanced-laser-treatments#freckles'>
                                                <h3 className=' text-base font-semibold leading-none  my-[7px]'>
                                                    Freckles Treatment
                                                </h3>
                                                <p className=' line-clamp-2 text-sm leading-snug font-medium text-gray-900'>
                                                    Our specialized laser treatment helps fade and reduce freckles for a more uniform complexion.
                                                </p>
                                            </Link>
                                        </li>
                                    </span>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className=' flex flex-row justify-center items-center gap-2'>
                    <Button
                        variant={'default'}
                        className=' flex justify-center items-center text-lg cursor-pointer p-5 rounded-none bg-orange-400 border-[2px] border-orange-400 text-white font-medium hover:bg-white hover:text-orange-400 hover:border-[2px] hover:border-orange-400 duration-200 ease-in-out'
                        onClick={() => { window.open('tel:+919130759132', '_self'); }}
                    >
                        CALL NOW
                    </Button>
                </div>
            </section>

            {/* Navbar for mobile and small media devices */}
            <section
                className=' custom-container-mobile h-[75px] w-screen border-b-[1px] border-b-white flex justify-between items-center shadow-md shadow-orange-200 p-[5vw]'
            >
                <Image
                    src={'/logo.svg'}
                    alt='logo'
                    width={225}
                    height={225}
                    className=' cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <Drawer>
                    <DrawerTrigger className=' cursor-pointer'>
                        <AlignLeft style={{ strokeWidth: 1.125 }} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className=' w-full py-2 px-6 flex flex-col justify-center items-center gap-7'>
                        <div className=' w-full h-full'>
                            <DrawerHeader>
                                <DrawerTitle className=' text-base font-bold text-center text-orange-400'>
                                    AVINNYA SKIN CLINIC
                                </DrawerTitle>
                            </DrawerHeader>
                            <div className=' h-fit w-full flex flex-col gap-2'>
                                <Link href={'/hair-treatment'} className=' w-full text-center border border-orange-400 p-2 rounded-md text-sm font-medium'>
                                    Hair Treatments
                                </Link>
                                <Link href={'/skin-rejuvenation'} className=' w-full text-center border border-orange-400 p-2 rounded-md text-sm font-medium'>
                                    Skin Rejuvenation
                                </Link>
                                <Link href={'/personalized-nutrition'} className=' w-full text-center border border-orange-400 p-2 rounded-md text-sm font-medium'>
                                    Personalized Nutrition
                                </Link>
                                <Link href={'/advanced-laser-treatments'} className=' w-full text-center border border-orange-400 p-2 rounded-md text-sm font-medium'>
                                    Advanced Laser Treatments
                                </Link>
                            </div>
                        </div>
                        <Button
                            variant={'default'}
                            className=' w-full cursor-pointer p-3 bg-orange-400 text-white'
                            onClick={() => { window.open('tel:+919130759132', '_self'); }}
                        >
                            Call Now
                        </Button>
                        </div>
                    </DrawerContent>
                </Drawer>
            </section>
        </React.Fragment>
    );
}

export default Navbar;
