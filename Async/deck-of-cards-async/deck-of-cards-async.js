
let baseURL = "https://deckofcardsapi.com/api/deck"
// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
// Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).


async function drawCard() {
    res = await axios.get(`${baseURL}/new/draw/?count=1`);

    suit = (res.data.cards[0].suit);
    value = (res.data.cards[0].value);

    console.log(`Your card is ${value} of ${suit}`);
}
  

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
// Once you have the card, make a request to the same API to get one more card from the same deck.


async function draw1Card(){
    res = await axios.get(`${baseURL}/new/draw/?count=1`)

    const suit = (res.data.cards[0].suit);
    const value = (res.data.cards[0].value);
    const deck_id = (res.data.deck_id)


    console.log(`Your card is ${value} of ${suit}`);

    drawNextCard(deck_id);
}


async function drawNextCard(deck_id){
    const res = await axios.get(`${baseURL}/${deck_id}/draw/?count=1`)
    const suit = (res.data.cards[0].suit);
    const value = (res.data.cards[0].value);
    
    console.log(`Your 2nd card is ${value} of ${suit}`);

    console.log(res.data);
}






// 3.Once you have both cards, console.log the values and suits of both cards.
// Build an HTML page that lets you draw cards from a deck. When the page loads, 
// go to the Deck of Cards API to create a new deck,
//  and show a button on the page that will let you draw a card. 
// Every time you click the button, display a new card, until there are
//  no cards left in the deck.

// let baseURL = "https://deckofcardsapi.com/api/deck"


let deckId = null;

getDeckId()

async function getDeckId(){
    let response = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`)

    const deck_id = response.data.deck_id;
    
    console.log(`the deck id is ${deck_id}`);

    deckId = deck_id
}



$('#draw-card-btn').on('click', drawOneCard);
  
async function drawOneCard() {
    response = await axios.get(`${baseURL}/${deckId}/draw/?count=1`)

    const card = response.data.cards[0];

    console.log(`You draw the ${card.value} of ${card.suit}`);  
        
    let cardImage=card.images.png

    $("#image-container").append(`<img src=${cardImage}>`)
}
  
