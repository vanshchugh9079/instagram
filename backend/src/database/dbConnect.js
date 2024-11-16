import mongoose from "mongoose"
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
let dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URI, clientOptions)
    } catch (error) {
        throw new Error(error)
    }
}   
export default dbConnect;