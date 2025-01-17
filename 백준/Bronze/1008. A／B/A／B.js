const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input='';


rl.on("line", (line)=>{
    input=line;
    rl.close();
});

rl.on("close", ()=>{

    let a=parseFloat(input[0]);
    let b=parseFloat(input[2]);
    console.log(a/b);
    process.exit();
});