function substitution(input, subAlph = "", encode = true) {
  // return false if length of sub alphabet is not 26
  if (subAlph.length !== 26) return false
  // return false if alphabet repeats any letters
  if (isRepeating(subAlph)) return false
  // create variables for lowercase versions of both input and subAlph
  const lowerCaseInput = input.toLowerCase();
  const lowerCaseSubAlph = subAlph.toLowerCase();

  // if encode is true, run encodeThis, if it is false, run decodeThis
  if (encode) {
    return encodeThis(lowerCaseInput, lowerCaseSubAlph)
  } else {
    return decodeThis(lowerCaseInput, lowerCaseSubAlph)
  }
}

//   > > >   HELPER FUNCTIONS

function isRepeating(alph) {
  for (let letter in alph) {
    const thisLetter = alph[letter];
    const indexToSearch = alph.indexOf(thisLetter) + 1;
    if (alph.includes(thisLetter, indexToSearch)) return true
  }
  return false;
}

const ALPH = "abcdefghijklmnopqrstuvwxyz";

function encodeThis(input, subAlph) {
  // create output Variable
  let output = ""
  // loop through input 
  for (let letter in input) {
    const thisLetter = input[letter];
    // get index of the letter from true alphabet
    const thisLetterIndex = ALPH.indexOf(thisLetter);
    // if the letter is not a letter in true alphabet(ALPH), keep it unchanged
    // otherwise, add matching letter from the subAlph
    if (thisLetterIndex === -1) {
      output += thisLetter
    } else {
      output += subAlph[thisLetterIndex];
    }
  }
  return output;
}

function decodeThis(input, subAlph) {
  // create output Variable
  let output = ""
  // loop through input
  for (let letter in input) {
    const thisLetter = input[letter];
    // get index of the letter from the sub alphabet
    const thisLetterIndex = subAlph.indexOf(thisLetter);
    // if the letter is not a letter in the sub alphabet, keep it unchanged
    // otherwise, add matching letter from the true alphabet(ALPH)
    if (thisLetterIndex === -1) {
      output += thisLetter
    } else {
      output += ALPH[thisLetterIndex];
    }
  }
  return output;
}
module.exports = substitution;
