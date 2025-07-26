#include <stdio.h>
#include <string.h>

int main(){
    char names[3][10] = {"Alice", "John", "Jonathan"};
    int length = sizeof(names)/sizeof(names[0]);

    for(int i=0; i<3; i++){
        printf("Name %d: %s\n", i+1, names[i]);
    }

    return 0;
}