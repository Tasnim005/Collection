/*
#include <stdio.h>

int main(){
    int terms, i=1, sum=0;

    printf("Enter no of terms: ");
    scanf("%d", &terms);


    while(i<=terms){
        sum = sum+i;
        i++;
    }
    printf("Sum of first %d natural numbers is %d\n", terms, sum);


    return 0;
}
*/

/*
//Factorial
#include <stdio.h>
int main(){
    int num, fact=1, i=1;

    printf("Enter a number: ");
    scanf("%d", &num);

    while(i<=num){
        fact = fact*i;
        i++;
    }
    printf("Factorial of %d is %d\n", num, fact);

    return 0;
}
*/


/*
#include <stdio.h>

int main(){
    int num, sum=0;

    printf("Enter a number (-ve number to stop): ");
    scanf("%d", &num);

    while(num>=0){
        sum = sum+num;
        printf("Enter a number (-ve nuber to stop): ");
        scanf("%d", &num);
    }

    printf("Sum of all numbers: %d", sum);


    return 0;
}
*/


/*
//Fibonacci sequence
#include <stdio.h>

int main() {
    int limit, t1 = 0, t2 = 1, nextTerm;

    printf("Enter upper limit for Fibonacci sequence: ");
    scanf("%d", &limit);

    
    // Print the first term if it’s within the limit
    if (t1 <= limit) printf("%d ", t1);
    if (t2 <= limit) printf("%d ", t2);

    nextTerm = t1 + t2;

    while (nextTerm <= limit) {
        printf("%d ", nextTerm);
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
    }

    return 0;
}
*/


// Enter a number to reverse



// Enter a number to count its digits