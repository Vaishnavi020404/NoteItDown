import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

console.log(process.env.MONGO_URI);
const app = express();
const __dirname = path.resolve();

if(process.env.NODE_ENV!=="production"){
app.use(
  cors({
    origin: "http://localhost:5173", 
  })
);
}
app.use(express.json()); 

app.use(rateLimiter);


app.use((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL IS ${req.url} `);
    next();
})
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV==="production"){
app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});
}

connectDB().then(()=>{
    app.listen(5001, () => {
    console.log("Server started on PORT 5001");
});
});


