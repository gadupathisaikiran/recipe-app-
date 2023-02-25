const mongoose=require("mongoose")
const schema=mongoose.Schema;

const Postschema=new schema({

    title:{type:String},
    author:{type:String},
    image:{type:String},
    ingredients:{type:Array},
    directions:{type:String}



})

const Recipe=mongoose.model("Recipedata",Postschema)

module.exports=Recipe