const express=require('express');
const app=new express();
const bodyparser=require('body-parser')
const users=[{
    name:'John',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
app.use(bodyparser());
app.get("/",(req,res)=>{
    let cnt=0;
    cnt=users[0].kidneys.length;
    const numberOfHealthykidneys=users[0].kidneys.filter((element)=>{
        return element.healthy===true;
    }).length;
    const unhealtyKidneis=cnt-numberOfHealthykidneys;
    res.json({cnt,
    numberOfHealthykidneys,
    unhealtyKidneis
})
})

app.post("/",(req,res)=>{
     const isHealthy=req.body.isHealthy;
     users[0].kidneys.push({healthy:isHealthy});
     res.json({msg:"done"})
})

app.put("/",(req,res)=>{
    users[0].kidneys.map((element)=>{
        return element.healthy=true;
    })

    res.json();

})

app.delete("/",(req,res)=>{
   let atleast =false;
   for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy===false){
        atleast=true;

    }
   }
   
   if(atleast){
    users[0].kidneys=users[0].kidneys.filter((element)=>{
        return element.healthy==true;
    })
    console.log(users[0].kidneys.filter((element)=>{
        element.healthy==false;
    }));
    res.json({});
   }
   else{
    res.status(411).json({
        msg:"no bad kidneys"
    });
   }
})
app.listen(3000);
