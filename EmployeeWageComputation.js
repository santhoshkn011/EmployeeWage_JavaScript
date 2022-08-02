/*    UC2
Ability to Check Employee is present or Absent And Calculate Wage
*/
console.log("Welcome to the employee wage programs.");
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;

let emphrs = 0;
let employeeCheck = Math.floor(Math.random()*10)%3;
console.log(employeeCheck);
switch(employeeCheck){
    case 0:
        console.log("Employee worked for half day.");
        emphrs = PART_TIME_HRs;
        break;
    case 1:
        console.log("Employee worked for full time.");
        emphrs = FULL_TIME_HRs;
        break;
    default:
        emphrs = 0;
        console.log("Employee is Absent.");
        break;        
}
let empWage = emphrs * WAGE_PER_HRs;
console.log("Employe wage for the day: $" +empWage);