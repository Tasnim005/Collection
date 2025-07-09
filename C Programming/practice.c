#include <stdio.h>

int main(){
    /*
    // Example 1
    char name[30];
    char grade;
    int age;
    float gpa;


    printf("Enter your name: ");
    // scanf("%s", name);
    fgets(name, sizeof(name), stdin);

    printf("Enter your age, GPA and Grade: ");
    scanf("%d %f %c", &age, &gpa, &grade);

    printf("\n Name: %s Age: %d\n GPA: %f\n Grade: %c\n", name, age, gpa, grade);
    */

    /*
    // Practice 2
    int num;

    printf("Enter a number (1-7): ");
    scanf("%d", &num);

    switch(num){
        case 1:
        printf("Sunday\n");
        break;

        case 2:
        printf("Monday\n");
        break;

        case 3:
        printf("Tuesday\n");
        break;

        case 4:
        printf("Wednesday\n");
        break;

        case 5:
        printf("Thursday\n");
        break;

        case 6:
        printf("Friday\n");
        break;

        case 7:
        printf("Saturday\n");
        break;

        default:
        printf("Error");
    }
    */

    /*
    int size;

    size = sizeof(int);

    printf("%d", size);
    */

    /*
    // Calculator using switch
    double num1, num2;
    char operator;

    printf("Enter one number: ");
    scanf("%lf", &num1);

    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &operator);

    printf("Enter another number: ");
    scanf("%lf", &num2);

    switch(operator){
        case '+':
            printf("%lf + %lf = %.2lf", num1, num2, num1+num2);
            break;
        
        case '-':
            printf("%lf - %lf = %.2lf", num1, num2, num1-num2);
            break;

        case '*':
            printf("%lf * %lf = %.2lf", num1, num2, num1*num2);
            break;

        case '/':
            if(num2 == 0){
                printf("Enter a valid number!");
            }else{
            printf("%lf / %lf = %.2lf", num1, num2, num1/num2);
            }
            break;

        default:
            printf("Enter a valid operator");
            break;
    }
    */


    /*
    // Calculator using if-else
    double num1, num2;
    char operator;

    printf("Enter one number: ");
    scanf("%lf", &num1);

    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &operator);

    printf("Enter another number: ");
    scanf("%lf", &num2);

    if(operator == '+'){
        printf("%lf + %lf = %.2lf", num1, num2, num1+num2);
    }else if(operator == '-'){
        printf("%lf - %lf = %.2lf", num1, num2, num1-num2);
    }else if(operator == '*'){
        printf("%lf * %lf = %.2lf", num1, num2, num1*num2);
    }else if(operator == '/'){
        if(num2 == 0){
            printf("Enter a valid number: ");
        }else{
            printf("%lf / %lf = %.2lf", num1, num2, num1/num2);
        }
    }else{
        printf("Enter a valid operator");
    }
    */


    /*
    double length, width;
    printf("Enter length: ");
    scanf("%lf", &length);

    printf("Enter breadth: ");
    scanf("%lf", &width);

    printf("Area is %lf", length*width);
    */

    /*
    int num = 22;
    printf("Welcome to ME %d department!", num);
    */

    char name[50];
    char grade;

    int age;
    float gpa;

    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);

    printf("Enter your age, GPA and grade: ");
    scanf("%d %f %c", &age, &gpa, &grade);

    printf("Name: %s Age: %d\n GPA: %f\n Grade: %c\n", name, age, gpa, grade);

}