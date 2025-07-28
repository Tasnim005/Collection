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

    /*
// Triangle
#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c;
    printf("Enter three sides of a triangle:\n");
    scanf("%f %f %f", &a, &b, &c);

    if(a<0 || b<0 || c<0){
        printf("Invalid! Enter postive number.\n");
        return 1;
    }

    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        printf("It's a valid triangle\n");
    } else {
        printf("Invalid triangle\n");
    }

    float area, s;
    s = (a+b+c)/2;
    area = sqrt(s*(s-a)*(s-b)*(s-c));

    printf("Perimeter of the triangle is %.2f\n", 2*s);
    printf("Area of the triangle is %.2f\n", area);

    return 0;
}
*/

/*
#include <stdio.h>

int main(){
    float temp, fahrenheit;
    printf("Enter temperature in Celsius: ");
    scanf("%f", &temp);

    fahrenheit = ((9.0/5.0)*temp)+32;
    printf("\nTemperature in Fahrenheit is %f\n", fahrenheit);
    return 0;
}
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



