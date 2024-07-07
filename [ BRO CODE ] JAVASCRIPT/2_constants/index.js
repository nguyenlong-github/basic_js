// const = a variable that can't be changed

const PI = 3.14159;
let radius;//bán kính
let circumference; //đường tròn




// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius); // convert ra dạng số 
//     circumference = 2 * PI * radius;
//     console.log(circumference);
//     document.getElementById("myH3").textContent = `${circumference}`;

// }


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    Number(radius);
    circumference = 2 * PI *radius; 
    document.getElementById("myH3").textContent = `Diện tích là: ${circumference}`;
    console.log(circumference);
}





