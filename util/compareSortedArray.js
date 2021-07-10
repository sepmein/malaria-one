function compareSortedArray(array1, array2) {
  const array2Sorted = array2.slice().sort();
  array1.length === array2.length &&
    array1
      .slice()
      .sort()
      .every(function (value, index) {
        return value === array2Sorted[index];
      });
}

export default compareSortedArray;
