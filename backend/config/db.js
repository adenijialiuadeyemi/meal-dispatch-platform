import mongoose from "mongoose"
export const connectDB = async ()=>{
	await mongoose.connect('mongodb+srv://adenijialiuadeyemi:hUlgUC7yTGstkYNZ@dev-meal-dispatch.sreqji0.mongodb.net/dev-meal-dispatch').then(()=>{
        console.log("DB CONNECTED");
    })
}
