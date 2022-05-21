function decimalToBinary(dec) {
    return (dec >>> 0).toString(2);
}
decimalToBinary();
console.log(decimalToBinary(43));