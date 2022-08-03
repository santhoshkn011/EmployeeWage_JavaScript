/*       UC6
Store the Daily Wage along with the Total Wage - Save in an Array the Daily Wage
*/
console.log("Welcome to the employee wage programs.\n");
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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
//function to calculate daily wage
function DailyWage(empHrs){
    return empHrs * WAGE_PER_HRs;
}
let totalEmpHrs = 0;
let empHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array(); //storing daily wage in an array
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
totalWorkingDays++;
let employeeCheck = Math.floor(Math.random()*10)%3;
totalEmpHrs += getWorkingHrs(employeeCheck);
empHrs = getWorkingHrs(employeeCheck); //storing the daily wage in empHrs
empDailyWageArr.push(DailyWage(empHrs)); //pushing the daily wage into the array
}
let empWage = DailyWage(totalEmpHrs);
console.log("Daily Wages in array: ");
console.log(empDailyWageArr);
console.log("Total Days Worked: " + totalWorkingDays + "\nTotal Hours Worked: "+totalEmpHrs+ " \nEmploye wage for the month: $" +empWage);
