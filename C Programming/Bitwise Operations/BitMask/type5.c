/*
Toggling/Flipping all the Bits using NOT
*/ 

#include <stdio.h>

int main(){
    
    int x = 0b10111110;

    int result = ~x;

    printf("Result: %d\n", result);

    return 0;
}