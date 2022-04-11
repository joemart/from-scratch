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
//  aaaa
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



/**
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 
 */
 var convert = function(s, numRows) {
    var length = s.length;
    if (numRows == 1) return s;
    var cycleLen = numRows * 2 - 2;
    var aZig = [];
    for (var i = 0; i < numRows; i++){
        for (var j = 0; j + i < length; j=j+cycleLen){
            // console.log(s.charAt(j + i))
            console.log(aZig)
            aZig.push(s.charAt(j + i));
            if (i!=0 && i!=numRows -1 && j + cycleLen - i < length){
                aZig.push(s.charAt(j + cycleLen - i));
            }
        }
    }
//  console.log(aZig)
    return aZig.join("");
};

let s = "PAYPALISHIRING"
let numRows = 3
// console.log(convert(s,numRows))

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert2 = function(s, numRows) {
    let arr = [],
        cycle = 2*numRows - 2
    
    if(s.length == numRows || numRows == 1) return s

        for(let i = 0; i<numRows; i++)
            for(let j=i; j<s.length; j+= cycle){
                    arr.push(s[j])
                    const k = j + cycle - (2 * i)
                    console.log(arr)
                    if(i!== 0 && i!== numRows-1 && k<s.length)
                            arr.push(s[k])
                }

    return arr.join('')
};

// console.log(convert2(s, numRows))

var reverse = function(x){
    
    let sign = Math.sign(x)
    let arr = []

    if (x > Math.pow(2,31) -1 || x < Math.pow(-2,31)) return 0

    for(let temp = Math.abs(x); temp > 0; temp = Math.trunc(temp / 10))
    {
        console.log(temp)
        arr.push(temp %10)
    }

    console.log(arr)
    let temp = arr.shift(), result = 0
    // for( temp = arr.shift(); arr.length !== 0; temp = arr.shift())
    // {
        
    //     result = result + (temp * ( Math.pow(10,arr.length)))
    // }

    while(arr.length !== 0){

        result = result + (temp * ( Math.pow(10,arr.length)))

        temp = arr.shift()
    }

    console.log(result * sign)

    return result * sign
}

// reverse(123)


var reverse2 = function(x){

   


    let reverse = 0
  for(let pop; Math.trunc(x)!==0; reverse = (reverse * 10) + pop){
    
    pop = Math.trunc(x%10)
    Math.trunc(x/=10)
    // console.log(reverse)
  }
    if (reverse > Math.pow(2,31) -1 || reverse < Math.pow(-2,31)) return 0
  return reverse
}
 
console.log(reverse2(-2147483648) )

