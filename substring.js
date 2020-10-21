// 💥 All We Need To Know About String

//1. The substring() method returns the part of the string between the start and end indexes,
//str.substring(indexStart, indexEnd)
let string = "We are a cool team!";
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
//"a" becomes 0
