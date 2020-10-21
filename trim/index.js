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
