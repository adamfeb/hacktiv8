//
//
// 1. Melakukan Looping Menggunakan While
//
//

var i = 2
var j = 20

console.log('LOOPING PERTAMA')
while (i <= 20) {
  console.log(i + ' - I Love Coding')
  i += 2
}
console.log('LOOPING KEDUA')
while (j > 0) {
  console.log(j + ' - I will become fullstack developer')
  j -= 2
}

//
//
// 2. Melakukan Looping Menggunakan For
//
//

console.log('LOOPING PERTAMA')
for (var i = 1; i <=20; i++) {
  console.log(i + ' - I Love Coding')
}

console.log('LOOPING KEDUA')
for (var j = 20; j > 0; j--) {
  console.log(j + ' - I will become fullstack developer')
}

//
//
// 3. Angka Ganjil dan Genap
//
//

// Perulangan Pertama - Ganjil Genap 

for (var i = 1; i <=100; i++) {
  if (i % 2 === 1) {
    console.log('Counter Angka : ' + i + ' - GANJIL')
  } else {
    console.log('Counter Angka : ' + i + ' - GENAP')
  }
}

// Perulangan Kedua - Increment 2 - Kelipatan 3

for (i = 1; i <=100; i +=2) {
  if (i % 3 === 0) {
    console.log(i + ' kelipatan 3')
  }
}

// Perulangan Ketiga - Increment 5 - Kelipatan 6

for (i = 1; i <=100; i +=5) {
  if (i % 6 === 0) {
    console.log(i + ' kelipatan 6')
  }
}

// Perulangan Empat - Increment 9 - Kelipatan 10

for (i = 1; i <=100; i +=9) {
  if (i % 10 === 0) {
    console.log(i + ' kelipatan 10')
  }
}
