// RANDOM NUMBER GENERATOR



// //Math.random() sẽ cho những con số từ 0 (bao gồm cả 0) và 1(không bao gồm 1)
// // tức là nó sẽ có thể là 0, 0.1, 0.99. 0.123, vân vân nhưng không có 1
// // khi dùng Math.floor nó chỉ còn là 1 số 0 thôi
// // Giả sử: Math.random() * 8 thì sẽ cho ra các sô từ 0 -> 8(không bao gồm 8)
// //khi dùng Math.floor nó chỉ còn là 0 -> 7
// thì cái (max - min) nó sẽ ra quãng từ giá trị nhỏ nhất cho đến giả trị lớn nhất có bao nhiêu phần tử
// Rồi cộng với min để ra giá trị khởi đầu cho random
//ví dụ mi: max = 10 - min = 5 kết quả = 5;
// Math.floor(Math.random() * (max - min)) 
/*
    0 + min = 5
    1 + min = 6
    2 + min = 7
    3 + min = 8
    4 + min = 9
    sẽ random giá trị từ 5 -> 9 và thỏa mã điều kiện là
    min = 5 và max = 5;
    let random_number;
    let min = 5;
    let max = 10;
    random_number = Math.floor(Math.random() * (max - min)) + min;
    console.log(random_number);
*/

const  myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myLabel1 = document.getElementById("myLabel1");
const min = 1;
const max = 7;
let random_number;
let random_number1;

    myButton.onclick = function(){
    // random_number in range (1 -> 6)
    random_number = Math.floor(Math.random() * (max - min)) + min ;
    Number(random_number);
    myLabel.textContent = random_number;
    console.log(random_number);


}





















