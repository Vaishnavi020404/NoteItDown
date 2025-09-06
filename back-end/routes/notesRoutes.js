const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("you got 20 notes");
})

// app.get("/api/notes",(req,res)=>{
//      res.status(200).send("you got 20 notes");
// })

router.post("/",(req,res)=>{
    res.status(201).json({message:"Notes created Successfully"});
})

// app.post("/api/notes",(req,res)=>{
//      res.status(201).json({message:"Notes created Successfully"});
// })

router.get("/",(req,res)=>{
    res.status(200).send("you got 20 notes");
})


router.put("/:id",(req,res)=>{
    res.status(200).json({message:"Notes updated Successfully"})
})

router.delete("/:id",(req,res)=>{
    res.status(200).json({message:"Notes deleted Successfully"})
})






export default router;