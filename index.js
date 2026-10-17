const express=require("express")
const app=express()
const Emp=require("./models/emp-model");
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/EmployeeCrudDB")
.then(()=>{
    console.log("Connected to MongoDB..");
    
})
.catch((error)=>{
    console.log("Error Connecting to MongoDB..!!");
})
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    
})
app.get('/',async(req,res)=>{
    const employees=await Emp.find()
    res.render("home",{employees});
})

app.get('/show-emp/:id',async(req,res)=>{
    const emp=await Emp.findOne({_id:req.params.id})
    res.render("show-emp",{emp})
})

app.get('/add-emp',(req,res)=>{
    res.render("add-emp")
})

app.post('/add-emp',async(req,res)=>{
    await Emp.create(req.body)
    res.redirect("/")
})
app.get('/update-emp/:id',async(req,res)=>{
    const emp=await Emp.findById(req.params.id)
    res.render("update-emp",{emp})
})

app.post('/update-emp/:id',async(req,res)=>{
    await Emp.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/")
})
app.get('/delete-emp/:id',async(req,res)=>{
    await Emp.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

