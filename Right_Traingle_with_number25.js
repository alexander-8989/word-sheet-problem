
    let n = 5;
    let string = "";
      // Iteration to n times
    for (let i = 0; i <= n; i++) {
      // printing spaces
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 1; k <= i; k++) {
        string += k;
      }
      string += "\n";
    }
   
    console.log(string);
  