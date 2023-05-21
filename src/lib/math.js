function isValid(a) { //Written by Khalid for short-hand and so it's easier to read when used. This function is not exported.
  return !isNaN(a) && a !== null;
}

export function sum (a, b) {
  if (isValid(a) && isValid(b)) {   //Makes sure both a and b are numbers and not null
    return a + b;                   //Adds them together and returns them
  } else {                          //Otherwise return null
    return null;
  }
}

export function subtract(a, b) {
  if (isValid(a) && isValid(b)) {   //Makes sure both a and b are numbers and not null
    return a - b;                   //Adds them together and subtracts them
  } else {                          //Otherwise return null
    return null;
  }
}

export function divide (a, b) {
  if (isValid(a) && isValid(b) && b !== 0) {   //Makes sure both a and b are numbers and not null, and b is not 0
    return a / b;                   //Adds them together and divides them
  } else {                          //Otherwise return null
    return null;
  }
}

export function multiply (a, b) {
  if (isValid(a) && isValid(b)) {   //Makes sure both a and b are numbers and not null
    return a * b;                   //Adds them together and multiplies them
  } else {                          //Otherwise return null
    return null;
  }
}

export function mean (a) {
  if (Array.isArray(a) && a.length > 0) {   //Makes sure that variable a is an array with a length more than 0, alternatively I could've just said a.length instead of also including > 0
    let total = 0;            //Initializes the total count
    for (const x of a) {
      if (isValid(x)) {       //Makes sure every single number in the array is a valid number and not null
        total += x;           //Adds it to the total
      } else {                //Otherwise if even one of them is not valid or not null, then return null
        return null;
      }
    }  
    return total/a.length;    //Mean is calculated from the total sum of the values divided by number of values
  } else {                                  //Otherwise return null
    return null;
  }
}
