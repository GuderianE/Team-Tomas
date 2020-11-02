// For loops

// Array Methods

// concat()

// indexOf()

// join()

// toString()
// array.toString() ==> simply returns a string with all the array values, separated by commas.
//! This method will not change the original array. ==> which means the original array still there

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

//! This method will not change the original array. ==> which means the original array still there
const array4 = [1, 33, 44, true, "Alex", ["A", "B", false]];
array4.toString();
console.log("arrayToString3 ==>", array4); // [ 1, 33, 44, true, 'Alex', [ 'A', 'B', false ] ]

// not like other array methodes which modify the original array such as array.splice(), array.push()
