let n = 4;
let string = "";
let p =0;

for(let i=1; i<=n; i++){
    for(let j=i; j<=n; j++){
        string += " ";
    }
    for(let j=1; j<i-3; j++){
        string += p+i + " ";
        
    }
    for(let j=1; j<=i; j++){
        string += p+i + " ";
        
    }
    string += "\n";
}

let p1=4;
for(let i=1; i<=n; i++){
    for(let j=1; j<=i+1; j++){
        string += " ";
    }
    for(let j=i; j<n-3; j++){
        string += p1-i + " ";
    }
    for(let j=i; j<n; j++){
        string += p1-i + " ";
    }
    string += "\n";
}
console.log(string);