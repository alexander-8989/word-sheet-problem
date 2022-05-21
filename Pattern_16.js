
        let n = 5;
        let string = "";

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n - i + 1; j++) {
                string += "*";
            }
            for (let k = 1; k <= 2 * i - 2; k++) {
                string += " ";
            }
            for (let j = 1; j <= n - i + 1; j++) {
                string += "*";
            }
            string += "\n";
        }

        for (let i = 4; i >= 1; i--) {
            for (let j = i; j <= n; j++) {
                string += "*";
            }
            for (let k = 1; k <= (2 * i) - 2; k++) {
                string += " ";
            }
            for (let j = i; j <= n; j++) {
                string += "*";
            }
            string += "\n";
        }
        console.log(string);
  