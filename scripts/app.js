const game = {
    credits: 0,
    fuel: 10,
    oxygen: 10,
    radiation: 0,
    startGame (){
        game.grabShipName();
        game.countCredits();
    }, 
    grabShipName (){
        const shipName = $("#spaceship-name").val();
        $("#named-ship").text(shipName);
    },
    countCredits (){
        //console.log("CC works");
        //when button is clicked - DONE, credits go up by a certain amount depending on how many credits the user already has. 
        setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
                //console.log(game.credits);
            } else if (game.credits >= 100000) {
                game.credits = game.credits += 5000;
                //console.log(game.credits);
            } else {
                game.credits = game.credits += 1000;
                //console.log(game.credits);
            }
        }, 1000);
    },
    
}

$("#start-btn").on("click", game.startGame);