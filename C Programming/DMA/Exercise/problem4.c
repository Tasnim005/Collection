/*
🔶 Problem 4: Dynamic Matrix Allocation

**Description:**

* Dynamically allocate a 2D matrix using **double pointers** (`int **matrix`).
* First, use `malloc` to allocate an array of pointers (rows).
* Then, for each row, use `calloc` to initialize the columns.
* Take input for all elements.
* Then, resize the matrix (increase number of rows and columns) using `realloc` for rows and new `calloc` for new columns.
* Free all memory row-by-row, then the row pointer array.

**Concepts Covered:**

* `malloc` for array of pointers
* `calloc` for 1D arrays (columns)
* `realloc` for resizing
* Full memory cleanup

*/