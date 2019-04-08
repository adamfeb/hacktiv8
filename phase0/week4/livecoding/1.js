// PSEUDOCODE
/*
READ AND STORE "prices" and "k" with user input

SET initial "i" equals to 0
SET "j" equals to "i" plus 1
SET initial "a" equals to 0
SET sisak equals to "k" 
SET bought equals to 0
SET temp equals to ''

WHILE "i" less than length of prices minus 1
  WHILE "j" less than length of prices
    IF element number "i" in prices more than element number "i" in prices
      WRITE "temp" with element number "i" in prices
      WRITE element number "i" in prices with element number "j" in prices 
      WRITE element number "j" in prices with "temp"
    ENDIF
  ADD 1 to "j"
  ENDWHILE
  ADD 1 to "i"
ENDWHILE

WHILE "a" less than length of prices
  IF sisak minus element number "a" in prices more than or equals to 0
    ADD 1 to "bought"
    CALCULATE sisak minus element number "a" in prices 
    SET sisak with calculation result
  ENDIF
  ADD 1 to "a"
ENDWHILE

SEND "bought" TO DISPLAY
*/

function maximumToys(prices, k) {
  for (var i = 0; i < prices.length - 1; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        var temp = prices[i]
        prices[i] = prices[j]
        prices[j] = temp
      }
    }
  }

  var sisak = k
  var bought = 0
  for (var a = 0; a < prices.length; a++) {
    if (sisak - prices[a] >= 0) {
      bought++
      sisak -= prices[a]
    }
  }
  return bought

}

console.log(maximumToys([3, 7, 2, 9, 4], 15)) // 3
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)) // 4
console.log(maximumToys([1, 2, 3, 4], 7)) // 3
console.log(
maximumToys(
  [
    52952808,
    39586066,
    70403274,
    33392541,
    37992362,
    55743111,
    55380991,
    48022854,
    54843595,
    440
  ],
  100000
)
) // 1