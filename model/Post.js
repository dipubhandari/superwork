import mongoose from "mongoose"

const User_Schema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    content: { type: String, default: false },
    image: { type: String, default: false },
    user: { type: String, default: false },
},
    { timestamps: true }
)

const User_Model = mongoose.model('Users', User_Schema)

export default User_Model