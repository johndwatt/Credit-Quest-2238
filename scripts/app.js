//console.log("Hello World");
const game = {
    credits: 0,
    fuel: 10,
    oxygen: 10,
    radiation: 0,
    startGame (){
        game.grabShipName();
    }, 
    grabShipName (){
        const shipName = $("#spaceship-name").val();
        $("#named-ship").text(shipName);
    }
    
}
//console.log(game.startGame());
$("#start-btn").on("click", game.startGame);