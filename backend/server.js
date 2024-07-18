import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
	//add config
const app=express()
const port=4000
	
//middleware
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

//API Endpoints
app.get("/"), (req,res)=>{
    res.send("API working")
}
app.use("/api/food/", foodRouter)

//getting images for frontend
app.use("/images", express.static('uploads'))

//running the server
app.listen(port, ()=>{
	console.log("server started")
})