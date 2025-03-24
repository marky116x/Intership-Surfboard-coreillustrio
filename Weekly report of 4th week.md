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

And it works without TypeScript complaining. I had been getting a ton of errors before learning this trick - would have saved me hours of debugging last week!

We also touched on the Unicode Standard, which is what lets us use a crazy amount of characters (155,063, to be exact) in different languages and symbols. Pretty amazing how much thought has gone into making sure computers can display everything from Japanese kanji to weird emojis.

Then, we went through some core JavaScript concepts like:

- Arrays – Ordered lists of values. I found out you can mix data types in JavaScript arrays which is pretty flexible but can lead to some weird bugs if you're not careful.
- Objects – Collections of key-value pairs. These are everywhere in JavaScript and I'm still getting used to dot notation vs bracket notation.
- Functions – Blocks of code you can declare and call. We covered regular functions, arrow functions, and function expressions.

Example:

```javascript
function greet() {
  console.log("Hello, Mark!");
}
greet(); 
```

Also learned the difference between typed and untyped languages. TypeScript makes sure you stick to a type, while JavaScript just lets you do whatever. This is why TypeScript catches errors before running the code (compilation errors), whereas JavaScript lets it break while running (runtime errors). Our mentor showed us a real project where TypeScript caught like 50 potential bugs before the code even ran - pretty convincing case for using it.

Typed languages are great for big projects since they help prevent silly mistakes early on. I can see why our company uses TypeScript for everything now - when you're working with a team of 10+ devs, having that safety net is super important.

After the session, spent about an hour refactoring some of my practice code to use TypeScript properly. Still making rookie mistakes but getting better!

## Day 16
Today, we dived into classes and the `this` keyword in JavaScript. Man, `this` is confusing sometimes.

A class is basically a blueprint for creating objects that share the same properties and behaviors. It's like having a cookie cutter, and every cookie (object) comes out with the same shape but can have different details. The mentor used a car analogy that helped a lot - the class is like the car design blueprint, while instances are the actual cars being driven around.

