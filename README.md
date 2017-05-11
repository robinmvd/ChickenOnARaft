# Een kip op een vlot

## Opdracht 1

- Maak meerdere vloten aan in game.ts
- Plaats op elk vlot een random aantal kippen
- Het HTML element van de kip append je aan het HTML element van het vlot
- De kippen komen op de x as netjes naast elkaar te staan
- Game roept de update functie van de vloten aan. 
- Een vlot roept de update functie van zijn kippen aan.

## Opdracht 2

- We gaan de kip bewapenen: geef een kip random wel of geen wapen
- Het html element van de gun staat in het html element van de kip.
- Een wapen moet een verwijzing naar de main game krijgen. Die kan je doorgeven via de constructors.
- Een wapen kan bullet instances aanmaken bv. met een setInterval of na een Event (keyboardEvent of mouseEvent)
- De bullets worden bijgehouden in een array.
- Denk na over in welke class de array van rondvliegende kogels bijgehouden moet worden.
- Zorg dat de update functie van de bullets wordt aangeroepen

### Voorbeeldcode

#### Keyboard and mouse
```
window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
```

#### start en stop Interval
```
class Game {

    intervalId:number;
       
    constructor() {
       this.intervalId = setInterval(() => this.doSomething(), 1000 );
    }
    
    doSomething():void {
        // interval uit zetten
        clearInterval(this.intervalId);
    }
}
```

[Theme song](http://chickenonaraft.com);