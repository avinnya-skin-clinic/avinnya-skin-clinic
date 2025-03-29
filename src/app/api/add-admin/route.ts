// src/app/api/createSuperAdmin/route.ts
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import Admin from '@/models/admin';
import dbConnect from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const values = await request.json();

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(values.password, salt);

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

        if (AdminName === 'avinnyaskinclinic') {

            const newSuperAdmin = new Admin({
                name: values.name,
                email: values.email,
                password: hashedPassword,
                createdBy: AdminName,
            });
            const savedAdmin = await newSuperAdmin.save();
    
            if (savedAdmin) {
                return NextResponse.json({ message: "Admin Created Successfully" }, { status: 201 });
            }
        }

        return NextResponse.json({ message: "You do not have permission to create Admin" }, { status: 401 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Some Error occurred" }, { status: 500 });
    }
}
