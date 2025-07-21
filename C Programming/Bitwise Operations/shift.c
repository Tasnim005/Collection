// Bitwise Operators – Left Shift & Right Shift

/* << (left shift)

The << (left shift) in C or C++ takes two numbers, left shifts the bits of the first operand, the second operand decides the number of places to shift.
    • Syntax: x << y
    • Bits of x are shifted to the left by y bit. The last y bits are filled with 0
    • Here, the << (left shift) operator is equivalent to multiplying x by 2^(y)

Limitations:
    • Only works correctly for non-negative integers
    • Can lead to overflow if the result exceeds the data type limit
    • Not suitable for floating point numbers
*/

/* >> (right shift)

The >> (right shift) in C or C++ takes two numbers, right shifts the bits of the first operand, the second operand
decides the number of places to shift.
    ● Syntax: x >> y
    ● Bits of x are shifted to the right by y bit. The first y bits are filled with 0.
    ● Here, the >> (right shift) operator is equivalent to dividing x by 2^(y)

Works with unsigned and positive signed integers
Not always reliable for negative numbers (implementation-dependent behavior)
It does floor division (discards remainder)
*/

#include <stdio.h>

int main(){
    int a = 5, b = 2;
    
    int leftShift = a<<b; 
    /*
    0000 0101  → a
        << 2
    0001 0100  → y
    
    // leftShift = 5 × 2² = 20
    */ 
    printf("%d\n", leftShift);

// **************************************************************

    int rightShift = a>>b;
    /*
    0000 0101  → a
        >> 2
    0000 0001  → y
    
    // rightShift = 5 / 2² = 1 (float is ignored)
    */ 

    printf("%d\n", rightShift);

    return 0;
}