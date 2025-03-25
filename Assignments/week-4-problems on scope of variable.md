Problem 1:
```dart
void main1() {
  if (true) {
    int number = 42;
  }
  print(number);
}
main1();
```
**Output:** Error
- `number` is declared inside the if block and cannot be accessed outside it.

---

Problem 2:
```dart
void main2() {
  int value;
  if (false) {
    value = 100;
  }
  print(value);
}
main2();
```
**Output:** Error

---

Problem 3:
```dart
int count = 5;
void main3() {
  int count = 10;
  print(count);
}
main3();
```
**Output:** 10
- Local variable `count` is accessed first, then global variable.

---

Problem 4:
```dart
void main4() {
  for (int i = 0; i < 3; i++) {
    String message = "Loop $i";
    print(message);
  }
  print(message);
}
main4();
```
**Output:** Error
- `message` is declared inside the for loop and cannot be accessed outside it.

---

Problem 5:
```dart
void processNumber(int num) {
  num = num + 1;
}
void main5() {
  print(num);
  int x = 5;
  processNumber(x);
  print(x);
}
main5();
```
**Output:** Error
1. `num` is not defined before `print(num);`
2. `processNumber(x);` causes an error because `num` is not returned.

---

Problem 6:
```dart
void main6() {
  bool isActive = false;
  if (true) {
    bool isActive = true;
    print(isActive);
  }
  print(isActive);
}
main6();
```
**Output:**
```
true
false
```
- Local variable `isActive` in the if block is accessed first, then the outer variable.

---

Problem 7:
```dart
void main7() {
  int result = 0;
  {
    int result = 50;
    print(result);
  }
  print(result);
}
main7();
```
**Output:**
```
50
0
```
- Local variable `result` in `{}` block is accessed first, then the outer variable.

---

Problem 8:
```dart
void main8() {
  if (true) {
    String name = "Alice";
  } else {
    String name = "Bob";
  }
  print(name);
}
main8();
```
**Output:** Error
- `name` is declared inside if-else and is not accessible outside.

---

Problem 9:
```dart
double price = 9.99;
void applyDiscount() {
  price = price * 0.9;
}
void main9() {
  double price = 20.00;
  applyDiscount();
  print(price);
}
main9();
```
**Output:** 20.00
- Local `price` in `main9()` is unaffected by `applyDiscount()`.

---

Problem 10:
```dart
void main10() {
  while (true) {
    int counter = 0;
    counter++;
    print(counter);
    break;
  }
  print(counter);
}
main10();
```
**Output:** Error
- `counter` cannot be accessed outside the while loop.

---

Problem 11:
```dart
void updateValue(int val) {
  val = 50;
}
void main11() {
  int x = 10;
  if (x > 0) {
    updateValue(x);
    int y = x + 5;
  }
  print(y);
}
main11();
```
**Output:** Error

---

Problem 12:
```dart
String status = "Idle";
void toggleStatus() {
  String status = "Active";
}
void main12() {
  toggleStatus();
  print(status);
}
main12();
```
**Output:** Idle
- Local `status` inside `toggleStatus()` does not affect the global `status`.

---

Problem 13:
```dart
void main13() {
  bool flag = false;
  void innerFunc() {
    flag = true;
    int count = 10;
  }
  innerFunc();
  print(count);
}
main13();
```
**Output:** Error
- `count` cannot be accessed outside `innerFunc()`.

---

Problem 14:
```dart
void compute(int num) {
  if (num > 0) {
    String message = "Positive";
  }
}
void main14() {
  compute(5);
  print(message);
}
main14();
```
**Output:** Error
- `message` cannot be accessed outside `compute()`.

---

Problem 15:
```dart
int score = 100;
void resetScore() {
  score = 0;
}
void adjustScore() {
  int score = 50;
  resetScore();
}
void main15() {
  adjustScore();
  print(score);
}
main15();
```
**Output:** 0

---

Problem 16:
```dart
void main16() {
  double average = 0.0;
  {
    int count = 3;
    {
      double total = 15.0;
      average = total / count;
    }
    print(total);
  }
  print(average);
}
```
**Output:** Error
- `total` is not in scope outside its block.

---

Problem 17:
```dart
void increment(int value) {
  value += 1;
}
void main17() {
  int sum = 0;
  for (int i = 0; i < 3; i++) {
    increment(i);
    if (i == 2) {
      bool done = true;
      sum += i;
    }
  }
  print(done);
}
main17();
```
**Output:** Error
- `done` is declared inside the if block and is not accessible outside.

