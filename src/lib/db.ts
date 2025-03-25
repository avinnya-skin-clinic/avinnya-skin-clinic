import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("✅ Already connected to database...");
        return;
    } 

    if (!process.env.MONGO_URI) {
        console.log("❌ Database URI string not found... exiting...");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string, {});
        connection.isConnected = db.connections[0].readyState;

        console.log("Database Connected Successfully...");
    } catch (error) {
        console.log("Some error occured while connecting the database: ", error);
        process.exit(1);
    }
}

export default dbConnect;