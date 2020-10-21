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
