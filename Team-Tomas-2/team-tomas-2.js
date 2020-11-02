// 1- for loop
// 2- concat()
// 3- indexOf()
// 4- join()
// 5- toString()


// For loops
    //What are they? Why are they?
    console.log(0);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);

    // 0, 1, 2, 3, 4
    
    //or
    for (i = 0; i < 5; i++) { 
   console.log(i);  // 0, 1, 2, 3, 4
    } 
    //it makes life easier

//It works like a counter - but what about strings?

const butHowAboutStringsYouMigthAsk = ["zero", "one", "two", "three", "four", "five"];
//We can search for the length of the array with .length
//So butHowAboutStringsYouMigthAsk.length can replace a certain number.
//Why is this important? In case the array changes all of the sudden we need a different number

for (i = 0; i < butHowAboutStringsYouMigthAsk.length; i++) { 
    console.log(butHowAboutStringsYouMigthAsk[i] + i);  
}
// output: 
// zero0
// one1
// two2
// three3
// four4
// five5 

//it assignes a number to to the array. If you start from zero it starts from the beginning from the array. 

//More examples
for (i = 0; i < 5; i++) { 
    if (i == 3) break;
    console.log(i);  // 0, 1, 2
} 

//if or if/else 
//we can create more advanced rules 
for (i = 1; i < 10; i++) { 
    if (i % 2 == 0) {
    console.log("this number is even: ", i); 
} else {
    console.log("this number is odd: ", i);
}}

// this number is even:  0
// this number is odd:  1
// this number is even:  2
// this number is odd:  3
// this number is even:  4
// this number is odd:  5
// this number is even:  6
// this number is odd:  7
// this number is even:  8
// this number is odd:  9



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

// Nested For loops


// A nested For loop is a loop inside another loop and it can be any number of loops be it for loop, while loop, 

// The Syntax is as follows: 
/**outer for loop (condition) {
 * inner for loop (condition) {
 * iterrate over somthing in the inner loop
 * }
 * interrate over something in the outer loop
 * } */

// The outer loop always runs first and the inner loop only starts running once the outer loop stopped and only if the statement of the outer loop is true otherwise nothing happens

// Lets now take a look at some examples:

// from 0 to 9 repeated 3 times
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(j); //  0 1 2 3 4 5 6 7 8 9  0 1 2 3 4 5 6 7 8 9  0 1 2 3 4 5 6 7 8 9
        console.log(i); // 012 012 012 012 012 012 012 012 012
    } 
}

// each number repeated 9 times from 4 to 0
// The reason for this is since the outer loop always runs first it will iterate from 4 to 0 and then stop. After that the inner loop fires and iterates over the existing numbers and depending on which variable we print inside the inner loop we get two different outcomes.
for (let i = 4; i >= 0; --i) {
    for (let j = 0; j < 10; j++) {
        console.log(j); // 444444444 333333333 222222222 111111111 000000000
        console.log(i); // 0123456789 0123456789 0123456789 0123456789 0123456789
    }
    
}


// incrementing with 2: 024, 9 times repeated
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 6; j = 2 + j ) {
        console.log(j); // 024 024 024 024 024 024 024 024 024 024
        console.log(i); // 0123456789 0123456789 0123456789
    }
}

// The scope within nested loops is as follows: The outer loop can not access the inner loops variable but the inner loop can access the outer loops variable

//----------------------------------------------------------

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

//------------------------------------------------------------------

// !join()

//? SIMPLE: join() method returns the array as a string, separated by the "separator", if present.

//IN DETAIL: the join method creates and returns a new String concatenating all of the elements in an array(or an array - like object), separated by the specific separator string.

//NOTE
// If the array has only one item, then that item will be returned without using the separator.
//If an element is undefined, null or an empty array[], it is converted to an empty string
//This method will not change the original array.

//**Syntax :*/

//! arr.join([separator]);

// separator: OPTIONAL, DEFAULT Setting (',' )
//This separator specifies a string to separate each element of the array. If separator is an empty string, all elements are joined without any characters in between them. It can also contain letters or other symbols.

//*Examples

let joinArray = ["I", "want", "2", "cakes", "!"];

//default ()
let joinString = joinArray.join();
console.log("join default==>", joinString); // I,want,2,cakes,!

//Separator space (' ')
let joinString2 = joinArray.join(" ");
console.log("join space==>", joinString2); // I want 2 cakes !

//Separator ! ('!')
let joinString3 = joinArray.join("!");
console.log("join ! ==>", joinString3); // I!want!2!cakes!!

//Separator ('now')
let joinString4 = joinArray.join(" now ");
console.log("join word ==> ", joinString4); //I now want now 2 now cakes now !

// numbers

let joinArrayNumbers = [6, 7, 2, 9, 4, 7, 8, 2, 9];

let joinNumbers = joinArrayNumbers.join("");
console.log(
    "numbers ==>",
    `Hey, I just met you and this is crazy,
But here's my number ${joinNumbers}, so call me maybe`
);

// CHECK CHECK DataTypes

console.log("DataType Array [] ==>", typeof joinArray); // object
console.log("DataType join () ==> ", typeof joinString); // string


// -----------------------------------------------------------------

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

