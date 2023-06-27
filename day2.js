//! DAY 2

//? Different for loops in js:

// Loop in js:
// - For-in Loop : Used when we want the index value along with element's values
// - forEach(): used only on Arrays or Objects
// - While Loops: We can use while loops anywhere but they should not have an infinite condition else it may cause problems
// - Do...While Loops: It will execute at least once even though there might be no iteration
// - for-of loop: This works like foreach and also returns the key as well as its corresponding value

//? Printing odd or even with for of loop in an array:
// Example program:
// for (let num of [4,6789,-345]) {
//     let result = '';
//     if ((num % 2)!= 0){
//         result += "Odd";
//     }else{
//         result += "Even"
//     };
//         console.log(`${result} ${num}`);
// }
// Output: Odd  4
// Even 6789
// Odd  -345

//? Delete in array:

// Example with delete keyword:
// var obj = ["name", "<NAME>","25"];
// delete obj[1]; // Deleting property 'age' using dot notation
// console.log("obj", obj);
// o/p: obj [ 'name', <1 empty item>, '25' ]

// Example with splice:
// var arr = ['a','b'];
// arr.splice(1,1);
// console.log(arr);

// o/p: a

//? Array creation with constructor:
// Example:
// var myArray = new Array();
// myArray[0]="John";
// console.log(myArray);
// o/p: John

// With specifying length of the array:
// var myArray = new Array(5) ;
// console.log(myArray);
// o/p: undefined
// Using push method to add elements into created empty arrays:
// myArray.push(2,3);
// console.log(myArray);
// myArray[2] = 5;
// console.log(myArray);

//? ForEach loop example:
// with arrow function inside it:
// var numbers = [1,2,3,4,5];
// var mul = (numbers, n) => {
//     var dummy = [];
//     numbers.forEach(ele => dummy.push(ele*n));
//     return dummy;
// }

// console.log(mul([1,2,3], 2));

// with map

//* 1st method:
// var mul = (numbers, n) => {
//     return numbers.map(num => num*n);
// }

//* 2nd method:
// var mul = (numbers, n) => numbers.map(num => num*n);

// console.log(mul([1,2,3], 2));

// var oddEven = (numbers) => numbers.map(num => num%2==0 ? "Even" : "Odd");

// console.log(oddEven([1,2,3,4]));

//? Filter example:

// var filteredArr = (arr) => arr.filter(ele => ele%2==0);
// console.log(filteredArr([1,2,3,4]));

//? Array copy:

// var arr = [1,2,3];
// var brr = arr;
// brr[1] = 5;
// console.log(arr, brr);

//! To overcome this we have, spread(...) operator
//  var arr = [1,2,3];
//  var brr = [...arr];
//  brr[1] = 5;
// console.log(arr, brr);

//? Destructuring

// var arr = [1,2,3,4];
// var [a, b, ...c]  = arr;
// console.log(a,b,c);

//? Objects in JS:
// - Equivalent to dict in Python
// - separate datatype in js

// var obj = {a : 20, b: 30, c: {d: 70}};
// console.log(obj['a'], obj.a, obj.c, obj.c.d);
// console.log({mark:{science: 20, maths: 50}}.mark.maths);

// obj = {
//     name : 'ram',
//     cls: 'CSE',
//     marks: {
//         eng: 50,
//         sci: 20
//     }
// }

// const printObj = (obj, sub) => `Ram's ${sub} marks is ${obj.marks[sub]}`

// console.log(printObj(obj, 'sci'));


//? Type Conversions in Js

// 1+1 => 2
// 1 + '1' => 11
// 1 + true => 2
// '1' + false => 1false 
// "1" + null => 1null

// var obj1 = {
//     id: 1,
//     name: 'AAA',
//     age: 20
// }

// var obj2 = {
//     cls: 'B',
//     DOB: '00112222'
// }

// var joined = {...obj1, ...obj2};

// console.log(joined);

//? Object Destructuring

