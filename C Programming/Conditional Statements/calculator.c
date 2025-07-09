#include <stdio.h>

int main(){
    float num1, num2, result;
    char operator;

    printf("Enter num1 followed by operator folllowed by num2: \n");
    scanf("%f %c %f", &num1, &operator, &num2);

    switch (operator){
        case '+':
            printf("%f + %f = %f", num1, num2, num1+num2);
            break;
        case '-':
            printf("%f - %f = %f", num1, num2, num1-num2);
            break;
        case '*':
            printf("%f * %f = %f", num1, num2, num1*num2);
            break;
        case '/':
            if(num2==0){
                printf("Math Error");
            }else{
                printf("%f / %f = %f", num1, num2, num1/num2);
            }
            break;
        default:
            printf("Invalid operator. Use one of +, -, *, /.\n");
            break;    
    }

    return 0;
}