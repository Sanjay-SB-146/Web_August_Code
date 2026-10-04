//BACKEND RULES TO WRITE CODE

//Step 1 : Import the required modules and dependencies of the file , body-parser,and any other neccesary libraries
//Whatever is Needed to run the backend server should be imported here.

//How to import the modules in Node.js
//use the require() function to import modules in Node.js for example 
// Syntax - require('ModuleName');

const express = require('express')
//Module will have its own inbuilt functions

//Step 2 - create express Application/Function by using express()
const app = express() //help us to build API

//MiddleWare - Security Layer

//Step 3 - Building API Endpoints / Routes / URL - Communication Backend to Frontend
//Syntax : app.methodName('path/Adress',function(req,res){-Task-})

//1. First Adress
app.get('/',function(req,res){
    res.send('Good Evening Backend API is Running')
})

//2. Anoother Adress
app.get('/login',function(req,res){
    res.send('GoodEvening Please Login')
})

app.get('/register',function(req,res){
    res.send('GoodEvening Please Register')
})

//Step 4 : Start the backend server by using app.listen()

// Syntax : app.listen(portNumber,function(){})
//portNumber - itis a number which is used to identify backend server 
// example - 3000,5000,8000,9000
app.listen(3000,function(){
    console.log('Backend Server Running on Port http://localhost:3000')
})