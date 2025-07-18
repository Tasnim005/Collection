// Types of Arrays

/*
// One-dimensional array
#include <stdio.h>

int main(){
    int i, length;
    int arr[] = {12, 45, 12, 41, 1};

    length = sizeof(arr)/sizeof(arr[0]);

    for(i=0; i<length; i++){
        printf("Element %d is %d\n", i, arr[i]);
    }
}
    */


// Two-dimensional array
#include <stdio.h>

int main(){
    int i,j, length;
    int matrix[2][3] = {{12, 45, 12}, {13, 41, 1}};

    // Display the matrix
    printf("The 2x3 matrix is: \n");


    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    // Accessing element in the 2nd rown and 3rd column ( indexed 0, 1, 2)
    printf("%d\n", matrix[1][2]);

    return 0;

}