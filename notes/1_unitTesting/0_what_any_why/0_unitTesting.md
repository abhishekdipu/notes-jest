## Unit Testing

## Popular testing Frameworks are :

1. Jasmine :
   - one of early player in this space.
2. Mocha :
   - it's most popular framework on npm.
   - but by design it doesn't include certain features which are present in other libraries to we need to use it with plugins like "Chai" and "Sinon"
3. Jest :
   - It's newer framework backed and used by facebook.
   - jest is a wrapper around Jasmine with some extra code coverage tool.

- here we'll use **jest** as dev- dependenies

## steps to use:

1. npm i jest --save-dev (need to install as dev dependecy as we won't deploy it to prod env.)
2. add test : jest in package.json

   ```js
   "scripts": {
   "test": "jest"
   }
   ```

   - when we will add more test and modify existing tests then we have to restart our server everytime, this can be ovoided by adding "watchAll" flag to test sript, i.e.

   ```js
   "scripts": {
   "test": "jest --watchAll"
   }
   ```

3. now to run jest from terminal : npm test

- NB: any file ending with name "spec.js" or "test.js" will be treated as test file.
- eg. anyName.test.js or anyName.spec.js will work
- but anyName.1test.js or anyName.1spec.js will not work

## how to write testcases?

- our testcases should not be too general not to specific.
- eg. we want to validate if a greet function returns 'Welcome abhi !' or not then we should not check for extact matching including "!" but just greeting message(welcome abhi) should be enough for validation

- [expect doc](https://jestjs.io/docs/expect)
