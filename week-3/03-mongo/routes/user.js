const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { Mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    username=req.body.username;
    password=req.body.password;
    await User.create({
        username,
        password
    })
    res.json({message:"User created Successfully"})
    // Implement user signup logic
});

router.get('/courses', async(req, res) => {
    const response=await Course.find({});
    // Implement listing all courses logic
    res.json({
        couses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId=req.params.courseId;
    const username=req.headers.username;

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
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    let {purchasedCourses}=await User.findOne({username:req.headers.username});
    const course= await Course.find({
        _id:{
            "$in":purchasedCourses
        }
    })
    console.log(course);
    res.json({courses:course})
});

module.exports = router