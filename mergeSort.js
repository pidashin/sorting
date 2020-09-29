const mergeSort = arr => {
  const len = arr.length
  if (len < 2) {
    return arr
  }

  const middleIdx = Math.floor(len / 2)
  const left = arr.slice(0, middleIdx)
  const right = arr.slice(middleIdx)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

module.exports = mergeSort
