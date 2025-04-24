// 6.
// Create a function that counts the number of vowels in a string.

const str = "mark"
const vowels = "aeiouAEIOU"

function countv() {
    let count = 0

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count

}
console.log(countv())