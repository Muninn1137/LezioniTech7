const listOfItems= []
const listOfPrices= []

for (i = 0 ; i < 3; i++){
    const newItem = prompt ("Inserisci il nome del prodotto numero" , i)
    listOfItems.push (newItem)
    const newPrice = prompt ("Inserisci il prezzo del prodotto numero" , i)
    listOfPrices.push (newPrice)   
}

console.log(listOfItems)
console.log(listOfPrices)
   