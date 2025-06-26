import express from "express";
import { ENV } from "./config/env.js";
import job from "./config/cron.js";
import favouriteRoutes from "./routes/favourites.route.js";

const app=express();
const PORT=ENV.PORT;
if(ENV.NODE_ENV === "production") job.start();

app.get("/api/health",(req,res)=>{
    res.send("Working");
})
app.use(express.json());
app.use("/api/favorites",favouriteRoutes)

app.listen(PORT,()=>{
    console.log("Server running...")
})