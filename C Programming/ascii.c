// Typecasting related problem
// Converting char to int to get ASCII value
#include <stdio.h>

int main(){
    
    char c1 = 'a';
    int x,y;

    x = (int)c1;
    y = c1;

    printf("%d %d\n", x,y);

    // Let give user the ability to give input
        char userInput;

        printf("Enter a character: \n");

        scanf(" %c", &userInput);

        printf("ASCII Value of input character is %d\n", (int)userInput);

    // ASCII Value to Character
        int num;

        printf("Enter an ASCII Value (integer): \n");

        scanf("%d", &num);

        printf("Character is %c\n", (char)num);

    // Uppercase to lowercase
    char uppercase_character, lowercase_character;
    int asciiNum;

    printf("Enter a character: ");
    scanf(" %c", &uppercase_character);

    asciiNum = (int)uppercase_character;
    printf("ASCII CODE for input character %c is %d\n", uppercase_character,asciiNum);

    lowercase_character = (char)(asciiNum+32);
    printf("Lowercase of input character is %c\n", lowercase_character);

    return 0;
}