#include <stdio.h>

int main(){
    double num1, num2;
    char operator;

    printf("Enter a number: ");
    scanf("%lf", &num1);

    printf("Enter operator: ");
    scanf(" %c", &operator);

    printf("Enter another number: ");
    scanf("%lf", &num2);

    switch(operator){
        case '+' : printf("%lf + %lf = %.2lf\n", num1, num2, num1+num2); break;
        case '-' : printf("%lf - %lf = %.2lf\n", num1, num2, num1-num2); break;
        case '*' : printf("%lf * %lf = %.2lf\n", num1, num2, num1*num2); break;
        case '/' : 
            if(num2==0){
                printf("Invalid!\n");
                break;
            }else{
                printf("%lf / %lf = %.2lf\n", num1, num2, num1/num2);
                break;
            }
        default: printf("Invalid operator!\n"); break;
    }

    return 0;
}

