import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

console.log(process.env.MONGO_URI);
``
const app = express();

//middleware
app.use(
  cors({
    origin: "http://localhost:5173", // allow React frontend
    // methods: ["GET", "POST", "PUT", "DELETE"], // optional
    // credentials: true, // optional, if you ever use cookies or auth
  })
);
app.use(express.json()); //to access the title and ocntent otherwise it will show undefined

app.use(rateLimiter);


//simple exmaple of custom middleware
app.use((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL IS ${req.url} `);
    next();
})
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(5001, () => {
    console.log("Server started on PORT 5001");
});
});


