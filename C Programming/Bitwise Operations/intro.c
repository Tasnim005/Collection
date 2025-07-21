#include <stdio.h>

int main() {
    int a = 5, b = 12; // Binary a: 0000 0101, b: 0000 1100

    int c = a & b;     // Binary c: 0000 0100 (4) — AND: 1 only if both bits are 1
    int d = a | b;     // Binary d: 0000 1101 (13) — OR: 1 if one of the bits is 1
    int e = ~a;        // Bitwise NOT of a — flips all bits (Decimal : -6 after 2's complement) // Formula: ~x == -(x+1)
    int xor = a ^ b;   // Binary xor: 0000 1001 (9) — XOR: 1 if both bits are different

    printf("%d\n", c);   // 4
    printf("%d\n", d);   // 13
    printf("%d\n", e);   // -6
    printf("%d\n", xor); // 9


// Applications
// Bitwise & (AND) to check even and odd
    
    // Decimal 4 -> Binary 0100 
    // Decimal 7 -> Binary 0111
    // Decimal 12 -> Binary 1100 
    // Decimal 21 -> Binary 0001 0101 

    // As we know AND: 1 only if both bits are 1. But in case of even the last bit will always be 0 while for odd it'll be 1. So, their  bitwise & operation with 1 will result in 0 (even) and odd(1) respectively.

    if(a & 1){
        printf("Odd\n");
    }else{
        printf("Even\n");
    }

// Bitwise | (OR) to know the value of an unknown variable
    int x, result;
    printf("Enter a number: ");
    scanf("%d", &x);

    result = x | 0; //x | 0 just returns x, because OR-ing with 0 leaves all bits unchanged.


    printf("The result is %d\n", result);

    return 0;
}
