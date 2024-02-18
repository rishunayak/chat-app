import jwt from "jsonwebtoken"


const generateTokenAndsetCookie=(userId,res)=>
{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"})
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,  // save from XSS attacks crross site 
        sameSite:"strict", // CSRF attack cross site 
        secure:process.env.NODE_ENV !=="development"
    })
}

export default generateTokenAndsetCookie