
const prisma = require('../../utils/prismaUtils')
const logger = require('../../utils/logger')

const classAvailablity = async (req,res,next)=>{
    try{
        const {className} = req.body
        const check = await prisma.class.findFirst({
            where:{className}
        })
        if(check){
            res.status(400).json({message: "class has already been added"})
            
        }else{
            next()
        }
        
        
       
    }catch(error){
        logger.error(error)
        
    }
   
};

module.exports={
    classAvailablity
}
//check whether the class has already registered
const prisma = require("../../utils/prismaUtils");

const classAvailability = async (req, res, next) => {
  try {
    const { classid } = req.body;
    const check = await prisma.class.findUnique({
      where: { classid },
    });
    if (check) {
      res.status(4000).json({ message: "Class has already been registered" });
    } else {
      next();
    }
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  classAvailability,
};

