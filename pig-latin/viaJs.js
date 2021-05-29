const args = process.argv;
// cut out the command and the file name from the args
const userInput = args.slice(2, args.length);


let string = '';
// go through each word individually
for (let i = 0; i < userInput.length; i++) {
  // turn the word into pig latin
  string += userInput[i].substr(1);
  string += userInput[i].charAt(0);
  string += 'ay';
  // add a space before the next word, if there is one
  if (i < userInput.length - 1) {
    string += ' ';
  }
}

console.log(string);