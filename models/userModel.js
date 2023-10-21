const mongoose = require('mongoose')
var plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/passjs")

const userSchema = mongoose.Schema({
    username :String,
    email:String,
    contact:String,
    playList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'playlist'
    }],
    liked:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'song'
    }],
    profileImage:{
        type:String,
        default:"/images/default.png"
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})

userSchema.plugin(plm);

const userModel = mongoose.model('user',userSchema) ;

module.exports = userModel