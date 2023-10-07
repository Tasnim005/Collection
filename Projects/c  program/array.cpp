#include <stdio.h>

int main() {
   int arr[5] = {1, 2, 3, 4, 5};
   int i, j, temp;

   j = 4; // set j to the index of the last element in the array

   for (i = 0; i < j; i++) { // loop through the first half of the array
      temp = arr[i]; // swap elements
      arr[i] = arr[j];
      arr[j] = temp;
      j--; // decrement j to move to the next element in the second half of the array
   }

   // print the reversed array
   for (i = 0; i < 5; i++) {
      printf("%d ", arr[i]);
   }

   return 0;
}