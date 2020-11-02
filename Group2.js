// + Addition
// The addition operator works the same way as we know it from math it joins together two variables or more and returns the sum or concats variable strings.
let x = 4;
let y = 6;

let sum = x + y;
console.log(sum); // 10

// - Substraction
// The substraction operator works the same way as we know it from math it subtracts one variable from another and returns the difference
let x1 = 4;
let y1 = 6;

let sum1 = x - y;
console.log(sum1); // -2

// * Multiplication
// The multiplication operator works the same way as we know it from math it multiplies two variables or more returning the sum
let x2 = 4;
let y2 = 6;

let sum2 = x * y;
console.log(sum2); // 24

// / Devision
// The division operator works the same way as we know it from math it divides variables and produces the quotient
let x3 = 4;
let y3 = 6;

let sum3 = x / y;
console.log(sum3); // 0.6666666666666666

// % Modula
//The remainder operator returns the remainder of two given variables
let x4 = 4;
let y4 = 6;

let sum4 = x % y;
console.log(sum4); // 4

/*=============================================
=                   substring()                   =
=============================================*/

// 💥 All We Need To Know About Substring() 💥

//1. The substring() method returns the part of the string between the start and end indexes,
//str.substring(indexStart, indexEnd)
let str = "We are a cool team!";
console.log("string length==> ", string.length); // 19
console.log("string1 ==> ", string.substring(0, 6)); // We are
// 0 and 6 are indexes, which start at 0, also include whitespace,
//! indexEnd is not included! That means that the output does not include the 6th index.

//2. If indexStart equals indexEnd: returns an empty string
console.log("string2 ==> ", string.substring(6, 6)); // an empty string

//3. when there is no indexEnd, the output is from the indexStart (7th index) to the end
console.log("string3 ==> ", string.substring(7)); // a cool team

//4. If one of index is greater than the string's length, then the string's length will be used instead.
console.log("string4 ==> ", string.substring(9, 25)); // a cool team
// in this case, 25 is great than the length of the string, so 19 is used instead of 25.

//5. If indexStart > indexEnd, then substring will swap those 2 arguments.
console.log("string5 ==> ", string.substring(6, 3)); //are

//6. If either argument is negative or is NaN, it is treated as if it were 0.
console.log("string6 ==> ", string.substring(-6, 9)); // We are a
//-6 becomes 0, so the output is from 0 to 9 index, not including 9
console.log("string ==> ", string.substring(6, "a")); // We are
//"a" becomes 0, and beacause 6 > 0, so they have been switched, the output is from 0 to 6,

// The last thing to know is that substring() method only works on string, not other data types
// let number = 9999;
// console.log("string number ==> ", number.substring(0, 4)); // TypeError: number.substring is not a function

/*=============================================
=                   substr()                   =
=============================================*/

// substr() Method

/*The substr() method extract parts of a string, starting at the character at the specified position. It returns the specified number of characters.
The substr() method does not change the original string.*/

//! str.substr(start[, length])

// ==>  start = index of the first character for the returned substring. * required parameter
//First character is at index 0.

// ==> Length = used optional. Gives the number of characters to extract. If length is 0 or negative, an  empty string is returned

let string = "Hello World";

console.log("example 1:", string.substr(2, 5)); // llo W

console.log("example 2:", string.substr(1, 7)); // ello Wo

// length of 0
console.log("example without length:", string.substr(4, 0)); // empty - cause length = 0

//------------------------------------------------------
// example without set length parameter ==>  returns the rest of the string start from the index of the first character to Include.

console.log("example no length:", string.substr(6)); // World

//! NOTE
// To extract characters from the end of the string, use a negative start number
//(This does not work in IE 8 and earlier). For both start and length, NaN is treated as 0.

let string2 = "Dog Poo";

console.log("example negative start:", string2.substr(-3, 2)); // 00

/*=============================================
=                   replace()                   =
=============================================*/

/* ----------------------------------------*/
/* The replace() method returns a new string with some or all 
matches of a pattern replaced by a replacement */

let s = "hello, World";
console.log("s ==>", s);

s.replace("h", "H");
console.log("s ==>", s);

// STRINGS ARE IMMUTABLE IN JAVASCRIPT
// Methods like replace() or toUpperCase() return new strings, they DO NOT MODIFY the string
// on which they are invoked.

// let n = s.replace("h", "H");
// console.log("n ==>", n);

// console.log("replaced ==>", s.replace("h", "H"));

/*=============================================
=          toUpperCase()/toLowerCase()          =
=============================================*/

//toUpperCase / toLowerCase methods

//How does this two work? The str.toUpperCase() method converts the entire string to Upper case. It will not affect any of the special characters, digits, and the alphabets that are already in the upper case. ToLowerCase does the total opposite!

//What can you use it for? Some brainstorming:
// - make information more readable
// - capitalise certain words, for example first letter of the sentence.

//toLowerCase - you can make any text/letter lowercase

let example1 = "THIS FEELS LIKE I AM SCREAMING";
let nowBetter = example1.toLowerCase();
console.log(nowBetter);
//this feels like i am screaming

let example2 = "SomeTimes people make Mistakes capitalizing Words";
let nowBetter2 = example2.toLowerCase();
console.log(nowBetter2);
//sometimes people make mistakes capitalizing words

//toUpperCase - you can make any text/letter uppercase with this method

let example3 = "let's make the first letter of this sentence capitalised!";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter(example3));
//Let's make the first letter of this sentence capitalised!

//complicated example I stole from the World Wide Web
//(just to add some spice)

const mySentence = "This is an example of the power of toUpperCase";
const words = mySentence.split(" ");

words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);

console.log(finalSentence); //This Is An Example Of The Power Of ToUpperCase

/*=============================================
=                   trim()                   =
=============================================*/

// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)

// ! the syntax is variable.trim() ==> the variable must be a string
let spaceSurrondedString =
  "              omg so much space surrounding the string        ";
console.log(spaceSurrondedString); //               omg so much space surrounding the string        /<== this is where the string ends
console.log(spaceSurrondedString.trim()); // omg so much space surrounding the string/<== this is where the string ends

// ? what about if i have whitespace in the middle?
// it doesnt affect that as its in the middle part of the string, it will only target the whitespace characters at the beginning or end
let middleSpaceQuestion = "       one end        the other end        ";
console.log(middleSpaceQuestion); //        one end        the other end        /<== end of string
console.log(middleSpaceQuestion.trim()); // one end        the other end/<== end of string

// ? what if i dont use a variable?
// it will still work, put thos trouble to rest
console.log("    holy crap no variable name     ".trim()); // holy crap no variable name

/*=============================================
=         charAt()/charCodeAt()               =
=============================================*/

// charAt() - returns a specified UTF-16 character in a string
// - takes index of a character as an argument
// - similar use case as str[] and substring()

let str = "string";
console.log("a character -->", str.charAt(2)); // r

// charCodeAt() - returns an integer number between 0 and 65535 which      represents a certain UTF - 16 character
// - takes index of a character as an argument

console.log("a UTF code nr -->", str.charCodeAt(4)); // UTF code for 'n' = 110
