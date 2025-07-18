#include <stdio.h>

int main(){

    int i, length, sum=0;

    // printf("Enter the number of elements (max 100): ");


    int arr[] = {10, 12, 22, 1, 5};

    length = sizeof(arr) / sizeof(arr[0]);

    for(i=0; i<length; i++){
        printf("Element %d: %d\n", i+1, arr[i]);

        sum = sum+arr[i];
    }
    printf("Summation of %d elements: %d\n",length, sum);

    return 0;

}