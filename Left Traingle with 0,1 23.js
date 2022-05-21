let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        // For every odd column print 1
        if (j % 2 == 1) {
            string += "0";
        }
        else {
            string += "1";
        }
    }
    string += "\n";
}
console.log(string);