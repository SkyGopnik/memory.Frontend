export function getRandomElements<T>(arr: T[], count: number): T[] {
  const result: T[] = [];
  const usedIndices = new Set<number>();

  while (result.length < count && result.length < arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!usedIndices.has(randomIndex)) {
      result.push(arr[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return result;
}

export function getShuffledElements<T>(array: Array<T>) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
