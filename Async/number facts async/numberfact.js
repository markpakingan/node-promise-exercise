// Part 1: Number Facts

//   




//  1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.
//  (Make sure you get back JSON by including the json query key, specific to this API. Details.


let pickedNumber= 4;
let url = "http://numbersapi.com"


async function getFact(pickedNumber){
    res = await axios.get (`${url}/${pickedNumber}?json`)
    
    console.log(res.data.text);
}



// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get
//  the data back, put all of the number facts on the page.


let numbers = [1,2,3,4,5];


async function getMultipleNumbersAsync(numbers){
    res = await axios.get(`${url}/${numbers}?json`)

    console.log(res.data)
}


// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. 
// It’s okay if some of the facts are repeats.

let favoriteNumber=69;
let factsArray = []


async function getFourFactsAsync(favoriteNumber){
    res1 = await axios.get(`${url}/${favoriteNumber}`)
    res2 = await axios.get(`${url}/${favoriteNumber}/math`)
    res3 = await axios.get(`${url}/${favoriteNumber}/date`)
    res4 = await axios.get(`${url}/${favoriteNumber}/trivia`)

    factsArray.push(res1.data)
    factsArray.push(res2.data)
    factsArray.push(res3.data)
    factsArray.push(res4.data)
   

    return factsArray
};


async function displayFacts() {
    const facts = await getFourFactsAsync(favoriteNumber);
    const factsArea = $('#facts-area');
    facts.forEach((fact) => {
      factsArea.append(`<p>${fact}</p>`);
    });
  }
  
  $(document).ready(displayFacts);