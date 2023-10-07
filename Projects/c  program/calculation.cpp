#include<stdio.h>
#include<math.h>

int main()
{
    printf("%f\n", 8.9);
    printf("%f\n", 8.9 + 6);

    /*When I do math with two integers it's going to give us an integer back. But, if I do math with a floating point number and integer it will give us a Floating-point number back. */

    //This code won't run
    // printf("%f", 8 + 6);

    //Let's divide!
    printf("%d\n", 5 / 4);
    printf("%f\n", 5 / 4.0);

    /*In the 1st case(integer type format specifier is used), we will get 1. That is, when we just do math with two integers we're gonna get an integer back.
    In the 2nd case, we are gonnna get the entire answer back
     */

    // Working with exponents
    printf("%f\n", pow(2, 3));
    printf("%f\n", pow(4, 5));
    // Working with square roots
    printf("%f\n", sqrt(36));

    printf("%f\n", ceil(36.326));
    printf("%f\n", floor(36.326));

    
    /*But remember to use "math.h" header file in the very beginning*/


    return 0;
}