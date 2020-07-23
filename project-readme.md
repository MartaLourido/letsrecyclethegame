# Let's Recycle - The Game
## Links


### Trello
[Link url]( https://trello.com/b/RXkes4nE/lets-recycle-my-first-game)


### Git
[Link Repo](https://github.com/MartaLourido/letsrecyclethegame)
[Link Deploy](https://martalourido.github.io/)


### Google Drive Slides
[Link Slides](https://docs.google.com/presentation/d/1GLfSQp62vIQezthEf9sqkQHMKG8Lq8LRLvl2QsfO43M/edit?usp=sharing)


## Description
My project consists of an interactive recycling game, in which in the first level there is simply a bin and it rains recyclable waste and you have to pick it up with the bin.


## MVP (DOM - CANVAS)
-The game has a bin wich can that moves horizontally
-The trash falls vertically
-The trash appears from the top of the screen
-The player will score points as he/she picks up trash, 1 item = 1 point.


## Backlog

- I have to add a scoreboard
- Improve the game with colored bins to choose according to the type of trash that falls

## Data structure
Classes and methods definition.

- buildDom(){}
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
- draw(){}
- drawCanvas(){}
- clearCanvas(){}
- gameOver(){}
- addEventListener (){}
- drawImage(){}
- clearInterval(){}
- gitmove(){}



## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task


* main - buildDom
* main - buildSplashScreen
* main - addEventListener
* main - buildGameScreen
* main - buildGameOverScreen
* game - startLoop
* game - buildCanvas
* game - updateCanvas
* game - drawCanvas
* game - collisionLeft
* game - collisionRight
* game - collisionBotton
* game - checkCollision
* game - GameOver
* game - addEventListener
* Bin - drawImage
* Bin - move
* Trash - trashImage
* Trash - trashFalls


