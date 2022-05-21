let n = 10;
let print = "";
let p = 0;

for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if(j>=n+1-i && j<=n-1+i){
            print += String.fromCharCode(p + 65);
            p++;
            if(p == 26){
                p = 0;
            }
        }
        else{
            print += " ";
        }
    }
    print += "\n";
}
console.log(print);