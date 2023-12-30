const express=require('express');
const app=express();
const summation=(n)=>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;


}
app.get("/",(req,res)=>{
    console.log(req.query);
    const n=req.query.n;
    const ans=summation(n);
    res.send(ans.toString());
})

app.listen(3000);