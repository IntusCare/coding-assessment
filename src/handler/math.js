/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 *
 * @param body
 */
import { sum, subtract, divide, multiply, mean } from '../lib/math';

export function math (body) {
  const { operation, a, b } = body;

  switch (operation) {
    case 'sum':
      return sum(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'divide':
      return divide(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'mean':
      return mean(a);
    default:
      throw new Error('Invalid operation');
  }

}
