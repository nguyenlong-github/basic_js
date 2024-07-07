

// Cách 1
// let username;
// username = window.prompt("Hãy nhập tên của bạn");
// console.log(username);

//Cách 2
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("h1").textContent = `Welcome ${username}`;
}
