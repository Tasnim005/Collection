Here’s a **clear and straightforward implementation** of all three problems you're asking for, broken down by section.

---

## ✅ **1) Multiplying Last 3 Digits of Student ID**

### 🔹 a) Multiply by 2 to 9 using a `for` loop

### 🔹 b) Sum the results

```c
#include <stdio.h>

int main() {
    int id_last3, result, sum = 0;

    printf("Enter the last 3 digits of your student ID: ");
    scanf("%d", &id_last3);

    printf("\nMultiplication results:\n");
    for (int i = 2; i <= 9; i++) {
        result = id_last3 * i;
        printf("%d x %d = %d\n", id_last3, i, result);
        sum += result;
    }

    printf("\nSum of all multiplication results: %d\n", sum);
    return 0;
}
```

---

## ✅ **2) Triangle Validity and Classification**

```c
#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c;

    printf("Enter the three sides of a triangle:\n");
    scanf("%f %f %f", &a, &b, &c);

    // Check triangle validity
    if (a + b > c && a + c > b && b + c > a) {
        printf("Valid triangle\n");

        // Classification
        if (a == b && b == c)
            printf("Equilateral triangle\n");
        else if (a == b || b == c || a == c)
            printf("Isosceles triangle\n");
        else
            printf("Scalene triangle\n");

        // Check for right-angled triangle
        float a2 = a * a, b2 = b * b, c2 = c * c;
        if (fabs(a2 + b2 - c2) < 1e-6 || fabs(a2 + c2 - b2) < 1e-6 || fabs(b2 + c2 - a2) < 1e-6)
            printf("It is a right-angled triangle\n");
    } else {
        printf("Not a valid triangle\n");
    }

    return 0;
}
```

---

## ✅ **3) 3×4 Matrix Input and Row-Wise Max**

```c
#include <stdio.h>

int main() {
    int matrix[3][4];
    int i, j;

    printf("Enter elements of a 3x4 matrix:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    printf("\nMatrix:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    printf("\nMaximum value in each row:\n");
    for (i = 0; i < 3; i++) {
        int max = matrix[i][0];
        for (j = 1; j < 4; j++) {
            if (matrix[i][j] > max)
                max = matrix[i][j];
        }
        printf("Row %d max: %d\n", i, max);
    }

    return 0;
}
```

---


