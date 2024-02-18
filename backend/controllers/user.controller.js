import User from "../models/user.model.js"

export const getUsersForSidebar=async(req,res)=>
{
    try {
        const logggedInUserId=req.user._id

        const allUsers=await User.find({_id:{$ne:logggedInUserId}}).select("-password")

        res.status(200).json(allUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar Controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}