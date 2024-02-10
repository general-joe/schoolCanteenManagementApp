const prisma = require('../../utils/prismaUtils')

const checkindexAvailablity = async (req,res,next)=>{
    try{
        const {studentid}= req.body
        const check = await prisma.student.findUnique({
            where:{indexNumber: studentid}
        })
        if(!check){
            res.status(200).json({message: "student not found"})
            
        }else{
            next()
        }
        
        
       
    }catch(error){
        logger.error(error)
        
    }
   
};

module.exports={
    checkindexAvailablity
}