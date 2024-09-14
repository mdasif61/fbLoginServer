const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema({
    number:{type:String,required:true},
    password:{type:String,required:true},

},{
    timestamps:true
});

const User=mongoose.model("fbusers",userSchema);
module.exports=User;