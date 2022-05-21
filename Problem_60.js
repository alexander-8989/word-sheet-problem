let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
    let k = 1;
    for (let j = 1; j <= 2*n-1; j++) {
        if (j>=n+1-i && j<=n-1+i && k) {
            string += "*";
            k = 0;
        }
        else {
            string += " ";
            k = 1;
        }
    }
    string += "\n";
}
console.log(string);