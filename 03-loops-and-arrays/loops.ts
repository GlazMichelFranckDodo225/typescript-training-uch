for(let i: number = 0; i < 5; i++) {
    console.log(i);   
}

console.log("=================");

let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;

console.log(`Total = ${total}`);


for(let i: number = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

console.log(`Total = ${total}`);

console.log("=================");

let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for(let i: number = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

console.log("=================");

let count = 1

for(let sport of sportsOne) {
    if (sport == "Swimming") {
        console.log(sport + " << My Favorite !"); 

        console.log(`After ${count} Passes.`);
    } else {
        console.log(sport);
        
    }

    count++
}