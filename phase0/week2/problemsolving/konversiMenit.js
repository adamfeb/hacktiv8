function konversiMenit (menit) {
  var mm = menit % 60
  if (String(mm).length === 1) {
    mm = '0' + mm
  }
  return Math.floor(menit / 60) + ':' + mm
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
