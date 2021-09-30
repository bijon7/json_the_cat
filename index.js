const fs = require("fs");;

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require('chai');

const breedName = process.argv.slice(2, 3);

fetchBreedDescription(breedName, (error, description) => {
  console.log(description);
});

const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

//assert.equal(expectedDesc, desc.trim());