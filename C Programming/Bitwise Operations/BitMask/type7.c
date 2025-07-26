/*
Toggle multiple bits using XOR
*/

// Example - Toggle digits 3 and 7 using XOR

#include <stdio.h>

int main(){

    int x = 0b01110110;

    int shift1 = 1<<2;
    int shift2 = 1<<6;

    int result = x ^ shift1 ^ shift2;

    printf("Result: %d\n", result);

    return 0;
}