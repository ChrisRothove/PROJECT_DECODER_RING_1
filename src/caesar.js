function caesar(input, shift, encode = true) {
  // if Shift is 0, too high or too low, return false
  if (!shift || shift > 25 || shift < -25) {
    return false;
  } 

  const lowerCaseInput = input.toLowerCase(); 
  
  let outputStr = "";
  // loop through the lowerCaseInput string
  for (let letter = 0; letter < lowerCaseInput.length; letter++) {
  //set lowerCaseInput letter
  const thisLetter = lowerCaseInput[letter]
  //send to encoding function and add new letter to output string
  outputStr += encodeOrDecode(thisLetter, shift, encode);
 }
 return outputStr;
}

//  > > >  HELPER FUNCTIONS

//    Function to determine new letter from input 
function encodeOrDecode(thisLetter, shift, encode) {
  // create an alphabet string.
  const alphStr = "abcdefghijklmnopqrstuvwxyz";

  // create variable for index of thisLetter
  const currentLetterIndexNum = alphStr.indexOf(thisLetter);

  // if the thisLetter isn't a letter, returns itself
  if (currentLetterIndexNum === -1) return thisLetter;

  // determine if encode is true or false
  if (encode) {
    //if encode is true, add shift to current index
    var newLetterIndexNum = currentLetterIndexNum + shift;
  } else {
    //if encode is false, subtract shift from current index 
    var newLetterIndexNum = currentLetterIndexNum - shift;
  }

  //   These two lines adjust for wrapping from 
  //   one end of the alph string to the other
  if (newLetterIndexNum > 25) newLetterIndexNum -= 26;
  if (newLetterIndexNum < 0) newLetterIndexNum += 26;

  //get new letter from alphStr 
  let newLetter = alphStr[newLetterIndexNum];
  //return result
  return newLetter;
}


module.exports = caesar;
