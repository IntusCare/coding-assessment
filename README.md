# Math API Endpoint
API endpoint for handling math operations

## Install Dependencies
```
npm i
```

## Unit Test Math Functions
```
npm run test
```

## Run API Server
NOTE: Server starts on port 3000

```
npm start
``` 

## Endpoint: `/math`

This endpoint performs various mathematical operations. It supports all available math functions defined in `/lib/math.js`.

### HTTP Method: `POST`

### Request Body:

The request body must be a JSON object with the following properties:

- `operation`: A string that specifies the operation to perform. It can be one of the following: 'sum', 'subtract', 'divide', 'multiply', 'mean'.
- `a`: A number that represents the first operand, or an array of numbers for the 'mean' operation.
- `b`: A number that represents the second operand. This is not required for the 'mean' operation.

### Response:

The response will be a number that represents the result of the operation.

### Errors:

If the operation is not supported, the API will return an error with the message 'Invalid operation'.

### Examples:

#### Sum:

Request:
```json
{
  "operation": "sum",
  "a": 5,
  "b": 3
}
```

#### Mean:

Request:
```json
{
  "operation": "mean",
  "a": [ 5, 10, 20 ]
}
```

## CURL Examples
```
curl -X POST -H "Content-Type: application/json" http://localhost:3000/math -d '{ "operation": "sum", "a": 4, "b": 3 }'
curl -X POST -H "Content-Type: application/json" http://localhost:3000/math -d '{ "operation": "subtract", "a": 4, "b": 3 }'
curl -X POST -H "Content-Type: application/json" http://localhost:3000/math -d '{ "operation": "multiply", "a": 4, "b": 3 }'
curl -X POST -H "Content-Type: application/json" http://localhost:3000/math -d '{ "operation": "divide", "a": 4, "b": 3 }'
curl -X POST -H "Content-Type: application/json" http://localhost:3000/math -d '{ "operation": "mean", "a": [ 4, 3, 7 ] }'
```

***
Original specifications below this line
***

# Intus Care Coding Assessments

Coding Assessments for Intus Care

## Getting Started 

**Estimated Time:** 1 hour

Thank you for your interest in Intus Care! Please follow the below directions to complete the coding test.

### Requirements

- You MUST use node v16+
- You MUST NOT use the built-in math functions
- You MUST make sure all unit tests pass (these are provided in the __ tests __ folder)
- You MUST make sure all APIs return the expected response (see the comments in the routes file)
- You SHOULD clean up, add comments or any other improvements you believe this application could use.

## Ownership

This repository is wholly-owned by Intus Care and by taking on this assessment you agree to not share this repository, its 
contents, answers or any other information with anyone outside of Intus Care.
