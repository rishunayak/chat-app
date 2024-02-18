import mongoose from "mongoose"

const connectToMongoDB=async()=>
{
    try {

        await mongoose.connect(process.env.MongoDB_URL)
        console.log("connected to mongoDB")
         
    } catch (error) {
      
        console.log("error connecting mongoDb",error.message)   
    }
}

export default connectToMongoDB;