// substr() Method

/*The substr() method extract a portion of the string. starting at the character at the specified position, and returns the specified number of characters. The substr() method does not change the original string.*/

//! str.substr(start[, length])

// ==>  start = index of the first character for the returned substring. * required
//First character is at index 0.

// ==> Length = used optional. Gives the number of characters to extract. If length is 0 or negative, an  empty string is returned

let string = "Hello World";

console.log("example 1:", string.substr(2, 5)); // llo W

console.log("example 2:", string.substr(1, 7)); // ello Wo

// length of 0
console.log("example without length:", string.substr(4, 0)); // empty

//------------------------------------------------------
// example without length parameter ==>  returns the rest of the string start from the index of the first character to Include.

console.log("example no length:", string.substr(6)); // World

//! NOTE
// To extract characters from the end of the string, use a negative start number
//(This does not work in IE 8 and earlier). For both start and length, NaN is treated as 0.

let string2 = "Dog Poo";

console.log("example negative start:", string2.substr(-3, 2)); // 00
