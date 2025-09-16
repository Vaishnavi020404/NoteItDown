import NoteModel from "../models/Note.js";

export const getAllNotes= async (req,res)=>{
    try{
        const notes= await NoteModel.find()
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNotes controller:",error)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const createNote =async (req,res)=>{
    try{
        const{title,content}=req.body
        const newNote=new NoteModel({title,content})
        //title:title   

        const savedNote =await newNote.save();

        res.status(201).json(savedNote);

    }catch(error){
        console.error("Error in createNotes controller:",error)
        res.status(500).json({message:"Internal Server error"})

    }
}

export const updateNote=async (req,res)=>{
    try{
        const {title,content}=req.body;
        const updatedNote=  await NoteModel.findByIdAndUpdate(req.params.id,{title,content},{new:true});

        if(!updateNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({message:"Note updated successfully."})

    }catch(error){
        console.error("Error in updaetNotes controller:",error)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const deleteNote=(req,res)=>{
    res.status(200).json({message:"Notes deleted successfully"});
}
