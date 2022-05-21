let n = 5;
let string = "";
let p = 0;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += String.fromCharCode(p + 65);
        p++;
    }
    string += "\n";
}
console.log(string);    