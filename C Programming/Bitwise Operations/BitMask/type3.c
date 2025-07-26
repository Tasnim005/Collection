/*
How to set a specific bit to 1 using the bitwise OR (|) operator
*/

// Setting digit 7 to 1

#include <stdio.h>

int main(){

    int x = 0b10111110;

    int shift = 1<<6;

    int result = x | shift;

    // Shortcut: x = x | (1 << n);

    printf("Result: %d\n", result);

    return 0;

}