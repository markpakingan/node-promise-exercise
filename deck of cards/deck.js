
let baseURL = "https://deckofcardsapi.com/api/deck"
// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
// Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).


// syntax:
// https://deckofcardsapi.com/api/deck/new/draw/?count=2

// function drawCard(){
//     response = axios.get(`${baseURL}/new/draw/?count=1`)
//     console.log(response.data[0].value);
//     console.log(response.data.suit);
// }


function drawCard() {
    axios.get(`${baseURL}/new/draw/?count=1`)
      .then(response => {
        const card = response.data.cards[0];
        console.log(`You drew the ${card.value} of ${card.suit} card`);
      })
      .catch(error => console.error(error));
  }
  


// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
// Once you have the card, make a request to the same API to get one more card from the same deck.

// $.getJSON(`${baseURL}/new/draw/?count=1`).then(response =>{
//     const card = response.cards[0];
//     console.log(`Your first card is ${card.value} ${card.suit}`);
//     // console.log(response.deck_id);
//     let deck_id = response.deck_id

//     // calls the 2nd API
//     return $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`)
// } ).then(response =>{
//     const card = response.cards[0];
//     console.log(`Your second card is ${card.value} ${card.suit}`);
// })
// .catch(error => console.error(error));



// 3.Once you have both cards, console.log the values and suits of both cards.
// Build an HTML page that lets you draw cards from a deck. When the page loads, 
// go to the Deck of Cards API to create a new deck,
//  and show a button on the page that will let you draw a card. 
// Every time you click the button, display a new card, until there are
//  no cards left in the deck.

// let baseURL = "https://deckofcardsapi.com/api/deck"


let deckId = null;

           

axios.get(`${baseURL}/new/shuffle/?deck_count=1`).then(response =>
    {
        deckId = response.data.deck_id;
        console.log(` the deckID is ${deckId}`)
    }).catch(error => console.error(error));


$('#draw-card-btn').on('click', draw1Card);
  
function draw1Card() {
    axios.get(`${baseURL}/${deckId}/draw/?count=1`)
      .then(response => {
        const card = response.data.cards[0];
        console.log(`Your draw the ${card.value} of ${card.suit}`);  
        let cardImage=card.images.png
        $("#image-container").append(`<img src=${cardImage}>`)
      }).catch(error => console.error(error));
}
  

//   $('#draw-card-btn').on('click', function(){
//     axios.get(`${baseURL}/${deckId}/draw/?count=1`)
//       .then(response => {
//         const card = response.data.cards[0];
//         console.log(`Your draw the ${card.value} of ${card.suit}`);        
//       }).catch(error => console.error(error));

//   });
  

    

  


