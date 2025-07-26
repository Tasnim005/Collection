## 🔷 Goal:

**Clear (set to 0) a specific bit of an integer, without touching the other bits.**

---

### Example:

```c
int x = 0b1111;  // decimal 15, binary: 00001111
```

We want to clear **bit 2** (third bit from right, zero-based index).

---

### Step-by-step:

#### 🔷 1. Create a mask with only bit 2 set:

```
1 << 2  → 00000100
```

#### 🔷 2. Invert the mask:

```
~(1 << 2) → 11111011
```

#### 🔷 3. AND with `x`:

```
x = x & ~(1 << 2)
```

```
x:          0000 1111
mask:    1111 1011
----------------------
result:   0000 1011  → decimal 11
```

✅ So now bit 2 is cleared, and all other bits remain unchanged.

---

### Full code:

```c
#include <stdio.h>

int main() {
    int x = 0b1111;  // 15

    x = x & ~(1 << 2);

    printf("%d\n", x);  // prints 11

    return 0;
}
```

Output:

```
11
```

---

## 🔷 Why does this work?

* `1 << n` produces a number where only bit `n` is `1`
* `~(1 << n)` flips all bits — so bit `n` becomes `0`, all others are `1`
* `x & ~(1 << n)` clears only bit `n`

---

## 🔷 General formula:

For variable `x`, clear bit at position `n`:

```c
x = x & ~(1 << n);
```

---





# Why does this output 11? How does that make sense?**

Let’s calculate manually.

---

### 🔷 Step 1: `x = 0b1111`

Binary:

```
x = 00001111 = 15 (decimal)
```

Bits:

```
bit 3: 1
bit 2: 1
bit 1: 1
bit 0: 1
```

---

### 🔷 Step 2: we want to clear **bit 2**.

Bit index (zero-based):

```
bit 3  bit 2  bit 1  bit 0
  1      1      1      1
```

Clear bit 2 → set it to `0` → desired result:

```
bit 3: 1
bit 2: 0
bit 1: 1
bit 0: 1
```

Binary:

```
00001011
```

Decimal:

```
(1×8) + (0×4) + (1×2) + (1×1) = 8 + 2 + 1 = 11
```

✅ So yes — clearing bit 2 of `15` leaves you with `11`.
That is correct.

---

### 🔷 Why it makes sense:

What `15` looks like in binary:

```
 8  4  2  1
 1  1  1  1  = 15
```

When you clear the `4` (bit 2), you’re subtracting `4` from `15`:

```
15 - 4 = 11
```

Binary `1011` = decimal `11`.

---

### TL;DR

✅ Clearing bit `n` means removing $2^n$ from the total — and leaving all other bits as they are.
✅ Here, $15 - 4 = 11$.
