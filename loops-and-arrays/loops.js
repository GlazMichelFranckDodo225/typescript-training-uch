for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("=================");
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
console.log("Total = ".concat(total));
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Total = ".concat(total));
console.log("=================");
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("=================");
var count = 1;
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "Swimming") {
        console.log(sport + " << My Favorite !");
        console.log("After ".concat(count, " Passes."));
    }
    else {
        console.log(sport);
    }
    count++;
}
