function laugh(num) {
    var res = "";
    for (var x = 1; x <= num; x++) {
        res = res + "ha";
    }
    return res + "!";
}

console.log(laugh(3));
