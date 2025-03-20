## Problem 1: Print Name Repeatedly

### Algorithm:
1. **Start**
2. Set `Name <- "Internship"`
3. Initialize `count <- 0`
4. **While** `count < 5`, do:
   - Print `Name`
   - Set `Name <- "2025 " + Name`
   - Increment `count`
5. **Stop**

### Output:
```
Internship  
2025 Internship  
2025 2025 Internship  
2025 2025 2025 Internship  
2025 2025 2025 2025 Internship  
```

---

## Problem 2: Validate Number

### Algorithm:
1. **Start**
2. Set `numberToCheck <- [1001001001001, 12345567891, 559922932941]`
3. **For each** number in `numberToCheck`:
   - Remove the last digit and store it as `lastDigit`
   - Reverse the remaining digits
   - Multiply every second digit by 2
   - Sum all digits (splitting 2-digit numbers into individual digits)
   - Reduce the sum to a single digit
   - **If** the result equals `lastDigit`, print "Valid", otherwise print "Invalid"
4. **Stop**

### Output:
```
Valid  
Invalid  
Valid  
```

---

## Problem 3: Find Maximum Number

### Algorithm:
1. **Start**
2. Set `max <- 0`
3. **While** there are numbers in the input:
   - Take number from input
   - **If** number > `max`, set `max <- number`
4. Print `max`
5. **Stop**

---

## Problem 4: Towers of Hanoi

### Algorithm:
1. **Start**
2. Define a function `Hanoi(n, source, auxiliary, target)`:  
   - **If** `n == 1`:
     - Move disk from `source` to `target`
   - **Else**:
     - Call `Hanoi(n-1, source, target, auxiliary)`
     - Move largest disk from `source` to `target`
     - Call `Hanoi(n-1, auxiliary, source, target)`
3. Call `Hanoi(64, Needle1, Needle2, Needle3)`
4. **Stop**

---

## Problem 5: Multiply Two 4-Digit Numbers Using Addition

### Algorithm:
1. **Start**
2. Set `result <- 0`
3. **For each** digit `d1` in the first number:
   - **For each** digit `d2` in the second number:
     - Add `d1` to `result`, `d2` times
4. Print `result`
5. **Stop**

---

## Problem 6: Compute GCD (Euclidean Algorithm)

### Algorithm:
1. **Start**
2. Input `a, b` (non-prime numbers)
3. **While** `b != 0`:
   - Set `temp <- b`
   - Set `b <- a % b`
   - Set `a <- temp`
4. Print `a` (GCD)
5. **Stop**

---

## Problem 7: Morse Code Decryption

### Algorithm:
1. **Start**
2. Replace all `;` with `.` & `:` with `_`
3. Split the Morse code into words and letters
4. Convert each Morse symbol to English using a predefined dictionary
5. Print the decoded message
6. **Stop**

---

## Problem 8: Reverse Alphabetical Sorting

### Algorithm:
1. **Start**
2. Input list of 5000 names
3. Use sorting algorithm (e.g., QuickSort, MergeSort) with descending order
4. Print sorted names
5. **Stop**



