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
2. Make Todolist:
   - [x] Make variable for the new element
   - [x] Create an element (`document.createElement`)
   - [x] Set content bij changing elements: `element.textContent = total`
   - [x] appendChild
3. Do programming
4. Cleanup


####Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
1. Choose strategy:
    - Use the map methods to get the tv-types
2. Make Todolist:
    - [x] Make a variable to put an array method in
    - [x] inventory.map(() => {});  
    - [x] Create the method and log it
3. Do programming
4. Cleanup

####Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
1. Choose strategy:
    - Use the filter method on the array to get the tvs that have no stock left
2. Make Todolist:
    - []  Make a const to store total in
    - []  inventory.filter(() => {});
    - []  Write a callback function for filter
    - []  Filter the tv's that have sold the same amount as the stock (have no tvs left)
    - []  return those tvs
3. Do programming
4. Cleanup

####Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
1. Choose strategy:
-  Use the filter function to filter the tvs that have ambilight
2. Make Todolist:
    - []  make a variable to put the array method in
    - []  inventory.filter(() => {});
    - []  return the tvs that have ambilight
3. Do programming
4. Cleanup

####Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
1. Choose strategy:
-  Use the sort method
2. Make Todolist:
    - []  inventory.sort((a, b) => {})
    - []  a.price - b.price
    - []  log the new list 
3. Do programming
4. Cleanup