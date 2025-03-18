# Understanding Classes and the `this` Keyword in JavaScript

A class is a blueprint for creating objects that share similar properties and behaviors. 
It serves as a template that defines the structure of an object. A class consists of properties (attributes) and methods (functions) that describe what the object has and what it can do.

## **Class Overview**
- **Blueprint**: A class is a blueprint for creating objects.
- **Instances**: Objects created from a class. An instance is an individual object created from a class.

## **Class Components**
### 1. Properties (Has Something)
Properties define attributes (variables) inside the class. In JavaScript classes, they are usually defined inside the constructor:

```javascript
this.propertyName = value;
```

### 2. Methods (Does Something)
Methods define behaviors of the object. They are functions that belong to a class:

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

## **Shadowing & `this` Keyword**
### What is `this`?
The `this` keyword in JavaScript refers to the current instance of the class or object. It is used to access properties and methods within the class.

### Shadowing Problem and `this`
When a parameter name or local variable inside a method has the same name as a class property, it shadows the property. This can be resolved using `this`.
- If a parameter or local variable has the same name as a class property, it can shadow the class property.
- Use `this` to refer to the current instance’s properties.

#### **Example:**
```javascript
class Example {
  constructor(value) {
    this.value = value; // `this.value` refers to the class property
  }
}
```

### Context of `this`
The meaning of `this` changes depending on where it is used:
- Inside a **class method**: `this` refers to the current instance of the class.

## **Conclusion**
Classes provide a structured way to define and create objects in JavaScript. They include properties (attributes) and methods (functions) to encapsulate data and behavior. The `this` keyword is crucial in class definitions, ensuring that instance properties are correctly accessed. Understanding these concepts helps in writing clear and efficient object-oriented code in JavaScript.

## **Key Takeaways**
- A class is a blueprint for creating objects.
- An instance is an object created from a class.
- The `constructor` initializes properties.
- Methods define behavior within a class.
- The `this` keyword refers to the current instance and prevents shadowing issues.

------------------------

# Introduction to Angular Components & Core Concepts

## 1. Understanding Components in Angular

### What is a Component?
A **component** in Angular is the basic building block of an application. It controls a section of the UI and consists of three main parts:
- **Template (HTML)** – Defines what users see.
- **Class (TypeScript)** – Handles logic and data.
- **Styles (CSS/SCSS)** – Controls the component's appearance.

To create a component, we use the Angular CLI command:
```bash
ng generate component component-name
```

This generates the necessary files, including:
- `component.ts` – Logic
- `component.html` – Template
- `component.css` – Styles
- `component.spec.ts` – Test file (optional)

To use a component, we add its selector inside another component’s template:
```html
<app-my-component></app-my-component>
```

## 2. Creating Custom Components

A **custom component** is one that we define and use across the application to keep code modular.

### Steps to Create a Custom Component:
1. **Make a folder** inside the `src/app` directory (e.g., `custom-components`).
2. **Create component files** manually or with `ng generate component`.
3. **Write the component logic** in `component.ts`.
4. **Define the template** in `component.html` and add styles if needed.
5. **Register & use** the component in other parts of the application.

## 3. Function Calls on Button Click

Handling button clicks is a fundamental part of Angular development.

### Steps to Execute a Function on Button Click:
1. **Create a button** inside the template:
   ```html
   <button (click)="myFunction()">Click Me</button>
   ```
2. **Define the function** inside the component:
   ```typescript
   myFunction() {
     console.log("Button clicked!");
   }
   ```
3. **Call a function from another function:**
   ```typescript
   parentFunction() {
     this.childFunction();
   }

   childFunction() {
     console.log("Child function called!");
   }
   ```

## 4. Defining Data Types in Angular

TypeScript enforces **data types** to ensure type safety.

### Why Define Types?
- Prevents unexpected errors.
- Helps with auto-completion in editors.
- Makes debugging easier.

### How to Define Types:
```typescript
name: string = "Angular";  // Single type  
age: number = 25;
isActive: boolean = true;
```
We can also assign **multiple types**:
```typescript
value: string | number = "Hello";
```

To define types for **function parameters**:
```typescript
greetUser(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old!`;
}
```
Call this function on a button click:
```html
<button (click)="greetUser('Mark', 25)">Greet</button>
```

## 5. Creating a Counter in Angular

A counter app demonstrates event handling and state management.

### Steps to Build a Counter:
1. **Add buttons** for increment, decrement, and reset:
   ```html
   <button (click)="increment()">+</button>
   <span>{{ count }}</span>
   <button (click)="decrement()">-</button>
   <button (click)="reset()">Reset</button>
   ```
2. **Define the counter variable and functions:**
   ```typescript
   count: number = 0;

   increment() {
     this.count++;
   }

   decrement() {
     this.count--;
   }

   reset() {
     this.count = 0;
   }
   ```
3. **Style the buttons:**
   ```css
   button {
     font-size: 18px;
     margin: 5px;
   }
   ```

## 6. Important Events in Angular

Angular provides various event types like:

- **Click event:**
  ```html
  <button (click)="handleClick()">Click Me</button>
  ```
- **Input field events:**
  ```html
  <input (input)="onInputChange($event)" (focus)="onFocus()" (blur)="onBlur()">
  ```
- **Mouse events:**
  ```html
  <div (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">Hover over me</div>
  ```
- **Checking event type:**
  ```typescript
  handleEvent(event: Event) {
    console.log(event.type);
  }
  ```

## 7. Getting and Setting Input Field Values

### Ways to Get/Set Input Values:
1. **Using event binding:**
   ```html
   <input (input)="updateValue($event)">
   ```
   ```typescript
   updateValue(event: any) {
     console.log(event.target.value);
   }
   ```
2. **Using template reference variables:**
   ```html
   <input #inputBox>
   <button (click)="getValue(inputBox.value)">Get Value</button>
   ```
   ```typescript
   getValue(value: string) {
     console.log(value);
   }
   ```

## 8. Styling in Angular

There are multiple ways to style Angular components:

1. **Component-specific styles** (default method):
   ```css
   h1 {
     color: blue;
   }
   ```
2. **Global styles** (defined in `styles.css`):
   ```css
   body {
     font-family: Arial, sans-serif;
   }
   ```
3. **Inline styles:**
   ```html
   <h1 style="color: red;">Hello</h1>
   ```
4. **Component styles inside `.ts` file:**
   ```typescript
   styles: [
     `h1 { color: green; }`
   ]
   ```
5. **Loading multiple CSS files:**
   Add in `angular.json` under `"styles"`:
   ```json
   "styles": [
     "src/styles.css",
     "src/custom-styles.css"
   ]
   ```

## Conclusion

Angular components are at the heart of building interactive web applications. By understanding how to create and use components, handle events, define data types, and style components, we can build efficient and scalable Angular applications.



