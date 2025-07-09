Programming languages are typically categorized into **three main levels** based on their closeness to machine code and human readability:

---

### 1. **Low-Level Languages**

These are closest to the hardware and offer minimal abstraction from a computer’s instruction set architecture (ISA).

* **Machine Language (Binary Code)**

  * The lowest level (0s and 1s) understood directly by the CPU.
  * Extremely fast and efficient, but not human-readable.

* **Assembly Language**

  * Uses mnemonics (like `MOV`, `ADD`, `SUB`) instead of binary.
  * Requires an **assembler** to convert into machine code.
  * Still hardware-specific and not portable across systems.

---

### 2. **Middle-Level Languages**

These provide a balance between hardware control and programming abstraction. Sometimes called **"system programming languages"**.

* **C Language** is the most common example.

  * Offers low-level memory access (like pointers) and high-level features (functions, loops).
  * Efficient and portable across platforms with minimal changes.
  * Ideal for writing operating systems, embedded systems, etc.

---

### 3. **High-Level Languages**

Designed to be easy for humans to read and write. They abstract away hardware details and automate many low-level operations.

Examples include:

* **Python**
* **Java**
* **JavaScript**
* **C++**
* **Ruby**
* **Swift**

**Features:**

* Portable across platforms.
* Easy syntax and semantics.
* Comes with extensive libraries and tools.

---

### Bonus: **Very High-Level / Domain-Specific Languages (DSLs)**

These are often specialized for particular tasks.

Examples:

* **SQL** (for databases)
* **HTML/CSS** (for web content)
* **MATLAB** (for numerical computing)
* **R** (for statistics)

---

**Summary Table:**

| Level           | Example           | Hardware Control | Readability | Speed     |
| --------------- | ----------------- | ---------------- | ----------- | --------- |
| Low-Level       | Machine, Assembly | High             | Very Low    | Very Fast |
| Middle-Level    | C                 | Moderate         | Moderate    | Fast      |
| High-Level      | Python, Java      | Low              | High        | Slower    |
| Very High-Level | SQL, HTML         | Very Low         | Very High   | Depends   |



---

### ✅ **Why C is a Structured Language:**

C is considered a **structured programming language** because it supports the principles of **structured programming**, which aim to improve clarity, quality, and development time of software.

Key features that make C structured:

1. **Modular code using functions** – Code is divided into small, reusable blocks (functions) rather than one long sequence.
2. **Control structures** – C provides structured control flow constructs:

   * `if`, `else`
   * `while`, `for`, `do-while`
   * `switch-case`
   * `break`, `continue`, `return`
3. **Top-down design** – You can design programs in a hierarchical manner, solving bigger problems by breaking them into smaller tasks.

---

### ⚠️ **Why C is *not strictly* a Block-Structured Language:**

**Block-structured languages** (like Pascal, Ada, or Algol) have strict rules about:

* Scope visibility tied directly to **nested blocks**
* Encapsulation of variables within those blocks

C **has blocks** (`{ ... }`), but:

* It allows variables to be declared inside any block, yes, but:
* **C does not support nested function definitions** (i.e., you can’t define one function inside another), which is allowed in fully block-structured languages.
* **Scope resolution** in C is simpler and more linear—variables declared in an outer block are accessible in inner blocks unless shadowed.

---

### 🔎 In Summary:

| Criteria                         | Structured Language | Block-Structured Language |
| -------------------------------- | ------------------- | ------------------------- |
| Uses functions/modules           | ✅ Yes               | ✅ Yes                     |
| Uses control flow structures     | ✅ Yes               | ✅ Yes                     |
| Code readability & modularity    | ✅ Yes               | ✅ Yes                     |
| Nested function definitions      | ❌ Not allowed       | ✅ Allowed                 |
| Strict block-based scoping rules | ❌ Loosely followed  | ✅ Strictly followed       |

So, **C is structured**, because it allows organized, modular, and logical program design using functions and control structures. But it's **not fully block-structured**, because it lacks features like **nested functions** and **rigid scope enforcement** that define classic block-structured languages.

---

# Data Types
In **C programming**, data types define the type of data a variable can hold. They are essential for efficient memory usage and proper operations. Here's a complete breakdown:

---

## 🔹 **1. Primary (Basic) Data Types**

| Type      | Keyword  | Size (Typical) | Description                        |
| --------- | -------- | -------------- | ---------------------------------- |
| Integer   | `int`    | 2 or 4 bytes   | Whole numbers (positive/negative)  |
| Character | `char`   | 1 byte         | Single character (ASCII)           |
| Floating  | `float`  | 4 bytes        | Decimal numbers (single precision) |
| Double    | `double` | 8 bytes        | Decimal numbers (double precision) |
| Void      | `void`   | -              | No value (used for functions)      |

---

## 🔹 **2. Derived Data Types**

Derived from basic types.

* **Arrays**
  e.g., `int arr[10];`

* **Pointers**
  e.g., `int *ptr;`

* **Functions**
  e.g., `int sum(int a, int b);`

* **Structures (`struct`)**
  e.g., `struct student { int id; char name[20]; };`

* **Unions (`union`)**
  e.g., `union value { int i; float f; };`

---

## 🔹 **3. Enumeration (enum)**

Used to assign names to integral constants for better code readability.

```c
enum week { SUN, MON, TUE, WED, THU, FRI, SAT };
```

---

## 🔹 **4. Type Modifiers**

You can **modify** the basic types with these:

| Modifier   | Description                           |
| ---------- | ------------------------------------- |
| `signed`   | Can hold negative and positive values |
| `unsigned` | Can hold only positive values         |
| `short`    | Uses less memory (usually 2 bytes)    |
| `long`     | Uses more memory (e.g., `long int`)   |

### Example Combinations:

| Declaration     | Meaning                      |
| --------------- | ---------------------------- |
| `unsigned int`  | Only positive integers       |
| `long int`      | Larger integer range         |
| `short int`     | Smaller integer range        |
| `unsigned char` | 0 to 255                     |
| `long double`   | More precision than `double` |

---

## 🔹 **Common Sizes (May vary by system/compiler)**

| Data Type  | Size (bytes) | Range (approximate)              |
| ---------- | ------------ | -------------------------------- |
| `char`     | 1            | -128 to 127 / 0 to 255           |
| `int`      | 4            | -2,147,483,648 to +2,147,483,647 |
| `float`    | 4            | ±3.4 × 10⁻³⁸ to 3.4 × 10³⁸       |
| `double`   | 8            | ±1.7 × 10⁻³⁰⁸ to 1.7 × 10³⁰⁸     |
| `long int` | 4 or 8       | Larger than `int`                |

---

Would you like a diagram or cheat sheet for these types?

