#include <stdio.h>

int main(){
    int num[] = {1, 0 ,15, 27, 97, 45, 103};
    int length = sizeof(num)/sizeof(num[0]);

    int max = num[0];
    int min = num[0];

    for(int i=1; i<length; i++){
        if(num[i]>max){
            max = num[i];
        }
        if(num[i]<min){
            min = num[i];
        }
    }

    printf("Max %d\n", max);
    printf("Min %d\n", min);

    return 0;
}