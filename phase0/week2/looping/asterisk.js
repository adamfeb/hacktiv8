//
//
// 1. Menyusun Barisan Bintang
//
//

var rows1 = 5

for (var i = 1; i <= rows1; i++) {
  console.log('*')
}

//
//
// 2. Menyusun Barisan Bintang Dengan Nested Looping
//
//

var rows2 = 5

for (var i = 1; i <= rows2; i++) {
  var asterisk = ''
  for (var j = 1; j <= rows2; j++) {
    asterisk = asterisk + '*'
  }
  console.log(asterisk)
}

//
//
// 3. Menyusun Barisan Tangga Dengan Nested Looping
//
//

var rows3 = 5

for (var i = 1; i <= rows3; i++) {
  var asterisk2 = ''
  for (var j = 1; j <= i; j++) {
    asterisk2 = asterisk2 + '*'
  }
  console.log(asterisk2)
}
