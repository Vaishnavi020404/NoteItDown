import express from "express";
import { createNotes, deleteNotes, getAllNotes, updateNotes } from "../controllers/notesController.js";

const router=express.Router();

router.get("/",getAllNotes);

// app.get("/api/notes",(req,res)=>{
//      res.status(200).send("you got 20 notes");
// })

router.post("/",createNotes);

// app.post("/api/notes",(req,res)=>{
//      res.status(201).json({message:"Notes created Successfully"});
// })

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);


export default router;