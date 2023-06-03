import mongoose from "mongoose"

const Post_Schema = new mongoose.Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    message: { type: String, required: true },
    seen: { type: String, default: false },
},
    { timestamps: true }
)

const Post_Model = mongoose.model('Posts', Post_Schema)

export default Post_Model