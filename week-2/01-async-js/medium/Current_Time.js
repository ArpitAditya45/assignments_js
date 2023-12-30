let start=new Date();
console.log(start);
// console.log(start.getHours());
// console.log(start.getMinutes());
// console.log(start.getSeconds());

start.setHours(12);
start.setMinutes(59);
start.setSeconds(58);
let H=start.getHours();
let M=start.getMinutes();
let S=start.getSeconds();
console.log(start.getUTCHours());

function increment(){
    let H_=H;
    let attr="AM";
    S=S+1;
    if(S>=60){
        S=0
        M=M+1;
    }
    if(M>=60){
        M=0;
        H=H+1;
        H_=H;
    }
    if(H>=12){
        
        if(H==12){
            H_=12;
            attr="PM"; 
        }
        else if(H%12==0){
            H=0;
            H_=0;
            attr="AM";
        }
        else{
            H_=H%12;
            attr="PM"; 
        }
        
         
    }
    console.log(H_+":"+M+":"+S+""+attr);


}
setInterval(increment,1000);