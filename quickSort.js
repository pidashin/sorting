const partition = (arr, start, end) => {
  const pivot = arr[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]]

  return i
}

const quickSort = (arr, start, end) => {
  if (start < end) {
    const pivot = partition(arr, start, end)
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
  }

  return arr
}

module.exports = quickSort
