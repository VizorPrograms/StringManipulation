// Takes a string and checks whether there are any duplicate letters. If the character parameter is left empty the program will check for any duplicates
// text{string} - The string the program will check
// character{string} - A specific character the program will check if there are any duplicates of
// return{boolean} - The true or false value of whether there was or wasn't any duplicate letters in the string
function hasDuplicateLetters(text, character) {
  var charDict = {};
  
  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    
    if (letter.toLowerCase() != letter.toUpperCase()) {
      if (letter in charDict) {
        charDict[letter] += 1;
      } else {
        charDict[letter] = 1;
      } 
    }
  }
  
  if (character !== undefined) {
    if (charDict[character] >= 2) {
      return true;
    } else {
      return false;
    }
  } else {
    for (var k in charDict) {
      if (charDict[k] >= 2) {
        return true;
      }
    }
    
    return false;
  }
}

// Takes a string and reverses it from a start point to an end point. If both index parameters are empty the program just reverses the whole word. Both index parameters HAVE to be either empty or filled.
// string{string} - The string to be reversed
// startIndex{number} - The index of the first letter to be reversed 
// endIndex{number} - The index of the last letter to be reversed
// return{string} -  The reversed string
function reverseString(string, startIndex, endIndex){
  var charList = string.split("");
  
  if (startIndex !== undefined && endIndex !== undefined) {
    var subStringCharList = string.substring(startIndex, endIndex+1).split("");
  
    for (var j = startIndex; j < endIndex+1;j++) {
      removeItem(charList, startIndex);
    }
    subStringCharList.reverse();
  
    for (var i = 0; i < subStringCharList.length; i++) {
      charList.splice(startIndex+i, 0, subStringCharList[i]);
    }
    return charList.join("");
  } else if (startIndex === undefined && endIndex === undefined) {
    return charList.reverse().join("");
  } else {
    console.log("Wrong parameter entry! Enter both parameters or neither!");
    return undefined;
  }
}

// Takes a string and randomly shuffles the words of the string while keeping the original position of punctuation and spaces.
// string{string} - The string to be shuffled
// return{string} - The shuffled string
function shuffleString(string){
  var charList = string.split(" ");
  var charListClone = string.split("");
  
  var specialCharPositions = [];
  var specialCharacters = {};
  var whitespacePositions = [];
  
  for (var i = 0; i < charListClone.length; i++) {
    if ((isNaN(charListClone[i]) && charListClone[i].toUpperCase() == charListClone[i].toLowerCase()) || charListClone[i] == " ") {
      if (charListClone[i] == " ") {
        whitespacePositions.push(i);
      } else {
        specialCharPositions.push([charListClone[i], i]);
        specialCharacters[charListClone[i]] = 0;
      }
    }
  }
  
  var mixedCharList = [];
  
  for (var y = 0; y < charList.length; y++) {
    var charIterable = [];
    var tempIterable = charList[y].split("");
    
    for (var m = 0; m < tempIterable.length; m++) {
      if (!(tempIterable[m] in specialCharacters)) {
        charIterable.push(tempIterable[m]);
      }
    }
   
    for(var k = charIterable.length - 1; k > 0; k--) {
      var l = Math.floor(Math.random() * (k + 1));
      var tmp = charIterable[k];
      charIterable[k] = charIterable[l];
      charIterable[l] = tmp;
    }
    
    mixedCharList.push(charIterable.join(""));
  }
  
  mixedCharList = mixedCharList.join("").split("");
  
  for (var item in specialCharPositions) {
    mixedCharList.splice(specialCharPositions[item][1], 0, specialCharPositions[item][0]);
  }
  
  for (var element in whitespacePositions) {
    mixedCharList.splice(whitespacePositions[element], 0, " ");
  }
  
  return mixedCharList.join("");
}

// Takes a string and checks what case the letter at the given index is.
// string{string} - The string to be checked
// index{number} - The index of the letter to be checked
// returns{string} - The words "Uppercase" or "Lowercase" depending on if the letter was capital or not
function checkLetterCase(string, index) {
  if (string[index] == string[index].toUpperCase()) {
    return "Uppercase";
  } else {
    return "Lowercase";
  }
}

// Takes a string and edits it to be in a proper title case format
// string{string} - The string to be changed to title case format
// uncapitlizedWords{string} - The words that should not be capitilized. Different words should be spaced with a space (i.e "and the")
// return{string} - The string in title case format
function toTitleCase(string, uncapitlizedWords) {
  var charList = string.toLowerCase().split(" ");
  var tempCharList = string.toLowerCase().split("");
  var minorWords = uncapitlizedWords.toLowerCase().split(" ");
  
  var whitespacePositions = [];
  
  for (var char in tempCharList) {
    if (tempCharList[char] == " ") {
      whitespacePositions.push(char);
    }
  }
  
  for (var i = 0; i < charList.length; i++) {
    for (var word in minorWords) {
      if (minorWords[word] != charList[i].toLowerCase()) {
        var subString = charList[i].split("");
        
        subString[0] = subString[0].toUpperCase();
        subString = subString.join("");
        charList[i] = subString;
      } else {
        charList[i] = charList[i].toLowerCase();
        break;
      }
    }
  }
  
  charList = charList.join("").split("");
  
  for (var space in whitespacePositions) {
    charList.splice(whitespacePositions[space], 0, " ");
  }
  
  return charList.join("");
}
