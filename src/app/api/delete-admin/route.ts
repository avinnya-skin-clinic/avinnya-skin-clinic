import Admin from "@/models/admin";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import jwt from "jsonwebtoken";

const sendEmail = async (name: string, email: string) => {
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

        const timeZone = 'Asia/Kolkata';
        const zonedDate = toZonedTime(new Date(), timeZone);

        const formattedDate = format(zonedDate, 'EEEE, MMMM dd, yyyy');

        const mailOptions = {
            from: process.env.EMAIL_ID,
            to: email,
            subject: `Admin Access revoked by ${name}`,
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
    <p>We would like to inform you that the admin account associated with the email <span class="header">${email}</span> has been successfully deleted from the system by <span class="header">${name}</span>.</p>
    
    <div class="details">
        <p><strong>Details of the Deleted Admin:</strong></p>
        <ul>
            <li><strong>Admin Name:</strong> ${name}</li>
            <li><strong>Deleted Admin Email:</strong> ${email}</li>
            <li><strong>Deleted At:</strong> ${formattedDate}</li>
        </ul>
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
</html>
`,

        }

        await transport.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}

export async function POST(request: NextRequest) {
    try {
        const email = await request.json();

        if (!email) {
            return NextResponse.json({ message: "Email not found" }, { status: 401 });
        }

        if (email === 'avinnyaskinclinic.info@gmail.com') {
            return NextResponse.json({ message: "Cannot Delete Super Admin" }, { status: 401 });
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

        const admin = await Admin.findOne({ email: email });
        if (admin) {
            const deleteAdmin = await Admin.findByIdAndDelete({ _id: admin._id });
            if (deleteAdmin) {
                await sendEmail(AdminName, email);
                return NextResponse.json({ message: "Admin Deleted Successfully" }, { status: 200 });
            }
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}