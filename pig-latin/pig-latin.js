let args = process.argv;
let newArgs = args.slice(2, args.length);
let string = '';
for (let i = 0; i < newArgs.length; i++) {
  for (let j = 1; j < newArgs[i].length; j++) {
    string += newArgs[i].charAt(j);
  }
  string += newArgs[i].charAt(0);
  string += 'ay';
  if (i < newArgs.length - 1) {
    string += ' ';
  }
}

console.log(string);