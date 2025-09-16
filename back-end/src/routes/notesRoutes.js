import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router=express.Router();

router.get("/",getAllNotes);

// app.get("/api/notes",(req,res)=>{
//      res.status(200).send("you got 20 notes");
// })

router.post("/",createNote);

// app.post("/api/notes",(req,res)=>{
//      res.status(201).json({message:"Notes created Successfully"});
// })

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);


export default router;