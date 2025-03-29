import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ApprovedAppointment from "@/models/approved_appointment";
import RequestedAppointment from "@/models/requested_appointment";

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const values = await request.json();

        if (!values) {
            return NextResponse.json({ message: "No Values Found" }, { status: 401 });
        }

        const cookies = request.cookies;
        const tokenCookie = cookies.get('token');
        const token = tokenCookie?.value;

        if (!token) {
            return NextResponse.json({ message: "Token not Found" }, { status: 401 });
        }

        if (!process.env.JWT_SECRET_KEY) {
            return NextResponse.json({ message: "JWT_SECRET is not defined in environment variables" }, { status: 401 });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (typeof decodedToken !== 'object' || !decodedToken || !('name' in decodedToken)) {
            return NextResponse.json({ message: "Name not found in token. Token might be invalid" }, { status: 401 });
        }

        const AdminName = decodedToken['name'];

        const approvedCustomer = new ApprovedAppointment({
            name: values.name,
            email: values.email,
            phone: values.phone,
            purpose: values.purpose,
            message: values.message || "No Message",
            appointment_date: new Date(values.appointment_date),
            approvedBy: AdminName
        });

        const savedCustomer = await approvedCustomer.save();

        if (savedCustomer) {
            const deleteRequestedId = await RequestedAppointment.findOne({ email: values.email });

            if (deleteRequestedId) {
                const deleteRequested = await RequestedAppointment.findByIdAndDelete(deleteRequestedId._id);

                if (deleteRequested) {
                    return NextResponse.json({ message: "Appointment created" }, { status: 200 });
                } else {
                    return NextResponse.json({ message: "Failed to delete the requested appointment" }, { status: 500 });
                }
            } else {
                return NextResponse.json({ message: "No appointment found with that email" }, { status: 404 });
            }
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}