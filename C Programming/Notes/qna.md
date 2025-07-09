## Why do we write `return 0;` at the end of `main()` in C?

* The `main()` function is the **entry point** of a C program.
* Its return type is `int`, meaning it **must return an integer value**.
* This returned integer is sent back to the **operating system** (OS) when the program finishes.

---

### What does `return 0;` mean?

* `return 0;` means the program **exited successfully** without errors.
* By convention, **0** signals success.
* Any **non-zero** value usually signals some kind of error or abnormal termination.

---

### What happens if you omit `return 0;`?

* In **older C standards (before C99)**, omitting `return 0;` causes **undefined behavior**.
* Since **C99**, if `main()` reaches its end without a return statement, it's equivalent to `return 0;` — the compiler assumes success.
* Still, it's good practice to write it explicitly for clarity and compatibility.

---

### Summary:

| Statement                    | Meaning                               |
| ---------------------------- | ------------------------------------- |
| `return 0;`                  | Program ended successfully            |
| `return 1;`                  | Program ended with an error (example) |
| No return in `main()` (C99+) | Treated as `return 0;`                |

---


