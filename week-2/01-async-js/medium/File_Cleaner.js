const fs=require('fs');

let a=fs.readFileSync('File.txt','utf-8')
let arr=a.split(" ");

let s="";
for(let i=0;i<arr.length;i++){
    if(arr[i]!=''){
        s=s+arr[i]+" ";
    }

}
fs.writeFileSync('File.txt',s);
