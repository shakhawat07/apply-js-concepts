// factorial using for loop
var factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// factorial using function 
function factorialFunction(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var num = 6;
console.log(factorialFunction(num));

// factorial using while loop increasing
function factorialWhileIncrease(num) {
    let factOfNumber = 1;
    let i = 1;
    while (i <= num) {
        factOfNumber = factOfNumber * i;
        i++;
    }
    return factOfNumber;
}
console.log(factorialWhileIncrease(num));

// factorial using while loop increasing
function factorialWhileDecrease(num) {
    let factNumber = 1;
    let i = num;
    while (i >= 1) {
        factNumber = factNumber * i;
        i--;
    }
    return factNumber;
}
console.log(factorialWhileDecrease(num));

// factorial using recursion 
function factorialRecursion(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursion(n - 1);
}
let n = 7
console.log(factorialRecursion(n));