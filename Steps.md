# TOdo list

###setup:
1. Link css & JavaScript.

####Opdracht 1a:
Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

1. formule: originalStock - sold = tv's to sell
2. Alle originalStock bij elkaar optellen (allOriginalStock)
3. Alle sold bij elkaar optellen (allSold)
4. totaal to sell = allOriginalStock - allSold
5. Moet ooit nog in een functie komen

Input: `[{}, {}, {}, {}]`
Output: number

*Stappen*

1. Choose strategy:
    1. methods map `[{}, {}, {}, {}]` --> originalStock - sold --> [3, 4, 9,11] --> for loop [3, 4, 9,11] --> 27 
    2. Loops `[{}, {}, {}, {}]` --> 27
2.    ToDO list:
    - [x] Make a variable to a store the total
    - [x] inventory.map(() => {});
    - [x] callback functie schrijven voor map
        - [x] parameter: television
        - [x] Log the data we need: television.sold, television.originalStock
        - [x] Do math: const tvsToSell = originalStock - sold
        - [x] console.log(tvsToSell)
        - [x] return the value from the callback: tvsToSell
    - [x] we should have something like: [3, 4, 9, 11]
    - [x] Loop over the array of numbers and add together (google it)      
3. Do Programming (and check each step)
4. Cleanup (refactor)

###Red (werkt niet) -> Green (werk wel, maar slordig(Make it work)) -> Refactor (opschonen(Make it better))

####Opdracht 1b: 
Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina.

1. Choose strategy:
   - Create a element
   -  
2. Make Todolist:
   - [] Make variable for the new element
   - [] Create an element (document.createElement)
   - [] Set content bij changing elements:  element.textContent = total
   - [] appendChild
3. Do programming
4. Cleanup
