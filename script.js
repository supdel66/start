let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");

const getcompchoice=()=>{
    const options =["rock","paper","scissors"];
    let random= Math.floor( Math.random()*3);
    return options[random];
}

const drawgame=()=>{
    console.log("draw");
}

const showwinner=(userwin,compchoie)=>{
    let message=document.querySelector("#message");
    if(userwin){
        console.log("you win");
        message.innerText="you win";
        userscore=userscore+1;
        document.querySelector(".userscore").innerText=userscore;
    }
    else{
        console.log("comp win");
        message.innerText="comp win";
        compscore=compscore+1;
        document.querySelector(".compscore").innerText=compscore;
    }

}

const playgame=(userchoice)=>{
   
    console.log("usechoice", userchoice);
const compchoice=getcompchoice();
console.log("compchoice", compchoice);
document.querySelector("button").innerText=compchoice;
if(userchoice===compchoice){
drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock" ){
        userwin = compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper" ){
        userwin = compchoice==="scissors"?false:true;}
        else {
            userwin = compchoice==="rock"?false:true;}
            showwinner(userwin,compchoice);
}

}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        
        const id=choice.getAttribute("id");
        console.log('choice was clciked', id);
        playgame(id);
        
    })
});



