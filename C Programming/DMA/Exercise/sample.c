/*
You are performing a mechanical tensile test on 50 different specimens in your lab, and for each specimen, you
want to store its maximum load before fracture (in kN).
You are entering the data manually during the experiment.
Now, if more than 30 specimens have a breaking load greater than 20 kN, then you will extend the
experiment by testing M more specimens.
However, your lab computer has limited memory, so you want to ensure that memory is only allocated when
necessary, and all data (old + new) should be stored together.
Write a C program to store and update this tensile test data using dynamic memory allocation techniques
such as malloc(), realloc(), and free().
*/