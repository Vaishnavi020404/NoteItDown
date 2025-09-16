import mongoose from "mongoose";

//1.Create a schema
//2.Create a model based off of that schema

const noteSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
    },
    
        {timestamps:true}, //for createdAt,updatedAt
    

);

const NoteModel =mongoose.model("Note",noteSchema);   
export default NoteModel;