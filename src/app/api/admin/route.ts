// System Component import
import { NextResponse } from "next/server";

// Database Componenets import
import dbConnect from "@/lib/db";
import Admin from "@/models/admin";


export async function GET() {
    try {
        await dbConnect();
        const admins = await Admin.find({}).sort({ createdAt: 1 });

        if (admins) {
            return NextResponse.json({ data: admins }, { status: 200 });
        } else {
            return NextResponse.json({ message: "No Data Found" }, { status: 401 });
        }
        
    } catch(error) {
        console.log(error);
        return NextResponse.json({ meesage: error }, { status: 500 });
    }

}