// src/app/api/createSuperAdmin/route.ts
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
import Admin from '@/models/admin';
import dbConnect from '@/lib/db';

export async function POST() {
    try {
        await dbConnect();

        const superAdmin = await Admin.findOne({ email: 'avinnyaskinclinic.info@gmail.com' });

        if (!superAdmin) {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash('avinnyaskinclinic', salt);

            const newSuperAdmin = new Admin({
                name: 'avinnyaskinclinic',
                email: 'avinnyaskinclinic.info@gmail.com',
                password: hashedPassword,
                createdBy: 'avinnyaskinclinic',
            });

            const savedAdmin = await newSuperAdmin.save();

            if (savedAdmin) {
                return NextResponse.json({ message: "Super Admin Created Successfully" }, { status: 201 });
            }
        }

        return NextResponse.json({ message: "Super Admin Already Exists" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Some Error occurred" }, { status: 500 });
    }
}
