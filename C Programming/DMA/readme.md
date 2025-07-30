# Memory Layout in C (for a running program)

When a C program runs, its memory is divided into **five main segments**. Each has a specific purpose, and understanding these is essential for things like dynamic memory, pointers, recursion, buffer overflows, etc.

---

## 🧠 **Memory Layout Segments:**

```
+--------------------------+
|    Command-line args     | ← Optional
+--------------------------+
|        Stack             | ← Grows Down
+--------------------------+
|        Heap              | ← Grows Up
+--------------------------+
|   BSS Segment (.bss)     | ← Uninitialized global/static vars
+--------------------------+
|   Data Segment (.data)   | ← Initialized global/static vars
+--------------------------+
|   Text Segment (.text)   | ← Code (functions/instructions)
+--------------------------+
```

---

### 🔹 1. **Text Segment (Code Segment)**

* Contains the **actual compiled instructions** of the program.
* Read-only (trying to write here causes a segmentation fault).

```c
void func() { printf("hi"); }  // Stored here
```

---

### 🔹 2. **Data Segment**

* Stores **initialized global and static** variables.

```c
int x = 10;     // global or static → stored here
```

---

### 🔹 3. **BSS Segment**

* Stores **uninitialized global/static** variables.
* These are **zero-initialized** by default.

```c
static int y;   // goes to BSS (automatically 0)
```

---

### 🔹 4. **Heap**

* Memory allocated **dynamically at runtime** (via `malloc()`, `calloc()`, `realloc()`).
* Grows **upward**, toward the stack.

```c
int *p = malloc(100 * sizeof(int));  // heap
```

* Must be manually freed with `free()`.

---

### 🔹 5. **Stack**

* Stores **function calls**, **local variables**, and **function parameters**.
* Grows **downward**, toward the heap.

```c
void func() {
    int a = 5;  // local var → stack
}
```

* Automatically cleaned up after function return.

---


### 🔍 Example Code with Memory Classification

```c
#include <stdio.h>
#include <stdlib.h>

int global_var = 10;       // Data segment
static int static_var;     // BSS segment

void func() {
    int local_var = 5;     // Stack
    int *heap_ptr = malloc(sizeof(int));  // Heap
    *heap_ptr = 100;

    printf("%d\n", *heap_ptr);

    free(heap_ptr);        // Always free heap memory
}
```



## 🧠 STACK vs HEAP in C

| Feature        | **Stack**                          | **Heap**                              |
| -------------- | ---------------------------------- | ------------------------------------- |
| **Allocation** | Automatic                          | Manual (`malloc()`, `calloc()`, etc.) |
| **Lifetime**   | Temporary (ends with function)     | Until manually `free()`d              |
| **Speed**      | Very fast                          | Slower (due to system calls)          |
| **Size**       | Usually small (\~1MB to \~8MB)     | Can be large (limited by system RAM)  |
| **Growth**     | Grows **downward** (top to bottom) | Grows **upward** (bottom to top)      |
| **Usage**      | Function calls, local variables    | Dynamic memory, large data structures |
| **Cleanup**    | Done automatically                 | Must call `free()` yourself           |
| **Errors**     | Stack overflow                     | Memory leak, heap corruption          |

---

### 🔧 Stack: Short-Term, Fast Memory

#### ✅ Used for:

* Local variables
* Function parameters
* Return addresses
* Recursion

#### ⚠️ Limitation:

* Size is limited
* Can't dynamically resize arrays

```c
void test() {
    int a = 10;      // Stored on stack
}
```

---

### 🔧 Heap: Long-Term, Flexible Memory

#### ✅ Used for:

* Large or variable-size data
* Data needed **outside function scope**
* When you don’t know size at compile time

#### ⚠️ Limitation:

* Slower
* You must manage memory manually

```c
int *p = malloc(100 * sizeof(int));  // Heap allocation
p[0] = 42;
free(p);  // Always free when done
```

---

### 🧪 Example Comparison

```c
#include <stdio.h>
#include <stdlib.h>

void stack_example() {
    int arr[5];  // on stack
    for (int i = 0; i < 5; i++)
        arr[i] = i + 1;
    printf("Stack value: %d\n", arr[2]);
}

void heap_example() {
    int *arr = (int *)malloc(5 * sizeof(int));  // on heap
    for (int i = 0; i < 5; i++)
        arr[i] = i + 1;
    printf("Heap value: %d\n", arr[2]);
    free(arr);  // don't forget!
}

int main() {
    stack_example();
    heap_example();
    return 0;
}
```

---

### 🎯 Real-Life Analogy

* **Stack** = Your desk → Small, quick access, only for short-term tasks. Once you’re done, you clear it.
* **Heap** = Filing cabinet → Big, slow access, but holds large, permanent data until you clean it manually.

---




