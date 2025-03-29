import mongoose, { Schema, Document, Model } from "mongoose";

interface Requested_Appointment extends Document {
    name: string;
    email: string;
    phone: string;
    purpose: string,
    message: string,
}

const RequestedAppointmentSchema: Schema<Requested_Appointment> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        purpose: { type: String, required: true },
        message: { type: String, required: false },
    },
    { timestamps: true }
);

const RequestedAppointment: Model<Requested_Appointment> = mongoose.models.RequestedAppointment || mongoose.model<Requested_Appointment>("RequestedAppointment", RequestedAppointmentSchema);
export default RequestedAppointment;