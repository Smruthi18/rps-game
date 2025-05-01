let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscr=document.querySelector("#user_Score");
const cscr=document.querySelector("#Comp_score");
const getcomchoice=()=>{
    const options=["rock","paper","scissors"];
    const ind=Math.floor(Math.random()*3);
    return options[ind];
}
const showWin=(userwin,userchoice,comchoice)=>{
    if (userwin){
        userscore++;
        uscr.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="#90EE90";
    }
    else{
        comscore++;
        cscr.innerText=comscore;
        msg.innerText=`You Lose! ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="#FA8072";
    }

}
const Playgame=(userchoice)=>{
    const comchoice=getcomchoice();
    let userwin=true;
    if (userchoice===comchoice){
        msg.innerText="draw";
        msg.style.backgroundColor="black";
        return;

    }
    else{
        if(userchoice==="rock"){
            userwin=comchoice==="paper"?false:true;

        }
        else if(userchoice=="paper"){
            userwin=comchoice==="scissors"?false:true;
        }
        else{
            userwin=comchoice==="rock"?false:true;
        }
    }
    showWin(userwin,userchoice,comchoice);



}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        Playgame(userchoice);
     

        
    })
})