const mongoose=require("mongoose")
const env=require("dotenv");

env.config();
const connectWithDb=()=>{
    mongoose.connect(process.env.BASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("db connected"))
    .catch((error)=>{
        
    })
}
module.exports=connectWithDb;

