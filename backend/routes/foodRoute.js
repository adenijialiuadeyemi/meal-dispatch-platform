import express from "express"
import multer from "multer"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"

const foodRouter = express.Router()

//image storage engine
const storage =multer.diskStorage({
	destination:"uploads",
	filename:(req,file,cb)=>{
		return cb(null, `${Date.now()}${file.originalname}`) //no need for eturn statement
}})
	
const upload= multer({storage:storage})

//add food
foodRouter.post("/add", upload.single("image"),addFood)

//list food
foodRouter.get("/list", listFood)

//remove food
foodRouter.post("/remove", removeFood)	

export default foodRouter
