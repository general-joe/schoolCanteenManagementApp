///a module to check if a student is already in the ddatabase before trying to register
const prisma = require('../../utils/prismaUtils')
const logger = require("../../utils/logger")
const adminAvailablity = async (req,res,next)=>{
    try{
        const {email} = req.body;
        
        
        const admin = await prisma.admin.findUnique({
            where:{email:email}
            
        })
        if(admin){
        res.status(400).json({message: "admin already registered"})
        }else{
            next()
        }
        
       
    }catch(error){
        logger.error(error)
        
    }
    
};

module.exports={
    adminAvailablity
}