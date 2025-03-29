import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the Approved_Appointment document
interface Approved_Appointment extends Document {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
    appointment_date: Date;
    approvedBy: string;
}

// Define the schema for Approved_Appointment
const ApprovedAppointmentSchema: Schema<Approved_Appointment> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        purpose: { type: String, required: true },
        message: { type: String, required: false },
        appointment_date: { type: Date, required: true },
        approvedBy: { type: String, required: true },
    },
    { timestamps: true }
);


const ApprovedAppointment: Model<Approved_Appointment> = mongoose.models.ApprovedAppointment || mongoose.model<Approved_Appointment>("ApprovedAppointment", ApprovedAppointmentSchema);
export default ApprovedAppointment;