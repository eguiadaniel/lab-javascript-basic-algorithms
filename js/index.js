// Iteration 1: Names and Input

const hacker1 = 'Joe';
const hacker2 = 'Maximilian';

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

/* Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,  ${hacker2.length} characters!`
  );
}

/* Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

TIP From Zé: 
`A` > `B` -> Goes before on the dictionary
`Hello` localCompare(`Help`)); -> Each word its translated to a number and soma are bigger than others

*/

const hacker1UP = hacker1.toUpperCase();
const hacker1SPLIT = hacker1UP.split('').join(' ');
console.log(hacker1SPLIT);

for (let i = hacker2.length; i >= 0; i--) {
  console.log(hacker2[i]);
}
