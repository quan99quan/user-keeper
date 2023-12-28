
import usersModel from "../model/users.model";
export default {
    createUser: async (req,res)=>{
        try{
            const {name,description}= req.body;
          
            const newUser = await usersModel.createUser({name,description});
            
            return res.status(200).json(newUser);
        }catch (err){
            res.status(500).json({err:"Server fail"})
        }
    },
    getAllUsers:async (req,res) => {
        try{
            const users=await usersModel.getAllUsers();
            return res.status(200).json(users);
        }catch(err){
            res.status(500).json({err:"Server fail"})
        }
    },
    getIdUsers: async (req,res)=>{
        try{
            const userId= parseInt(req.params.id);
            
            const user =await usersModel.getIdUsers(userId);
            
            return res.status(200).json(user);
        } catch(err){
            res.status(500).json({err: "Server fail"})
        }
    },
    updateUser:async (req,res)=>{
        try{
            const userId =parseInt(req.params.id)
            const {name,description}=req.body;
const update= await usersModel.updateUser(userId,{name,description})
            return res.status(200).json(update);
        }catch(err){
            res.status(500).json({err: "Server fail"})
        }
    },
    deleteUser: async (req,res)=>{
        try{
            const userId = parseInt(req.params.id);
            await usersModel.deleteUser(userId);
            res.json({message:`Delete User ID :${userId} success`})
        } catch(err){
              res.status(500).json({err:"Server fail"})
        }
    }
}