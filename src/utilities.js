export function sum(a,b) {
  return a + b;
}

/**
 * 
 * @param {number} num
 * @returns {number}
 */

export function factorial(num) {
  if(num === 0) return 1;
  return num * factorial(num - 1);
}

console.log("hello guys");