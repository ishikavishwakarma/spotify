const mongoose = require('mongoose')

const playListSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
   owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    
   poster:[{
        type:String,
        default:'/image/defaultmusic.png'
    }],
   songs:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'song',
   }]
})

const playListModel = mongoose.model('playList',playListSchema)
module.exports = playListModel