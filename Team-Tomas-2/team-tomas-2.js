
// For loops

// Syntax:

// for ([initialization]; [condition]; [final-expression]) {statement}

// for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop

/*
initialization
An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with var or let keywords. Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in. Variables declared with let are local to the statement.
The result of this expression is discarded
*/

/*
condition
An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.
*/

/*
final-expression
An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.
*/

/*
statement
A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements. To execute no statement within the loop, use an empty statement (;).
*/

// Array Methods

// concat()

// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or - 1 if it is not present. #mdnknowsbest
const queenSong = ["we", "will", "we", "will", "rock", "you"];
console.log(`queenSong 'we' ==> `, queenSong.indexOf("we")); // 0
// here we return the first index encounter of we
//! important, by defualt it starts from the start of the array ==> the second 'we' is ignored

console.log(`queenSong 'champions' ==> `, queenSong.indexOf("champions")); // -1
// since champions doesn't exsist in the array it returns -1

//? what if i want to target the second we?
// well thats possible but we need to specify at what index you start searching in the array
// syntax ==> after you define what youre looking for, add a number to signal the index where the array should start searching from

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
