import mongoose, { Schema, Document, Model } from "mongoose";

interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
    createdBy: string;
}

const AdminSchema: Schema<IAdmin> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdBy: { type: String, required: true },
    },
    { timestamps: true }
);

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;