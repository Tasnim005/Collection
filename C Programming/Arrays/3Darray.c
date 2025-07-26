// MULTIDIMENSIONAL ARRAY (3D ARRAY)
#include <stdio.h>

int main(){
    float arr[2][3][3] = {
       {{1,3,5},{7,9,11},{13,1.5,17}},
       {{19,21,23},{2.5,27,29},{31,33,3.5}}
    };

    int i,j,k;

    for(k=0; k<2; k++){
        for(i=0; i<3; i++){
            for(j=0; j<3; j++){
                printf("%.2f ", arr[k][i][j]);
            }
            printf("\n");
        }

        printf("\n\n");
    }

    return 0;
}