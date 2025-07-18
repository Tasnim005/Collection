An array is a collection of elements of the same data type stored in contiguous memory locations. Instead of declaring multiple variables of the same type, you can declare one array to store them all.



In **this specific case:**

```c
int arr[] = {1, 2, 3, 4, 5};
```

you absolutely *should* let the compiler infer the size.

Why?

### ✅ Advantages of letting the compiler infer:

* Less maintenance: if you later change the initializer list (e.g., add another number), you don’t also have to update the size manually.
* No risk of mismatch between declared size and initializer length.
* Cleaner and more idiomatic C for fixed, compile-time arrays.

E.g., this is **bad practice**:

```c
int arr[5] = {1, 2, 3, 4, 5};  // unnecessary fixed size
```

because it hardcodes `5`, and if you later add or remove elements, it breaks silently or leaves garbage.

---

### 🚨 When to explicitly fix the size?

Only when you deliberately want a larger array with unused/zero-initialized elements:

```c
int arr[10] = {1, 2, 3, 4, 5};  // arr[5]..arr[9] will be zero
```

Otherwise:
✅ Use `int arr[] = {…};` and let the compiler handle it.

---

### TL;DR for this scenario:

* **Use `int arr[] = {…};`**.
* Don’t explicitly write the size unless you have a clear, justified reason (e.g., padding, reserving space).

