const asynchandler=require("espress-async-handler")

const registerUser= asynchandler (async(req, res) =>{
    try{

    }catch (error){
    }}
)
    if (!req.body.email){
        res.status(400);
        throw new console.error("please add an email");
    }
    res.send("register User");


module.export={
    registerUser,
};