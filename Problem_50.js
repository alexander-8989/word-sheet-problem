let n = 5;
let string = "";
let k = 0;

for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
        for (j = k + 1; j < k + i; j++)
            string += (j + "*")
        string += (j++ + "\n")
        k = j
    }
    else {
        k = k + i - 1;
        for (j = k; j > k - i + 1; j--)
            string += (j + "*");
        string += (j + "\n")
    }
}
console.log(string);