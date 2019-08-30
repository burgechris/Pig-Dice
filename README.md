# Pig Dice

#### Web application allows two users to play a friend game of chance and strategy, 8-28-2019

#### By Christopher Burge & Dominique Youmans

## Description

## This application is a re-creation of the classic game 'Pig Dice'.  Each turn, a player repeatedly rolls a dice until either a 1 is rolled or the player decides to "hold":

##If the player rolls any other number, it is added to their turn total and the player's turn continues.
##If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
##The first player to score 100 or more points wins.


## Setup/Installation Requirements

* Navigate to website
* Type in name(s) in player1/player2 fields
* Click New Game to start a new Game

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Player 1 roll dice | Clicks Roll | The dice rolls a 5 |
| This number is added to the total | 5 | Total: 5 |
| Player 1 rolls again | The dice rolls a 3 | Total: 8 |
| Player 1 clicks hold | Clicks hold | Player score: 8 |
| Switches to Player 2 | Clicks roll | The dice rolls a 6, Total: 6 |
| Player 2 rolls a 1 | 1 | Total: 0 and turn ends |
| Player 1 score reaches 100 | 100 | Player 1 wins |


## Known Bugs
  - The only known bugs are in the scoring. Working on those. The alert could use a bit more personalization.



## Technologies Used

JavaScript and JQuery

Copyright (c) 2019 **Christopher Burge & Dominique Youmans**
