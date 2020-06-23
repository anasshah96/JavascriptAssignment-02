// -------- Chapter # 21 - 25: STRING METHODS --------

// Task # 01 --------
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter First Name")
// var fullName = firstName + " " + lastName
// alert("Hello ! " + fullName)


// Task # 02 --------
// var a = prompt("Enter your favorite mobile phone model")
// var n = a.length;
// document.write("<h1>My favorite phone is: " + a + "<br>Length of string: " + n  + "</h1>")


// Task # 03 --------
// var a =  "Pakistani"
// var n = a.indexOf("n")
// document.write("<h1>String: " + a + "<br>Index of 'n': " + n + "</h1>")


// Task # 04 --------
// var a =  "Hello World"
// var n = a.lastIndexOf("l")
// document.write("<h1>String: " + a + "<br>Last index of 'l': " + n + "</h1>")


// Task # 05 --------
// var a =  "Pakistani"
// var b = a.charAt(3)
// document.write("<h1>String: " + a + "<br>Character at index 3: " + b + "</h1>")


// Task # 06 --------
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter First Name")
// var space = (" ")
// var fullName = firstName.concat(space, lastName)
// document.write("<h1>Hello ! " + fullName + "</h1>")


// Task # 07 --------
// var a = "Hyderabad"
// var b = a.replace("Hyder", "Islam")
// document.write("<h1>City: " + a + "<br>After replacement: " + b +  "</h1>")


// Task # 08 --------
// var a = "var message = Ali & Sami are best friends. They play cricket & football together."
// var b = a.replace(/&/g, "and")
// document.write("<h1>" + b + "</h1>")


// Task # 09 --------
// var a = "472"
// var b = (+a)
// document.write("<h1>Value: " + a + "<br>Type: String" +  "<br> Value: "  + b  + "<br>Type: Number</h1>")


// Task # 10 --------
// var a = prompt("Enter your favorite dry fruit name")
// var b = a.toUpperCase();
// document.write("<h1>User input: " + a  + "<br>Upper case: " + b + "</h1>")


// Task # 11 --------
// var a = prompt("Which programming language are you learning nowadays?")
// firstchar =a.slice(0,1)
// firstchar =firstchar.toUpperCase()
// otherchars =a.slice(1)
// otherchars =otherchars.toLowerCase()
// b = (firstchar + otherchars )
// document.write("<h1>User input: " + a  + "<br>Title case: " + b + "</h1>")


// Task # 12 --------
// var num = 35.36;
// var numstr = num.toString();
// var result = numstr.replace(".", "") 
// document.write("<h1>Number: " + num  + "<br>Result: " + result + "</h1>")


// Task # 13 --------

// ==============================================================================


// Task # 14 --------
// a = ["cake", "apple pie", "cookies", "chips", "patties"]
// b = prompt("Welcome to ABC Bakeri. What do you want to order, sir/mam?");
// c = b.toLowerCase();
// d = c.indexOf(c)
// for(i = 0; i <a.length; i++ ){
//     if(a[i] === c){
//         document.write(b + " is <b>available</b> at index " + d + " in our bakery");  
//         break;   
//     }
//     else{
//         document.write("We are sorry. " + b + " is <b> not available</b> " + d + " in our bakery");
//         break;  
//     }
// }


// Task # 15 --------

// ==============================================================================

// Task # 16 --------
// var university = "University of Karachi"
// for (var i = 0; i < university.length; i++) {
//     document.write("<h3>" + university[i] + "<br /></h3>");
//   }


// Task # 17 --------
// var a = prompt("Enter your country name")
// var b = a.slice(-1);
// document.write("<h1>User input: " + a  + "<br>Last character of input: " + b + "</h1>")


// Task # 18 --------
// var a = "The quick brown fox jumps over the lazy dog"
// var b = a.toLowerCase();
// var c = (b.match(/the/g).length);
// document.write("<h1>" + a +  "<br> There are " + c +  " occurrence(s) of word 'the'</h1>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 26 - 30: MATH METHODS --------

// Task # 01 --------
//--a 
// var a = prompt("enter any positive number")
//--b 
// b = Math.round(a)
//--c 
// c = Math.floor(a)
//--d 
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")


// Task # 02 --------
// var num = prompt("enter any number")
//--a 
// a = -Math.abs(num)
//--b 
// b = Math.round(a)
//--c 
// c = Math.floor(a)
//--d 
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")


// Task # 03 --------
// var num1 = -4
// num1abs = Math.abs(num1)
// var num2 = 5
// num2abs = Math.abs(num2)
// document.write("<h1>The absolute value of " + num1 + " is " + num1abs + "<br>The absolute value of " + num2 + " is " + num2abs +"</h1>")


// Task # 04 --------
// var a = Math.floor(Math.random() * 6)  + 1; 
// document.write("<h1>random dice value: " + a + "</h1>")


// Task # 05 --------
// var a = Math.floor(Math.random() * 2)  + 1; 
// if(a === 2){
//     document.write("<h1>" + a + "<br> random coin value: Tails </h1>");
// }
// else{
//     document.write("<h1>" + a + "<br> random coin value: Heads </h1>");
// }


