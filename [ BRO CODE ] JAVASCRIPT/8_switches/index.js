//Swwitches

let day = 1;
switch(day){
    case 2:
        console.log("It is 2");
        break;
    case 3:
        console.log("It is 3");
        break;
    case 4:
        console.log("It is 4");
        break;
    case 5:
        console.log("It is 5");
        break;
    case 6:
        console.log("It is 6");
        break;
    case 7:
        console.log("It is 7");
        break;
    
    case 8:
        console.log("It is 8");
        break;
    default:
        console.log("It is heaven");

}

let testScore = 0;
let grade;

switch(true){
    case testScore >= 90:
        grade = "A";
        break

    case testScore >= 80:
        grade = "B";
        break

    case testScore >= 60:
        grade = "C";
        break
    case testScore >= 50:
        grade = "D";
        break
    
    default:
        grade = "F";

}
console.log(grade);