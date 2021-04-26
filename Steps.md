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
    - [] Make a variable to a store the total
    - [] inventory.map(() => {});
    - [] callback functie schrijven voor map
        - [] parameter: television
        - [] Log the data we need: television.sold, television.originalStock
        - [] Do math: const tvsToSell = originalStock - sold
        - [] console.log(tvsToSell)
        - [] return the value from the callback: tvsToSell
    - [] we should have somthing like: [3, 4, 9, 11]
    - [] Loop over the array of numbers and add together (google it)      

####Opdracht 1b: 
Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina