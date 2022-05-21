function primeNumber(n) {

    if (n === 2) {
        return 'It is prime';
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return 'It is not prime';
            }
        }
        return 'It is prime';
    }
}

let num = 5;

let value = primeNumber(num);
console.log(value);