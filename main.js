// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
//Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
function calculateTvToSellCount() {
  const tvsToSell = inventory.map((television) => {
    return television.originalStock - television.sold;
  });
  let total;
  total = tvsToSell.reduce((a, b) => a + b, 0);
    return total;
}
const totalCount = calculateTvToSellCount();
console.log(totalCount);

//Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
function displayTvToSellCount() {
  const tvToSellElement = document.createElement("h1");
  tvToSellElement.textContent = `We need to sell: ${totalCount} tvs`;
  tvToSellElement.style.color = "red";
//tvToSellElement.className = "sell-counter" Nu kun je hem in styles aanpassen ipv in js
  document.body.appendChild(tvToSellElement);
}
displayTvToSellCount();

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
  const tvNames = inventory.map((television) => {
    return "television type name: " + television.type;
  });
console.log(tvNames);

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
const tvsNoStock = inventory.filter((television) => {
  const soldAllStock = television.originalStock - television.sold;
        return soldAllStock === 0;
});
console.log(tvsNoStock);

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const tvsAmbiLight = inventory.filter((television) => {
  return television.options.ambiLight === true;
});
console.log(tvsAmbiLight);

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
  inventory.sort((a, b) => {
    return a.price - b.price;
  });
console.log(inventory);

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.
function calculateOverallIncome() {
  const overallIncome = inventory.map((television) => {
    return incomeOneTv = television.price * television.originalStock;
  });
  let total;
  total = overallIncome.reduce((a, b) => a + b, 0);
  return total;
}
const totalIncome = calculateOverallIncome();

function displayOverallIncome() {
  const tvSellincome = document.createElement("h1");
  tvSellincome.textContent = `This is total income if all tvs are sold: €${totalIncome},-`;
  tvSellincome.style.color = "blue";
  document.body.appendChild(tvSellincome);
}
displayOverallIncome();