// Task # 06 --------
// var a = Math.floor(Math.random() * 101); 
// document.write("<h1>random number between 1 - 100 is: " + a + "</h1>")


// Task # 07 --------
// var userWeight = prompt("enter weight in kilograms")
// b = userWeight.replace("kilograms" , " ")
// b = userWeight.replace("kgs" , " ")
// document.write("<h1>The weight of user is: " + b +  " kilograms</h1>")


// Task # 08 --------
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var userValue = prompt("Enter a number between 1 - 10")
// if(userValue == randomNumber){
//     alert("Congratulation! \nYou have the correct number")
// }
// else{
//     alert("try again")
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------

// -------- Chapter # 31 - 34: DATE METHODS --------

// Task # 01 --------
// var a = new Date();
// document.write("<h1>" + a + "</h1>")


// Task # 02 --------
// var monthArr = ["January","February","March","April","May","June","July","August", "September","October","November","December"]
// var a = new Date();
// var b = monthArr[a.getMonth()];
// document.write("<h1>Current month: " + b + "</h1>")


// Task # 03 --------
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// document.write("<h1>Today is " + b + "</h1>")


// Task # 04 --------
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// if(b === "Sat" || "Sun"){
//     document.write("<h1>It's fun day </h1>")
// }


// Task # 05 --------
// var a = new Date();
// var b = a.getDate();
// if(b >= 1 && b <=15){
//         document.write("<h1>First fifteen days of the month</h1>")
// }
// else if(b >= 16 && b <= 31){
//     document.write("<h1> Last days of the month </h1>")
// }


// Task # 06 --------
// var a = new Date()
// var b = a.getTime()
// var c = b/1000*60
// document.write("<h1>Current date: " + a + "<br> Elapsed miliseconds since January 1, 1970: " + b + "<br> Elapsed minutes since January 1, 1970: " + c + "</h1>")


// Task # 07 --------
// var a = new Date();
// var b = a.getHours();
// if(b >= 00 && b <=11){
//         document.write("<h1>Its AM</h1>")
// }
// else if(b >= 12 && b <= 23){
//     document.write("<h1>Its PM</h1>")
// }


// Task # 08 --------
// var a = new Date();
// a.setMonth(11, 31);
// document.write("<h1>" + a + "</h1>")


// Task # 09 --------
// var ramadanstartDate = new Date("June 18, 2015")
// var miliseconds = ramadanstartDate.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var getdiff = todaymili - miliseconds
// var convertToDays = getdiff/(1000*60*60*24)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>" + accurateVal + " days have passed since 1st Ramadan, 2015</h1>")


// Task # 10 --------



// Task # 11 --------
// var currentDate = new Date();
// var a = new Date();
// a.setHours(a.getHours() - 1);
// document.write("Current date: " + currentDate  + "<br> <br> 1 hour ago, it was: " + a )


// Task # 12 --------
// var userInput = prompt("Enter your date of birth","June 18, 1996")
// var userDob = new Date(userInput)
// var a = userDob.getTime()
// var b = new Date()
// var c = b.getTime()
// var getdiff = c - a
// var userYear = userInput.slice(-4);
// var convertToDays = getdiff/(1000*60*60*24*30*12)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>Your age is " + accurateVal + "<br>Your birth year is "  +  userYear +"</h1>")


// Task # 13 --------


// Task # 14 --------
// var customerName = "ABC Customer"
// var month = "February"
// var numOfUnit = 410
// var chargPerUnit = 16
// var netAmountDueDate = numOfUnit * chargPerUnit
// var latePaySurcharge = 350
// var grossAmountAfterDueDate = netAmountDueDate + latePaySurcharge
// document.write("<h1>K-Electric Bill</h1>")
// document.write("<p>Customer Name: " + customerName  + "<br>Current Month: " + month   +  "Number of units: " + numOfUnit  + "<br>Charges per unit: " + chargPerUnit  + "<br><br>Net Amount Payable (within Due Date): " + netAmountDueDate  +  "<br>Late Payment Surcharge: " + latePaySurcharge  + "<br>Gross Amount Payable (after Due Date): " + grossAmountAfterDueDate  +  "</p>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 35 - 38: FUNCTION --------

// Task # 01 --------
// function currentDT(){
//     document.write(new Date)
// }
// currentDT()


// Task # 02 --------
// function greet(firstName,lastName){
//     alert("Hello! " + firstName + " " + lastName )
// } 
// greet("Amir","Khan")


// Task # 03 --------
// function sumOfnumbers(fisrtNum, secondNum){
//     fisrtNum = +prompt("Enter first Value")
//     secondNum = +prompt("Enter second Value")
//     alert(fisrtNum + secondNum)
// }
// sumOfnumbers()


// Task # 04 --------
// function calculateVaules(num1,num2,operator){
//     num1 = +prompt("Enter first Value")
//     num2 = +prompt("Enter second Value")
//     operator = prompt("Enter operator")
//     result = num1 + operator + num2
//     alert("Answer is " + eval(result))
// }
// calculateVaules()


// Task # 05 --------
// function squreNum(num){
//     alert(num * num)
// }
// squreNum(5)


// Task # 06 --------
// function factorial(value) {
//     return (value != 1) ? value * factorial(value - 1) : 1;
//   }
//   alert( factorial(8) )

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------





