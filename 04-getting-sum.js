/*
Get the sum of the numbers of the same position of numbers in two different arrays

4 + 8
6 + 1
7 + 9

console output:

12
7
16

*/

const firstArray = [4, 6, 7];
const secondArray = [8, 1, 9];

for (let i = 0; i < 3; i++) {
  console.log(firstArray[i] + secondArray[i]);
}
