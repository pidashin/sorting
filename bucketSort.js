const insertionSort = require('./insertionSort')

const defualtBucketSize = 5

const bucketSort = arr => {
  const len = arr.length
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }

  const bucketCounts = Math.floor((max - min) / defualtBucketSize) + 1
  const buckets = new Array(bucketCounts).fill([])

  for (let i = 0; i < len; i++) {
    const bucketIdx = Math.floor((arr[i] - min) / defualtBucketSize)
    buckets[bucketIdx].push(arr[i])
  }

  const result = []
  for (let i = 0; i < bucketCounts; i++) {
    insertionSort(buckets[i])
    for (let j = 0; j < buckets[i].length; j++) {
      result.push(buckets[i][j])
    }
  }

  return result
}

module.exports = bucketSort
