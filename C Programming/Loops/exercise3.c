// First n even numbers (value limit)
/*
#include <stdio.h>

int main(){
    int i=2, limit;

    printf("Enter a limit: ");
    scanf("%d", &limit);

    do{
        printf("%d ", i);
        i+=2;
    }while(i<=limit);

    return 0;
}
*/

/*
// First n even numbers (term limit)
#include <stdio.h>

int main(){
    int i=1, limit, term=0;

    printf("Enter term limit: ");
    scanf("%d", &limit);

    do{
        term = term+2;
        printf("%d ", term);
        i++;
    }while(i<=limit);

    return 0;
}
*/

/*
// Factorial
#include <stdio.h>

int main(){
    int i=1, num, fact=1;

    printf("Enter a number: ");
    scanf("%d", &num);

    do{
        fact=fact*i;
        i++;
    }while(i<=num);

    printf("Factorial of %d is %d", num, fact);
    return 0;

}
    */

/* 
// Fibonacci Sequence (Term limit)
#include <stdio.h>

int main(){
    int i=2, limit, t1=0, t2=1, nextTerm;
    //Initialized i = 2 because t1 and t2 are already printed as the 1st and 2nd terms

    printf("Enter term limit: ");
    scanf("%d", &limit);

    printf("%d %d ", t1,t2);

    do{
        nextTerm = t1+t2;
        printf("%d ", nextTerm);
        t1=t2;
        t2=nextTerm;
        i++;
    }while(i<limit);

    return 0;
}
*/

/*
// Fibonacci Sequence (Value limit)
#include <stdio.h>

int main() {
    int t1 = 0, t2 = 1, nextTerm;

    int max;
    printf("Enter maximum value: ");
    scanf("%d", &max);

    // First term
    if (t1 <= max) printf("%d ", t1);
    // Second term
    if (t2 <= max) printf("%d ", t2);

    nextTerm = t1 + t2;

    do {
        printf("%d ", nextTerm);
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
    }while (nextTerm <= max);

    return 0;
}
*/


// Enter a number (negative number to stop)
#include <stdio.h>

int main() {
    int num, sum=0;

    printf("Enter a number (negative number to stop): ");
    scanf("%d", &num);

    do {
        sum = sum+num;
        printf("Enter a number (negative number to stop): ");
        scanf("%d", &num);
    }while(num>0);

    printf("Sum: %d", sum);


    return 0;
}