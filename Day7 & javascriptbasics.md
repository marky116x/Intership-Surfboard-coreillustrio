# Eulerian Cycle Conditions

-If all vertices have even degrees → Eulerian cycle exists.
-If exactly two vertices have odd degrees → Eulerian path exists.

If a problem satisfies Eulerian cycle condition then the particular problem is solvable.

Application: Used to solve the bridge problem.

# Class of Problems.
1. Have a solution.
2. Have multiple solutions.
3. Trial and error.
4. Have no soution.

We also revisited;

### Steps in problem solving :

1. Understanding the Problem 
 -If the problem is unclear, reinstate.

2.Break It into Smaller Subproblems

3.List the Constraints

4.Define the Operations

5.From More Constraints to Fewer Constraints

6.Come Up with a Solution.


### Computing 
Computing means - Calculating.

Input → Memory + Processing → Output

Input: Data is received

Memory & Processing: The computer stores data in memory, 
retrieves the necessary information for the process ,
 and performs required processing.

Output: The processed Output is displayed.

# How Computer's understand.
Computers are DUMB , simple machines.

They operate only on zero's and one's, 

which are electrical signals —where zero represents 0V, and one represents 5V.

Every instruction given to a computer is translated into these 0's & 1's values, and then computed.
This is the only way a computer can understand instructions.

---

# Session 2. 

 Understanding JavaScript and Asynchronised nature of JavaScript.


## Key Features of JavaScript

- **Versatile**: Handles tasks from simple calculations to complex applications.
- **Event-Driven**: Responds to user actions (e.g., clicks) in real-time.
- **Asynchronous**: Fetches data from servers without freezing the UI , Can do multiple tasks at the same time.
- **Rich Ecosystem**: Numerous libraries and frameworks for efficient development.


## Why JavaScript is Lightweight?
- **Low CPU usage** - **Minimalist syntax** - **Easy implementation**


## How to Use JavaScript
- **Inline**: Write directly in an HTML file using `<script>`.
- **External**: Link an external JavaScript file for better organization. <script src=" file_name.js">


## Output Methods:
```javascript
document.getElementById("id1").innerHTML = "hi";
console.log("Message");
document.write("Text");
window.alert("Alert!");
window.print();
window.prompt("Enter a value:");
```


## JavaScript Basics
### Variables
Declared using 
- `var` (global scope), 

- `let`, or `const` (block scope).

#### Ternary Operator

condition ? expression_if_true : expression_if_false

```javascript
let age = 60;
let res = (age > 59) ? "Adult" : "Not Adult";
```

---

## Asynchronous JavaScript
Enables non-blocking execution for better performance, responsiveness, and concurrent operations.

### Synchronous vs Asynchronous
- **Synchronous** → Tasks execute one after another (blocking).
- **Asynchronous** → Tasks run independently (non-blocking).

JavaScript is single-threaded and synchronous but can appear asynchronous via:
- **Callbacks** (Function inside another function)
- **Promises** (Avoids callback hell)
- **Async/Await** (Cleaner syntax for Promises)

### Methods
- **Using Callbacks**       - **Using Promises**

#### Callback (Function inside a function)
```javascript
function firstFunction(callback) {
  console.log("Step 1");
  callback();
}
function secondFunction() {
  console.log("Step 2");
}
firstFunction(secondFunction);
```
❌ **Callback Hell** → Too many nested callbacks lead to unreadable code.

### Promises
Invented to solve callback hell and better handle tasks.
```javascript
new Promise((resolve, reject) => { code });
.then() // Success
.catch() // Failure
.finally();
```


#### Promise States
- **Pending** → Initial state (neither fulfilled nor rejected).
- **Resolved (Fulfilled)** → Operation completed successfully.
- **Rejected** → Operation failed.

```javascript
.then() // Runs on success
.catch() // Runs on failure
.finally() // Runs regardless
```

### Async / Await
A better way to write promises, making code cleaner.


### Promises vs Async/Await
#### Promise

Example: 

```javascript

function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },3000)
  })
}

```
#### Async/Await
```javascript
async function kitchen(){

  console.log("A")
  console.log("B")
  console.log("C")

  await toppings_choice()

  console.log("D")
  console.log("E")

}

// Trigger the function

kitchen();
```
### Array manipulation. 
- to add, remove, and find items in an array

push() – Adds an element to the end of an array

pop() – Removes the last element from an array

slice() – slice(start, end) 

includes() - to check if an array contains a specific element


Conclusion:

Today, I learned about the asynchronous nature of JavaScript and different methods for handling asynchronus. 
I also practiced writing functions, using identifiers (IDs) in an HTML file, 
and linking them to a JavaScript file to display content on the screen. 

I learned about array manipulation using methods like push, pop, and slice, along with examples to understand their functionality.
