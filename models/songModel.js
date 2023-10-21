const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    title: String,
    artist: String,
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        enum: ['punjabi', 'gujrati']
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    size: Number,
    poster: String,
    filename: {
        type: String,
        required: true
    }
})

const songModel = mongoose.model('song', songSchema)
module.exports = songModel