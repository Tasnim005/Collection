/*
Even or Odd

Input: One integer

Output: Whether it’s even or odd
*/ 

#include <stdio.h>

int main(){
    int num;

    printf("Enter an integer: ");
    scanf("%d", &num);

    if(num%2==0){
        printf("%d is an even number\n", num);
    }else{
        printf("%d is an odd number\n", num);
    }

    return 0;

}