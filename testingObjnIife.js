console.log("working well");




const game = {
    'suspect': [
        {
           name: "Rusty",
           color: "Orange" 
        },
        {
            name: "Miss Scarlet",
            color: "Red"
        }
    ]
}

console.log(game['suspect']);

(function arrLoopThrough() {
    game.suspect.forEach(sus => {
        console.log(`${sus.name} loves ${sus.color}`)
    });
})();


(function objLoopThrough() {
    for(let key in game) {
        console.log(game[key]);
    }
})();