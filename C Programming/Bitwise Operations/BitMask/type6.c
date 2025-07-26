/*
Toggling/Flipping a Bit using XOR
*/

//Example - Toggle digit 3 using XOR

#include <stdio.h>

int main(){

    int x = 0b10111110;
    
    int shift = 1<<2;

    int result = x ^ shift;

    // Shortcut: x = x ^ (1 << n);

    printf("Result: %d\n", result);

    // 0b10111010 = 186 in decimal

    return 0;
}