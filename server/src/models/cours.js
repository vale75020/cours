import mongoose from 'mongoose'
const Schema = mongoose.Schema

const coursSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: [],
    date: { type: Date, default: Date.now },
    img: { type: String }
})

export default mongoose.model('cours', coursSchema);