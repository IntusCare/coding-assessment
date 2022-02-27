function isNumber (value) {
  return typeof value === 'number' && isFinite(value);
}

export function sum (a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return null;
  }

  return a + b;
}

export function subtract (a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return null;
  }

  return a - b;
}

export function divide (a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return null;
  }

  if (b === 0) {
    return null;
  }

  return a / b;
}

export function multiply (a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return null;
  }

  return a * b;
}

export function mean (a) {
  if (a.length === 0) {
    return null;
  }

  for (let num of a) {
    if (!isNumber(num)) {
      return null;
    }
  }

  let numSum = 0;

  a.forEach((num) => {
    numSum = numSum + num;
  });

  return numSum / a.length;
}
