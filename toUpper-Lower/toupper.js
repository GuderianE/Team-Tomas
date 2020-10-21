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

words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

console.log(finalSentence);  //This Is An Example Of The Power Of ToUpperCase