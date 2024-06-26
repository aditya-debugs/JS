const id = 2
const name = "Aditya"
// console.log(id + name + "Employee");
// Avoid this method

//String Interpolation

// console.log(`Hello, Your id is ${id} and your Name is ${name} and you are designated as ${"Employee"}`);

const name1= new String('Adi-tya')
// console.log(name1[0]);
// console.log(name1.__proto__);

// console.log(name1.length);
// console.log(name1.toUpperCase());
console.log(name1.charAt(2));
console.log(name1.indexOf('t'));

const newString = name1.substring(0,4);
console.log(newString);

const anotherString = name1.slice(-4,4);
console.log(anotherString);

const newString1 = "  Aditya   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://aditya.com/adi%30agrahari"
console.log(url.replace('%30', '-'));

console.log(url.includes('hello'));

console.log(name1.split('-'));
//String methods
/*

anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()

*/