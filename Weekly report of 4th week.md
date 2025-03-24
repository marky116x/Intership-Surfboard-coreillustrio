# Internship Journal: Days 15-20

## Day 15
Today, we went over variable declaration in TypeScript and its data types. One thing that stood out was the "!" (definite assignment assertion) in TypeScript. Basically, if you do:

```typescript
name!: string;
```

It tells TypeScript, "Hey, I promise this variable will be assigned before it's used." Later, inside a function, you can do something like:

```typescript
this.name = "Mark";
```

And it works without TypeScript complaining.

We also touched on the Unicode Standard, which is what lets us use a crazy amount of characters (155,063, to be exact) in different languages and symbols.

Then, we went through some core JavaScript concepts like:

- Arrays – Ordered lists of values.
- Objects – Collections of key-value pairs.
- Functions – Blocks of code you can declare and call.

Example:

```javascript
function greet() {
  console.log("Hello, Mark!");
}
greet(); 
```

Also learned the difference between typed and untyped languages. TypeScript makes sure you stick to a type, while JavaScript just lets you do whatever. This is why TypeScript catches errors before running the code (compilation errors), whereas JavaScript lets it break while running (runtime errors).

Typed languages are great for big projects since they help prevent silly mistakes early on.

## Day 16
Today, we dived into classes and the `this` keyword in JavaScript.

A class is basically a blueprint for creating objects that share the same properties and behaviors. It's like having a cookie cutter, and every cookie (object) comes out with the same shape but can have different details.

### Class Breakdown
- Properties (What the object has)
- Methods (What the object does)

Example:

```javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.bark(); // Output: Buddy says Woof!
```

Then we talked about shadowing—which is when a local variable inside a method has the same name as a class property, making it confusing. To avoid this, we use `this` to explicitly refer to the class property.

```javascript
class Example {
  constructor(value) {
    this.value = value; // this.value refers to the class property
  }
}
```

The meaning of `this` changes depending on where it's used, which is why it can be tricky at first.

## Day 17
Got a performance review on our internship today. Some solid feedback, and of course, advice on how to do better. Definitely some areas to improve on.

## Day 18
Session 2 today—covered a few basics:

- Conditional Statements – If/else and switch statements.
- For Loops – Classic `for (i=0; i>=10; i++)` loop.
- JSON (JavaScript Object Notation) – The format in which data is transferred between frontend and backend.

## Day 19
Today, we learned about memory allocation in programming—how variables and objects are stored in memory. Turns out, normal variables get new memory locations when reassigned, but lists and objects keep the same memory address even when modified.

Example:

```python
a = 10  
b = a  
print(b)  # Output: 10  
a = 30  # Address changes  
print(b)  # Still 10  
```

But if you're dealing with lists:

```python
list1 = [1, 2, 3]  
list2 = list1  
list1.append(4)  
print(list2)  # Output: [1, 2, 3, 4]  
```

Since lists are mutable, changing one reference affects all references to the same object.

This really gave me a deeper understanding of how data is stored and how programming languages manage memory behind the scenes.

## Day 20
Today was a huge eye-opener.

We had a speech on responsibility and taking ownership of our lives, given by Mr. Askin, the first employee at Surfboard. He talked about why and when to use AI, and more importantly, when not to rely on it.

His point? AI is helpful, but if we depend on it too much, we stop thinking critically. Instead of always asking AI, we should read the documentation and learn things properly. AI gives quick answers, but that doesn't mean they're always right—or the best way to do something.

Honestly, I used to trust AI blindly, but after this session, I see why it's important to use it wisely—only for specific doubts that documentation doesn't answer.

The session wasn't just about AI, though. The bigger takeaway was about responsibility—learning, adapting, and taking charge of our own growth. Success doesn't just happen. It's about doing the work, taking action, and owning our learning.

The message was clear:

- 🚀 Stop waiting for opportunities. Create them.
- 🔥 Don't just complete tasks. Improve.
- 💡 Take responsibility. Own your progress.

This was probably one of the most motivating sessions we've had so far. Really made me rethink how I approach learning and growth.

__________________________________________________________________________________________


# Mentorship report.

# Angular Learning Report (Days 15-20)

## Day 15
Started getting comfortable with the core structure of Angular, including components and data binding. Explored **Reactive Forms**, focusing on:
- Form controls
- Form groups
- Validation

Applied learnings to my **To-Do List project**, implementing:
- `@if` to show a message when no tasks are available
- `@for` to render the task list

## Day 16
### Angular Components & Core Concepts
- Understood how components are structured (template, logic, and styles) and how they interact
- Created a custom component and used it within another component
- Implemented button clicks to trigger functions
- Explored TypeScript data types for better type safety in Angular applications

### Practice Projects
- Built a **counter app** to practice state management with increment, decrement, and reset buttons
- Experimented with different Angular events (click, input, focus, mouse events) and how to handle them
- Worked with various ways to get and set input field values using event binding and template references
- Explored different styling methods in Angular, from component-specific styles to global styles

## Day 17
### Tailwind CSS
Started learning **Tailwind CSS**, a utility-first CSS framework:
- Understood Tailwind's **JIT Compiler** and how it improves performance
- Explored Tailwind's layers (**base, components, and utilities**)
- Practiced using **Flexbox and Grid** with Tailwind classes for layout
- Learned about the **@apply directive** to simplify CSS management
- Realized Tailwind is super useful for rapid prototyping and responsive design

## Day 18
### Angular Directives and Routing
- Worked with **structural directives** like `*ngIf`, `*ngFor`, and `ngSwitch` to dynamically manipulate the DOM
- Experimented with **attribute directives** like `ngClass` and `ngStyle`

### Navigation Project
Created a small **navigation webpage** that includes:
- A **Header Component** (always visible)
- **Welcome, Login, About, and Contact components** (navigated through the header)
- A **Page Not Found component** for invalid URLs

Implemented routing using:
- `RouterModule`
- `routerLink`
- `routerOutlet` 
- `routerActive`

## Day 19
### Component Communication
Learned about **@Input and @Output**:
- Used **@Input** to pass data from **parent to child**
- Used **@Output** with **EventEmitter** to send data from **child to parent**

### API Integration
Started exploring **API integration** in Angular:
- Installed and imported **HttpClientModule**
- Understood how to make **HTTP requests** to fetch and send data
- Learned how **Observables** handle asynchronous data

### Flutter Introduction
- Installed **Flutter** 
- Got insights on mobile app development approach
- Learned that execution in Flutter starts from **main.dart**
- Began getting familiar with Flutter's structure



## Day 20
Reviewed everything I learned in Angular, revisiting components, directives, forms, routing, and API calls to reinforce my understanding. 
Feeling more confident with Angular now!


Conducted a review of Angular concepts:
- Components
- Directives
- Forms
- Routing
- API calls

Feeling more confident with Angular now!

