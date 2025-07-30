/*
You are performing a mechanical tensile test on 50 different specimens in your lab, and for each specimen, you
want to store its maximum load before fracture (in kN).
You are entering the data manually during the experiment.
Now, if more than 30 specimens have a breaking load greater than 20 kN, then you will extend the experiment by testing M more specimens.
However, your lab computer has limited memory, so you want to ensure that memory is only allocated when necessary, and all data (old + new) should be stored together.
Write a C program to store and update this tensile test data using dynamic memory allocation techniques such as malloc(), realloc(), and free().
*/

#include <stdio.h>
#include <stdlib.h>

int main(){
    int num;
    printf("Enter the no of specimens: ");
    scanf("%d", &num);

    float *ptr  = (float*)malloc(num*sizeof(float));

    if(ptr == NULL){
        printf("Memory Allocation failed!\n");
        return 1;
    }

    int counter=0;

    for(int i=0; i<num;i++){
        printf("Specimen %d: ", i+1);
        scanf("%f", &ptr[i]);
    }

    printf("\nStored values: ");
    for(int i=0; i<num;i++){
        printf("%.2f ", ptr[i]);
    }

    for(int i=0; i<num;i++){
        if(ptr[i]>20){
            counter++;
        }
    }

    if(counter>30){
        int num1;
        printf("\nSince 30 specimens have a breaking load greater than 20 kN, enter the number of additional specimens\n");
        scanf("%d", &num1);

        int totalSize = num+num1;
        float *temp = (float*)realloc(ptr, totalSize*sizeof(float));

        if(temp == NULL){
            printf("\nMemory Alllocation Failed\n");
            free(ptr);
            return 1;
        }

        ptr = temp;

        for(int i=num; i<totalSize; i++){
            printf("Specimen %d: ", i+1);
            scanf("%f", &ptr[i]);
        }

        printf("Updated Test Data: ");
        for(int i=0; i<totalSize; i++){
            printf("%.2f ", ptr[i]);
        }

    }

    free(ptr);

    return 0;
}