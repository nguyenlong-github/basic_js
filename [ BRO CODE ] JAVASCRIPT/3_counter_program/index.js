const decreaseBtn = document.getElementById("decrease_btn");
const increaseBtn = document.getElementById("increase_btn");
const resetBtn = document.getElementById("reset_btn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;

}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;

}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;

}