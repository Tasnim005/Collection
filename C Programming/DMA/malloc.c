#include <stdio.h>
#include <stdlib.h>

int main(){
    // Syntax: ptr = (cast-type*) malloc(byte-size)

    int *ptr, elements;

    printf("Enter the number of elements: \n");
    scanf("%d", &elements);

    // ptr = (int*)malloc(3*4);
    ptr = (int*)malloc(elements*sizeof(int));

    if(ptr == NULL){
        printf("Memory Allocation Failed");
        return 1;
    }

    for(int i=0; i<elements; i++){
        ptr[i] = (i+1)*10;
    }

    
    printf("Allocated values: ");
    for (int i = 0; i < elements; i++) {
        printf("%d ", ptr[i]);
    }

    return 0;
}