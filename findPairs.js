const arr = [2, 4, 6, 8, 8, 10]

const sum = 18

let length = arr.length
let condition = length - 1

let high = arr[length - 1]
let low = arr[0]

function findPair(arr) {
  for (let i = 0; i < condition; i++) {
    if (high + low === sum) {
      console.log('Match', high, low)
      return { found: true, pair: [high, low] }
    } else if (high + low > sum) {
      console.log('result is more than sum')
      high = arr[arr.indexOf(high) - 1]
    } else if (high + low < sum) {
      console.log('result is less than sum')
      low = arr[arr.indexOf(low) + 1]
    }
  }

  return { found: false, pair: [] }
}

const obj = findPair(arr)
console.log(obj)
