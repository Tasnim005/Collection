When you see this:

```c
char arr[] = {'a', 'b', 'c'};
```

the array **does not contain a null terminator (`\0`)** at the end.
So the actual memory layout is:

```
[ 'a' ][ 'b' ][ 'c' ]
```

That means **it’s just a char array, not a C string.**

---

### 🔷 Why does `\0` matter?

In C, a “string” is just a sequence of characters ending with the *null character* (`\0` = ASCII 0).
All string-handling functions (`printf("%s")`, `strlen`, `strcpy`, etc.) keep reading memory until they see a `\0`.

Example:

```c
char s[] = "abc";
```

actually creates:

```
[ 'a' ][ 'b' ][ 'c' ][ '\0' ]
```

and `sizeof(s)` is 4, not 3.

So if you do:

```c
char arr[] = {'a', 'b', 'c'};
printf("%s\n", arr);
```

you’ll get undefined behavior — it’ll keep reading bytes after `c` in memory, printing garbage, crashing, or worse — because it doesn’t know where the string ends.

---

### 🔷 TL;DR:

✅ A string in C **must end with `\0`**.
✅ `"abc"` automatically adds `\0`.
✅ `{'a', 'b', 'c'}` does **not**, so it’s just an array of 3 characters, not a string.
✅ If you really want it to be a string:

```c
char arr[] = {'a', 'b', 'c', '\0'};
```

or better yet:

```c
char arr[] = "abc";  // cleaner
```

