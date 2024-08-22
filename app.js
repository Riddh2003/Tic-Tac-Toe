let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x , player O
const winningpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
}

boxes.forEach(box => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      //player O
      box.innerHTML = "O";
      turnO = false;
    } else {
      //player
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
// console.log(winningpattern);
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = '';
        msgcontainer.classList.add("hide");
    }
}
const showWinner = (winner) => {
    msg.innerText = `Player ${winner} is Winner!!!`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkwinner = () => {
  for (let pattern of winningpattern) {
    // console.log(pattern);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != '' && pos2val != '' && pos3val != ''){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);