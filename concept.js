//words and keywords
//words are words which dont have meaning in Javascript
//keywprds are words which have meaning in javascript such as for if else etc.


//var and const and let
//var-variable is container in which we can store value or data which can be changed
//const-constant is used to store value which can not be changed

/*var a = "dulha"
var b = "dulhan"
 console.log(a+" weds "+b)
 a = "dushman" 
console.log(a+" weds "+b)*/
//in above example value of a will change to dushman

/*const a = "dulha"
const b = "dulhan"
console.log(a+ "weds" +b)
a = "dushman"
console.log(a+ "weds" +b)*/
//in above example value will not change it will throw error

//Hoisting - variables and functions are hoisted which means there declaration is moved on the top of code
/*var a ;
console.log(a);
a = "piyush"*/
/*it will show undefined which means variable is declared but not given value*/
/*not-defined means variable is not declared or does not exist*/

//types in js
//primitive and reference
/*Reference - any value in which on copying it that passes its reference of main value is reference value
reference values shown in {},[],() 
it can contain multiple values*/

/*Primitives - this are values in which we get real values after copying 
primitives are number,string,boolean etc*/

//conditionals - if else else-if to check conditions and print results

//loop - if we want to repeat operations we use loops
//for and while these are two loops
//print 0-10
/*for(var i=0; i<11; i++){
    console.log(i);
}*/
/*var a=12;
while(a<20){
    a++;
    console.log(a);
}*/

//Functions - is code with name which can be used with its name whwnever we want
/*three purpose of functions
1)when we dont want to run code immidietly and want to run in future
2)when we want to reuse code
3)when we want to run code everytime with different data
*/
/* 
function function_name(){
    code which we want to run on calling of function
}
*/
/*
function function_name(param){
    code with operation on "args"
}
args - arguments are real values which are passed to run functions that can me single or multiple

parameters - are variables in which argument values are stored
*/ 

//Arrays - we can store single value in variable but whenever we want to store multiple values we use arrays
//array = group of values
//var arr = [0,1,2,3];
//indexing start from 0

//push pop shift unshift
/*
var arr = [1,2,3,4,5,6,7];
arr.push(8);//push is used to add value in last
arr.pop();//removes value from end
arr.unshift(8);//unshift is used to add values at starting
arr.shift();//shift is used to remove value from starting of array
//arr.splice(3);//remove values from index value given to end of array
arr.splice(3,2);//removes value from index value given at first and second value is for how much values should be removed
*/

//Objects
//object has various information about single item 
/*
1)blank object
var a = {};
*/
//2)filled obj
/*
var a = {
    age:25,
    year:1995,
    name:"piyush",
    contact:9999999999,
    meth:function(){}
}
*/
//to access items from object use obj_name.key_name in above ex a.age gives value 25.......key_name is also known as property
//we can aslo add function as value then that property is known as method in above example meth is method

//updating object properties
//a.age = 27