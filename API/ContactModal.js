import mongoose from "mongoose";

const contacSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    gmail:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const Contact = mongoose.model("Contact",contacSchema)