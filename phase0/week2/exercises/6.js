function assignGrade (score) {
  if (typeof score !== 'number') {
    return 'Anda hanya dapat memasukkan angka'
  } else if (score > 100) {
    return 'Batas maksimal pemberian nilai adalah 100'
  } else if (score < 0) {
    return 'Batas minimum pemberian nilai adalah 0'
  } else if (score >= 0 && score < 60) {
    return 'Anda mendapatkan nilai F'
  } else if (score >= 60 && score < 70) {
    return 'Anda mendapatkan nilai D'
  } else if (score >= 70 && score < 80) {
    return 'Anda mendapatkan nilai C'
  } else if (score >= 80 && score < 90) {
    return 'Anda mendapatkan nilai B'
  } else {
    return 'Anda mendapatkan nilai A'
  }
}

console.log(assignGrade(100))