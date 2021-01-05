function polybius(input, encode = true) {
  // lowercase all entries 
  const lowerCaseInput = input.toLowerCase();
  let output = "";
  // if encode is true run encode.
  if (encode) {
    for (let letter = 0; letter < lowerCaseInput.length; letter++) {
      output += encodeThis(lowerCaseInput[letter]);
    }
  } else {
  for (let letter = 0; letter < lowerCaseInput.length; letter++) {
    return decodeThis(lowerCaseInput);
  }
  }
  return output;
}


//   > > >  HELPER FUNCTIONS
// create the literal polysquare
const SQUARE = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "(i/j)", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
]

function encodeThis(letter) {
  // if the letter doesn't exist in the square, return same letter
  //   used for ignoring spaces and special characters
  if (!SQUARE.some((arr) => arr.some((str) => str.includes(letter)))) return letter;

  let polybiusNumber = "";

  for (let row in SQUARE) {
    const currentRow = SQUARE[row];
    // find the row with the correct letter
    if (currentRow.some((entry) => entry.includes(letter))) {
      // find column and row number of letter
      const colNumber = currentRow
        .findIndex((column) => column.includes(letter)) + 1;
      const rowNumber = SQUARE
        .findIndex((thisRow) => thisRow === currentRow) + 1;
      // set output number to be col + row
      polybiusNumber = colNumber.toString() + rowNumber.toString();
    }
  }
  return polybiusNumber;
}

// separate number into an array with number pairs for each output letter
function separateIntoCoordinates(number) {
  const separatedNumbers = [];
  for (let int = 0; int < number.length;int+=2) {
    const thisNumber = number[int] + number[int + 1];
    separatedNumbers.push(thisNumber);
  }
  return separatedNumbers;
}

// determine if any "word" length is uneven
function isEven(numberArr) {
  return numberArr.every((number) => number.length % 2 === 0);
}

// decode with this function
function decodeThis(numberStr) {
  // split incoming string into number strings if spaces are present
  let numberStrWithoutSpaces = numberStr.split(" ");
  // if any of the strings are odd numbers, return false
  if (!isEven(numberStrWithoutSpaces)) return false;
  // create output array for decoded words
  const finalDecodedOutput = [];

  //  create a loop to loop through each coded word
  for (let codedWord of numberStrWithoutSpaces) {
    // use separate function to break the current word into number pairs
    // these pairs are the coordinates of the target letters
    const separatedCoordinates = separateIntoCoordinates(codedWord);
    // create an empty variable for the decoded word
    let decodedWord = "";
    // loop through each coordinate pair in the current word
    for (let coordinate in separatedCoordinates) {
      const thisCoordinate = separatedCoordinates[coordinate];
      // create variables for column and row number using each number in 
      // the pair and changing them from strings to integers
      //   they will need to subtract 1 from them to go from row/column numbers
      //   to index numbers for the arrays.
      const colNumber = parseInt(thisCoordinate[0]) - 1;
      const rowNumber = parseInt(thisCoordinate[1]) - 1;

      // add the discovered letter to the decoded word.
      decodedWord += SQUARE[rowNumber][colNumber];
    }
    // push the decoded word into the final output array.
    finalDecodedOutput.push(decodedWord);
  }  
  // either join the arrays together or coerce to string if 
  // there is only one array
  if (finalDecodedOutput.length > 1) {
    return finalDecodedOutput.join(" ");
  } else {
    return finalDecodedOutput.toString();
  }
} 
module.exports = polybius;
