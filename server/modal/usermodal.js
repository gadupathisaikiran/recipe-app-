const mongoose=require("mongoose")
const schema=mongoose.Schema;

const Userschema=new schema({

    email:{type:String,unique:true},
    password:{type:String}

})

const User=mongoose.model("Userdata",Userschema)

module.exports=User