// var {id, name : n, unknown, unknown2 = 20} = obj1;
// console.log(id, unknown, n, unknown2);
//op: 1 undefined AAA 20
// id is present , so value printed
// unknown is not present in obj1, so undefined
// to rename already present key when destructuring. (ALIASING) name --> n
// to default assign a value if the key is not present. (=) unknown (not present) --> 20

//? For...in loop

//!  Object --> key 
//!  Array --> index 

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// for (let x in obj){
//     console.log(`Key is ${x} its value is ${obj[x]}`);
// }

// op:
// Key is a its value is 10
// Key is b its value is 20
// Key is c its value is 30

// let k = obj.address
// Gives error
// let k = obj.address || {}
// Gives undefined (doesn't stop the exe of program)

//? ?. operator in JS
// This is used when we are not sure whether a obj has a key or not.
// var obj = {a:10, b:20};
// console.log(obj?.b); // prints out 20 if it exists else returns null
// This avoids stopping of exe of program

//? Manipulating objects inside array

// var arr = [
//     {
//         name: 'AAA',
//         age: 23,
//         height: 5
//     },
//     {
//         name: 'BBB',
//         age: 25,
//         height: 7
//     }
// ]

//* with for ... in loop

// for (let ind in arr){
//     arr[ind].age += 2
// }

//* with for ... of loop

// for (let obj of arr){
//     obj.age += 2
// }

//* with map

// Method 1:
// arr = arr.map(ele => {
//     ele.age += 2;
//     return ele;
// });

// Method 2:
// arr = arr.map(ele => ({...ele, age: age+2}));
// Gives Error, as age is a key, ket cannot be added with 2

// arr = arr.map(ele => ({...ele, age: ele.age+2}));

// console.log(arr);

// op:
// [
//   { name: 'AAA', age: 25, height: 5 },
//   { name: 'BBB', age: 27, height: 7 }
// ]

// var a = (function(a){

//     return (function(){
    
//     console.log(a);
    
//     a = 6;
    
//     })()
    
// })(21);

//TODO:

const users =[
    {
        id: 1,
        name: 'ram',
        age: 20
    },
    {
        id: 2,
        name: 'som',
        age: 24
    }
]

//* Write functions for the following:

// addUser(obj); 
// editUser(id, key, val);
// deleteUser(id);
// getUser(id);

//* example program for adding an user to the user array:
var addUser = (obj) => users.push(obj);

// addUser({name: 'micheal', age: 30, id: 3});
// console.log(users);
//op:
// [
//     { id: 1, name: 'ram', age: 20 },
//     { id: 2, name: 'som', age: 24 },
//     { name: 'micheal', age: 30, id: 3 }
// ]

//* example program to edit an user by getting id, key, val in the function
// call and then editing it accordingly :
// var editUser = (id, key, val) =>{
//     for (let obj of users){
//         if (obj.id === id ){
//             obj[key] = val;
//         }
//     }
// };

var editUser = (id, key, val) => {
    var ind = users.findIndex(ele => ele.id === id);
    ind != -1 ? users[ind][key] = val : console.log("Not found");
}

editUser(5,'age',35);
console.log(users);
// op:
// [ { id: 1, name: 'ram', age: 20 }, { id: 2, name: 'som', age: 24 } ]

//* example program to delete an user:
// var delUser = (id)=>{
//     var index;
//     //  find out which position is this object present at
//     for (let i in users){
//         const element = users[i];
//         if (element['id'] === id){
//             index = i;
//             break;
//         };
//     }
//     //  remove that particular item from list using splice method
//     return "deleted";
// }

var delUser = (id) => users.splice(users.findIndex(ele => ele.id === id), 1);
// This return the deleted element, but the users array has been updated.

// delUser(1);
// console.log(users);
//op:
// [ { id: 2, name: 'som', age: 24 } ]

//* example program to get a single user based on its ID
// var getUser = (id)=>{
    // for( let obj of users){
    //     if(obj.id === id) return obj;    
    // }
// }
var getUser = (id) => users.find(ele => ele.id === id);
// console.log(getUser(2));
//output:
//{ id: 2, name:'som', age: 24 }
