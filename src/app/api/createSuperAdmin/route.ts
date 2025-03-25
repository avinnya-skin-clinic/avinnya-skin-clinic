// System Imports
import bcryptjs from 'bcryptjs';

// Schema
import Admin from '@/models/admin';

// connection to db
import dbConnect from '@/lib/db';


export async function setSuperAdmin() {
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
                createdBy: 'avinnyaskinclinic'
            });

            const savedAdmin = await newSuperAdmin.save();

            if (savedAdmin) {
                return { message: "success" , status: 201 };
            }
        }

        return { message: "success", status: 201 };
        
    } catch (error) {
        console.log(error);
        return { message: `some error occured ${error}`, status: 500 };
    }
}