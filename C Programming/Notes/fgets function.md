
## **What is `fgets()`?**

`fgets()` is a **standard input function** to read a **string (including spaces) from a stream** safely. It's very useful when you need to read **strings with spaces** from the user or a file.


It’s declared in:

```c
#include <stdio.h>
```

---

## 🔷 **Syntax:**

```c
char *fgets(char *str, int n, FILE *stream);
```

* `str` — pointer to a **character array** where the string will be stored.
* `n` — maximum number of characters to read (including `\0`).
* `stream` — the input stream (e.g., `stdin` for keyboard input, or a file pointer).

It reads at most `n-1` characters and appends a **null character `\0`** at the end.

---

## 🔷 **Why use `fgets()`?**

* Unlike `scanf("%s", ...)`, it **can read spaces**.
* It’s safer than `gets()` (which is dangerous and removed from C11).

---

## 🔷 **Example:**

```c
#include <stdio.h>

int main() {
    char str[50];

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    printf("You entered: %s", str);
    return 0;
}
```

**Sample Input:**

```
Hello World
```

**Sample Output:**

```
You entered: Hello World
```

---

## 🔷 **Notes:**

✅ `fgets()` **includes the newline character (`\n`) if there’s room.**
✅ You may need to remove it manually if you don’t want it.

Example of removing `\n`:

```c
str[strcspn(str, "\n")] = '\0';
```

---

## 🔷 Comparison: `scanf()` vs `fgets()`

| Feature           | `scanf("%s")` | `fgets()` |
| ----------------- | ------------- | --------- |
| Reads spaces?     | ❌ No          | ✅ Yes     |
| Safer?            | ❌ No          | ✅ Yes     |
| Adds `\0` at end? | ✅             | ✅         |

---