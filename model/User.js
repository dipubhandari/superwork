import mongoose from "mongoose"

const User_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
    { timestamps: true }
)

const User_Model = mongoose.models.users || mongoose.model('users', User_Schema)

export default User_Model