export type RequestedAppointment = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    purpose: string,
    message: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export type ApprovedAppointment = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    purpose: string,
    message: string,
    appointment_date: Date,
    approvedBy: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}