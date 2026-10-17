const mongoose=require("mongoose")
const empSchema=new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});
const Emp=mongoose.model("Emp",empSchema);
module.exports=Emp;