### Class Breakdown
- Properties (What the object has) - These are like the attributes or data associated with a class instance.
- Methods (What the object does) - The functions that operate on the data and define object behavior.

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
  
  fetch(item) {
    console.log(`${this.name} fetched the ${item}!`);
    return item;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.bark(); // Output: Buddy says Woof!
myDog.fetch("ball"); // Output: Buddy fetched the ball!
```

Then we talked about shadowing—which is when a local variable inside a method has the same name as a class property, making it confusing. To avoid this, we use `this` to explicitly refer to the class property. This happened to me yesterday in my project and I couldn't figure out why my value wasn't updating - turns out I was changing a local variable instead of the class property!

```javascript
class Example {
  constructor(value) {
    this.value = value; // this.value refers to the class property
  }
  
  setValue(value) {
    // Without 'this', you'd be setting a local variable named value
    // With 'this', you're updating the class property
    this.value = value;
  }
}
```

The meaning of `this` changes depending on where it's used, which is why it can be tricky at first. We spent almost an hour just on different scenarios where `this` behaves differently:
- In global context
- In function context
- In object methods
- In event handlers
- With arrow functions

Had a mini coding test with other interns to spot all the places where `this` was being used incorrectly. I got most of them right, but definitely still have more studying to do here.

## Day 17
Got a performance review on our internship today. Some solid feedback, and of course, advice on how to do better. Definitely some areas to improve on.


Overall, the review was positive but gave me clear areas to focus on. Made a personal checklist of things to improve:
- Ask more specific questions (include expected vs. actual results)
- Take more initiative on projects & learning
- Document my code & writtengs better


## Day 18
Session 2 today—covered a few basics:

- Conditional Statements – If/else and switch statements. We explored some edge cases I hadn't thought about before, like how JavaScript handles truthy/falsy values in conditionals.
- For Loops – Classic `for (i=0; i>=10; i++)` loop. Also went through `forEach`, `map`, `filter`, and `reduce` methods for arrays, which are way more elegant for many use cases.
- JSON (JavaScript Object Notation) – The format in which data is transferred between frontend and backend. I didn't realize how ubiquitous JSON is - basically the universal language of web APIs.


```javascript
// Convert an object to JSON string
const person = {
  name: "Mark",
  age: 22,
  hobbies: ["coding", "gaming"],
  address: {
    city: "Boston",
    state: "MA"
  },
  startDate: new Date(),
  sayHello: function() { console.log("Hello!"); }
};

```


## Day 19
Today, we learned about memory allocation in programming—how variables and objects are stored in memory. Turns out, normal variables get new memory locations when reassigned, but lists and objects keep the same memory address even when modified. This explains so many weird bugs I've encountered!

Example with primitive types (numbers, strings, booleans):

```
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

Since lists are mutable, changing one reference affects all references to the same object. We did a similar demo with JavaScript objects and arrays, and the behavior is the same.

This really gave me a deeper understanding of how data is stored and how programming languages manage memory behind the scenes. It made me realize why I've been having issues with some of my code where I was unintentionally modifying objects I thought were separate copies.

We also discussed shallow vs. deep copying and when to use each:

```javascript
// Shallow copy
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];
originalArray[2][0] = 99;
console.log(shallowCopy); // [1, 2, [99, 4]] - nested array is still referenced!

// Deep copy (using JSON, though not perfect for all cases)
const deepCopy = JSON.parse(JSON.stringify(originalArray));
originalArray[2][0] = 100;
console.log(deepCopy); // [1, 2, [99, 4]] - not affected by the change
```

This session felt like it unlocked a new level of understanding for me. So many past bugs now make sense!

## Day 20
Today was a huge eye-opener.

We had a speech on responsibility and taking ownership of our lives, given by Mr. Askin, the first employee at Surfboard. He talked about why and when to use AI, and more importantly, when not to rely on it.

His point? AI is helpful, but if we depend on it too much, we stop thinking critically. Instead of always asking AI, we should read the documentation and learn things properly. AI gives quick answers, but that doesn't mean they're always right—or the best way to do something.

Honestly, I used to trust AI blindly, but after this session, I see why it's important to use it wisely—only for specific doubts that documentation doesn't answer. As he was speaking, I realized I've been using AI as a crutch rather than a tool, asking it to solve problems without trying to understand the underlying concepts.

The session wasn't just about AI, though. The bigger takeaway was about responsibility—learning, adapting, and taking charge of our own growth. Success doesn't just happen. It's about doing the work, taking action, and owning our learning.

The message was clear:

- 🚀 Stop waiting for opportunities. Be the best and make use of what you got.
- 🔥 Don't just complete tasks. **Be responsible & take ownership.** Improve our lives in a better way.


This was probably one of the most motivating sessions we've had so far. Really made me rethink how I approach learning and growth. Made a commitment to myself to start spending at least time reading documentation & learning before turning to AI for help.


__________________________________________________________________________________________


# Mentorship Report: Angular Learning Progress (Days 15-20)

## Day 15
Started getting comfortable with the core structure of Angular, including components and data binding. The component architecture is starting to click - it's like building with Lego blocks where each piece has its own appearance and behavior.

Explored **Reactive Forms**, focusing on:
- Form controls - individual input elements like text fields or checkboxes
- Form groups - collections of form controls that can be managed together
- Validation - making sure user input meets requirements before submission

The reactive approach feels much more powerful than template-driven forms, especially for complex validation scenarios. Had some trouble with validation error messages at first, but figured out how to display them conditionally.

Applied learnings to my **To-Do List project**, implementing:
- `@if` to show a message when no tasks are available (like "Your task list is empty. Add some tasks to get started!")
- `@for` to render the task list with proper styling for completed vs. pending tasks

Got stuck for about an hour trying to figure out why my form validation wasn't working, only to realize I forgot to import ReactiveFormsModule in my app.module.ts. These import errors are still tripping me up occasionally.

## Day 16
### Angular Components & Core Concepts
- Understood how components are structured (template, logic, and styles) and how they interact
- Created a custom component and used it within another component - the nested component approach is super useful for reusability
- Implemented button clicks to trigger functions with different event binding approaches
- Explored TypeScript data types for better type safety in Angular applications - interfaces are particularly useful for defining data structures

The component lifecycle hooks were a bit confusing at first (ngOnInit, ngOnChanges, etc.), but the mentor provided a helpful diagram showing when each hook is called during a component's lifecycle.

### Practice Projects
- Built a **counter app** to practice state management with increment, decrement, and reset buttons
- Experimented with different Angular events (click, input, focus, mouse events) and how to handle them
- Worked with various ways to get and set input field values using event binding and template references
- Explored different styling methods in Angular, from component-specific styles to global styles

For the counter app, added some extra features like preventing the counter from going below zero and changing the color based on the current value. Had an interesting discussion with another intern about whether this logic should be in the component class or in the template.

## Day 17
### Tailwind CSS
Started learning **Tailwind CSS**, a utility-first CSS framework that my mentor highly recommended:
- Understood Tailwind's **JIT Compiler** and how it improves performance by only generating the CSS you actually use
- Explored Tailwind's layers (**base, components, and utilities**) and how they build upon each other
- Practiced using **Flexbox and Grid** with Tailwind classes for layout - so much easier than writing custom CSS!
- Learned about the **@apply directive** to simplify CSS management by combining utility classes
- Realized Tailwind is super useful for rapid prototyping and responsive design

Initially, I was skeptical about Tailwind's approach - all those utility classes in the HTML seemed messy. But after using it for a day, I'm starting to see the benefits. Being able to style elements without switching between files is surprisingly efficient.

Created a responsive navbar using Tailwind that adjusts automatically for mobile, tablet, and desktop views. The mobile menu transition was tricky but got it working with some help.

## Day 18
### Angular Directives and Routing
- Worked with **structural directives** like `*ngIf`, `*ngFor`, and `ngSwitch` to dynamically manipulate the DOM
- Experimented with **attribute directives** like `ngClass` and `ngStyle` to conditionally apply styles
- Created a custom directive that highlights elements on hover - simple but helped solidify the concept

### Navigation Project
Created a small **navigation webpage** that includes:
- A **Header Component** (always visible) with responsive design
- **Welcome, Login, About, and Contact components** (navigated through the header)
- A **Page Not Found component** for invalid URLs with a helpful message and return button

Implemented routing using:
- `RouterModule` and RouterModule.forRoot() to define routes
- `routerLink` instead of href to prevent page reloads
- `routerOutlet` to display the active component
- `routerActive` to highlight the active navigation item

The routing part was challenging at first, especially handling child routes and route parameters. Made a mistake by placing the wildcard route ('**') before specific routes, which caused all routes to match the wildcard. Lesson learned about route order importance!

## Day 19
### Component Communication
Learned about **@Input and @Output**:
- Used **@Input** to pass data from **parent to child** components
- Used **@Output** with **EventEmitter** to send data from **child to parent** components

This pattern is super useful for keeping components modular and reusable. Built a product list where clicking on a product emits an event to the parent, which then displays details.

### API Integration
Started exploring **API integration** in Angular:
- Installed and imported **HttpClientModule** in the app module
- Understood how to make **HTTP requests** to fetch and send data using GET, POST, PUT, and DELETE
- Learned how **Observables** handle asynchronous data and why they're preferred over Promises in Angular
- Implemented error handling with catchError operator

Created a service to fetch and display random jokes from a public API. Had some initial confusion about subscribing to observables and when to use the async pipe versus explicit subscription.

### Flutter Introduction
- Installed **Flutter** development environment and ran my first "Hello World" app
- Got insights on mobile app development approach and how it differs from web development
- Learned that execution in Flutter starts from **main.dart** - similar to Angular's main.ts
- Began getting familiar with Flutter's structure and the widget-based approach

Only spent about an hour on Flutter since it was at the end of the day, but it seems interesting. The hot reload feature is amazing for quick development. Planning to explore more over the weekend.

## Day 20
Conducted a thorough review of everything I learned about Angular over the past week:
- Components: How they're structured and communicate with each other
- Directives: Both built-in and custom directives for DOM manipulation
- Forms: Template-driven vs. Reactive approaches
- Routing: Setting up navigation between components
- API calls: Using HttpClient to interact with backend services


This helped my understanding by connecting all the pieces together. 

There were definitely some challenges, but working through those issues was valuable.

Feeling much more confident with Angular now! 


