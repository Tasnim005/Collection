//Ternary Operator

/*
condition ? If true then return X : if false return Y;

Syntax: (condition) ? expression_if_true : expression_if_false;
*/

#include <stdio.h>

int main(){
    int num;

    printf("Input a number!\n");
    scanf("%d", &num);
    
    (num%2==0) ? printf("%d is an even number.\n", num) : printf("%d is an odd number.\n", num);

    // % (modulus operator) only works with integers, not floats.

    return 0;
}