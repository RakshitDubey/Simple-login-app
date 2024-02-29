const express=require('express')

const port=5000

const connectDb=require('./databse/connectdb')
const usermodel=require('./databse/user')
const cors=require('cors')


const app=express()
app.use(cors())


app.use(express.json())


app.post("/register",async(req,res)=>{
    try {
        if(
            !req.body.username||!req.body.password

        ){
            return res.status(400).send({
                message:'Send all required fields'
            })
        }
        const newbook={
            username:req.body.username,
            password:req.body.password,
            
        }
        
        const user=await usermodel.create(newbook)
        return res.status(201).send(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
        
        
    }
})

app.post('/login',async(req,res)=>{
    try {
        const{username,password}=req.body
        const user=await usermodel.findOne({username})
        if(!user){
            return res.status(401).json({error:"Invalid username or password"})

        }
        
        if(user.password!==password){
            return res.status(401).json({error:"invalid username or password"})

        }
        res.status(200).json({message:"Login Successfull"})
    } catch (error) {
        
        console.log("error",error);
    }
})


connectDb()



app.listen(port,()=>{
    console.log("server is runnning");
})