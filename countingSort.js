const countingSort = (arr, keyName) => {
  let len = arr.length
  let min = arr[0]
  let max = arr[0]
  let source = keyName ? arr.map(item => item[keyName]) : arr

  // find max and min
  source.forEach(item => {
    if (item < min) {
      min = item
    } else if (item > max) {
      max = item
    }
  })

  // create counting array
  const clen = max - min + 1
  const countingArr = new Array(clen).fill(0)

  source.forEach(v => {
    countingArr[v - min]++
  })

  countingArr.reduce((prev, cur, idx, arr) => {
    arr[idx] = prev
    return prev + cur
  }, 0)

  const result = new Array(len)
  source.forEach(v => {
    const idx = countingArr[v - min]++
    result[idx] = v
  })

  return result
}

module.exports = countingSort
