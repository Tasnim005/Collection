**Dynamic Memory Allocation in C** is the process of allocating memory during **runtime** using pointers. This is in contrast to **static memory allocation**, where the size of memory is fixed at compile time. Dynamic memory allocation allows more flexible and efficient memory use, especially when the size of data structures (like arrays) is not known beforehand.

---

### 🔷 Key Functions in `<stdlib.h>`:

| Function    | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `malloc()`  | Allocates a block of memory                                    |
| `calloc()`  | Allocates memory for an array and initializes to zero          |
| `realloc()` | Reallocates memory (change size of previously allocated block) |
| `free()`    | Frees the previously allocated memory                          |

---

### 🔹 1. `malloc()` (Memory Allocation)

Allocates a specified number of bytes, returns a pointer of type `void*`.

```c
int *ptr;
ptr = (int *) malloc(5 * sizeof(int));  // allocates space for 5 integers
```

⚠️ Memory is **not initialized** — it contains garbage values.

---

### 🔹 2. `calloc()` (Contiguous Allocation)

Same as `malloc()` but initializes memory to **zero**.

```c
int *ptr;
ptr = (int *) calloc(5, sizeof(int));  // allocates and zero-initializes 5 integers
```

---

### 🔹 3. `realloc()` (Re-allocation)

Changes the size of a previously allocated block.

```c
ptr = (int *) realloc(ptr, 10 * sizeof(int));  // changes size to hold 10 integers
```

If successful, old data is preserved.

---

### 🔹 4. `free()` (Free Memory)

Frees up the allocated memory.

```c
free(ptr);
```

After freeing, the pointer becomes a **dangling pointer**. It should be set to `NULL`:

```c
ptr = NULL;
```

---

### 🔸 Example: Using `malloc()` and `free()`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    arr = (int *) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory not allocated.\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
    }

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    free(arr);  // always free dynamically allocated memory
    return 0;
}
```

---

### ⚠️ Common Mistakes

* Forgetting to `free()` memory → memory leak.
* Accessing memory after `free()` → undefined behavior.
* Not checking if `malloc()`/`calloc()` returns `NULL`.

---

### Summary Table

| Function    | Initialization | Resizable | Use Case                   |
| ----------- | -------------- | --------- | -------------------------- |
| `malloc()`  | No             | No        | Allocate fixed size        |
| `calloc()`  | Yes (to 0)     | No        | Safer when you want 0-init |
| `realloc()` | N/A            | Yes       | Resize dynamic arrays      |
| `free()`    | N/A            | N/A       | Clean up memory            |

---

