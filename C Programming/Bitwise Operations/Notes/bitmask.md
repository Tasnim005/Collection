# 🔷 **What is a bit mask?**

A **bit mask** is just an integer value where specific bits are set (1) or cleared (0) in a way that you can use it to extract, set, clear, or toggle specific bits of another integer.

You use it **with bitwise operators (`&`, `|`, `^`, `~`)**.

---

# 🔷 **Why use bit masks?**

✅ To manipulate individual bits efficiently.
✅ Save memory and encode multiple flags into one variable.
✅ Essential in embedded systems, drivers, graphics, compression.

---

# 🔷 **Examples in C**

Assume:

```c
unsigned char x = 0b10101100;
```

That’s:

```
x = 10101100
```

---

## 1️⃣ **Check if a bit is set**

Check if bit `n` (0 = LSB) is `1`:

```c
if (x & (1 << n)) {
    // bit n is 1
}
```

Example: is bit 3 set?

```c
if (x & (1 << 3)) {
    printf("Bit 3 is set\n");
}
```

---

## 2️⃣ **Set a bit**

Make sure bit `n` is `1`:

```c
x = x | (1 << n);
```

or just:

```c
x |= (1 << n);
```

---

## 3️⃣ **Clear a bit**

Force bit `n` to `0`:

```c
x = x & ~(1 << n);
```

or:

```c
x &= ~(1 << n);
```

---

## 4️⃣ **Toggle a bit**

Flip bit `n`:

```c
x = x ^ (1 << n);
```

or:

```c
x ^= (1 << n);
```

---

## 5️⃣ **Extract multiple bits (masking)**

Suppose you only care about bits 4–7:

```c
unsigned char mask = 0b11110000;

unsigned char result = x & mask;
```

This zeroes out all bits except bits 4–7.

---

# 🔷 **Real-world bit mask examples:**

✅ Storing flags:

```c
#define FLAG_READ   0x01  // 00000001
#define FLAG_WRITE  0x02  // 00000010
#define FLAG_EXEC   0x04  // 00000100

unsigned char permissions = FLAG_READ | FLAG_WRITE;

// check if write is allowed
if (permissions & FLAG_WRITE) { … }
```

✅ Packing/unpacking data:
E.g., storing two 4-bit numbers in an 8-bit byte.

✅ Setting control registers on hardware.

---


