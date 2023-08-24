export function sum(a: number,b: number) {
  return a + b;
}

export function factorial(num: number): number {
  if(num === 0) return 1;
  return num * factorial(num - 1);
}

export enum Numbers {
  one = 1,
  two = 2,
  three = 3
}