//Arrow functions ES6

class myclass {
    constructor(name){
        this.name = name
    }

     printArrow() { setTimeout(() => {
    console.log("Arrow " + this.name)
}, 100);
}
// let myclass = {name: "Joe", Age: 500}

 printFunction() { setTimeout(function() {
     console.log("Function " + this.name)
    
 }, 100); 
}

}



let myNewClass = new myclass("Joe")
// myNewClass.printArrow()
// myNewClass.printFunction()

// console.log(this.name)

//END

//Arrow functions again

let myClass2 = {name:"Joe", Age:5000, myArrowFunction: () => this, myNormalFunction: function() { return this}};

// console.log(myClass2.myArrowFunction())
// console.log(myClass2.myNormalFunction())

//you can call demo() on any function and it'll take the this from where it is declared


this.b=2

function demo(){
    return this
}


demo2 = () => this

function a(){
    this.b=1
    demo()
}
// a()

// this from different functions

// function stopwatch(){
// this.time = 0;

// setInterval( ()=>
//     {
//         this.time++
//         console.log(this.time)
//     }, 100);

// }

// let timer = new stopwatch()

//for loop with objects

function potato(){
    this.c = {name:"Joe"}
    for(let i = 0; i<10; i++){
        console.log(demo2().c)
    }
}
// potato()

const arr = ['a','b','c','d','e']

//iterator

function myIt(x){
    return{
        [Symbol.iterator]() {
            let n = 0
            return {
                next(){
                    
                    if(n<=x)
                    return {
                        value:n++,
                        done: false
                    }

                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}


// for(const i of myIt(5)){
//     console.log(i)
// }

let num = [1,2,3]

// console.log(num.reverse())


// check for the longest substring without repeat 

/* 
* @param {string} s
* @return {number}
*/

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    
}

let t = { ab : "AB" , bc : "BC"}

console.log(Object.keys(t))