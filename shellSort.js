const shellSort = arr => {
  const len = arr.length
  let gap = Math.floor(len / 2)

  while (gap >= 1) {
    for (let i = 0; i < len; i++) {
      for (let j = i; j >= 0; j -= gap) {
        if (arr[j] < arr[j - gap]) {
          [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
        }
      }
    }
    gap = Math.floor(gap / 2)
  }

  return arr
}

module.exports = shellSort
