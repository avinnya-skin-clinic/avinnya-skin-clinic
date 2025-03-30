// src/app/api/createSuperAdmin/route.ts
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import Admin from '@/models/admin';
import dbConnect from '@/lib/db';
import nodemailer from "nodemailer";
import { format } from 'date-fns';
import jwt from 'jsonwebtoken';

const sendEmail = async (AdminName: string, name: string, email: string, password: string) => {
    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const formattedDate = format(new Date(), 'EEEE, MMMM dd, yyyy');

        const mailOptions = {
            from: process.env.EMAIL_ID,
            to: email,
            subject: `You have been granted Admin access by ${AdminName}`,
            html: `<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: "Montserrat", sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        .header {
            font-weight: bold;
            color: #4CAF50;
        }

        a {
            text-decoration: none;
            color: black;
            font-weight: 600;
        }

        .details {
            font-size: 14px;
            margin-top: 10px;
        }

        .warning {
            font-size: 14px;
            color: #e74c3c;
            margin-top: 20px;
        }

        .contact-info {
            margin-top: 20px;
            font-size: 14px;
        }

        .footer {
            font-size: 12px;
            color: #393939;
        }
    </style>
</head>

<body>
    <p>Dear <span style="font-weight: 600;">${name}</span>,</p>
    <p>We would like to inform you that a new admin account has been successfully created under your supervision at <span class="header">Avinnya Skin Clinic</span>.</p>
    
    <div class="details">
        <p><strong>Details of the New Admin:</strong></p>
        <ul>
            <li><strong>Admin Name:</strong> ${name}</li>
            <li><strong>Admin Email:</strong> ${email}</li>
            <li><strong>Created By:</strong> ${AdminName}</li>
            <li><strong>Creation Date:</strong> ${formattedDate}</li>
            <li><strong>Password:</strong> ${password}</li>
        </ul>
    </div>

    <div class="warning">
        <p><strong>Important:</strong> Please do not share your admin email and password with anyone. For your security, keep these details confidential and avoid using the same password across multiple platforms.</p>
    </div>

    <div class="contact-info">
        <p>If you have any questions or concerns, please don't hesitate to contact us at <a href="tel:+919130759132">+91-9130759132</a>. We are here to assist you!</p>
    </div>

    <p>Thank you for your attention!</p>

    <div class="footer">
        <p>Warm regards, <br><strong>Avinnya Skin Clinic</strong></p>
        <p>Email: <a href="mailto:avinnyaskinclinic.info@gmail.com">avinnyaskinclinic.info@gmail.com</a></p>
        <p>Website: <a href="https://avinnya-skin-clinic.vercel.app/" target="_blank">Avinnya Skin Clinic</a></p>
    </div>
</body>
</html>`,

        }

        await transport.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}

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
                await sendEmail(AdminName, values.name, values.email, values.password);
                return NextResponse.json({ message: "Admin Created Successfully" }, { status: 201 });
            }
        }

        return NextResponse.json({ message: "You do not have permission to create Admin" }, { status: 401 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Some Error occurred" }, { status: 500 });
    }
}
