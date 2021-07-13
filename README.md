# Project-0-GA
A tomagotchi-type game for Project 0 at General Assembly

=== Brainstorming ===
-A dragon hatching game where you raise a dragon overtime
-A knight that needs to survive in the cold
-An traveling adventurer that needs to snack - title is "the adventurers journey" or something
    warmth, hunger, sleep
    morphs at certain levels to become stronger? level up?
***A space smuggler making deliveries or soemthing - he upgrades his spaceship after a certain number of levels. You ahve to keep the spaceship running and working until you make enough money to retire.***


=== Overall Idea ===
A spaceship that gains credits as it flies through the galaxy. To keep getting credits, you have to keep the spaceship working by pressing buttons on the control panel. Once the player reaches 1 million credits, they have enough to retire and win the game. However, if the spaceship is not maintained, it will blow up. 


=== User Story ===
1. Screen is grayed out, except for a box at the top of the screen. It has a little prompt that explains the backstory of the game (You are a smuggler trying to make enough credits to retire) that includes an input with the title: "Name your spaceship:".
    Below the input there will be a button that says "Start your race to retirement!". This button begins the game.
2. When the game begins, the background is the vast vaccum of space. 
    At the top of the screen is the spaceship's name, with the amount of credits underneath (starting at 0 and increasing by 50 each second). 
    In the center is the spaceship (animated?). 
    Underneath the spaceship is the control panel with 3 bars for fuel, oxygen, and radiation.
        Fuel and oxygen reduce overtime at different, steady intervals, and radiation increases overtime at a steady interval.
        Underneath the bars are buttons that help maintain these stats when pushed. 
        If fuel/oxygen reach 0 or radiation reaches 10, the spaceship blows up and the game ends. 
3. If the user maintains the ship until they have 10,000 credits, thier ship will upgrade (with a new picture or animation).
    The new ship will gain credits at a rate of 500 per second, but will the user will have to move faster to maintain the ship - 2x speed.
        The user will once again get an upgrade at 100,000 credits: the new ship will gain credits at a rate of 2000 per second but the bars will change at 3x the original speed.
4. If the user maintains the ship until they reach 1 million credits, they retire and win the game. 


=== Task Checklist for MVP ===
Create a repo for your tomagotchi pet - DONE
Make a commit after you finish each one of the following:
Instatiate your Tomagotchi
Display a character of your choice on the screen to represent **your spaceship**.
Display the following metrics for **your spaceship**:
- Hunger (1-10 scale) -> **Fuel**
- Sleepiness (1-10 scale) -> **Oxygen**
- Boredom (1-10 scale) -> **Radiation**
- Age -> **Credits**
Add buttons to the screen to **interact and maintain your spaceship**.
Add the ability to name your **spaceship**.
Style the page.
Increase **credits overtime**.
**Change** your **spaceship's fuel, oxygen and radiation** metrics on an interval of your choosing.
Your **spaceship** should **explode** if **fuel, oxygen and radiation** hits **0 or** 10.
**Upgrade your spaceship** at certain **credit levels**.
Animate your **spaceship** across the screen while it's alive.

