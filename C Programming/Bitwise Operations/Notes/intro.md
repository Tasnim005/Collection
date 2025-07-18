Bitwise operators work **on the binary representation of integers**, bit by bit.
They are fast and low-level — used in embedded systems, cryptography, hardware control, etc.

---

## 🔷 **Bitwise Operators Table**

| Operator    | Symbol | What it does                                                                     |
| ----------- | ------ | -------------------------------------------------------------------------------- |
| AND         | `&`    | 1 if **both bits are 1**, else 0                                                 |
| OR          | `\|`   | 1 if **at least one bit is 1**, else 0                                           |
| XOR         | `^`    | 1 if **exactly one bit is 1**, else 0                                            |
| NOT         | `~`    | Flips all bits (1↔0)                                                             |
| Left Shift  | `<<`   | Shifts bits **left**, fills with 0s                                              |
| Right Shift | `>>`   | Shifts bits **right**, fills with sign bit (implementation-defined for negative) |

---

## 🔷 **Examples**

Assume:

```c
int a = 12; // 00001100
int b = 5;  // 00000101
```

| Expression | Result (binary) | Result (decimal) |    |
| ---------- | --------------- | ---------------- | -- |
| `a & b`    | 00000100        | 4                |    |
| `a ^ b`    | 00001001        | 9                |    |
| `~a`       | 11110011        | -13 (2’s comp)   |    |
| `a << 1`   | 00011000        | 24               |    |
| `a >> 1`   | 00000110        | 6                |    |

---

## 🔷 **Why use bitwise?**

✅ Fast low-level operations.
✅ Manipulate flags/bitmasks.
✅ Save memory (pack data into bits).
✅ Algorithm tricks: parity checks, swapping, etc.

---

## 🔷 Quick Notes

* They only make sense for integers (or explicitly cast values).
* Be cautious with signed vs unsigned: right shift on signed might keep the sign bit (arithmetic shift).
* NOT (`~`) works bitwise, but beware that it also flips the sign if you’re using signed types.
