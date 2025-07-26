/*
🔶 Problem 5: Frequency Counter for Characters in a String

**Description:**

* Take a string input of arbitrary length (you don’t know length in advance).
* Dynamically allocate space as the user types (use `realloc` every time string grows).
* Use `calloc` to build a frequency array of size 256 (ASCII table).
* Count and print frequencies.
* Free both memory blocks after work is done.

**Concepts Covered:**

* Dynamically expanding arrays (`realloc`)
* `calloc` for frequency tables
* `free` of multiple pointers

*/