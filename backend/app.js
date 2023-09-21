const express = require ("express")
const mongoose = require ("mongoose")
const app = express()
const router = require("./routes/plan-routes")
const userRouter = require ("./routes/user-routes")
const cors = require ('cors')
const Plan = require("./model/Plan")


app.use(express.json()); //allow us to pass json everywhere to the server
app.use((req,res,next)=>{
    console.log("HTTP Method - " + req.method + " , URL -" + req.url);
    next();
})
app.use(cors())
app.use("/user",userRouter) //localhost:5000/plans 
 app.use("/admin",router) //localhost:5000/plans 
//app.use("/users",router) //localhost:5000/plans 
//here i can also give login and signup path to go to that way now i only use admin

mongoose.set("strictQuery",false);

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb+srv://admin:eUCiH7FvjCpQxUSc@cluster0.soh4n14.mongodb.net/Fittness-App?retryWrites=true&w=majority');
        console.log("Connected to MongoDB")
    }catch(err){
        console.log(err)
    }
  
    
}


app.listen(5000,()=>{
    console.log("listening port 5000")
})





module.exports = app;



//eUCiH7FvjCpQxUSc