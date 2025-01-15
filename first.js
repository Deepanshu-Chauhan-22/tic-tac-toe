let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgamebtn=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;//playerX,playerO

const winPatterns=[
    [0 ,1, 2],
    [3 ,4, 5],
    [6 ,7, 8],
    [0 ,3, 6],
    [1 ,4, 7],
    [2 ,5, 8],
    [0 ,4, 8],
    [2 ,4, 6]
];

const resetGame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

let count=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            turnO=false;
            box.innerText="O";
        }else{
            turnO=true;
            box.innerText="X";
        }
        ++count;
        box.disabled=true;

        checkWinner();
        gamedraw();      

    })
})

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};


const gamedraw=()=>{
    if(!checkWinner() && count==9){
        msg.innerText="Game Drawn";
        msgcontainer.classList.remove("hide");
        
    }
}


const checkWinner=()=>{
    for(let pattern of winPatterns){

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }      
        }
    }
}


newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);