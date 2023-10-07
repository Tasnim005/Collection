#include <stdio.h>

int main()
{
    // char name[20];
    // printf("Enter your name:");
    // scanf("%s", name);
    // printf("Your name is %s", name);

    /*It'll work fine in most cases. However, when we input "Tasnim Alam", it will only display "Tasnim". i.e. it's not gonna take input after a space.*/
    char name[20];
    printf("Enter your name:");
    fgets(name, 20, stdin);
    printf("Your name is %s", name);

    /*In order to solve this, we can use "fgets"*/

    // int age;
    // printf("Enter your age: ");
    // scanf("%d", &age);
    // printf("You are %d years old", age);

    // char grade;
    // printf("Enter your grade: ");
    // scanf("%c", &grade);
    // printf("Your grade is %c", grade);

    // double gpa;
    // printf("Enter your GPA: ");
    // scanf("%lf", &gpa);
    // printf("Your GPA is %lf", gpa);

    return 0;
}