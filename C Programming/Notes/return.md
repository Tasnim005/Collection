# **return codes and conventions**

---

### ✅ `return 0;` vs `return 1;` — Which one should you use?

| Return Code                     | Meaning (by convention)               |
| ------------------------------- | ------------------------------------- |
| `return 0;`                     | Program ran **successfully**          |
| `return 1;` *(or any non-zero)* | Program ran into an **error/failure** |

---

### 🔷 In Your Case:

You wrote:

```c
if(ptr == NULL){
    printf("Memory Allocation Failed");
    return 0;
}
```

You're signaling a **failure** (memory allocation failed), so **you should use**:

```c
return 1;
```

That tells the OS (or any calling process) that the program **did not succeed**.

---

### 🔧 Corrected Code Snippet:

```c
if (ptr == NULL) {
    printf("Memory Allocation Failed\n");
    return 1;  // return non-zero on failure
}
```

You can use other non-zero values too (e.g., `return -1;`), especially if you want to distinguish between different error types, but `1` is commonly used.

---

