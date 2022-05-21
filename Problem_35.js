let n = 5;
let string = "";
let p = 0;

for (let i = 1; i <= n; i++) {
    for (let j = i; j <=n; j++) {
        string += " ";
    }
    for(let j=1; j<=i; j++){   
    string += String.fromCharCode(p + 65);
        p++;
    }
    string += "\n";
}
console.log(string);