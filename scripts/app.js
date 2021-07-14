

const game = {
    credits: 0,
    fuel: 100,
    oxygen: 100,
    radiation: 0,
    countCreditsInt: 1000,
    setCreditInterval: 0,
    fuelLossInt: 5000,
    setFuelInterval: 0,
    oxygenLossInt: 3000,
    setOxygenInterval: 0,
    radGainInt: 2000,
    setRadInterval: 0,
    setBounceInterval: 0,
    startGame (){
        game.grabShipName();
        game.handleUpgradesAndCredits();
        game.fuelLoss();
        game.oxygenLoss();
        game.radGain();
        game.makeShipBounce();
    }, 
    grabShipName (){
        const shipName = $("#spaceship-name").val();
        $("#named-ship").text(shipName);
    },
    handleUpgradesAndCredits (){
        game.setCreditInterval = setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
            } else if (game.credits >= 100000 && game.credits <= 999999) {
                game.credits = game.credits += 5000;
                $("#spaceship-2").addClass("hidden");
                $("#spaceship-3").removeClass("hidden");
            } else if (game.credits >= 1000000) {
                game.winCondition(game.credits);
            } else {
                game.credits = game.credits += 1000;
                $("#spaceship-1").addClass("hidden");
                $("#spaceship-2").removeClass("hidden");
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
    oxygenLoss (){
        game.setOxygenInterval = setInterval(function (){
            if (game.oxygen <= 0){
                game.loseCondition("oxygen", game.credits);
            } else {
                game.oxygen = game.oxygen -= 20;
            }
            $("#oxygen-count").text(`Oxygen: ${game.oxygen}%`);
        }, game.oxygenLossInt);
    },
    radGain (){
        game.setRadInterval = setInterval(function (){
            if (game.radiation >= 100){
                game.loseCondition("radiation", game.credits);
            } else {
                game.radiation = game.radiation += 20;
            }
            $("#rad-count").text(`Radiation: ${game.radiation}%`);
        }, game.radGainInt);
    },
    addFuel (){
        if (game.fuel >= 100){
            game.fuel = 100;
        } else {
            game.fuel = game.fuel += 10;
        }
        $("#fuel-count").text(`Fuel: ${game.fuel}%`);
    },
    addOxygen (){
        if (game.oxygen >= 100){
            game.oxygen = 100;
        } else {
            game.oxygen = game.oxygen += 20;
        }
        $("#oxygen-count").text(`Oxygen: ${game.oxygen}%`);
    },
    reduceRad (){
        if (game.radiation <= 0){
            game.radiation = 0;
        } else {
            game.radiation = game.radiation -= 50;
        }
        $("#rad-count").text(`Radiation: ${game.radiation}%`);
    },
    loseCondition (statFail, score){
        clearInterval(game.setCreditInterval);
        clearInterval(game.setFuelInterval);
        clearInterval(game.setOxygenInterval);
        clearInterval(game.setRadInterval);
        clearInterval(game.setBounceInterval);
        $("#spaceship-1").addClass("hidden");
        $("#spaceship-2").addClass("hidden");
        $("#spaceship-1").addClass("hidden");
        $("#explosion").removeClass("hidden");
        alert(`GAME OVER: Uh oh! Looks like you failed to maintain your ${statFail}. You accumulated a total of ${score} credits.`);
    },
    winCondition(score){
        clearInterval(game.setCreditInterval);
        clearInterval(game.setFuelInterval);
        clearInterval(game.setOxygenInterval);
        clearInterval(game.setRadInterval);
        clearInterval(game.setBounceInterval);
        alert(`CONGRATULATIONS: You accumulated a total of ${score} credits and are able to retire!`);

    },
    makeShipBounce(){
        game.setBounceInterval = setInterval(function (){
            $("#spaceship-1").toggleClass("animate__animated animate__headShake");
            $("#spaceship-2").toggleClass("animate__animated animate__headShake");
            $("#spaceship-3").toggleClass("animate__animated animate__headShake");
        }, 3000);  
    },
    
}


$("#start-btn").on("click", game.startGame);
$("#fuel-btn").on("click", game.addFuel);
$("#oxygen-btn").on("click", game.addOxygen);
$("#rad-btn").on("click", game.reduceRad);


//WORK IN PROGRESS
/*
    handleUpgradesAndCredits (){
        game.setCreditInterval = setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
                //FIXME: problem - interval is still going at original pace, will need to stop and restart interval for this to work properly 
                //game.fuelLossInt = 5000;
                //game.oxygenLossInt = 3000;
                //game.radGainInt = 2000;
            } else if (game.credits >= 100000) {
                game.credits = game.credits += 5000;
                //game.fuelLossInt = 1000;
                //game.oxygenLossInt = 3000;
                //game.radGainInt = 1000;
            } else {
                game.credits = game.credits += 1000;
                //game.fuelLossInt = 300;
                //game.oxygenLossInt = 3000;
                //game.radGainInt = 1500;
            }
            $("#credit-count").text(`Current Credits: ${game.credits}`);
        }, game.countCreditsInt);
    },
*/