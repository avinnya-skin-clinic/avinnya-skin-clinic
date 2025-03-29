import Admin from "@/models/admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const email = await request.json();

        if (!email) {
            return NextResponse.json({ message: "Email not found" }, { status: 401 });
        }

        if (email === 'avinnyaskinclinic.info@gmail.com') {
            return NextResponse.json({ message: "Cannot Delete Super Admin" }, { status: 401 });
        }

        const admin = await Admin.findOne({ email: email });
        if (admin) {
            const deleteAdmin = await Admin.findByIdAndDelete({ _id: admin._id });
            if (deleteAdmin) {
                return NextResponse.json({ message: "Admin Deleted Successfully" }, { status: 200 });
            }
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}