let n =5;
let string = "";

for(let i=1,k=n; i<=n; i++,k--){
    let p = k;
    for(let j=1; j<=n; j++){
        if(j>=i){
            string += p--;
        }
    }
    string += "\n";
}
console.log(string);