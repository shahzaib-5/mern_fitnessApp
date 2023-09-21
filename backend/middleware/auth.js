const jwt = require("jsonwebtoken");
const SECRET_KEY = "asd@3160";

const auth = (req,res,next)=>{
    try {

        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1]; //second element is token that is store in token
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.id; // use id to verify the user
        }
        else {
            res.status(401).json({message : "Unauthorized User"});
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message : "Unauthorized User"});
    }
}

module.exports = auth;