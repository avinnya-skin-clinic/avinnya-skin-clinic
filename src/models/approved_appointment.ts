import mongoose, { Schema, Document, Model } from "mongoose";

interface Approved_Appointment extends Document {
    name: string;
    email: string;
    phone: string;
    purpose: string,
    message: string,
    appointment_date: Date,
    approvedBy: string;
}

const ApprovedAppointmentSchema: Schema<Approved_Appointment> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        phone: { type: String, required: true},
        purpose: { type: String, required: true},
        message: { type: String, required: true},
        appointment_date: { type: Date, required: true },
        approvedBy: { type: String, required: true },
    },
    { timestamps: true }
);

const ApprovedAppointment: Model<Approved_Appointment> = mongoose.models.RequestedAppointment || mongoose.model<Approved_Appointment>("ApprovedAppointment", ApprovedAppointmentSchema);
export default ApprovedAppointment;