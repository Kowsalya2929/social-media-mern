
export const register = async(req,res)=>{
    try{
        res.status(200).json({success: true,message: `${"user"} registered successfully!`})
    }catch(err){
        console.log(`register error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal server error"})
    }
}

export const login = async(req,res)=>{
    try{
        res.status(200).json({success: true,message: `${"user"} logged in successfully!`})
    }catch(err){
        console.log(`login error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal server error"})
    }
}

export const logout = async(req,res)=>{
    try{
        res.status(200).json({success: true,message: `${"user"} logout!`})
    }catch(err){
        console.log(`logout error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal server error"})
    }
}

export const forgotPassword = async(req,res)=>{
    try{
        res.status(200).json({success: true,message: `Go to check your email!`})
    }catch(err){
        console.log(`forgot password error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal server error"})
    }
}

export const resetPassword = async(req,res)=>{
    try{
        res.status(200).json({success: true,message: 'Password reseted successfully!'})
    }catch(err){
        console.log(`reset password error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal server error"})
    }
}