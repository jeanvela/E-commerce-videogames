import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1/videogames")
        console.log("Database is connected to", db.connection.db.databaseName)
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}