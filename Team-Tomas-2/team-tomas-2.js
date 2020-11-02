// For loops

// Array Methods

// concat()

// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or - 1 if it is not present. #mdnknowsbest
const queenSong = ["we", "will", "we", "will", "rock", "you"];
console.log(`queenSong 'we' ==> `, queenSong.indexOf("we")); // 0
// here we took the first encounter of we
//! important by defualt it starts from the start of the array ==> the second 'we' is ignored

console.log(`queenSong 'champions' ==> `, queenSong.indexOf("champions")); //-1

//? what if i want to target the second we?
// well thats possible but we need to specify where you start the string
// after you define what youre looking for, add a number to signal where the string should start looking from

console.log(`queenSong 'we' after index 1 ==> `, queenSong.indexOf("we", 1)); // 2
//! we skip index 0 and the next result of 'we' occours on index 2

//* trivia ==> index of uses strict equality (===) so be careful with that troublesome NaN ;)

const confusingPeopleWithNaN = [NaN];
console.log(
  `confusingPeopleWithNaN NaN ==> `,
  confusingPeopleWithNaN.indexOf(NaN)
); // -1 ==> we all hate you NaN

// join()

// toString()
