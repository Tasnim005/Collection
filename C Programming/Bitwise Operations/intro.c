# include <stdio.h>

int main(){
    int a = 5, b=12; // Binary a: 0000 0101, b: 0000 1100

    int c = a & b; // Binary c: 0000 0100 

    printf("%d", c); // c = 4 
}