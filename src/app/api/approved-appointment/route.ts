// System Component import
import { NextResponse } from "next/server";

// Database Componenets import
import dbConnect from "@/lib/db";
import ApprovedAppointment from "@/models/approved_appointment";


export async function GET() {
    try {
        await dbConnect();
        const appointments = await ApprovedAppointment.find({}).sort({ createdAt: 1 });

        if (appointments) {
            return NextResponse.json({ data: appointments }, { status: 200 });
        } else {
            return NextResponse.json({ message: "No Data Found" }, { status: 401 });
        }
        
    } catch(error) {
        console.log(error);
        return NextResponse.json({ meesage: error }, { status: 500 });
    }

}