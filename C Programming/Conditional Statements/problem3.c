// if-else structure
/*
Grade system

Input: Marks (0–100)

Output: A, B, C, D, F based on range
*/

#include <stdio.h>

int main(){
    float marks;

    printf("Enter your marks: \n");
    scanf("%f", &marks);

    if(marks>=80){
        printf("Your grade is A+\n");
    }else if(marks>=70 && marks<=79){
        printf("Your grade is A\n");
    }else if(marks>=60 && marks<=69){
        printf("Your grade is B\n");
    }else if(marks>=50 && marks<=59){
        printf("Your grade is C\n");
    }else if(marks>=40 && marks<=49){
        printf("Your grade is D\n");
    }else{
        printf("Your grade is F\n");
    }

    return 0;
}