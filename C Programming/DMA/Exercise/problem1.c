/*
🔶 Problem 1: Dynamic Array with User Input

Description:

    Ask the user how many integers they want to enter.
    Allocate memory using malloc.
    Take input and store values.
    Reallocate to add more space for 3 additional numbers.
    Finally, free the memory.

Concepts Covered:
    malloc, realloc, free
    Pointer-based input/output
*/

#include <stdio.h>
#include <stdlib.h>

int main(){
    // Ask the user how many integers they want to enter.
    int n;
    printf("Enter the no of integers: ");
    scanf("%d", &n);

    // Allocate memory using malloc.
    int *ptr;
    ptr = (int*)malloc(n*sizeof(int));

    if(ptr == NULL){
        printf("Memory Allocation failed!\n");
        return 1;
    }

    printf("Enter %d integers: \n", n);

    // Take input and store values.
    for(int i=0; i<n; i++){
        scanf("%d", &ptr[i]);
    }

    printf("Array: ");
    // Print the array
    for(int i=0; i<n; i++){
        printf("%d ", ptr[i]);
    }

    // Reallocating to add more space for 3 additional numbers
    int n1= n+3;
    ptr = (int*)realloc(ptr, n1*sizeof(int));

    printf("\nEnter 3 new values: \n");
    // Take input and store values.
    for(int i=n; i<n1; i++){
        scanf("%d", &ptr[i]);
    }

    printf("\nNew array after reallocation: \n");
    // Print the array (reallocate)
    for(int i=0; i<n1; i++){
        printf("%d ", ptr[i]); //garbage value after n bcz of malloc
    }

    // free the memory
    free(ptr);

    return 0;
}