// concat()
// it is an Array Method
// The concat() method is used to merge two or more arrays.
//This method does not change the existing arrays, but instead returns a new array.
const concat_array1 = ["a", "b", "c"];
const concat_array2 = ["d", "e", "f"];
const concat_array3 = concat_array1.concat(concat_array2);
console.log(concat_array3); // ["a", "b", "c", "d", "e", "f"]

const concat_res = ["Alex", "Tommy"].concat([88, 9, 0]);
console.log("concat_res ==>", concat_res); // ["Alex", "Tommy", 88, 9, 0]

const concat_res1 = concat_res.concat(null, 2, 3, true, ["A", "B"]);
console.log("concat_res1 ==>", concat_res1); //["Alex", "Tommy", 88, 9, null, 1, 2, 3, true, ["A", "B"]]
