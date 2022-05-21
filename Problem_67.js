let vCount = 0, cCount = 0;

//Declare a string  
let str = "Aman";

//Converting entire string to lower case to reduce the comparisons  
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    //Checks whether a character is a vowel  
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
        vCount++;
    }
    //Checks whether a character is a consonant  
    else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
        cCount++;
    }
}
console.log("Number of vowels: " + vCount);
console.log("Number of consonants: " + cCount);
