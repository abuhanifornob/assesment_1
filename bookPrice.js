// Write the price of the books that  you have  display the prices if the is lower then 200.

var price = [200, 100, 150, 200, 120, 340, 230];
for (var i = 0; i < price.length; i++) {
    if (price[i] >= 200) {
        continue;
    }
    console.log(price[i]);
}