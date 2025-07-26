/*
Checking a Bit using AND (&)
Example 1 - finds the value of the 3rd digit (bit 2) from the right (0-based indexing)
*/

// 1011 1110

#include <stdio.h>

int main(){
    
    int x = 0b10111010;     // x = 186 in decimal
    int shift1 = 1 << 2;    // shift1 = 0b00000100 (this targets bit 2)

    int andOP = x & shift1; // Isolates bit 2 only
    int result = andOP >> 2;// Shifts the bit back to LSB to get 0 or 1

    printf("Value of 3rd Digit is %d\n", result);

    return 0;
}
