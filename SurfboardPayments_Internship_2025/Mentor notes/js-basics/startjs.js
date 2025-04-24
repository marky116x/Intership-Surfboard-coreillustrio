// let myArray = [];

// // Function to add an item to the array
// function addItem(item) {
//     myArray.push(item);
//     console.log(`${item} added!`);
// }

// // Function to remove an item from the array
// function removeItem(item) {
//     let index = myArray.indexOf(item);
//     if (index !== -1) {
//         myArray.splice(index, 1);
//         console.log(`${item} removed!`);
//     } else {
//         console.log(`${item} not found!`);
//     }
// }

// // Function to find an item in the array
// function findItem(item) {
//     if (myArray.includes(item)) {
//         console.log(`${item} found!`);
//         return true;
//     } else {
//         console.log(`${item} not found!`);
//         return false;
//     }
// }

// // Example usage
// addItem(10);
// addItem(20);
// removeItem(20);
// findItem(10);
// findItem(20);

let a = ["Apple", "Mango", "Orange"];

console.log(a.push("Watermelon"), a); 

console.log(a.pop("Apple"),a ); // 

console.log(a.includes("Mango"), a);

console.log("----");

console.log(a.includes("Mango") ? `Yes, Index: ${a.indexOf("Mango")}` : `Index: -1`);

