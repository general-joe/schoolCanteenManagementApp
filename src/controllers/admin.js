const prisma = require("../utils/prismaUtils")
const bcrypt = require("../utils/bcrypt")

const signUpAdmin = async (req,res)=>{
    try{
        const data = req.body;
        
        data.password = await bcrypt.hash(data.password)
      
        const admin = await prisma.admin.create({
                data,

            })
            delete admin.password
        res.status(200).json({message: 'admin Registered', admin})
    }catch(error){
        console.log(error)
    }
    
}

const getAdmins = async (req,res)=>{
    try{
    const admin = await prisma.admin.findMany({
        
        })
        res.status(200).json({status: "successfull", admin})
    }catch(error){
        console.log(error)
    }
}
const updateAdmin = async(req,res) =>{
  try{
    const id = req.params
    const data = req.body
    const update = await prisma.admin.update({
      where:{id}
    })
    res.status(200).json({message: "admin updated", data, update})
  }catch(error){
  console.log(error)
}
}

const deleteAdmin = async (req, res) => {
  try{
    const {id} = req.params
    const removeadmin = await prisma.admin.delete({
      where:{id},
    })
    res.status(200).json({message: "admin deleted", removeadmin})
  }catch(error){
    console.log(error)
  }
}

const loginAdmin = async(req,res)=>{
  try{
  const {email, password} = req.body
  
  const admin = await prisma.admin.findUnique({
    where:{email}
  })
  if(admin){
    await bcrypt.compare(password, admin.password )
    if(!password){
      res.status(400).json({message:"Invalid Credentials Provided"})
     
    }else{
      res.status(200).json({message:"logged in", admin})
    }
  }else{
    res.status(400).json({message: "admin not found"})
  }
}catch(error){
  console.log(error)
}

}

module.exports = {
    signUpAdmin,
    getAdmins,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}