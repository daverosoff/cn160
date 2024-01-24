#include "stdio.h"

int add_one(int x) {
    return x + 1;
}

int my_x = 10;

int main() {
    printf("%d\n", add_one(my_x));
    return 0;
}