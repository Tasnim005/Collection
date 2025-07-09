#include <stdio.h>

int main(){

    // Implicit Type Conversion (Type Promotion)
        int a = 5;
        float x;

        x = a; // x is automatically promoted to float  by the compiler.
        

        printf("%f\n", x);


    //  Explicit Type Conversion (Typecasting)
        float z = 127.65;
        int b, c, d, e;

        b = z;               // implicit: truncates to 127
        c = (int)z;          // explicit: truncates to 127

        // Floating-point rounding
        d = z + 0.5;         // implicit: still truncates to 127
        e = (int)(z + 0.5);  // explicit: rounds to 128



    // Division Behavior
        int p=5, q=2;
        float f, g,h,i;

        f = p/q; //impicit
        g = (float)(p/q); // explicit 
        h= (float)p/(float)q; // explicit 
        i = (float)p/q; // explicit 

        printf("%d %d %d %d\n", b,c,d,e);
        printf("%f %f %f %f\n", f,g,h,i);

    return 0;
}

