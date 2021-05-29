// typescript complaint is just from process.argv
// @ts-ignore
const argsTs = process.argv;
const userInputTs: string[] = argsTs.slice(2, argsTs.length);
let stringTs = '';
// go through each word individually
for (let i = 0; i < userInputTs.length; i++) {
  // turn the word into pig latin
  string += userInput[i].substr(1);
  stringTs += userInputTs[i].charAt(0);
  stringTs += 'ay';
  // add a space before the next word, if there is one
  if (i < userInputTs.length - 1) {
    stringTs += ' ';
  }
}

console.log(stringTs);