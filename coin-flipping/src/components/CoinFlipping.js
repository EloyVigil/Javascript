function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");


const fiveHeads = new Promise((resolve, reject) => {
        let attempts = 0;
        let headsCount = 0;
        while(headsCount < 5 && attempts < 100){
            attempts ++;
            let results = tossCoin();
            console.log(results + " was flipped!");
            if (results === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            console.log(attempts)
            console.log(headsCount)
        }
        if(attempts > 100){
            resolve("It took " + attempts + " to flip heads 5 times in a row!")
        } else {
            reject("Heads was not flipped 5 times in a row")
        }

    });

fiveHeads
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
// console.log( "When does this run now?" );
console.log(fiveHeads);