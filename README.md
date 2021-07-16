# Project-0-GA
A tomagotchi-type game for Project 0 at General Assembly


=== Overall Game Idea ===
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


///=== GAME CREATION PROCESS ===///
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
28. Add method for upgrading ship at 10,000 credits - decrease interval and increase credits per second 500 - DONE
29. Add a class to update the ship that is displayed to a medium-sized ship - DONE
30. Add method for upgrading ship at 100,000 credits - decrease interval and increase credits per second to 5000 - DONE
31. Add a class to update the ship that is displayed to a large-sized ship - DONE
32. Add win condition for reaching 1 Million credits and retiring - DONE
33. Add game reset to make sure game goes back to start once retirement is reached and acknowleged by user. - DONE
34. Test game functionality and fix any other problems not captured here - DONE
35. Add more advanced styling to main.css - DONE
36. Add padding and margin to make everything look properly spaced - DONE
37. Add a theme with color, fonts, and borders to stylize the page content and buttons - DONE
38. Add animations to the images of the spaceships - DONE
39. Add any other misc styling, animations, and features to make the game come alive - DONE


=== WIREFRAME for MVP ===
![mvp-wireframe](./images/Project-0-Wireframe.png)


=== Task Checklist for MVP ===
1. Create a repo for your tomagotchi pet - DONE
2. Make a commit after you finish each one of the following:
3. Instatiate your Tomagotchi - DONE
4. Display a character of your choice on the screen to represent **your spaceship**. - DONE
5. Display the following metrics for **your spaceship**: - DONE
    - Hunger (1-10 scale) -> **Fuel** - DONE
    - Sleepiness (1-10 scale) -> **Oxygen** - DONE
    - Boredom (1-10 scale) -> **Radiation** - DONE
    - Age -> **Credits** - DONE
6. Add buttons to the screen to **interact and maintain your spaceship**. - DONE
7. Add the ability to name your **spaceship**. - DONE
8. Style the page. -DONE
9. Increase **credits overtime**. - DONE
10. **Change** your **spaceship's fuel, oxygen and radiation** metrics on an interval of your choosing. - DONE
11. Your **spaceship** should **explode** if **fuel, oxygen and radiation** hits **0 or** 10. - DONE
12. **Upgrade your spaceship** at certain **credit levels**. - DONE
13. Animate your **spaceship** across the screen while it's alive. - DONE

MVP - DONE!


=== Stretch goals ===
1. Remove alert for win/loss condition and replace with modals - DONE
2. restart game button - DONE
3. change fonts to make it pretty + font sizes - DONE
4. refactor code to be more programmatic/DRY - DONE
5. go over spacing and margins again, smooth out details in css - DONE
6. add additional images and css animations - DONE
7. add game log with randomly selected phrases when buttons are pushed - SCRAPPED
8. add CSS progress bars to control panel - DONE
9. add select difficulty buttons that change interval speed /w multiplier
10. Rewrite/reformat README file
11. Change control panel stuff to only show up on upgrades - DONE
12. DOUBLE CHECK ALL REQUIREMENTS!!! - DONE

