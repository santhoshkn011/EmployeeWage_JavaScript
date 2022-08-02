/*       UC3
Refactor the Code to write a function to get work hours
*/
console.log("Welcome to the employee wage programs.\n");
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;

//Using Function
function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        console.log("Employee is Present for Part Time.\nWorking hours: "+PART_TIME_HRs+"\n");
        return PART_TIME_HRs;
        break;
    case 1:
        console.log("Employee is Present for Full Time.\nWorking hours: "+FULL_TIME_HRs+"\n");
        return FULL_TIME_HRs;
        break;
    default:
        console.log("Employee is ABSENT \nWorking hours: 0\n");
        return 0;  
        break;        
    }
}

let totalEmpHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let employeeCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHrs(employeeCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HRs;
console.log("Total Hours Worked: "+totalEmpHrs+ " \nEmploye wage for the month: $" +empWage);