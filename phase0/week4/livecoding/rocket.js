function countAnagramDeletion (stringA, stringB) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz'
  var total = 0
  for (var i = 0; i < alpha.length; i++) {
    var counterA = 0
    var counterB = 0
    var selisih = 0
    for (var j = 0; j < stringA.length; j++) {
      if (alpha[i] === stringA[j]) {
        counterA++
      }
    }
    for (var k = 0; k < stringB.length; k++) {
      if (alpha[i] === stringB[k]) {
        counterB++
      }
    }
    selisih = Math.abs(counterA - counterB)
    total += selisih
  }
  return total
}

console.log(countAnagramDeletion('cde', 'abc')) // 4

console.log(
  countAnagramDeletion('ayam', 'maya')
) // 0

console.log(
  countAnagramDeletion(
    'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn',
    'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'
  )
) // 40

console.log(
  countAnagramDeletion(
    'imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln',
    'wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy'
  )
) // 102
