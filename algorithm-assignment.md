### Problem 1: Print Name Repeatedly
Algorithm:
Start
  Set Name <- "Internship"
  Initialize count <- 0
  While count < 5, do:
  Print Name
  Set Name <- "2025 " + Name
  Increment count
Stop

Output:
Internship  
2025 Internship  
2025 2025 Internship  
2025 2025 2025 Internship  
2025 2025 2025 2025 Internship  


### Problem 2: Validate Number
Algorithm:
Start
  Set numberToCheck <- [1001001001001, 12345567891, 559922932941]
  For each number in numberToCheck:
  Remove the last digit and store it as lastDigit
  Reverse the remaining digits
  Multiply every second digit by 2
  Sum all digits (splitting 2-digit numbers into individual digits)
  Reduce the sum to a single digit
  If the result equals lastDigit, print "Valid", otherwise print "Invalid"
Stop

Output:
Valid  
Invalid  
Valid  

### Problem 3: Find Maximum Number
Algorithm:
Start
    Set max <- 0
    While there are numbers in the input:
    Take number from input
    If number > max, set max <- number
    Print max
Stop

### Problem 4: Towers of Hanoi
Recursive Algorithm:
Start
    Define a function Hanoi(n, source, auxiliary, target):
    If n == 1:
    Move disk from source to target
    Else:
    Call Hanoi(n-1, source, target, auxiliary)
    Move largest disk from source to target
    Call Hanoi(n-1, auxiliary, source, target)
    Call Hanoi(64, Needle1, Needle2, Needle3)
Stop

### Problem 5: Multiply Two 4-Digit Numbers Using Addition
Algorithm:
Start
    Set result <- 0
    For each digit d1 in the first number:
    For each digit d2 in the second number:
    Add d1 to result, d2 times
    Print result
Stop

### Problem 6: Compute GCD (Euclidean Algorithm)
Algorithm:
Start
    Input a, b (non-prime numbers)
    While b != 0:
    Set temp <- b
    Set b <- a % b
    Set a <- temp
    Print a (GCD)
Stop

### Problem 7: Morse Code Decryption
Algorithm:
Start
    Replace all ; with . and : with _
    Split the Morse code into words and letters
    Convert each Morse symbol to English using a predefined dictionary
    Print the decoded message
Stop

### Problem 8: Reverse Alphabetical Sorting
Algorithm:
Start
    Input list of 5000 names
    Use sorting algorithm (e.g., QuickSort, MergeSort) with descending order
    Print sorted names
Stop

