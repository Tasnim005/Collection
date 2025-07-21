/*
// Factorial
#include <stdio.h>

int main(){
    int num, i, fact=1;

    printf("Enter a number: ");
    scanf("%d", &num);

    for(i=1; i<=num; i++){
        fact=fact*i;
    }
    printf("Factorial of %d is %d\n", num, fact);

    return 0;
}
*/

/*
// Series of first n even numbers (term limit)
#include <stdio.h>

int main(){
    int term, i, series=0;

    printf("Enter no of terms: ");
    scanf("%d", &term);

    for(i=1; i<=term; i++){
        series+=2;
        printf("%d ", series);
    }

    return 0;
}
*/

/*
// Series of first n even numbers (value limit)
#include <stdio.h>

int main(){
    int value, i;

    printf("Enter value limit: ");
    scanf("%d", &value);

    for(i=2; i<=value; i+=2){
        printf("%d ", i);
    }

    return 0;
}
*/


/*
// prime number check
#include <stdio.h>

int main(){
    int num, i, isPrime = 1;

    printf("Enter number: ");
    scanf("%d", &num);

    if(num<=1){
        printf("%d is NOT a prime number\n", num);
        return 0;
    }

    if(num == 2){
        printf("2 is a prime number\n");
        return 0;
    }

    if(num%2 == 0){
        printf("%d is NOT a prime number\n", num);
        return 0;
    }


    for(i=3; i*i<=num; i+=2){
        if(num%i==0){
            isPrime = 0;
            break;
        }
    }

    if(isPrime){
        printf("%d is a prime number\n", num);
    }else{
        printf("%d is NOT a prime number\n", num);
    }

    return 0;
}
*/

/*
// prime number series (value limit)
#include <stdio.h>

int main() {
    int value, i, j, isPrime;

    printf("Enter value limit: ");
    scanf("%d", &value);

    if (value >= 2) {
        printf("2 "); 
    }

    for (i = 3; i <= value; i += 2) {
        isPrime = 1;  // assume i is prime

        for (j = 3; j * j <= i; j += 2) {
            if (i % j == 0) {
                isPrime = 0;
                break;  // no need to check further
            }
        }

        if (isPrime) {
            printf("%d ", i);
        }
    }

    printf("\n");
    return 0;
}
*/

/*
// Fibonacci series (value limit)
#include <stdio.h>

int main(){
    int limit, t1=0, t2=1, nextTerm;

    printf("Enter a limit: ");
    scanf("%d", &limit);

    printf("Fibonacci series up to %d:\n", limit);

    if (t1 <= limit) printf("%d ", t1);
    if (t2 <= limit) printf("%d ", t2);

    nextTerm = t1 + t2;

    while(nextTerm<=limit){
        printf("%d ", nextTerm);
        t1=t2;
        t2=nextTerm;
        nextTerm = t1+t2;
    }

    return 0;
}
*/

// Enter a number (-ve number to stop)
#include <stdio.h>

int main() {
    int num, sum = 0;

    while (num >= 0) {
        printf("Enter a number (-ve number to stop): ");
        scanf("%d", &num);

        if (num < 0) {
            break;
        }

        sum += num;
    }

    printf("Sum of entered numbers: %d\n", sum);

    return 0;
}
