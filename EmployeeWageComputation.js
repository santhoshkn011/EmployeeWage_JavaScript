/*--------Employee Wage-------*/
console.log("Welcome to the employee wage programs.");

/*
Ability to check Employee is present or absent by using Random Function
*/

const IS_ABSENT = 0;
let employeeCheck = Math.floor(Math.random() * 10 ) % 2;
console.log(employeeCheck);

//Checking employee is present or absent
//Present=1    Absent=0

if(employeeCheck == IS_ABSENT){
    console.log("Employee is ABSENT ");
}else{
    console.log("Employee is PRESENT");
}