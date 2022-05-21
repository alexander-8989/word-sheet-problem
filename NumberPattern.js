let n =4;
let p=1;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        string += p++;
    }
    string += "\n";
}
console.log(string);