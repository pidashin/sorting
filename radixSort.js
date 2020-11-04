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

  //find digit
  let maxDigit = 0
  while(max > 0) {
    maxDigit++
    max = Math.floor(max / 10)
  }

  const buckets = new Array(bucketCounts)
  let currentDigit = 1 

  while(currentDigit <= maxDigit) {
    // init buckets
    for(let i = 0; i < bucketCounts; i++) {
      buckets[i] = []
    }

    // arrange buckets
    for(let i = 0; i < len; i++) {
      const val = arr[i]
      const LSD = Math.floor(val / Math.pow(10, currentDigit - 1)) % 10
      console.log(val, currentDigit, LSD)
      buckets[LSD].push(val)
    }

    // reflect back to source
    let dataIdx = 0
    for(let i = 0; i < buckets.length; i++) {
      const bucket =  buckets[i]
      if(bucket.length > 0) {
        for(let j = 0; j < bucket.length; j++) {
          arr[dataIdx++] = bucket[j]
        }
      }
    }

    currentDigit++
  }

  return arr
}

module.exports = radixSort