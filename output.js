var _, _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _listOfPeople;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Let's say we have a list of people with their salaries
const listOfPeople = [{
  name: 'John',
  lastName: 'Doe',
  salary: 5000
}, {
  name: 'Jane',
  lastName: 'Smith',
  salary: 1500
}, {
  name: 'Chris',
  lastName: 'White',
  salary: 2500
}, {
  name: 'Buck',
  lastName: 'Brown',
  salary: 4250
}]; // What if we want to find out who has the lowest salary

const compareSalaries = (person1, person2) => person1.salary < person2.salary ? -1 : 1;

const sortedBySalary = list => list.sort(compareSalaries);

const result = sortedBySalary(listOfPeople)[0].name;
console.log('--- 1 ---');
console.log(result); // Done! and it's readable too!
// --
// But now we want them to introduce themselves

const saysHi = person => `Hi, my name is ${person.name} and I make $${person.salary}.`;

const result2 = saysHi(sortedBySalary(listOfPeople)[0]);
console.log('\n--- 2 ---');
console.log(result2); // Still readable, kinda
// --
// But now we haven't applied taxes!

const withTaxes = person => _objectSpread({}, person, {
  salary: person.salary * 0.85
});

const result3 = saysHi(withTaxes(sortedBySalary(listOfPeople)[0]));
console.log('\n--- 3 ---');
console.log(result3); // Yeah if I look very hard I still know what It's doing
// --
// Now, we want to hear the last name too, and in euros, 
// and with exactly 2 decimals

const withFullName = person => _objectSpread({}, person, {
  name: `${person.name} ${person.lastName}`
});

const withSalaryInEuros = person => _objectSpread({}, person, {
  salary: person.salary * 0.8637565
});

const withSalaryRounded = person => _objectSpread({}, person, {
  salary: Math.round(person.salary * 100) / 100
});

const result4 = saysHi(withSalaryRounded(withFullName(withTaxes(withSalaryInEuros(sortedBySalary(listOfPeople)[0])))));
console.log('\n--- 4 ---');
console.log(result4); // Okay we are running out of indenting space.
// And it's not really readable anymore.
// --
// Oh but no one is saying we have to nest everything:

const peopleSortedBySalary = sortedBySalary(listOfPeople);
const personWithLowestSalary = peopleSortedBySalary[0];
const personWithLowestSalaryInEuros = withSalaryInEuros(personWithLowestSalary);
const personWithLowestSalaryInEurosAndTaxesAccounted = withTaxes(personWithLowestSalaryInEuros);
const personWithLowestSalaryInEurosAndTaxesAccokjashfljhaskdfsadkjafk = 'asd'; // Syntax error name too long
// Ok it's not a real SyntaxError but you get the point
// We don't really want to think up 5+ single-use variable names
// every time we try to print something usefull, so now we have 
// to stick with unreadable code... don't we?
// --
// Piping to the rescue!

const pipe = (...args) => args.reduce((value, foo) => foo(value));

const first = list => list[0];

const result5 = pipe(listOfPeople, sortedBySalary, first, withSalaryInEuros, withTaxes, withFullName, withSalaryRounded, saysHi);
console.log('\n--- 5 ---');
console.log(result5); // x1000 readability
// --
// Curried version

const lowestSaysHi = value => pipe(value, sortedBySalary, first, withSalaryInEuros, withTaxes, withFullName, withSalaryRounded, saysHi);

const result6 = lowestSaysHi(listOfPeople);
console.log('\n--- 6 ---');
console.log(result6); // --
// Pipeline operator! Coming soon..
// For now, we need to use a transpiler

const multiplyBy2 = x => x * 2;

console.log((_ = 5, multiplyBy2(_))); // --

const result7 = (_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_listOfPeople = listOfPeople, sortedBySalary(_listOfPeople)), first(_ref6)), withSalaryInEuros(_ref5)), withTaxes(_ref4)), withFullName(_ref3)), withSalaryRounded(_ref2)), saysHi(_ref));
console.log('\n--- 7 ---');
console.log(result7);
