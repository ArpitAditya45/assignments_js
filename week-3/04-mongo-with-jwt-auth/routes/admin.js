const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const jwt=require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
// Admin Routes
router.post('/signup', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    try{
        await Admin.create({username,password});
        res.json({message:"User created"});
    }
    catch(error){
        res.json({message:"Some error occured"});

    }
    // Implement admin signup logic
});
router.post('/signin', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const user=await Admin.findOne({username,password});
    console.log(JWT_SECRET);
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({token})
    }else{
        res.status(411).json({
            message:"Incorrect email and pass"
        })
    }
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imgLink=req.body.imgLink;
    const price=req.body.price;
   const newCourse=  await Course.create({
        title,
        description,
        imgLink,
        price
    })
    res.json({
        message:'Course created',
        courseId:newCourse._id

    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses=  await Course.find({});
    res.json({
        corses:allCourses
    })
});

module.exports = router;