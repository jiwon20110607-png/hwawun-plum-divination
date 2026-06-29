export function calculateHexagram(numbers: number[]): number {
  if (numbers.length !== 3) {
    throw new Error('정확히 3개의 숫자가 필요합니다');
  }

  const sum = numbers.reduce((a, b) => a + b, 0);
  const hexagramNumber = ((sum - 1) % 64) + 1;

  return hexagramNumber;
}
