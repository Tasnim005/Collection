/*
// First n even numbers
#include <stdio.h>

int main(){
    int i, num;

    printf("Enter a number: ");
    scanf("%d", &num);

    
    for (i = 2; i <= num; i+=2) {         
       printf("%d ", i);
    }
   

    return 0;
}
*/

/*
// Timestable
#include <stdio.h>

int main(){
    int num, i, sum;

    printf("Enter a number whose timestable you want: ");
    scanf("%d", &num);

    for(i=1; i<=10; i++){
        printf("%d x %d = %d\n", num, i, num*i);
    }

    return 0;
}
*/

/*

// Sum of n natural numbers
#include <stdio.h>

int main(){
    int num, i, sum=0;

    printf("Enter a number: ");
    scanf("%d", &num);

    for(i=1; i<=num; i++){
        sum = sum+i;
    }
    printf("Sum of the first %d natural numbers: %d\n", num, sum);

    return 0;
}
*/


/*

//Factorial
#include <stdio.h>

int main(){
    int num,i,sum=1;

    printf("Enter an integer: ");
    scanf("%d", &num);

    for(i=1; i<=num; i++){
        sum = sum*i;
    }
    printf("Factorial of %d is %d\n", num, sum);

}

*/

/*
// Nested for loop - Type 1***
#include <stdio.h>

int main(){
    int i, j, row, column;

    printf("Enter row & column number: ");
    scanf("%d %d", &row, &column);

    
    for (i = 1; i <= row; i++) {         
        for (j = 1; j <= column; j++) {  
            printf("*");
        }
        printf("\n");
    }
   

    return 0;
}
*/


/*
// Nested for loop - Type 2***
#include <stdio.h>

int main(){
    int i, j, num;

    printf("Enter a number: ");
    scanf("%d", &num);

    
    for (i = 1; i <= num; i++) {         
        for (j=1; j<=i; j++) {  
            printf("* ");
        }
        printf("\n");
    }
   

    return 0;
}
*/


/*
// Checking for Prime Number
#include <stdio.h>

int main(){
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num <= 1) {
        printf("%d is not a prime number\n", num);
        return 1;
    }

    if (num == 2) {
        printf("%d is a prime number\n", num);
        return 0;
    }

    if (num % 2 == 0) {
        printf("%d is not a prime number\n", num);
        return 1;
    }

    // A prime number is divisible only by 1 and itself. So when checking for divisors, you only need to test up to √num, and you should never test num itself

    for (int i = 3; i * i <= num; i += 2) { //i*i <= num is more efficient than i<num because no factors of num can be larger than its square root.
        if (num % i == 0) {
            printf("%d is not a prime number\n", num);
            return 1;
        }
    }

    // If we reach here, number is prime
    printf("%d is a prime number\n", num);
    return 0;
}


/*
// Nested for loop - Prime Number Series ***
#include <stdio.h>

int main() {
    int limit, i, j, isPrime;

    printf("Enter a limit: ");
    scanf("%d", &limit);

    if (limit >= 2) {
        printf("2 ");
    }

    for (i = 3; i <= limit; i += 2) {
        isPrime = 1;  // assume i is prime

        for (j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = 0;  // i is not prime
                break;
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
// Fibonacci Series ***

#include <stdio.h>

int main() {
    int terms, i;
    long long int t1 = 0, t2 = 1, nextTerm;

    printf("Enter the number of terms: ");
    scanf("%d", &terms);

    if (terms <= 0) {
        printf("Invalid number of terms.\n");
        return 1;
    }

    printf("Fibonacci Series: ");

    for (i = 1; i <= terms; i++) {
        printf("%lld ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }

    printf("\n");
    return 0;
}

*/