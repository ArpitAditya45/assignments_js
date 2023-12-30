/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   async function prom(){
    let p=new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },n*1000)
       })
       let ans=await p;
       return ans;
   }
   return prom();
   
   
}

module.exports = wait;
