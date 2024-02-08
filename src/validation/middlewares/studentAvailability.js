///a module to check if a student is already in the ddatabase before trying to register
const prisma = require('../../utils/prismaUtils')
const studentAvailablity = async (req,res,next)=>{
    try{
        const {indexNumber} = req.body;
        
        
        const student = await prisma.student.findUnique({
            where:{
                indexNumber,
            }
            
        })
        if(student){
        res.status(400).json({message: "student already registered"})
        }else{
            next()
        }
        
       
    }catch(error){
        logger.error(error)
        
    }
    
};

module.exports= {
    studentAvailablity
}