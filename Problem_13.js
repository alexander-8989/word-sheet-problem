let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    let p =1;
    for(let j=i; j<=n; j++){
        string += " ";
    }
    for(let j=1; j<i; j++){
        string += p++;
    }
    for(let j=1; j<=i; j++){
        string += p--;
    }
    string += "\n";
}
console.log(string);