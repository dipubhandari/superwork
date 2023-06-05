import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    content: { type: String, default: false },
    image: { type: String, default: false },
    user: { type: String, default: false },
},
    { timestamps: true }
)
const Post_Model = mongoose.models.posts || mongoose.model('newposts', Schema)
export default Post_Model