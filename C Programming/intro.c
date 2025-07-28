#include <stdio.h>

int main(){

    // Print your name and age
    char name[100];
    int age;

    printf("Insert your name: ");
    scanf("%s", &name);

    printf("Insert your age: ");
    scanf("%d", &age);

    printf("My name is %s and I'm %d years old\n", name, age);

    // Simple calculator (addition only)
    int num1;
    int num2;

    printf("Insert number: ");
    scanf("%d", &num1);
    printf("Insert number: ");
    scanf("%d", &num2);

    printf("Sum is %d\n", num1+num2);

    // Convert Celsius to Fahrenheit
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
    
    // Swap two numbers
    int a;
    int b;
    int temp;

    printf("Input two numbers seperated by space: \n");
    scanf("%d %d", &a, &b);
  
    printf("Before swapping: a=%d, b=%d \n", a,b);

    temp = a;
    a=b;
    b=temp;

    printf("After swapping: a=%d, b=%d \n", a,b);

    return 0;
  

    
}

