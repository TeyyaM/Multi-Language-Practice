# Task

## Begin with an array like this:

gameArr = [
{ winner: 'Alice', loser: 'Bob', losersScore: 2 },
{ winner: 'Alice', loser: 'Dean', losersScore: 3 },
{ winner: 'Elise', loser: 'Bob', losersScore: 1 },
{ winner: 'Elise', loser: 'Carol', losersScore: 4 },
{ winner: 'Carol', loser: 'Dean', losersScore: 3 }
];

## Write function(s) that returns this:

{
Alice: [ 'Bob', 'Dean' ],
Bob: [],
Dean: [],
Elise: [ 'Bob', 'Carol' ],
Carol: [ 'Dean' ]
}

name a function that gets the players and takes in the game array as an arg
create an empty array
do a loop through each object in the game array
check if the object.winner is in the array
if not, push it into the array
if it is, do nothing
check if the object.loser is in the array
if not, push it in
if it is, do nothing
end loop
return the object which looks like this:
{
'Alice': [],
'Bob': [],
'Carol': [],
'Dean': [],
'Elise': [],
}
end function

name a function that gets who beats who with the game array as an arg
get the player array from the above function (put in game array)
create an empty object
loop through the player array
for each player name, make it a key:value pair in the
object with an empty array (object.player = [])
end loop
loop through the game array
for each game, push game.loser to the new object[game.winner]
end loop
return the new object
end function
