const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const jwt=require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    User.create({username,password})
    .then(()=>{
        res.json({message:"User created"});
    })
    .catch(()=>{
        res.json({message:"Some error occurred"});
    })
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    User.findOne({username:username,password:password})
    .then(()=>{
        const token=jwt.sign({username},JWT_SECRET);
        res.json({token});

    })
    .catch(()=>{
        res.json({message:"Some error"})
    })
   
    // Implement admin signup logic
});

router.get('/courses', async(req, res) => {
    const response=await Course.find({});
    // Implement listing all courses logic
    res.json({
        couses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    //Keep a check for user as admin can also access this as jwt authorisation is in memory not db
    console.log(req.username);
    const username=req.username;
    User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    }).then(()=>{
        res.json({
            message:"Course Purchased"
        })
    })
    .catch((error)=>{
        console.log(error);
        res.json({message:"Some error occured"})
    })
    res.json({message:"Success"});
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    let {purchasedCourses}=await User.findOne({username:req.username});
    const course= await Course.find({
        _id:{
            "$in":purchasedCourses
        }
    })
    console.log(course);
    res.json({courses:course})

});

module.exports = router