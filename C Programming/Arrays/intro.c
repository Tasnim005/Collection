// Syntax: data_type array_name[size];
#include <stdio.h>
#include <string.h>

int main(){
    // Initialize with values
    int numbers[3] = {10, 17, 3};

    // Auto-size initialization
    int num[] = {1, 2, 3, 4, 5};

    char str[] = "abc"; //this is both: a char array and a proper C string
    char arr[] = {'a', 'b', 'c'}; //this is a char array, NOT a string

    
    // Accessing Array Elements
    printf("%d\n", numbers[2]);
    printf("%d\n", num[1]);
    printf("%s\n", str);
    printf("%c\n", arr[0]);


    // Number of elements in an array
    printf("Size of num array is %d\n", sizeof(num) / sizeof(num[2]));
    
    /* sizeof(arr) → total bytes of the array.

    sizeof(arr[0]) → bytes of one element.

    Their ratio gives the number of elements. */

    printf("Size of arr array is %d\n", sizeof(arr) / sizeof(arr[0]));


    // Array length APPLICABLE for char ONLY
    printf("Size of string including 0 is %d\n", sizeof(str));
    printf("Size of string excluding 0 is %d\n", strlen(str)); // Don't forget to include <string.h> header file to use strlen()

    return 0;
}


