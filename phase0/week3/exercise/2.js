// https://www.programiz.com/c-programming/examples/pyramid-pattern

// EXAMPLE 1

// function ex1 (input) {
//   var result = ''
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = 1; j <= i; j++) {
//       row += '* '
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex1(5))

// EXAMPLE 2

// function ex2 (input) {
//   var result = ''
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = 1; j <= i; j++) {
//       row += j + ' '
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex2(5))

// function ex3 (input) {
//   var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   var result = ''
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = 0; j < i; j++) {
//       row += alpha[j % 26] + ' '
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex3(30))

// EXAMPLE 4

// function ex4 (input) {
//   var result = ''
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = input; j >= i; j--) {
//       row += '* '
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex4(5))

// ATAU LOGIC LAIN (ganti * dengan j biar keliatan bedanya)

// function ex4 (input) {
//   var result = ''
//   for (var i = input; i > 0; i--) {
//     var row = ''
//     for (var j = 1; j <= i; j++) {
//       row += '* '
//     }
//     if (i > 1) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex4(5))

// EXAMPLE 5

// function ex5 (input) {
//   var result = ''
//   for (var i = input; i >= 1; i--) {
//     var row = ''
//     for (var j = 1; j <=i; j++) {
//       row += j + ' '
//     }
//     if (i > 1) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex5(5))

// EXAMPLE 6

// function ex6 (input) {
//   var result = ''
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = 1; j <= input * 2 - 1; j++) {
//       if (j > input - i && j <= input - i + (2 * i -1)) {
//         row += '* '
//       } else {
//         row += '- '
//       }
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex6(5))

// EXAMPLE 7

// function ex7 (input) {
//   var result = ''
//   var k = 1
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     var l = 0
//     for (var j = 1; j <= input * 2 - 1; j++) {
//       if (j > input - i && j <= input) {
//         row += k + l + ' '
//         l++
//       } else if (j > input && j < input + i) {
//         l--
//         row += k + l - 1 + ' '
//       } else {
//         row += '  '
//       }
//     }
//     if (i < input) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//     k++
//   }
//   return result
// }

// console.log(ex7(5))

// EXAMPLE 8

// function ex8 (input) {
//   var result  = ''
//   for (var i = input; i > 0; i--) {
//     var row = ''
//     for (var j = 1; j <= input * 2 -1; j++) {
//       if (j > input - i && j <= input - i + (2 * i - 1)) {
//         row += '* '
//       } else {
//         row += '  '
//       }
//     }
//     if (i > 1) {
//       result += row + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex8(5))

// EXAMPLE 9 - PASCAL TRIANGLE

// function ex9 (input) {

// #include <stdio.h>
// int main()
// {
//     int rows, coef = 1, space, i, j;

//     printf("Enter number of rows: ");
//     scanf("%d",&rows);

//     for(i=0; i<rows; i++)
//     {
//         for(space=1; space <= rows-i; space++)
//             printf("  ");

//         for(j=0; j <= i; j++)
//         {
//             if (j==0 || i==0)
//                 coef = 1;
//             else
//                 coef = coef*(i-j+1)/j;

//             printf("%4d", coef);
//         }
//         printf("\n");
//     }

//     return 0;
// }

// }

// console.log(ex9(5))

//           1
//         1   1
//       1   2   1
//     1   3   3    1
//   1  4    6   4   1
// 1  5   10   10  5   1 


// EXAMPLE 10

// function ex10 (input) {
//   var result = ''
//   var counter = 1
//   for (var i = 1; i <= input; i++) {
//     var row = ''
//     for (var j = 1; j <= i; j++) {
//       row += counter + ' '
//       counter++
//     }
//     if (i !== input) {
//       result += row  + '\n'
//     } else {
//       result += row
//     }
//   }
//   return result
// }

// console.log(ex10(4))
