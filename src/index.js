export function sum(a = 0, b = 0) {
  return a + b;
}

export function mult(a = 0, b = 0) {
  return a * b;
}

export function log(result) {
  console.log(result);
}

export function assert(expression, result) {
  return expression === result
}
