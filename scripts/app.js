

const game = {
    credits: 0,
    fuel: 100,
    oxygen: 100,
    radiation: 0,
    countCreditsInt: 1000,
    setCreditInterval: 0,
    fuelLossInt: 1000,
    setFuelInterval: 0,
    //oxygenInterval: 1000,
    //radInterval: 1000,
    startGame (){
        game.grabShipName();
        game.countCredits();
        game.fuelLoss();
    }, 
    grabShipName (){
        const shipName = $("#spaceship-name").val();
        $("#named-ship").text(shipName);
    },
    countCredits (){
        game.setCreditInterval = setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
            } else if (game.credits >= 100000) {
                game.credits = game.credits += 5000;
            } else {
                game.credits = game.credits += 1000;
            }
            $("#credit-count").text(`Current Credits: ${game.credits}`);
        }, game.countCreditsInt);
    },
    fuelLoss (){
        game.setFuelInterval = setInterval(function (){
            if (game.fuel <= 0){
                game.loseCondition("fuel", game.credits);
            } else {
                game.fuel = game.fuel -= 20;
            }
            $("#fuel-count").text(`Fuel: ${game.fuel}%`);
        }, game.fuelLossInt);
    },
    addFuel (){
        if (game.fuel >= 100){
            game.fuel = 100;
        } else {
            game.fuel = game.fuel += 10;
        }
        $("#fuel-count").text(`Fuel: ${game.fuel}%`);
    },
    loseCondition (statFail, score){
        clearInterval(game.setCreditInterval);
        clearInterval(game.setFuelInterval);
        alert(`GAME OVER: Uh oh! Looks like you failed to maintain your ${statFail}. You accumulated a total of ${score} credits.`);
        //console.log("Game over triggered");
    },
    
}


$("#start-btn").on("click", game.startGame);
$("#fuel-btn").on("click", game.addFuel)
