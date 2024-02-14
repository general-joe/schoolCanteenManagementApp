 ///Importing Prisma module
 const prisma = require ("../utils/prismaUtils")

 ///Adding  a new class
 const addClass = async(req,res) =>{
     try{
     const  data = req.body
     const Class = await prisma.class.create({
         data
     })
     res.status(200).json({message: "Class Created", Class})
 
     }catch(error){
         logger.error(error)
     }
 };
 
 ///Getting all Classes
 const getClass = async(req,res,next)=>{
     try{
         const data = req.body
         const Class = await prisma.class.findMany({
 
         })
         res.status(200).json({message: "Classes", Class })
 
     }catch(error){
         logger.error(error)
     }
 
 }
 
 ///Getting class by student id
 const getClassByStudentid = async(req,res)=>{
     const {indexNumber}= req.params
     const student = await prisma.student.findUnique({
         where:{indexNumber},
         include:{
             class: true,
         }
     
     });
     if(!student){
         res.status(404).json({message: "class not found"})
     }else{
         res.status(200).json({message: "Student found in class", Class})
     }
 }
 
 const updateClass = async(req,res,next)=>{
     const id = req.params
     const data = req.body
     const updateClass = await prisma.class.update({
         where: {
             id
         },
         data
     })
     res.status(200).json({message: "Class updated successfully", data, updateClass})
 }
 
 
 
 const deleteClass = async (req, res, next) => {
     const { id } = req.params;
     try {
       const deleteClass = await prisma.class.delete({
         where: {
           id,
         },
       });
       res.status(200).json({ message: "class deleted ", deleteClass });
     } catch (error) {
       logger.error(error);
     }
   };
 
 
 module.exports = {
     addClass,
     getClass,
     getClassByStudentid,
     updateClass,
     deleteClass
     
 }