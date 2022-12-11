// Variables in java Script

// var myName = "Syed Waqas Ahmed";
// var _myAge =26;

// console.log(_myAge);

 
//Naming Practice

//var _myName = "Syed";
// //var 1myName ="Waqas";
// var _1my__Name = "Naeem"
// //var $myName = "Waqas Ghuru"

// console.log(_1my__Name)

// DataTypes in java Script

// var myName = "Waqas Naeem";
// console.log(myName);

// var myAge = 25;
// console.log(myAge);

// var iAmWaqass =false;
// console.log(iAmWaqass);

// //typeof Operator
// console.log(typeof(iAmWaqass))

//DataTypes Practice

// console.log(10+"20");
// // 9-"5"
// console.log(9-"5"); //bug
// "java"+"script"
// console.log("java "+"script"); 
// " "+" "
// console.log(" "+" "); 
// " "+0
// console.log(" "+0); 
// "waqas" - "Naeem"
// console.log("waqas" - "Naeem"); Nan//
// true + true
// console.log(true + true);
// true + false
// console.log(true + false);
// false + true
// console.log(false + true);
// false - true
// console.log(false - true);


//interview Question 1 
//D/B null vs undefined...

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof (iAmUseless))
// //2 JavaScript Bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof (iAmStandBy))

//Interview Question 2 what is Nan?


// var myPhoneNumber = 9876543210;
// var myName ="Syed Waqas Naeem";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no")
// }

// Nan Practice

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

//Expression and operators 3 section
// Assigment operators

// console.log (5+20)

// var x = 5;
// var y = 5;

// console.log(x==y)

// Airthmetic operators

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*2);

// console.log("Remainder Operator" + 27%4);

//Increment And Decrement operator

// var num = 15;  //postfix +
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// var num = 15;  //postfix -
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);



// var num = 15;  //prefix +
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

// var num = 15;  //prefix -
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);

//Comparison Operator

// var a = 30;
// var b = 10;

// console.log(a <= b);


//Logical Operators

// var a =30;
// var b = -20;

// console.log(a > b && b > -50 && b < 0 ); 

// console.log(a < b  || b > -50 || b > 0 );  
// console.log(!true)


/// String Operators

// console.log("Hellow world");

// console.log("hellow "+ "world");

// var myName = "Waqas";

// console.log(myName + " Naeem");
// console.log(myName + " Syed");

// Challenge Time


//sol 1:  Output of 3**3?....

// console.log(3**5);
// console.log(10**-1);

//sol 2: add number and string ?

// console.log(5 - "waqas")

//sol 3 write a program to swap 2 numbers ?

// var a = 5;
// var b = 10;

// //output b=5; a=10

// var c = b; //c =10
// var b= a; //b=5;
// var a=c;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// sol 4 write a program to swap 2 numbers without using 3 variable ?


// var a = 5;
// var b = 10;

// //output b=5; a=10

// a = a+b; // a=15;
// b = a-b; // b=5;
// a = a-b; // a=10

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// var num1 = 5;
// var num2 = "5";

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 === num2);


//CONTROL STATEMENT AND LOOPS

//  If raining = raincoat;
//  else no raincoat;

// var tomr = 'sunny';

// if(tomr == 'rain')
// {
//     console.log('Take a raincoat');
// }
//     else
//     {
//         console.log('No need to Take a raincoat');

//     }
    

// CHALLENGE TIME


// var year = 2020;
// debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//     if(year % 400 === 0){
//         console.log("The year " + year + " is a leap year ")
//     }else{
//         console.log("The year " + year + " is not a leap year ")

//     }

//     }else{
//         console.log("The year " + year + " is a leap year ")
//     }


// }else{
//     console.log("The year " + year + " is not a leap year ")
// }

// we have total 5 falsy values in javascript
// 0,"",undefined,null,NaN,false** is false anyway

// if (scores = 15){   
//     console.log("Yay, we won the Game");
// }else{
//     console.log("Omg, we loss the Game");
// }


// Ternory Operator

// var myAge = 20;
// console.log((myAge >= 18)? "You can vote":"You Can't vote");


//Switch Statements

// var area ="square";
// var PI = 3.142, l=5, b=4, r=3;

// if (area == "Circle"){
//     console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the area of the triangle is : " + (l*b)/2);
// }else if (area == "rectangle"){
//     console.log("the area of the rectangle is : " + (l*b));
// }else {
//     console.log ("please enter valid data");
// }

// var area ="rectangsasale";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//  case 'circle':
//  console.log("the area of the circle is : " + PI*r**2);
//   break;
//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;
//    case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;
//     default:
//     console.log ("please enter valid data");
    
// }

// While Loop

// var num=20;
// // block scope
// while (num <= 10 ){
//     console.log(num); //infinite loop
//     num++;
// }

// Do While Loop Statement

// var num=20;
// do{
//     debugger;
//     console.log(num); //infinite loop
//     num++;
// }while (num <= 10);
    

// for(var num =0; num <=10; num++){
//     debugger;
//     console.log(num);
// }


 // CHALLENGE TIME 
// JAVA SCRIPT PROGRAM TO PRINT TABLE FOR GIVEN NUMBER (8)?

// Creating table help of for loop
 
// for(var num = 0; num <=10; num++){  
//     var tableOf =8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// for(var num = 0; num <=10; num++){  
//     var tableOf =9;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// Functions
// A JavaScript function is a block of code designed to perform a particular task.

//  var a = 10;
//  var b = 20;
//  var sum= a+b;
//  console.log(sum);

// function sum(){   //Function Define
//     var a = 10,b = 50;
//     var total = a+b;
//     console.log(total);
// }

// sum();          //Function Calling


// function sum(a,b){    // Function Parameter define a,b.... 
//     var total = a+b;
//     console.log(total);
// }

// sum();       // Function Argument Calling NaN coz empty
// sum(20,30);  // Function Argument Calling 20,30..
// sum(30,30); // Function Argument Calling 30,30..


// function sum(a,b){    
//     var total = a+b;
//     console.log(total);
// }

// var funExp = sum(5,15);
//funExp; // Function Expression incomplete use return keyword to complete function expressions..

// function sum(a,b){    
//     return total = a+b;  // Complete Function
// }
// var funExp = sum(5,15);
// console.log('the sum of 2 numbers is ' + funExp);  

// ANONYMOUS FUNCTION 

// var funExp = function(a,b){    //Function Define //this code is Anonymous function start function end }
//     return total = a+b;        //Whole code is called Anonymous function expression 
// }

// var sum = funExp(15,15);
// var sum1 =funExp(20,15);
// console.log(sum > sum1);

//// STARTING MODERN JAVASCRIPT ES6

// VAR ==> FUNCTION SCOPE 
// LET AND CONST ==> BLOCK SCOPE


// var myName ="waqas naeem"
// console.log(myName);

// myName="waqas technical"
// console.log(myName);


// let myName ="waqas naeem"
// console.log(myName);

// myName="waqas technical"
// console.log(myName);


// const myName ="waqas naeem" // Const Cannot be change 
// console.log(myName);

// myName="waqas technical"
// console.log(myName);


// function biodata(){
//     let myFirstName ="waqas"
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "naeem"
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName);
// }
// biodata();

// TEMPLATE LITERALS

// for(var num = 0; num <=10; num++){  
//     var tableOf =12;
//    // console.log(tableOf + " * " + num + " = " + tableOf * num);
//    console.log(` ${tableOf} * ${num} = ${tableOf * num} `); //template literals
// }

