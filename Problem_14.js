let n = 10;
let string = "";

for (let i = 1; i < n; i += 2) {
    for (let j = 1; j <= i; j++) {
        if (i % n != 0) {
            string += n - j + 1 + " ";
        }
    }
    string += "\n";
}
console.log(string);