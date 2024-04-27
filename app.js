let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => { 
    turnO = true;
    enabledBoxes();
    msgContainer. classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",() => { 
        if(turnO){//palyerO
            box.innerText = "O";
            turnO = false;
        } else { //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for ( let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2val != "" && pos3Val != ""){
            if (pos1Val === pos2val && pos2val === pos3Val) {
                showWinner (pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);