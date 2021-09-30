
//console.log(inputArray);
const fs = require("fs");

const request = require('request');



// console.log(typeof body);


const fetchBreedDescription = function (inputArray, callback) {
  //let apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q='+ inputArray;
  let apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${inputArray}`;

   request(apiUrl, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
   if(error) { callback("error", null)};
    const data = JSON.parse(body);
    const breed = data[0];
    callback(null, breed.description);
  });




};
//let x = fetchBreedDescription(inputArray);


module.exports = { fetchBreedDescription };



