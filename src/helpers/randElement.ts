function randElement<T>(arr: T[]): T {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export default randElement;
