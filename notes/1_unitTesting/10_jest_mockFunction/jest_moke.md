- in jest we have built-in method to create mock function i.e jest.fn()

```js
const mockFunction = jest.fn();
```

## using buit-in moke function

- this is the function with no implemenation (with no code)

- we can program this mock function to return specifuc value.

```js
const mockFunction = jest.fn();

//to make mockFunction return value
mockFunction.mockReturnValue(1);
const result = mockFunction();
console.log(result); //1

//to make mockFunction return resolved promise
mockFunction.mockReslvedValue(1);
const result = await mockFunction();
console.log(result); //1

//to make mockFunction return rejected promise (to simulate errors)
mockFunction.mockRejectedValue(new Error("error occured...."));
try {
  const result = await mockFunction();
} catch (ex) {
  console.log(ex); //error occured....
}
```

## N.B :-

- if we need to verify if any method (function) is called or not then we can do this with jest mock function

Eg.

```js
const sendMail = jest.fn();
expect(sendMail).toHaveBeenCalled(); //to validate if method is called
expect(sendMail).toHaveBeenCalledWith("abhi"); //to validate if method is called with argument 'abhi'

//to validate if method is called with multiple argument   'abhi' and '23'
expect(sendMail).toHaveBeenCalledWith("abhi", 23);

//alternate way
expect(sendMail.mock.calls[0][0]).toBe("abhi");
expect(sendMail.mock.calls[0][1]).toBe(23);
```
