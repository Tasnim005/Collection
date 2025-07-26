// The name “calloc" stands for contiguous allocation. ● It initializes each block with default 0 value.

#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int *ptr;
    ptr = (int *)calloc(n, sizeof(int));  // Allocates and zero-initializes 4 ints

    if (ptr == NULL) {
        printf("Memory Allocation failed!\n");
        return 1;
    }

    // Checking default initialization
    printf("Before assignment: ptr[1] = %d\n", ptr[1]);  // Should be 0

    for (int i=0; i<(n-3); i++){
        ptr[i] = (i+1)*7;
    }

    // Print entire array
    printf("Full array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", ptr[i]);
    }
    printf("\n");


    free(ptr);

    // This is dangerous:
    // printf("%d\n", ptr[0]);

    return 0;


}
