#include <stdio.h>

int main(){
    char str[50];

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    printf("You entered: %s\n", str);

    // Special Operator - sizeof()
    int a = sizeof(int);
    int b = sizeof(float);
    int c = sizeof(char);
    int d = sizeof(double);
    int e = sizeof(long long int);

    printf("Number of bytes occupied by an integer operand a is: %d\n", a);
    printf("Number of bytes occupied by a float operand b is: %d\n", b);
    printf("Number of bytes occupied by a char operand c is: %d\n", c);
    printf("Number of bytes occupied by a double operand d is: %d\n", d);
    printf("Number of bytes occupied by a long integer operand e is: %d\n", e);

    return 0;
}