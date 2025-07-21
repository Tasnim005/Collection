### 🔷 Your line:

```c
unsigned char x = 0b10101100;
```

Here:

* `0b10101100` is **binary literal syntax** (where `0b` means “binary”).
* `x` is assigned the decimal value of that binary literal.

So:

```
0b10101100  (binary)  = 172 (decimal)
```

After assignment, `x` simply contains the **value 172**.
When you print or debug it, most tools or `printf("%d", x)` will just show:

```
172
```

Why? Because `x` is just a number — **the binary form is just one way of writing the same value**.
C does **not “store” the `0b` anywhere.**

---

### 🔷 Why does `0b` disappear?

✅ `0b` is just part of the *literal syntax* in your source code.
✅ Once compiled, `x` just contains the 8 bits:

```
10101100
```

which is `172` in decimal, or `0xAC` in hex.

In memory, **bits are bits** — they don’t “remember” how you wrote them.

---

### 🔷 So in short:

| You write (in code) | Compiler reads it as |
| ------------------- | -------------------- |
| `0b10101100`        | `172`                |
| `172`               | `172`                |
| `0xAC`              | `172`                |

They’re all just different ways to write the same value.

---

### 🔷 Example:

```c
#include <stdio.h>

int main() {
    unsigned char x = 0b10101100;
    printf("%d\n", x);   // prints 172
    printf("%x\n", x);   // prints ac
    return 0;
}
```

Output:

```
172
ac
```

---

### TL;DR

✅ `0b` is only a way to write binary literals in your **source code**.
✅ Once assigned, `x` just stores a numeric value — bits are bits.
✅ You decide how to display them (decimal, hex, binary) when printing or debugging.

