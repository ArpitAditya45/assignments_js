const express=require('express')
const port=3000;
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.post('/conversation',(req,res)=>{
    // console.log(req.headers["Authorization"]);
    console.log(req.query)
    console.log(req.body);
    res.send({
        msg:"2+2=4"
    })
})
app.listen(port)
