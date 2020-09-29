const radixSort = (arr) => {
  const bucketCounts = 10
  const len = arr.length

  // find max
  let max = arr[0]
  for(let i = 1; i < len; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }

  const radix = 10
  const dev = 1
  const buckets = new Array(bucketCounts).fill([])

  for(let i = 1; i <= max; i++, radix *= 10, dev *= 10) {
    for(let j = 0; j < len; j++) {
      const bucketsIdx = Math.floor((arr[j] % radix) / dev)
      buckets[bucketsIdx].push(arr[j])
    }

    let pos = 0
    for(let j = 0; j < bucketCounts; j++) {
      for(let k = 0; k < buckets[j].length; k++) {
        arr[pos++] = buckets[j][k]
      }
    }
  }
}

return radixSort