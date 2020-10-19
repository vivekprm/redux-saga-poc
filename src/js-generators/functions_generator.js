/**
 * There is no way for us to stop functions execution in between.
 * It executes all the statements till it reaches the return. 
 * 
 * And we can't return multiple values.
 */
function sayHi() {
    return 'hi';
}

const result = sayHi();
console.log(result);

/**
 * Function generators can return multiple values using yield.
 * And we can pass and control execution of function.
 */
function* sayHiGenerator() {
    yield 'hey';
    yield 'hello';
    yield 'there?';
    return 'hi';
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGeneratorForOf = sayHiGenerator();
for(const iterator of resultGeneratorForOf) {
    console.log(iterator);
}

/**
 * Passing value to generator.
 */
function* newGenerator(){
    yield 'something';
    const final = yield 'give me value';    // Generator pauses here and we can pass some value
    return final;
}

const newGeneratorIt = newGenerator();
console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next('custom value'));
