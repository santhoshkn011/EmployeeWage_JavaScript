/*       UC3
Refactor the Code to write a function to get work hours
*/
console.log("Welcome to the employee wage programs.");
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;

//Using Function
function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        console.log("Employee is Present for Part Time.");
        return PART_TIME_HRs;
        break;
    case 1:
        console.log("Employee is Present for Full Time.");
        return FULL_TIME_HRs;
        break;
    default:
        console.log("Employee is ABSENT ");
    return 0;    
        break;        
}
}

let employeeCheck = Math.floor(Math.random()*10)%3;
let emphrs = getWorkingHrs(employeeCheck)
let empWage = emphrs * WAGE_PER_HRs;
console.log("Employee worked for Hours: "+emphrs+ " \nEmploye wage earned for a day: $" +empWage);