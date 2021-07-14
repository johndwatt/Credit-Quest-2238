const game = {
    credits: 0,
    fuel: 100,
    oxygen: 100,
    radiation: 0,
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
        setInterval(function (){
            if (game.credits < 10000) {
                game.credits = game.credits += 100;
            } else if (game.credits >= 100000) {
                game.credits = game.credits += 5000;
            } else {
                game.credits = game.credits += 1000;
            }
            $("#credit-count").text(`Current Credits: ${game.credits}`);
        }, 1000);
    },
    fuelLoss (){
        setInterval(function (){
            game.fuel = game.fuel -= 20;
            $("#fuel-count").text(`Fuel: ${game.fuel}%`);
        }, 3000);
    },
    addFuel (){
        if (game.fuel >= 100){
            game.fuel = 100;
        } else {
            game.fuel = game.fuel += 10;
        }
        $("#fuel-count").text(`Fuel: ${game.fuel}%`);
    },
    
}

$("#start-btn").on("click", game.startGame);
$("#fuel-btn").on("click", game.addFuel)
