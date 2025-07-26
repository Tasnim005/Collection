/*
Clear specific bits (set them to 0) without changing other bits
*/

// clears (sets to 0) the 3rd bit (bit position 2) of the binary number

#include <stdio.h>

int main(){
    int x = 0b1111;

    int shift = 1<<2;
    int flip = ~shift;

    int result = x & flip;

    // Shortcut: x = x & ~(1 << n);

    printf("Result: %d\n", result);

    return 0;
}

// A detailed explanation can be found in bitmask.c file and it's readme file