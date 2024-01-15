const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        requied: true
    },
    reps: {
        type: Number,
        requied: true
    },
    load: {
        type: Number,
        requied: true
    }
}, { timestamps: true })

module.exports = mongoose.model('workout', workoutSchema)
