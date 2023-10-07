#include <stdio.h>
#include <stdlib.h>

int main()
{
    // printf("Hello World!\n");
    // printf("Hello World!\n");

    /* '\n' is used to create a new line */
    
    // int number;
    // printf("Enter a number: ");
    // scanf("%d", &number);
    // printf("Number is %d\n", number);
    
    // printf("   /|\n");
    // printf("  / |\n");
    // printf(" /  |\n");
    // printf("/___|\n");

    
    // Data Types
    char characterName[] = "John";
    int characterAge = 35;
    double gpa = 3.6;
    char grade = 'A';

    printf("There once was a man named %s\n", characterName);
    printf("He was %d years old.\n", characterAge);

    /* %d and %s are format specifiers. %d means we want to print out an integer while  %s will allow us to include some text. They act as a placeholder */

    printf("My favourite %s is %d\n", "number", 500);

    /*We can use %f for printing a decimal number*/
    printf("My favourite %s is %f\n", "number", 500.7);
    
    /*We can also use variable "characterAge" and print it inside "printf" */
    printf("My favourite %s is %d\n", "number", characterAge);

    // Constants
    const int num = 10;
    printf("%d\n", num);

    return 0;
}
