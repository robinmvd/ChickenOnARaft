/// <reference path="tree.ts"/>

class Game {
    
    private trees:Array<Tree>;
 
    constructor() {
        this.trees = new Array<Tree>();
        
        // plaats trees in de array
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
                
        requestAnimationFrame(() => this.gameLoop());
    }
} 

