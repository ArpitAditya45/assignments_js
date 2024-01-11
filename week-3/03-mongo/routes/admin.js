const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    // Implement admin signup logic
    Admin.create({
        username:username,
        password:password
    }).then(()=>{
        res.json({
            message:"Admin created Successfully"
        })
    })
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