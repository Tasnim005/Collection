/*
Setting multiple digits to 1 using OR 
*/

// Setting digits 5 and 6 to 1

#include <stdio.h>

int main(){

    int x = 0b00001110;

    int shift1 = 1<<4;
    int shift2 = 1<<5;

    int result = x | shift1 | shift2;

    // Shortcut: x = x | (1 << n1) | (1 << n2);

    printf("Result: %d\n", result);

    return 0;
}