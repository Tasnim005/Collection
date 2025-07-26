#include <stdio.h>
#include <stdlib.h>

int main(){
    int *ptr;

    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    ptr = (int*)calloc(n, sizeof(int));

    if(ptr == NULL){
        printf("Memory Allocation failed!\n");
        return 1;
    }

    // Allocation
    for(int i=0; i<n; i++){
        ptr[i] = (i+1)*5;
    }

    printf("Array: ");
    // Print
    for(int i=0; i<n; i++){
        printf("%d ", ptr[i]);
    }


    // Reallocation (increasing)
    int n1;
    printf("\nEnter the number of elements: ");
    scanf("%d", &n1);

    // Syntax: ptr = (cast-type*) realloc(pointer-name, new-byte-size);

    ptr = (int*)realloc(ptr, n1*sizeof(int));

    // Print New array
    for(int i=0; i<n1; i++){
        printf("%d ", ptr[i]);
    }

    // Reallocation (decreasing)
    int n2;
    printf("\nEnter the number of elements: ");
    scanf("%d", &n2);

    ptr = (int*)realloc(ptr, n2*sizeof(int));

    // Print New array
    for(int i=0; i<n2; i++){
        printf("%d ", ptr[i]);
    }

    return 0;
}