
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
// it is an Array Method
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
const concat_array1 = ["a", "b", "c"];
const concat_array2 = ["d", "e", "f"];
const concat_array3 = concat_array1.concat(concat_array2);
console.log(concat_array3); // ["a", "b", "c", "d", "e", "f"]

const concat_res = ["Alex", "Tommy"].concat([88, 9, 0]);
console.log("concat_res ==>", concat_res); // ["Alex", "Tommy", 88, 9, 0]

const concat_res1 = concat_res.concat(null, 2, 3, true, ["A", [1, 2, 3]]);
console.log("concat_res1 ==>", concat_res1); //['Alex', 'Tommy', 88, 9, 0, null, 2, 3, true,'A',[1, 2, 3]]



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
// array.toString() ==> simply returns a string with all the array values, separated by commas.

//1.  Do not take any argument
//2.  Return one new string

//3. Inside an array, values could be strings, numbers, booleans, but not undefined and null!
const array1 = ["Hello", "A", "green", 1, true, false];
const arrayToString1 = array1.toString();
console.log("arrayToString1 ==>", arrayToString1); // Hello,A,green,1,true,false ==> one string

const array2 = ["Hello", "A", "green", 1, true, false, undefined, null];
const arrayToString2 = array2.toString();
console.log("arrayToString2 ==>", arrayToString2); // Hello,A,green,1,true,false,,

//4. Inside an array, any value could also be another array. That array becomes a part of the new string
const array3 = [1, 33, 44, true, "Alex", ["A", "B", false]];
const arrayToString3 = array3.toString();
console.log("arrayToString3 ==>", arrayToString3); //1,33,44,true,Alex,A,B,false ==> one string

//! Note: This method will not change the original array. ==> which means the original array still there
// Not like other array methodes which modify the original array such as array.splice(), array.push() ...
const array4 = [1, 33, 44, true, "Alex", ["A", "B", false]];
array4.toString(); // Not changing the original array, a new variable is needed here in order to get the new string.
console.log("arrayToString3 ==>", array4); // [ 1, 33, 44, true, 'Alex', [ 'A', 'B', false ] ]
=======

