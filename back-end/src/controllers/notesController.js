import NoteModel from "../models/Note.js";
import mongoose from "mongoose";

export const getAllNotes= async (_,res)=>{
    try{
        const notes= await NoteModel.find().sort({createdAt:-1})
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
        console.error("Error in createNote controller:",error)
        res.status(500).json({message:"Internal Server error"})

    }
}
export const getNoteById =async (req,res)=>{
    try{
        const note =await NoteModel.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json(note)

    }catch(error){
        console.error("Error in getNoteById controller:",error)
        res.status(500).json({message:"Internal Server error"})

    }
}

export const updateNote=async (req,res)=>{
    try{
        const {title,content}=req.body;
        const updatedNote=  await NoteModel.findByIdAndUpdate(req.params.id,{title,content},{new:true});

        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote)

    }catch(error){
        console.error("Error in updatedNotes controller:",error)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const deleteNote=async (req,res)=>{
    try{
        const deleteNote=await NoteModel.findByIdAndDelete(req.params.id)
        if(!deleteNote) return res.status(404).json({message:"Note not found"})

        res.status(200).json({message:"Note deleted successfully"})

    }catch(error){
        console.error("Error in deleteNote controller:",error)
        res.status(500).json({message:"Internal Server error"})
    }
}
