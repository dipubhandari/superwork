import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
},
    { timestamps: true }
)
const Contact_Model = mongoose.models.contact || mongoose.model('contact', Schema)
export default Contact_Model