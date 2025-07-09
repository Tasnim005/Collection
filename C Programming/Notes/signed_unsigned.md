## ✅ **What are `signed` and `unsigned` in C?**

Every integer variable in C actually has a *sign*.
It determines whether the variable can store **negative values** or only **non-negative values**.

---

### 🔷 1. **Signed integers**

By default, integer types (`int`, `short`, `long`, `char`) in C are **signed**, meaning:

* They can store both positive and negative numbers.

Example:

```c
int x = -10;
int y = 20;
```

On most systems:

* `int` range (32 bits) = **−2,147,483,648 to +2,147,483,647**

You can also write explicitly:

```c
signed int x = -10;
```

But just `int` is enough — it’s signed by default.

---

### 🔷 2. **Unsigned integers**

If you declare a variable as `unsigned`, it **cannot be negative** — it only stores 0 and positive numbers, but its **maximum range doubles**.

Example:

```c
unsigned int x = 10;
```

On most systems:

* `unsigned int` range (32 bits) = **0 to 4,294,967,295**

If you try:

```c
unsigned int x = -5; 
```

This produces **unexpected behavior**, because it wraps around (underflow).

---

### 🔷 Why use `unsigned`?

✅ When you know the variable **can never be negative**, such as:

* Array indices
* Sizes (`size_t`)
* Counters
* Bit manipulation

This gives you a wider positive range.

---

## 🔷 Summary Table:

| Type           | Can store               | Typical 32-bit range             |
| -------------- | ----------------------- | -------------------------------- |
| `signed int`   | Positive & negative     | −2,147,483,648 to +2,147,483,647 |
| `unsigned int` | Only positive (incl. 0) | 0 to 4,294,967,295               |

---

### 🔷 Example program:

```c
#include <stdio.h>

int main() {
    signed int a = -10;
    unsigned int b = 10;

    printf("Signed: %d\n", a);
    printf("Unsigned: %u\n", b);

    return 0;
}
```

Output:

```
Signed: -10
Unsigned: 10
```

---