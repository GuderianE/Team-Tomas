// For loops

// Array Methods

// concat()

// indexOf()

//! join()

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

// ---------------------------------#####----------------------------
// ---------------------------------#####----------------------------

// toString()
