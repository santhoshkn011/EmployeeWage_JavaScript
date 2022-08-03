/*       UC8
Store the Day and the
Daily Wage along
with the Total Wage - Use Map to store Day wise Wage - Compute the total wage using
the Map
*/
console.log("Welcome to the employee wage programs :-) ");

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        // console.log(" Employee is Present for Part Time ");
        return PART_TIME_HRs;
        break;
    case 1:
        // console.log(" Employee is Present for Full Time ");
        return FULL_TIME_HRs;
        break;
    default:
        // console.log("Employee is ABSENT ");
    return 0;    
        break;        
}
}
function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HRs;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days is :- " + totalWorkingDays+ "\nTotal Employee Hrs is:- "+totalEmpHrs+ " \nEmploye wage is :- " +empWage);
        
            // Array helper function 
            // UC7 a => Calc total wage using array for each traversal and reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage +=   dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7 a => Total Days is :- " + totalWorkingDays+ "\nTotal Employee Hrs is:- "+totalEmpHrs+ " \nEmploye wage is :- " +empWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7 a => Employee wage with reduce :- " +empDailyWageArr.reduce(totalWages, 0));

           //UC7B => show the day along with the daily wage using array map helper function

 let dailyCntr = 0;
 function mapDayWithWage(dailyWage){
     dailyCntr++;
     return dailyCntr + " = " + dailyWage;
 }
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B => Daily Wage by using Map ");
console.log(mapDayWithWageArr);

         // UC7C => show days when fulltime wage of 160 were earned
 
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}   
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C => Daily wage filter when fullTime  wage earned ");
console.log(fullDayWageArr);      

         // UC7D => Find the first occurrence when Full Time Wage was earned using find function
    
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}  
console.log("UC7D => First time fullTime wage was earned on day:- " + mapDayWithWageArr.find(findFullTimeWage));       

 // UC7E => Check if every element of full time wage is truely holding full time wage 
    
 function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}  
console.log("UC7E => Check all element have full time wage :- " + fullDayWageArr.every(isAllFullTimeWage));

                //UC7F => check if there is any part time wage
            
function isAnyParttimeWage(dailyWage){
    return dailyWage.includes("80");
}                
console.log("UC7F => check if any part time wage :- " +mapDayWithWageArr.some(isAnyParttimeWage));

                //UC7G => find the number of days the employee worked

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0 ) return numOfDays+1;
    return numOfDays;
}             
console.log("UC7G => Number of days employee worked :- " + empDailyWageArr.reduce(totalDaysWorked ,));   

                //UC8 => Map Function


console.log(empDailyWageMap);
function totalWages(totalWage , dailyWage){
    return totalWage + dailyWage;
}
console.log("UC8 => Emp Wage map total hrs " + Array.from(empDailyWageMap.values()).reduce(totalWages , 0)); 