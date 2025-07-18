# **One-dimensional array (“vector”)** vs. **Two-dimensional array (“matrix”)**



## 1️⃣ **One-dimensional array (1D)**

It’s just a *linear collection* of elements — think of it as a **row or column vector**.

### Example:

```c
int arr[5] = {1, 2, 3, 4, 5};
```

Memory layout:

```
+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+
```

Indexing: `arr[0]`, `arr[1]`, …, `arr[4]`

Access:

```c
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}
```

You can also let the compiler infer size:

```c
int arr[] = {1, 2, 3, 4, 5};
```

---

##  2️ **Two-dimensional array (2D)**

A **matrix/table of rows and columns** — an array of arrays.

### Syntax:

```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

Memory layout: row-major

```
+---+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 | 6 |
+---+---+---+---+---+---+
```

But logically:

```
Row 0: 1 2 3
Row 1: 4 5 6
```

Access:

```c
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\n");
}
```

---

## 🔷 Key differences:

| Feature        | 1D Array     | 2D Array             |
| -------------- | ------------ | -------------------- |
| Dimensions     | One index    | Two indices          |
| Shape          | Vector       | Matrix (rows × cols) |
| Declaration    | `int arr[N]` | `int arr[R][C]`      |
| Access element | `arr[i]`     | `arr[i][j]`          |
| Memory layout  | Linear       | Linear (row-major)   |

---

## 🔷 Notes:

✅ In C, all arrays are internally stored as **linear memory** — even 2D arrays.
✅ 2D arrays are just syntactic sugar: the compiler calculates offsets properly:

```
matrix[i][j]  ==  *(matrix + i*C + j)
```

where `C` is number of columns.


---


