/*
Clearing a digit to 0 using OR and NOT
*/

// Example - Clearing digit 5 to 0

#include <stdio.h>

int main(){
    
    int x = 0b11110101;

    int flip = ~x;

    int shift = 1<<4;

    int op1 = flip | shift;

    int result = ~op1;

    printf("Result: %d\n", result);

    return 0;
}

// So this method: ~(~x | (1 << n)) is just a creative alternative to the standard: x & ~(1 << n)


