/*
🔶 Problem 2: Dynamic Array Initialization and Stats

**Description:**

* Ask the user how many integers they want to initialize to 0.
* Use `calloc` to allocate memory.
* Then ask the user to input only a few elements (leave the rest as 0).
* Print max, min, and sum.
* Reallocate to a new size and repeat.
* Free the memory at the end.

**Concepts Covered:**

* `calloc` initialization
* `realloc` resizing
* Partial data population
* `free`

*/

#include <stdio.h>
#include <stdlib.h>

int main(){
    int num;
    printf("how many integers do you want to initialize to 0: ");
    scanf("%d", &num);

    float *ptr;
    ptr = (float*)calloc(num, sizeof(float));

    if(ptr == NULL){
        printf("Memory allocation failed");
        return 1;
    }

    int elements;
    printf("now input the number of elements you want to enter: ");
    scanf("%d", &elements);

    for(int i=0; i<elements; i++){
        printf("Element %d: \n", i+1);
        scanf("%f", &ptr[i]);
    }

    printf("\nStored values: \n\n");

    float sum=0;
    float max = ptr[0];
    float min = ptr[0];

    for(int i=0; i<num; i++){
        printf("%.2f ", ptr[i]);
        sum = sum + ptr[i];

        if(ptr[i]>max){
            max = ptr[i];
        }

        if(ptr[i]<min){
            min = ptr[i];
        }
    }


    printf("\n\nSummation: %.2f\n", sum);
    printf("max: %.2f\n", max);
    printf("min: %.2f\n", min);

    // Reallocate to a new size and repeat
    int new_elements;
    printf("\nHow many more elements do you want to add: ");
    scanf("%d", &new_elements);

    int total_size = num + new_elements;

    float *temp = (float*)realloc(ptr, total_size*sizeof(float));
    
    if(temp == NULL){
        printf("memory Allocation failed!");
        free(ptr);
        return 1;
    }

    ptr = temp;
    // Reset
     sum =0;
     max = ptr[0];
     min = ptr[0];

    for(int i=num; i<total_size; i++){
        printf("Element %d: ", i+1);
        scanf("%f", &ptr[i]);
    }

    printf("\nStored values:");
    for(int i=0; i<total_size; i++){
        printf("%.2f ", ptr[i]);
        sum = sum+ ptr[i];

        if(ptr[i]>max){
            max = ptr[i];
        }

        if(ptr[i]<min){
            min = ptr[i];
        }
    }

    printf("\n\nSummation: %.2f\n", sum);
    printf("max: %.2f\n", max);
    printf("min: %.2f\n", min);
    
    free(ptr);

    return 0;
}