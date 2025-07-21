/*
#include <stdio.h>
#include <string.h>

int main() {
    int sum=0,i;
    int numArray[] = {1, 2, 3, 4, 5, 10, 30};

    int length = sizeof(numArray) / sizeof(numArray[0]);

     for(i=0; i<length; i++){
        sum = sum + numArray[i];
        printf("Element %d is %d\n", i, numArray[i]);
    }

    printf("%d\n", sum);


    char str[] = "John"; 
    char vowels[] = {'a', 'e', 'i', 'o', 'u'};

    printf("%d\n", numArray[1]);
    printf("No of elements %d\n", length);
    printf(" %c\n", vowels[1]);
    printf("%s\n", str);
    printf("String Length is %d\n", strlen(str));
    printf("%c\n", str[0]);
    printf("%c\n", str[1]);

   

    return 0;
}
*/

/*
#include <stdio.h>

int main(){
    int i,j;
    int matrix[2][3] = {{1,2,3},{4,5,6}};

    printf("%d\n", matrix[1][2]);

    for(i=0; i<2; i++){
        for(j=0; j<3; j++){
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}
*/

/*
#include <stdio.h>

int main(){
    int terms, i, element, sum=0;

    printf("Enter the no of elements (max 100): ");
    scanf("%d", &terms);

    if(terms>100 || terms<1){
        printf("Enter valid no of terms!");
        return 0;
    }

    printf("Enter %d elements: \n", terms);

    for(i=0; i<terms; i++){
        printf("Element %d: ", i+1);
        scanf("%d", &element);

        sum = sum+element;
    }
    printf("Summation of %d elements: %d\n", terms, sum);

    return 0;
}
*/
