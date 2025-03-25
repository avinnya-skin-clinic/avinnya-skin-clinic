// System Imports
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Schema
import Admin from '@/models/admin';

// connection to db and super admin
import dbConnect from '@/lib/db';
import { POST as setSuperAdmin } from '../createSuperAdmin/route';


export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const res = await setSuperAdmin();
        if (res.status === 200 || res.status === 201) {
            const values = await request.json();
            console.log(values);
    
            const admin = await Admin.findOne({ email: values.email });
            console.log(admin);
            
            if (!admin) {
                // Check if admin does not exist
                return NextResponse.json({ error: "Admin Does not Exist" }, { status: 401 });
            } else {
                // Validate Password
                const validatePassword = await bcryptjs.compare(values.password, admin.password);
                if (validatePassword) {
    
                    const tokenData = {
                        id: admin._id,
                        name: admin.name,
                        email: admin.email,
                    }
                    // Create Token
                    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: "1d" });
                    const response = NextResponse.json({ message: "Login Successful", name: admin.name }, { status: 201 });
                    // Set Cookies
                    response.cookies.set("token", token, {
                        httpOnly: true,
                        sameSite: 'strict',
                        maxAge: 60 * 60 * 24,
                    });
    
                    return response;
                } else {
                    return NextResponse.json({ error: "Invalid Credentials" }, { status: 409 });
                }
            }
        }

        return NextResponse.json({ message: "fail" }, { status: 301 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Some Error occurred" }, { status: 500 });
    }
}