/*
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
*/

#include <stdio.h>

int main(){
    int terms, i, elements[100], sum=0;

    printf("Enter the no of elements (max 100): ");
    scanf("%d", &terms);

    if(terms>100 || terms<1){
        printf("Enter valid no of terms!");
        return 0;
    }

    printf("Enter %d elements: \n", terms);

    for(i=0; i<terms; i++){
        printf("Element %d: ", i+1);
        scanf("%d", &elements[i]);

        sum = sum+elements[i];
    }


    printf("You entered: ");

    for(i=0; i<terms; i++){
        printf("%d ", elements[i]);
    }


    printf("\nSummation of %d elements: %d\n", terms, sum);

    return 0;
}