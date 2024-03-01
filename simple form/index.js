const express=require("express")
const mongoose= require("mongoose")
const bodyparser=require("body-parser")
const app=express();
app.use(bodyparser.urlencoded({ extended: true }))
mongoose.connect(//Your URL Link )


const user=mongoose.model("Users" ,{firstname:"string",lastname:"string",emil:"string"})


 

app.use(express.json());


app.post("/sign",(req,res)=>{
  const fname=req.body.fn;
  const lname=req.body.ln;
  const email=req.body.em;
 
  const usr=new user({
    firstname:fname,
    lastname:lname,
    emil:email
  })
  usr.save();

  

})

app.listen(2000)