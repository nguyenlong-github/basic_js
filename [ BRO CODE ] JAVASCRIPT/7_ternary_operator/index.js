//Ternary operator = a shortcut to if{} and else{}
//Helps to assign a variable based on condition
// condition ? codeIfTrue : codeIfFalse



let myTime = document.getElementById("myTime");
Number(myTime);
let mySubmit = document.getElementById("mySubmit");
let myResult = document.getElementById("myResult");
let greeting;

mySubmit.onclick = function(){
    greeting = myTime.value < 12 ? "Good Morning" : "Good Afternoon";
    myResult.textContent = greeting;
    
}