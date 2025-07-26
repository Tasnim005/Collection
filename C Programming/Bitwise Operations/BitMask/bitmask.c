// Clear (set to 0) a specific bit of an integer, without touching the other bits
#include <stdio.h>

int main(){
    int x = 0b1111;  // decimal 15, binary: 00001111; here `0b` means “binary”

    // We want to clear bit 2 (third bit from right, zero-based index).

    /*
        ● 1 << n produces a number where only bit n is 1
        ● ~(1 << n) flips all bits — so bit n becomes 0, all others are 1
        ● x & ~(1 << n) clears only bit n

        General formula for variable `x`, clear bit at position `n`: x = x & ~(1 << n);

    */

    x = x & ~(1 << 2);

    printf("%d\n", x);  // prints 11

    return 0;
}