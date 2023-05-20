import * as mathOperation from '../lib/math';
/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 * One exception is the one function I wrote which is the isValid() function and I don't export it
 *
 * @param body
 */
export function math(body) {
  //I didn't see any specifications of body format anywhere so I went with these three keys: operation, a, b
  //The body format is: {"operation": "sum", "a": 45, "b": 62}
  //And it will return { "result": 107 }
  //I noticed in the math.test.js file the result was called "output" instead of "result" so we could potentially keep the name consistent by changing one the key names

  try {
    //mathOperation[body.operation] will match the operation value from the body with any of the exported functions in math.js
    return {
      result: mathOperation[body.operation](body.a, body.b)
    }
  } catch (e) {
    if (e.name === "TypeError" && body?.operation) { //If the error was a type error, then the most likely explanation is that hte function doesn't exist
      return {
        error: "Unable to process the request, perhaps because we do not support that math operation of that name."
      }
    } else {
      //Generic error
      return {
        error: "Error"
      }
    }
  }
}
