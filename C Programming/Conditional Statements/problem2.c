// nested if-else structure
// Find the maximum of three numbers

#include <stdio.h>

int main(){
    float a,b,c;

    printf("Enter 3 numbers: \n");
    scanf("%f %f %f", &a,&b,&c);

    if(a>b){
        if(a>c){
            printf("%f is the maximum of 3 numbers.\n", a);
        }else{
            printf("%f is the maximum of 3 numbers.\n", c);
        }
    }else{
        if(b>c){
            printf("%f is the maximum of 3 numbers.\n", b);
        }else{
            printf("%f is the maximum of 3 numbers.\n", c);
        }
    }

    return 0;
}