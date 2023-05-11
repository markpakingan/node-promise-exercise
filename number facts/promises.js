// Part 1: Number Facts

//   




//  1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.
//  (Make sure you get back JSON by including the json query key, specific to this API. Details.


let pickedNumber= 4;
let url = "http://numbersapi.com"

$.getJSON(`${url}/${pickedNumber}?json`).then(data => {
    console.log(data)
});



// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get
//  the data back, put all of the number facts on the page.


let numbers = [1,2,3,4,5];

$.getJSON(`${url}/${numbers}?json`).then(data => {
    console.log(data)
});



// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. 
// It’s okay if some of the facts are repeats.

// let favoriteNumber=7;
// let factsArray = []

// function getFourFacts(favoriteNumber){
//     factsArray.push(axios.get(`${url}/${favoriteNumber}`))
// };

// Promise.all(getFourFacts)
//     .then(facts => (console.log(facts)))
//     .catch(err => console.log(err))


Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  
