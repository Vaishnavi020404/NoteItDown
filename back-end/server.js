const express=require("express");

const app=express();

app.listen(5001,()=>{
    console.log("Server started on PORT 5001:)");
})

app.get("/api/notes", (req, res) => {
  // send the notes
  res.status(200).send("you got 5 notes");
});

app.post("/api/notes", (req, res) => {
  // send the notes
  res.status(201).send("note created");
});


