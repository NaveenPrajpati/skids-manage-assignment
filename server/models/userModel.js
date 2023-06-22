const mongoose=require("mongoose");


//route handler
const userSchema=new mongoose.Schema({
	name:{type: String,required:true,default:'null'},
	email:{type: String,required:true,default:'null'},
	address:{type:String},
	phone:{type: Number,required:true,default:'null'},
}

);
module.exports=mongoose.model("userData",userSchema);