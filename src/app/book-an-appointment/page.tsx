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
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

// Form Schema
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
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
            username: "",
            email: "",
            phone: "",
            purpose: "",
            message: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("Form Submitted Successfully");
        form.reset();
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
                    <div className=' bg-orange-300 p-3 rounded-2xl'>
                        <h1 className="text-3xl text-white font-bold z-10">
                            Get in touch with us
                        </h1>
                        <p className="text-base text-white text-justify z-10">
                            Your Voice Matters, Reach Out to Us Today
                        </p>
                    </div>

                    <Card className='w-full max-w-xl'>
                        <CardHeader>
                            <CardTitle>Book An Appointment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" type='text' {...field} />
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
                                                    <Input placeholder="someone@example.com" type='email' {...field} />
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
                                                    <span className=' border border-input px-3 py-1.5 rounded-md'>+91</span>
                                                    <Input type='tel' {...field} />
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
                                                        <SelectTrigger className="w-full">
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
                                                    <Textarea {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className='cursor-pointer'>
                                        Submit
                                    </Button>
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
