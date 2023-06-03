import mongoose from "mongoose"


const DATABASE_URL = process.env.MONGO_URL || 'mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test'
const connection = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'superwork',
        }
        mongoose.set('strictQuery', true);
        const connected = await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        if (connected) {
            console.log('Database connected')
        }
        else {
            console.log('Not connected')
        }
    } catch (error) {
        console.log(error)
    }
}


export default connection