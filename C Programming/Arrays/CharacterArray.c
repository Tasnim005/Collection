#include <stdio.h>
#include <string.h>

int main(){
    char vowels[] = {'a', 'e', 'i', 'o', 'u'};
    char vowels1[] = {'a', 'e', 'i', 'o', 'u', '\0'};

    printf("%s\n", vowels); //You are telling printf to print a string, but vowels doesn’t end in '\0'. This results in undefined behavior. You might get garbage after u, a crash, or it might "look" correct — depends on memory state.
    printf("%s\n", vowels1);

    printf("\nString Length: %d\n", strlen(vowels)); // Undefined behavior (no '\0')
    printf("String Length: %d\n", strlen(vowels1)); //5
    

    // String
    char str[] = "test";
    printf("%s\n", str);
    printf("String Length: %d\n", strlen(str));



    int length1 = sizeof(vowels)/sizeof(vowels[0]);
    int length2 = sizeof(vowels1)/sizeof(vowels1[0]);

    printf("Number of elements in vowels array: %d\n", length1);
    printf("Number of elements in vowels array: %d\n", length2);

    /*
    '\0' is only required if you're treating the array as a C-style string — that is, something you want to use with string functions like printf("%s", ...), strlen(), strcpy(), etc.

    If you're not using it as a string, there's no need to null-terminate it.
    */
    


    

    return 0;
}