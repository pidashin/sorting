const countingSort = require('./countingSort')

test('sort array', () => {
  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

  const expResult = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

  const actualResult = countingSort(arr)

  expect(actualResult).toEqual(expResult)
})
