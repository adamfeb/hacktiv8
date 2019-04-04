function dataHandling2 (arr) {
  arr.splice(1, 1, 'Roman Alamsyah Elsharawy')
  arr.splice(2, 1, 'Provinsi Bandar Lampung')
  arr.splice(4, 1, 'Pria', 'SMA International Metro')
  return arr
}

function splitFullDate (arrDate) {
  var splitedDate = arrDate[3].split('/')
  return splitedDate
}

function getMonthName () {
  var month = Number(splitFullDate(input)[1]) // just in case ada yang nulis 05 atau 5
  var monthName = ''
  switch (month) {
    case 1:
      monthName = 'Januari'
      break
    case 2:
      monthName = 'Februari'
      break
    case 3:
      monthName = 'Maret'
      break
    case 4:
      monthName = 'April'
      break
    case 5:
      monthName = 'Mei'
      break
    case 6:
      monthName = 'Juni'
      break
    case 7:
      monthName = 'Juli'
      break
    case 8:
      monthName = 'Agustus'
      break
    case 9:
      monthName = 'September'
      break
    case 10:
      monthName = 'Oktober'
      break
    case 11:
      monthName = 'November'
      break
    case 12:
      monthName = 'Desember'
      break
    default:
      monthName = 'Penulisan bulan salah.'
  }
  return monthName
}

function manualSortFullDate () {
  var sortedDate = splitFullDate(input)
  for (var i = 0; i < sortedDate.length - 1; i++) {
    for (var j = i + 1; j < sortedDate.length; j++) {
      if (Number(sortedDate[i]) < Number(sortedDate[j])) {
        var temp = sortedDate[i]
        sortedDate[i] = sortedDate[j]
        sortedDate[j] = temp
      }
    }
  }
  return sortedDate
}

// function autoSortFullDate () {
//   var autoSortedDate = splitFullDate(input)
//   autoSortedDate.sort(function (a, b) { return b - a}) // callback function
//   return autoSortedDate
// }

function joinFullDate () {
  var joinedDate = splitFullDate(input).join('-')
  return joinedDate
}

function sliceFullName (input) {
  var slicedName = input[1].slice(0, 15)
  return slicedName
}

var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

console.log(dataHandling2(input))
console.log(getMonthName())
console.log(manualSortFullDate())
// console.log(autoSortFullDate())
console.log(joinFullDate())
console.log(sliceFullName(input))
