/**
 * Group elements of array by count.
 * @example
 * groupByCount([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 */
export function groupByCount(array, count) {
  const result = [];
  for (let i = 0; i < array.length; i += count) {
    result.push(array.slice(i, Math.min(i + count, array.length)));
  }
  return result;
}
