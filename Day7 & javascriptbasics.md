# Class of Problems.
1. Have a solution.
2. Have multiple solutions.
3. Trial and error.
4. Have no soution.

We also reviewed;

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

Memory & Processing: The computer stores data in memory, retrieves the necessary information for the process , and performs required processing.

Output: The processed Output is displayed.


---


## The `console.log()` Method
The `console.log()` method is used to print messages to the browser’s developer console. 

## Key Features of JavaScript
- **Client-Side Scripting**: Runs in the browser, ensuring faster response times without server communication.
- **Versatile**: Handles tasks from simple calculations to complex applications.
- **Event-Driven**: Responds to user actions (e.g., clicks) in real-time.
- **Asynchronous**: Fetches data from servers without freezing the UI.
- **Rich Ecosystem**: Numerous libraries and frameworks for efficient development.

## Client-Side & Server-Side Nature
- **Client-Side**: Controls the browser DOM, manipulates HTML, and handles user interactions.
- **Server-Side**: Interacts with databases, manipulates files, and generates responses.

## Why JavaScript is Lightweight?
- **Low CPU usage**
- **Minimalist syntax**
- **Easy implementation**

## JavaScript: Compiled & Interpreted
### JIT Compilation (Just-In-Time)
- Interprets code line-by-line for quick startup.
- Detects frequently used ("hot") code.
- Compiles hot code into optimized machine code.
- Executes compiled code for better performance.

## How to Use JavaScript
- **Inline**: Write directly in an HTML file using `<script>`.
- **External**: Link an external JavaScript file for better organization.

---

## JavaScript Values
### Fixed Values (Literals):
```javascript
let num = 23;
let str = "Mark";
```
### Variable Values:
```javascript
let Name = "Apple";
```
- **Local variables**: Declared inside a block or function.
- **Global variables**: Declared outside a function or with a `window` object.

## Output Methods:
```javascript
document.getElementById("id1").innerHTML = "hi";
console.log("Message");
document.write("Text");
window.alert("Alert!");
window.print();
window.prompt("Enter a value:");
```

## Comments
- **Single-line**: `// This is a comment`
- **Multi-line**:
```javascript
/* This is 
a multi-line comment */
```

## JavaScript Basics
### Variables
Declared using `var` (global scope), `let`, or `const` (block scope).

### Data Types
- **Primitive**: Number, String, Boolean, Null, Undefined, Symbol, BigInt
- **Non-primitive**: Object, Array, Function

### Operators
#### Arithmetic Operators
```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```
#### Increment and Decrement
```javascript
let x = 5;
console.log(x++); // 5 (post-increment)
console.log(++x); // 7 (pre-increment)
```
#### Assignment Operators
```javascript
a = b;
a += b;
a -= b;
```
#### Comparison Operators
```javascript
a == b;  // Equality (value)
a === b; // Strict Equality (value + type)
a != b;  // Inequality
a !== b; // Strict Inequality
a > b, a >= b, a < b, a <= b;
```
#### Logical Operators
```javascript
&& (AND) → true if both conditions are true
|| (OR) → true if at least one condition is true
! (NOT) → inverts boolean value
```
#### Bitwise Operators
Performed on 32-bit integers (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`).

#### Ternary Operator
```javascript
let age = 60;
let res = (age > 59) ? "Adult" : "Not Adult";
```

## Control Statements
### Conditional Statements
```javascript
if (condition) { ... }
else if (condition) { ... }
else { ... }
```
```javascript
switch (value) {
  case 1: console.log("One"); break;
  case 2: console.log("Two"); break;
  default: console.log("Other");
}
```
### Loop Control
- **Break** → Exits loop/switch
- **Continue** → Skips current iteration
- **Return** → Exits function and returns a value

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
- **Using Callbacks**
- **Using Promises**

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

### Promise Chaining
```javascript
fetch("url")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
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
```javascript
async function fetchData() {
  try {
    let response = await fetch("url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Promises vs Async/Await
#### Promise
```javascript
function order() {
  return new Promise((resolve, reject) => {
    // Write code here
  });
}
```
#### Async/Await
```javascript
async function order() {
  try {
    await abc;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

🚀 This covers JavaScript essentials in a short and clear way!
