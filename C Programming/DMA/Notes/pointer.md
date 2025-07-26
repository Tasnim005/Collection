# 🔹 Pointers in C

A **pointer** is a variable that stores the **memory address** of another variable. Mastering pointers is crucial in C because C allows **direct memory access** — useful for dynamic memory allocation, arrays, functions, structures, and more.

---

### 🔸 1. **Declaring a Pointer**

```c
int *p;
```

* `int *p` means `p` is a pointer to an `int`.
* `*` is the **dereference operator** when used with a pointer, and means "value at address".

---

### 🔸 2. **Assigning Address to a Pointer**

```c
int x = 10;
int *p = &x;
```

* `&x` gets the **address** of `x`
* `p` now points to `x`

---

### 🔸 3. **Dereferencing a Pointer**

```c
printf("%d", *p);  // prints 10
```

* `*p` gives the **value stored at the address** `p` points to

---

### 🔸 4. **Pointer Arithmetic**

Pointers support limited arithmetic:

```c
p + 1   // moves pointer to the next int (4 bytes forward on most systems)
```

Example:

```c
int arr[3] = {1, 2, 3};
int *p = arr;

printf("%d", *(p + 1)); // prints 2
```

---

### 🔸 5. **Pointers and Arrays**

An array name is a pointer to its first element:

```c
int arr[5];
int *p = arr;  // same as &arr[0]
```

---

### 🔸 6. **Pointers and Functions**

You can pass variables **by reference** using pointers:

```c
void update(int *p) {
    *p = *p + 10;
}
```

```c
int x = 5;
update(&x);  // now x becomes 15
```

---

### 🔸 7. **NULL Pointer**

```c
int *p = NULL;
```

* A pointer not pointing anywhere should be set to `NULL` for safety.

---

### 🔸 8. **Dangling Pointer**

Accessing memory after it's freed:

```c
int *p = malloc(sizeof(int));
free(p);
*p = 10;  // ❌ undefined behavior
```

---

### 🔸 9. **Pointer to Pointer**

```c
int x = 10;
int *p = &x;
int **pp = &p;

printf("%d", **pp);  // prints 10
```

---

### 🔸 10. **Pointers to Structs**

```c
struct Point {
    int x, y;
};

struct Point p1 = {1, 2};
struct Point *ptr = &p1;

printf("%d", ptr->x);  // arrow operator used for pointers to structs
```

---

### 🧠 Summary: Key Symbols

| Symbol | Meaning                                |
| ------ | -------------------------------------- |
| `*`    | Declare a pointer or dereference it    |
| `&`    | Address-of operator                    |
| `->`   | Access members of a struct via pointer |
| `NULL` | Pointer to nowhere                     |

---

### ✅ Why Use Pointers?

* Efficient **function parameter passing**
* **Dynamic memory allocation**
* **Linked data structures** (linked lists, trees)
* **Array and string manipulation**
* **System-level programming**

---
