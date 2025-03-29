// System Component import
import { NextRequest, NextResponse } from "next/server";

// Database Componenets import
import dbConnect from '@/lib/db';
import RequestedAppointment from "@/models/requested_appointment";


export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const values = await request.json();
        console.log(values)
        if (!values) {
            return NextResponse.json({ message: "No Values Found" }, { status: 400 });
        }
        const newAppointment = new RequestedAppointment({
            name: values.username,
            email: values.email,
            phone: values.phone,
            purpose: values.purpose,
            message: values.message || ""
        });

        console.log(newAppointment)

        const savedInfo = await newAppointment.save();

        if (savedInfo) {
            return NextResponse.json({ message: "Form Submitted Successful" }, { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}