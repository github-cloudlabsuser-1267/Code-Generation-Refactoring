class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3));       // Output: 8
console.log(calc.subtract(5, 3));  // Output: 2
console.log(calc.multiply(5, 3));  // Output: 15
console.log(calc.divide(5, 3));    // Output: 1.6666666666666667