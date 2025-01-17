const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input='';
let inputResult=[]
let inputA;
let inputB;
rl.on("line", (line)=>{
    
    input=line;
    inputResult=input.split(" ");
    
    if(inputResult[0]>=1&&inputResult[1]<=10000){
        inputA=parseInt(inputResult[0]);
        inputB=parseInt(inputResult[1]);
    }
    else{
        process.exit();
    }
    rl.close();
});

rl.on("close", ()=>{

    let result=''
    result=(inputA+inputB)+'\n'+
    (inputA-inputB)+'\n'+
    (inputA*inputB)+'\n'+
    parseInt(inputA/inputB)+'\n'+
    (inputA%inputB);
    console.log(result);
    process.exit();
});