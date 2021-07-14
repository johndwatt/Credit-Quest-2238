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
    Next to the spaceship on the right side of the screen is the control panel with 3 bars for fuel, oxygen, and radiation.
        Fuel and oxygen reduce overtime at different, steady intervals, and radiation increases overtime at a steady interval.
        Underneath the bars are buttons that help maintain these stats when pushed. 
        If fuel/oxygen reach 0 or radiation reaches 10, the spaceship blows up and the game ends. 
3. If the user maintains the ship until they have 10,000 credits, thier ship will upgrade (with a new picture or animation).
    The new ship will gain credits at a rate of 500 per second, but will the user will have to move faster to maintain the ship - 2x speed.
        The user will once again get an upgrade at 100,000 credits: the new ship will gain credits at a rate of 5000 per second but the bars will change at 3x the original speed.
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


=== Breakdown of Milestones ===
1. Finish overall planning on README file - DONE
2. Finish fleshing out with: add explanation of what project is, why I made it, explanation of technologies used, etc. 
3. Reformat README to be half sales-pitch/half explanation
4. Create wireframe to visualize the final product on the screen - DONE
5. Add to README file - DONE
7. Index.html: Add boilerplate, links to css and js file, and link to jQuery - DONE
8. Add semantic HTML: a header, main, aside, and footer - DONE
9. Put content in header: title, backstory paragraph, input for spaceship name, button to start game - DONE
10. Put content in main: img for background, imgs for 3 spaceships - DONE
11. Put content in aside: bars/counts for fuel/oxygen/radiation, buttons to increase/decrease each of those stats - DONE
12. Put content in footer: author name, any attributions for content used, link to github? - DONE
13. Assign classes/ids, add any necessary spans/divs, other appropriate content - DONE
14. Add CSS defaults/basics to main.css - change spacing and any icons/interactive things that will influence how the JS will function - DONE
15. app.js: Create game class/object - add key/value pairs for starting: credits, fuel, oxygen, and radiation - DONE
16. Add method to start the game after user inputs spaceship name and clicks button - DONE
17. Add method to increase credits by appropriate amount each second - DONE
18. Add method to show increase in credits on game screen - DONE
19. Add method to reduce fuel supply at interval - DONE
20. Add method to maintain fuel supply via button click - DONE
21. Add lose condition if fuel reaches 0, cap fuel at 10 - DONE
22. Add method to reduce oxygen supply at different interval- DONE
23. Add method to maintain oxygen supply via button click - DONE
24. Add lose condition if oxygen reaches 0, cap oxygen at 10 - DONE
25. Add method to increase radiation at another interval - DONE
26. Add method to reduce radiation via button click - DONE
27. Add lose condition if radiation reaches 10, cap radiation at 0 - DONE
28. Add method for upgrading ship at 10,000 credits - decrease interval and increase credits per second 500 - IN PROGRESS
29. Add a class to update the ship that is displayed to a medium-sized ship - DONE
30. Add method for upgrading ship at 100,000 credits - decrease interval and increase credits per second to 5000 - IN PROGRESS
31. Add a class to update the ship that is displayed to a large-sized ship - DONE
32. Add win condition for reaching 1 Million credits and retiring - DONE
33. Add game reset to make sure game goes back to start once retirement is reached and acknowleged by user. 
34. Test game functionality and fix any other problems not captured here - DONE
35. Add more advanced styling to main.css - DONE
36. Add padding and margin to make everything look properly spaced - IN PROGRESS
37. Add a theme with color, fonts, and borders to stylize the page content and buttons - DONE
38. Add animations to the images of the spaceships - DONE
39. Add any other misc styling to make the game come alive - DONE

A. Icebox/Stretch Goals
    1. Add a log with various points documenting when the buttons are clicked - example: "Added fuel to spaceshipName" when user clicks add fuel button
    2. Add new bars and buttons for additional stats the user should keep track of when the spaceship upgrades
    3. Alter how the stats change to a random interval or a random amount at each interval (or both!) to make the game more dynamic and challenging
    4. Add a method for random events that drastically change the ships stats with a log message to increase immersion. 
    5. Add a way to stop the start game button from being pushed more than once
    6. refactor code to be more programmatic


=== WIREFRAME for MVP ===
![mvp-wireframe](./images/Project-0-Wireframe.png)
