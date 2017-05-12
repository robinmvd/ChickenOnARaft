/// <reference path="tree.ts"/>

class Game {
    
    private trees:Array<Tree>;
 
    constructor() {
        this.trees = new Array<Tree>();
        // maak meerdere trees aan
        this.trees.push(new Tree(-420, 180));
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        for(let t of this.trees){
            t.move();
        }
                
        requestAnimationFrame(() => this.gameLoop());
    }
} 

