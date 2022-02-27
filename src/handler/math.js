import { subtract, sum, divide, mean, multiply } from '../lib/math';

function getResult (body) {
  switch (body.type) {
    case 'sum':
      return sum(body.a, body.b);
    case 'subtract':
      return subtract(body.a, body.b);
    case 'divide':
      return divide(body.a, body.b);
    case 'multiply':
      return multiply(body.a, body.b);
    case 'mean':
      return mean(body.a);
    default:
      return null;
  }
}

/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 *
 * @param body
 */
export function math (body) {
  return {
    result: getResult(body)
  };
}
