function addCommasToNumber(number: number) {
  const strNumber = String(number);
  const parts = [];

  for (let i = strNumber.length - 1, j = 0; i >= 0; i -= 1, j += 1) {
    if (j > 0 && j % 3 === 0) {
      parts.unshift(",");
    }
    parts.unshift(strNumber[i]);
  }

  return parts.join("");
}

export default addCommasToNumber;
