// Run a loop from 30 to 86. This loop will stop if the values get higher than 44.

var numbers = 86 - 30;
for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}