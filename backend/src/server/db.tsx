import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://matt_dunn:STVpgLPfMfXOzbaz@scout.re03syo.mongodb.net/?retryWrites=true&w=majority")
        if (conn) {
            console.log("Connected to DB.")
        }
    } catch (error) {
        console.log("Failed to connect to DB: ", error)
        throw error
    }
}

export default connectToDb
