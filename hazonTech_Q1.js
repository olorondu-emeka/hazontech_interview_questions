function alphabetSequence(inputString) {
  let formattedString = inputString.toLowerCase();

  // an object of alphabets and their corresponding ASCII codes
  let alphabetObject = {};
  for (let i = 97; i <= 122; i++) {
    let char = String.fromCharCode(i);
    alphabetObject[char] = i;
  }

  // start with the end of the string
  let stringLength = formattedString.length - 1;
  let finalString = '';
  console.log(formattedString);

  console.log(true);
  // increment everything
  for (let j = 0; j <= stringLength; j++) {
    if (formattedString[j] === 'z') {
      let tempArray = formattedString.split('');
      console.log(tempArray);
      tempArray.splice(j, 1, 'a');
      finalString += tempArray.join('');
      console.log(finalString);
    } else {
      let charCode = alphabetObject[formattedString[j]];
      charCode += 1;
      finalString += formattedString
        .split('')
        .splice(j, 1, String.fromCharCode(charCode))
        .join('');
    }
  }

  return finalString;
}
