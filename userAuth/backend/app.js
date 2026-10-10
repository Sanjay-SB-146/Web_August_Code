//Step 1 : Import using require('MethodName')

const express = require('express') //api building
const cors = require('cors') // shre the resource btw add/origin
const mongoose = require('mongoose') //backend database connection
const bcrypt = require('bcrypt') //hash the sensitive data like password,upi pin

//Step 2 : Create Application using express()

const app = express()

//MiddleWare - Security Layer
app.use(express.json())
app.use(cors())

//Phse 1 :Backend and Database Connection

//1.Connect - Local DB - mongodb:localhost:27017//Database_Name
mongoose.connect('mongodb://localhost:27017/AugustStudent')

.then( ()=>console.log("MongoDB Connected") ) //Connfirm msg

.catch( (err)=>console.log(err) ) // Error msg

//2. Schema - BluePrint of Data Which You Want To Store

const UserSchema = new mongoose.Schema({
                     //json - Object - key:value pair
                    name:String,
                    email:{
                        type:String,
                        unique:true
                    },
                    password:String
                })

//3. Model (Collection in MongoDB)
const User = mongoose.model('User',UserSchema)

// Phase 2 : Frontend - Backend API(carry data)

app.get('/',(req,res)=>{
    res.send("Backend Running")
})

app.post('/register', async(req,res) => {
    const {name , email , password} = req.body

     //Basic Validation
    if (!name || !email || !password){
        res.json({message : 'All Field must be Completed'})
    }

    //Check Existing user
    const existingUser = await User.findOne({email}) //Output in Boolean

       if(existingUser){
        return res.json({message: 'User Already Exists'})
       }

    //Hashing the password
    const hashPassword = await bcrypt.hash(password,10)

    //save the data in MondoDB Collection(model)

    const newUser = new user({
                      name ,
                      email ,
                      password:hashPssword
                })

    await newUser.save() // Save the data in collection

    res.json({
        message: 'User Created Successfully'
    })
})

app.post('/login', async(req,res) => {
    const {email , password} = req.body;

    //1. Find User
    const user = await User.findOne({email})

    if (!user){
        return res.json({
            message:'User Not Found - Register First'
        })
    }

    //Compare password
    const valid = await bcrypt.compare(password,user.password) //op in boolean
    if(valid){
        res.json({
            message:'Login Successfull'
        })
    }else{
        res.json({
            message:'Invalid Password'
        })
    }
})

app.listen(3000,()=>{
    console.log('Server Running https://localhost:3000')
})
