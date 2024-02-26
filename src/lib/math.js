/*
 * This file contains math functions for use with the math API route.
 * Invalid inputs will return null.
 */

export function sum (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a+b;
}

export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a-b;
}

export function divide (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  if (b === 0) {
    // throw new Error('Cannot divide by zero');
    return null;
  }
  return a/b;
}

export function multiply (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a*b;
}

// average an array of numbers. if any of the numbers are null or undefined, return null
export function mean (a) {
  if (!Array.isArray(a)) {
    return null;
  }
  if (a.length === 0) {
    return null;
  }
  if (a.some((val) => val === null || val === undefined)) {
    return null;
  }

  return a.reduce((acc, val) => acc + val, 0) / a.length;
}
