
const getApp= (req,res)=>{
    console.log("reached tasks.js");
res.status(200).send("this is fking home page");
}
module.exports = {getApp};
