#! /usr/bin/env node

import inquirer from "inquirer"


console.log( 
                     "welcome to My ATM project")

let myBalance = 10000; //
let myPin = 12345;


 
let User = await inquirer.prompt(
    [
    {
        name: "pin",
         message: "Enter your pin",
         type: "number"

    }
    ]
);

if (User.pin === myPin) { 
console.log ( "correct pin code!!!");



let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type : "list",
            choices:[ "withdraw", "check balance", "pay bill"],        

        }
    ]

);
console.log(operationAns);



if (operationAns.operation === "withdraw" ) {
let amountAns = await inquirer.prompt(
    [
        {
            name: "Amount",
            message: "enter your Amount",
            type: "number",

        
        }
    ]
);
if(amountAns.Amount>=myBalance){ console.log( "Your balance is insufficient") } 
else { 

myBalance-= amountAns.Amount;
console.log("Your Remaining Balance is:"  + myBalance);}
 
} else if (operationAns.operation === "check balance"){
    console.log("your balance is :" + myBalance)

}else if (operationAns.operation==="pay bill"){ 

let paybillAns = await inquirer.prompt(
    [
        {
            name: "paybills",
            message: "Enter your bill amount",
            type: "numnber",

    }

    ]
);
myBalance-= paybillAns.paybills;
console.log("your bill is paid.You reamaining  balance is :" + myBalance)
}
 console.log( "Thank you ");

}
else { 
console.log( "Incorrect Pin Number");
}

