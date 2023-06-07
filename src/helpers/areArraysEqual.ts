function areArraysEqual(array1: string[], array2: string[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = [...array1].sort();
  const sortedArray2 = [...array2].sort();

  return sortedArray1.every(
    (element, index) => element === sortedArray2[index],
  );
}

export default areArraysEqual;
