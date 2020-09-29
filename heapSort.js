const buildMaxHeap = arr => {
  const len = arr.length
  const layer = Math.floor(len / 2)
  for (let i = layer; i >= 0; i--) {
    heapify(arr, i, len)
  }
}

const heapify = (arr, i, len) => {
  const left = 2*i + 1
  const right = 2*i + 2
  let largest = i

  if(left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if(right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if(largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest, len)
  }
}

const heapSort = (arr) => {
  let len = arr.length
  buildMaxHeap(arr)

  for(let i = len - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    len = len - 1
    heapify(arr, 0, len)
  }

  return arr
}

module.exports = heapSort