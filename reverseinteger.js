//Reverse Integer
//Two Solutions Below
const reverse = function (x) {
  let revNum = 0,
    lastDigit = 0
  while (x !== 0) {
    lastDigit = x % 10
    x = parseInt(x / 10)
    revNum = revNum * 10 + lastDigit
    if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
  }
  return revNum
}

const reverse = (n) => {
  let revNum = (n < 0 ? -1 : 1) * +('' + Math.abs(n)).split``.reverse().join``
  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
  return revNum
}
