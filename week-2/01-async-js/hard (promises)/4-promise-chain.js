/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    let start=new Date();
    let p=await wait1(t1);
    let q=await wait2(t2);
    let r=await wait3(t3);
    let end=new Date();
    return end-start;

}

module.exports = calculateTime;
