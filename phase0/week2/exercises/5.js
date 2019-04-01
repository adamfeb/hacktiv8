function oddEven (repeat) {
  for (var i = 0; i <= repeat; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even')
    } else {
      console.log(i + ' is odd')
    }
  }
}

oddEven(15)
