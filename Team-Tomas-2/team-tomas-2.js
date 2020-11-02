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
        console.log([j]);
    } // [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] [ 8 ] [ 9 ] [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] [ 8 ] [ 9 ] [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] [ 8 ] [ 9 ]
    
    // console.log([i]);
}

// each number repeated 9 times from 4 to 0
// The reson for this is since the outer loop always runs first it will iterate from 4 to 0 and then stop. After that the inner loop fires and iterates over the existing numbers and depending on which variable we print inside the inner loop we get two different outcomes.
for (let i = 4; i >= 0; --i) {
    for (let j = 0; j < 10; j++) {
        console.log(j); //444444444 333333333 222222222 111111111 000000000
    }
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 6; j = 2 + j ) {
        console.log(j); //024 024 024 024 024 024 024 024 024 024
    }
    
    // console.log([i]);
}





// Array Methods

// concat()

// indexOf()

// join()

// toString()