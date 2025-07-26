#include <stdio.h>

int main() {
    int row, column, i, j;

    printf("Enter the number of rows and columns:\n");
    scanf("%d %d", &row, &column);

    float arr[row][column];
    float totalSum = 0;

    // Initialize matrix and compute total sum
    printf("\nMatrix:\n");
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            arr[i][j] = (i + 1) * (j + 1) * 5;
            totalSum += arr[i][j];
            printf("%.2f ", arr[i][j]);
        }
        printf("\n");
    }

    // Row-wise summation
    printf("\nRow-wise Summation:\n");
    for (i = 0; i < row; i++) {
        float rowSum = 0;
        for (j = 0; j < column; j++) {
            rowSum += arr[i][j];
        }
        printf("Sum of row %d: %.2f\n", i + 1, rowSum);
    }

    // Column-wise summation
    printf("\nColumn-wise Summation:\n");
    for (j = 0; j < column; j++) {
        float colSum = 0;
        for (i = 0; i < row; i++) {
            colSum += arr[i][j];
        }
        printf("Sum of column %d: %.2f\n", j + 1, colSum);
    }

    printf("\nTotal Summation of All Elements: %.2f\n", totalSum);

    // Detailed element display
    printf("\nElement-wise Details:\n");
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            printf("Element at row %d, column %d: %.2f\n", i + 1, j + 1, arr[i][j]);
        }
    }

    return 0;
}
