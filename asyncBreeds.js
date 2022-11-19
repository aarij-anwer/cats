const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log(`breedDetailsFromFile: Calling readFile for ${breed}...`);
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log(`In readFile's Callback for ${breed}`);
    if (!error) {
      callback(data);
    } else {
      console.log(`No data found for ${breed} or file doesn't exist!`);
    }
  });
};

// we try to get the return value
breedDetailsFromFile('Bombay',(data) => {
  console.log(`Return value: ${data}`);
});

breedDetailsFromFile('Karachi',(data) => {
  console.log(`Return value: ${data}`);
});

breedDetailsFromFile('Balinese',(data) => {
  console.log(`Return value: ${data}`);
});


//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!