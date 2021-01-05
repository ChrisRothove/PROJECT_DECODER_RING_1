function substitution(input, subAlph = "", encode = true) {
  if (subAlph.length !== 26) return false
  if (isRepeating(subAlph)) return false
  const lowerCaseInput = input.toLowerCase();
  const lowerCaseSubAlph = subAlph.toLowerCase();
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
  let output = ""
  for (let letter in input) {
    const thisLetter = input[letter];
    const thisLetterIndex = ALPH.indexOf(thisLetter);
    if (thisLetterIndex === -1) {
      output += thisLetter
    } else {
      output += subAlph[thisLetterIndex];
    }
  }
  return output;
}

function decodeThis(input, subAlph) {
  let output = ""
  for (let letter in input) {
    const thisLetter = input[letter];
    const thisLetterIndex = subAlph.indexOf(thisLetter);
    if (thisLetterIndex === -1) {
      output += thisLetter
    } else {
      output += ALPH[thisLetterIndex];
    }
  }
  return output;
}
module.exports = substitution;
