/// <reference path="tree.ts"/>

class Game {
    
    private trees:Tree[] = []
 
    constructor() {
        // de game heeft trees nodig


        
        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen

        
                
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())