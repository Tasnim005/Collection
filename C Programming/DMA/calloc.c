// The name “calloc" stands for contiguous allocation. ● It initializes each block with default 0 value.

#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    ptr = (int *)calloc(4, sizeof(int));  // Allocates and zero-initializes 4 ints

    if (ptr == NULL) {
        printf("Memory Allocation failed!\n");
        return 1;
    }

    // Checking default initialization
    printf("Before assignment: ptr[1] = %d\n", ptr[1]);  // Should be 0

    // Assign values
    ptr[1] = 17;
    ptr[2] = 10;
    ptr[3] = 26;

    // Print selected values
    printf("After assignment: %d %d %d\n", ptr[1], ptr[2], ptr[3]);

    // Print entire array
    printf("Full array: ");
    for (int i = 0; i < 4; i++) {
        printf("%d ", ptr[i]);
    }
    printf("\n");


    return 0;


}
