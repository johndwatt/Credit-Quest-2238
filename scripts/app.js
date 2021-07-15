// === CREDIT QUEST: 2238 - GAME OBJECT ===
const game = {
    //METRICS
    credits: 0,
    upgradeLevel: 1,
    fuel: 100,
    oxygen: 100,
    radiation: 0,
    reactor: 50,
    //INTERVAL SPEEDS
    countCreditsInt: 1000,
    upgradeInt: 1000,
    fuelLossInt: 5000,
    oxygenLossInt: 3000,
    radGainInt: 2000,
    shiftReactorInt: 1000,
    animateBounceInt: 2000,
    //CLEAR INTERVAL PLACEHOLDERS - DO NOT CHANGE!
    setCreditInterval: 0,
    setUpgradeInterval: 0,
    setFuelInterval: 0,
    setOxygenInterval: 0,
    setRadInterval: 0,
    setReactorInterval: 0,
    setBounceInterval: 0,
    startGame (){
        game.grabShipName();
        game.handleCredits();
        game.handleUpgrades();
        game.fuelLoss();
        game.oxygenLoss();
        game.makeShipBounce();
        $("#welcome-container").addClass("hidden");
    }, 
    grabShipName (){
        const shipName = $("#spaceship-name").val();
        $("#named-ship").text(shipName);
    },
    handleCredits (){
        game.setCreditInterval = setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
            } else if (game.credits >= 10000 && game.credits <= 99999){
                game.credits = game.credits += 1000;
            } else if (game.credits >= 100000 && game.credits <= 999999) {
                game.credits = game.credits += 5000;
            } else if (game.credits >= 1000000) {
                game.winCondition(game.credits);
            }
            $("#credit-count").text(`CURRENT CREDITS: ${game.credits}`);
        }, game.countCreditsInt);
    },
    handleUpgrades (){
        game.setUpgradeInterval = setInterval(function (){
            if (game.credits === 10000) {
                $("#spaceship-1").addClass("hidden");
                $("#spaceship-2").removeClass("hidden");
                game.upgradeLevel = 2;
                game.increaseDifficulty();
            } else if (game.credits === 100000){
                $("#spaceship-2").addClass("hidden");
                $("#spaceship-3").removeClass("hidden");
                game.upgradeLevel = 3;
                game.increaseDifficulty();
            }
        }, game.upgradeInt);
    },
    increaseDifficulty (){
        if (game.upgradeLevel === 2){
            $("#rad-container").removeClass("hidden");
            game.radGain();
        } else if (game.upgradeLevel === 3){
            $("#reactor-container").removeClass("hidden");
            game.shiftReactor();
        }
    },
    fuelLoss (){
        game.setFuelInterval = setInterval(function (){
            if (game.fuel <= 0){
                game.loseCondition("fuel", game.credits);
            } else {
                game.fuel = game.fuel -= 20;
            }
            $("#fuel-count").text(`Fuel: ${game.fuel}%`);
            $("#fuel-meter").css(`width`, `${game.fuel}%`);
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
            $("#oxygen-meter").css(`width`, `${game.oxygen}%`);
        }, game.oxygenLossInt);
    },
    radGain (){
        game.setRadInterval = setInterval(function (){
            if (game.radiation >= 100){
                game.loseCondition("radiation", game.credits);
            } else {
                game.radiation = game.radiation += 10;
            }
            $("#rad-count").text(`Radiation: ${game.radiation}%`);
            $("#rad-meter").css(`width`, `${game.radiation}%`);
        }, game.radGainInt);
    },
    shiftReactor (){
        game.setReactorInterval = setInterval(function (){
            let randNum = Math.floor(Math.random() * 2 + 1);
            if (game.reactor >= 100 | game.reactor <= 0){
                game.loseCondition("reactor", game.credits);
            } else {
                if (randNum === 1){
                    game.reactor = game.reactor += 10;
                } else {
                    game.reactor = game.reactor -= 10;
                }
            }
            $("#reactor-count").text(`Reactor: ${game.reactor} degrees`);
            $("#reactor-meter").css(`width`, `${game.reactor}%`);
        }, game.shiftReactorInt);
    },
    addFuel (){
        if (game.fuel >= 100){
            game.fuel = 100;
        } else {
            game.fuel = game.fuel += 10;
        }
        $("#fuel-count").text(`Fuel: ${game.fuel}%`);
        $("#fuel-meter").css(`width`, `${game.fuel}%`);
    },
    addOxygen (){
        if (game.oxygen >= 100){
            game.oxygen = 100;
        } else {
            game.oxygen = game.oxygen += 20;
        }
        $("#oxygen-count").text(`Oxygen: ${game.oxygen}%`);
        $("#oxygen-meter").css(`width`, `${game.oxygen}%`);
    },
    reduceRad (){
        if (game.radiation <= 0){
            game.radiation = 0;
        } else {
            game.radiation = game.radiation -= 20;
        }
        $("#rad-count").text(`Radiation: ${game.radiation}%`);
        $("#rad-meter").css(`width`, `${game.radiation}%`);
    },
    increaseReactorTemp (){
        game.reactor = game.reactor += 5;
        $("#reactor-count").text(`Reactor: ${game.reactor} degrees`);
        $("#reactor-meter").css(`width`, `${game.reactor}%`);
    },
    decreaseReactorTemp (){
        game.reactor = game.reactor -= 5;
        $("#reactor-count").text(`Reactor: ${game.reactor} degrees`);
        $("#reactor-meter").css(`width`, `${game.reactor}%`);
    },
    clearInts (){
        clearInterval(game.setCreditInterval);
        clearInterval(game.setFuelInterval);
        clearInterval(game.setOxygenInterval);
        clearInterval(game.setRadInterval);
        clearInterval(game.setReactorInterval);
        clearInterval(game.setBounceInterval);
    },
    loseCondition (statFail, score){
        game.clearInts();
        $("#spaceship-1, #spaceship-2, #spaceship-3").addClass("hidden");
        $("#explosion").removeClass("hidden");
        $("#loss-container").removeClass("hidden");
        $("#update-loss").text(`Uh oh! Looks like you failed to maintain your ${statFail}. You accumulated a total of ${score} credits.`);
    },
    winCondition(score){
        game.clearInts();
        $("#win-container").removeClass("hidden");
        $("#update-win").text(`You accumulated a total of ${score} credits and are able to retire!`);
    },
    makeShipBounce(){
        game.setBounceInterval = setInterval(function (){
            $("#spaceship-1, #spaceship-2, #spaceship-3").toggleClass("animate__animated animate__headShake");
        }, game.animateBounceInt);  
    },
    
}

// === Event Listeners ===
$("#start-btn").on("click", game.startGame);
$("#fuel-btn").on("click", game.addFuel);
$("#oxygen-btn").on("click", game.addOxygen);
$("#rad-btn").on("click", game.reduceRad);
$("#reactor-up-btn").on("click", game.increaseReactorTemp);
$("#reactor-down-btn").on("click", game.decreaseReactorTemp);

