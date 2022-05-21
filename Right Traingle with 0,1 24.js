let n = 5;
let string = "";
// Iteration to n times
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if(j%2==1){
            string += "1";
        }
        else{
            string += "0";
        }
    }
    string += "\n";
}
console.log(string);