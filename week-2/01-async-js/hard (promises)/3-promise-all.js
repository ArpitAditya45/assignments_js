/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

async function wait1(t) {
    let p=new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
    let a=await p;
    return a;

}

async function wait2(t) {
    let p=new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
    let a=await p;
    return a;

}

async function wait3(t) {
    let p=new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },t*1000)
    })
    let a=await p;
    return a;

}

async function calculateTime(t1, t2, t3) {
    let p=wait1(t1);
    let q=wait2(t2);
    let r=wait3(t3);
    let start=new Date();
   await Promise.all([p,q,r]);
   let end=new Date();
   return end-start;
    

}
calculateTime(1,2,3).then((res)=>{
    console.log(res);
})

module.exports = calculateTime;
