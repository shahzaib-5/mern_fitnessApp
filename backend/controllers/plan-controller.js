const Plan = require("../model/Plan")
const multer = require ("multer");

const getAllPlans = async (req,res,next)=>{
    let plans;
    try{
        plans = await Plan.find();
    }catch(err){
        console.log(err);
    }
    if(!plans){
        return res.status(404).json({message : "No Plan Founds"})
    }
    return res.status(200).json({plans})
}

const getPlanById = async (req, res, next) => {
    let id = req.params.id; //it will return the id that will available in url
    let plan;
    try {
      plan = await Plan.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    return res.status(200).json({ plan });
  };

const addPlan = async (req,res,next) =>{
    const image = (req.file) ? req.file.filename : null; 
    const{ fname,lname,email,address,country,state } = req.body; //now it contains all fields 
    
    let plan;
    try{
        plan = new Plan({
            fname,
            lname,
            email,
            address,
            country,
            image,
            state,
            
        });
        await plan.save()
        console.log(plan)
    }catch(err){
        console.log(err);
    }

   

    if(!plan){
        return res.status(500).json({message : "Plan is not Added"})
    }
    return res.status(201).json({ plan });
}

const updatePlan=async (req,res,next)=>{
    const id = req.params.id
    const{ fname,lname,email,address,country,state } = req.body; //now it contains all fields 
    let plan;
    try{
        plan = await Plan.findByIdAndUpdate(id,{
            fname,
            lname,
            email,
            address,
            country,
            state,
        })
        plan = await plan.save()

    }catch(err){
        console.log(err)
    }

    if(!plan){
        return res.status(404).json({message : "Plan is not Update by this ID"})
    }
    return res.status(200).json({ plan });

}

const deletePlan = async(req,res,next)=>{
    let id = req.params.id;
    let plan;
    try{
        plan = await Plan.findByIdAndRemove(id);
    }catch(err){
        console.log(err)
    }

    if(!plan){
        return res.status(404).json({message : "Plan is not Deleted by this ID"})
    }
    return res.status(200).json({ message : "Plan Deleted Successfully" });
} 

exports.getAllPlans = getAllPlans;
exports.addPlan = addPlan;
exports.getPlanById = getPlanById;
exports.updatePlan = updatePlan;
exports.deletePlan = deletePlan;