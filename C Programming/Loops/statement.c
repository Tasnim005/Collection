#include <stdio.h>

int main(){
    int i, j, k = 1;

    // break Statement
    for(i=1; i<=10; i++){
        printf("i = %d ", i);
        if(i==3){
            break; // exits the loop when i is 3
        }
    }

    printf("\n");

    // Continue Statement
    for(j=1; j<=10; j++){
        if(j==7){
            continue; //  // skips this iteration when j is 7
        }
        
        printf("j = %d ", j);

    }

    printf("\n");

    // goto Statement
    if(k=1){
        goto label;
    }

    printf("This line will be skipped\n");

    label: 
     printf("This is after skip\n");

    return 0;

}