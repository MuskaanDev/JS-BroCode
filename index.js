console.log("I like pizza");//optional to add semicolon
console.log("Its' really good")

//window.alert("I really love pizza")

//VARIABLES

let age;
console.log(age);//undefined

age =21
console.log(age)

age+=1
console.log(age)

let fname= "Muskaan"
console.log(fname)

let student = true
console.log(student)

fname+=" Chandwani"// concatenation

console.log(fname)

document.getElementById("p1").innerHTML =   "Hello " + fname
document.getElementById("p2").innerHTML = "You are "+ age + " years old"
document.getElementById("p3").innerHTML = "Enrolled : "+ student

//Arithmetic Exp


let stu = 20
stu+=1
console.log(stu)

//Window Prompt
let username  = window.prompt("Enter your name")
console.log(username)


document.getElementById("myButton").onclick= function(){

    username = document.getElementById("myText").value
    console.log(username)
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    
}


//Type Conversion

let a = window.prompt("Enter age")//21
a+=1
console.log(typeof a)//string
console.log("Happy Birthday <3 You are ",a,"years old")//211 because input accpeted is always of string datatype
//x = Number("pizza")
//y = String(3.14)
//z = Boolean("pizza")// true, else if empty string


//Constants

const pi = 3.14159//cant be changed
let r = window.prompt("Enter the radius ");
r =  Number(r)

let c = 2*pi*r;
console.log("The circum. is: ", c)

//MATH

let x = 3.14
let y = 2.71
let z = 1.23
x = Math.round(x)
//floor rounds down
//ceil rounds up
x = Math.pow(x,3)// x to the power of 3
x = Math.sqrt(x)
x = Math.abs(x)//returns positive value
maximum  = Math.max(x,y,z)
minimum = Math.min(x,y,z)

console.log(x)

//Hypotnuse of a triangle

let aa
let bb
let cc

aa = window.prompt("Enter the first side")
aa = Number(aa)

bb = window.prompt("Enter the second side")
bb = Number(bb)


cc = Math.sqrt(Math.pow(aa,2)+Math.pow(bb,2))
console.log(c)

//Hypotnuse of trainagle via input through HTML
document.getElementById("submitbutton").onclick= function(){

    a = document.getElementById("atextbox").value
    a = Number(a)
    b = document.getElementById("btextbox").value
    b = Number(b)
    c = Math.sqrt(Math.pow(aa,2)+Math.pow(bb,2))
    
    document.getElementById("cLabel").innerHTML = "Side c is : " + c
    
}

//increase decrease number - counter program
let count =0;
document.getElementById("decrease").onclick= function(){
count-=1;
document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("reset").onclick= function(){
    count  =0
    document.getElementById("countlabel").innerHTML = 0
}
document.getElementById("increase").onclick= function(){
    count+=1
    document.getElementById("countlabel").innerHTML = count
}

//random number

let xx  =Math.floor( Math.random()*6)+1// start from zero so to make it start from 1 add 1
console.log(xx)

document.getElementById("roll").onclick = function() {
    x = Math.floor( Math.random()*6)+1
    document.getElementById("xlabel").innerHTML = x
}


//useful string properties

let u = "musk"
console.log (u.length)
let firstletter = u.charAt(0)//to check what letter at what index
u.indexOf("o")
u.trim()
u.toUpperCase()
u.toLowerCase()
let phone  = 333-131-2334
phone  = phone.replaceAll("-", "/")
u.lastIndexOf("o")

//SLICE extracts a section of a string and returns it as a new string without modifying the original string
let ff = "musk chan"
let first;
let last;
first = ff.slize(0,4)//from starting 
last = ff.slice(5)//starts from 5 till the end
first = ff.slice(0,ff.indexOf(""))//end before the space character
last = ff.slice(ff.indexOf("")+1)//start from the character after space
console.log(last)

//method chaining
let user = "musk"
let letter = user.charAt(0).toUpperCase.trim()
console.log(letter)
