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

const isThereAnyGold = ["silver", "umbrella", "metal", "tiny stones"];
for (i = 0; i < isThereAnyGold.length; i++) { 
    if (isThereAnyGold[i] == "gold") {
    console.log("You found gold"); 
} else if (isThereAnyGold[i] == "silver") {
    console.log("At least you found some silver");
} else {
    console.log("You did not find anything cool.")
}
}


// Array Methods

// concat()

// indexOf()

// join()

// toString()