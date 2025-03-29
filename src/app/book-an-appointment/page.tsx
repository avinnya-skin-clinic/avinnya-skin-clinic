'use client';

// System Components import
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// UI Components import
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import axios from 'axios';

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string().min(10, {
        message: "Please Enter Valid Phone Number",
    }).regex(/^[0-9]+$/, {
        message: "Phone number must be numeric",
    }),
    purpose: z.string(),
    message: z.string().optional()
})

const Page = () => {

    const purpose = ['Hair Treatment', 'Skin Rejuvenation', 'Personalized Nutrition', 'Advanced Laser Treatments']

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            purpose: "",
            message: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await axios.post('/api/book-appointment', values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (response.status === 200) {
                toast.success(data.message || "Form Submitted Successful", {
                    style: {
                        "backgroundColor": "#D5F5E3",
                        "color": "black",
                        "border": "none"
                    },
                    duration: 1500
                });
                form.reset();
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { status, data } = error.response;
                if (status === 400) {
                    toast.error(data.message || "Some Error occured while submitting form", {
                        style: {
                            "backgroundColor": "#FADBD8",
                            "color": "black",
                            "border": "none"
                        },
                        duration: 2500
                    })
                    form.reset();
                } else if (status === 500) {
                    toast.error(data.message || "Internal Server Error", {
                        style: {
                            "backgroundColor": "#FADBD8",
                            "color": "black",
                            "border": "none"
                        },
                        duration: 2500
                    })
                    form.reset();
                }
        }
    }
}

return (
    <React.Fragment>
        <main className='h-fit w-screen overflow-x-hidden'>
            <Navbar />

            {/* Form Section with Background Image */}
            <section
                className='h-fit w-screen flex flex-col items-center justify-center p-5 bg-cover bg-center gap-3'
                style={{ backgroundImage: "url('/assets/contact.jpg')" }} // Set the background image here
            >
                <div className=' bg-orange-300 p-3 w-screen'>
                    <h1 className="text-3xl max-md:text-xl text-white font-bold z-10 text-center">
                        Get in touch with us
                    </h1>
                    <p className="text-base max-md:text-sm text-white max-md:text-justify z-10 text-center">
                        Your Voice Matters, Reach Out to Us Today
                    </p>
                </div>

                <Card className='w-full max-w-xl bg-transparent max-md:bg-white backdrop-filter backdrop-blur-md border-none shadow-md shadow-black'>
                    <CardHeader>
                        <CardTitle className=' text-2xl'>
                            Book An Appointment
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input className='placeholder:text-gray-800 border-black' placeholder="John Doe" type='text' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input className='placeholder:text-gray-800 border-black' placeholder="someone@example.com" type='email' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <div className=' w-full flex flex-row justify-normal items-center gap-2'>
                                                    <span className=' border border-black px-3 py-1.5 rounded-md'>+91</span>
                                                    <Input className='placeholder:text-gray-800 border-black' type='tel' {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purpose"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purpose</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange}>
                                                    <SelectTrigger className="w-full border-black cursor-pointer">
                                                        <SelectValue placeholder="Select purpose" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Purpose</SelectLabel>
                                                            {purpose.map((val, index) => (
                                                                <SelectItem key={index} value={val}>{val}</SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea className=' placeholder:text-gray-800 border-black' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className=' w-full h-fit flex items-center justify-center'>
                                    <Button
                                        type="submit"
                                        className='cursor-pointer rounded-sm bg-orange-500 hover:bg-orange-600 max-w-sm w-full'>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </section>

            <Footer />
        </main>
    </React.Fragment>
)
}

export default Page
