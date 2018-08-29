// Let's make a composed function

const addTwo = x => x + 2;
const multiplyByTen = x => x* 10;

let result;

result = multiplyByTen(addTwo(5))
console.log(result);

// const compose = (f1, f2) => x => f2(f1(x));

// result = compose(addTwo, multiplyByTen)(5)
// console.log(result);

// // Let's say we have a list of people with their salaries

// const listOfPeople = [
//     {
//         name: 'John',
//         lastName: 'Green',
//         salary: 5000
//     },
//     {
//         name: 'Jane',
//         lastName: 'Brown',
//         salary: 1500
//     },
//     {
//         name: 'Chris',
//         lastName: 'White',
//         salary: 2500
//     },
//     {
//         name: 'Buck',
//         lastName: 'Black',
//         salary: 4250
//     }
// ];

// // What if we want to find out who has the lowest salary

// const compareSalaries = (person1, person2) => (
//     person1.salary < person2.salary ? -1 : 1
// );

// const sortedBySalary = list => list.sort(compareSalaries)

// const result1 = sortedBySalary(listOfPeople)[0].name;
// console.log('--- 1 ---');
// console.log(result1);
// // Done! and it's readable too!

// // --

// // But now we want them to introduce themselves

// const saysHi = person => (
//     `Hi, my name is ${person.name} and I make $${person.salary}.`
// );

// const result2 = saysHi(sortedBySalary(listOfPeople)[0]);

// console.log('\n--- 2 ---');
// console.log(result2);
// // Still readable, kinda

// // --

// // But now we haven't applied taxes!

// const withTaxes = person => ({
//     ...person,
//     salary: person.salary * 0.85   
// });

// const result3 = saysHi(withTaxes(sortedBySalary(listOfPeople)[0]));

// console.log('\n--- 3 ---');
// console.log(result3);
// // Yeah if I look very hard I still know what It's doing

// // --

// // Now, we want to hear the last name too, and in euros, 
// // and with exactly 2 decimals

// const withFullName = person => ({
//     ...person,
//     name: `${person.name} ${person.lastName}`
// });

// const withSalaryInEuros = person => ({
//     ...person,
//     salary: person.salary * 0.8637565
// });

// const withSalaryRounded = person => ({
//     ...person,
//     salary: Math.round(person.salary * 100) / 100
// });

// const result4 = saysHi(
//     withSalaryRounded(
//         withFullName(
//             withTaxes(
//                 withSalaryInEuros(
//                     sortedBySalary(listOfPeople)[0]
//                 )
//             )
//         )
//     )
// );
// console.log('\n--- 4 ---');
// console.log(result4);
// // Okay we are running out of indenting space.
// // And it's not really readable anymore.

// // --

// // Oh but no one is saying we have to nest everything:

// const peopleSortedBySalary = sortedBySalary(listOfPeople);
// const personWithLowestSalary = peopleSortedBySalary[0];
// const personWithLowestSalaryInEuros = withSalaryInEuros(
//     personWithLowestSalary
// );
// const personWithLowestSalaryInEurosAndTaxesAccounted = withTaxes(
//     personWithLowestSalaryInEuros
// );
// const personWithLowestSalaryInEurosAndTaxesAccokjashfljhaskdfsadkjafk = 'asd';
// // Syntax error name too long
// // Ok it's not a real error but you get the point

// // We don't really want to think up 5+ single-use variable names
// // every time we try to print something usefull, so now we have 
// // to stick with unreadable code... don't we?

// // --

// // Piping to the rescue!

// const pipe = (...args) => args.reduce(
//     (value, foo) => foo(value)
// );

// const first = list => list[0]

// const result5 = pipe(
//     listOfPeople,
//     sortedBySalary,
//     first,
//     withSalaryInEuros,
//     withTaxes,
//     withFullName,
//     withSalaryRounded,
//     saysHi
// );
// console.log('\n--- 5 ---');
// console.log(result5);
// // x1000 readability

// // --

// // Curried version

// const lowestSaysHi = value => pipe(
//     value,
//     sortedBySalary,
//     first,
//     withSalaryInEuros,
//     withTaxes,
//     withFullName,
//     withSalaryRounded,
//     saysHi
// );

// const result6 = lowestSaysHi(listOfPeople)
// console.log('\n--- 6 ---');
// console.log(result6);

// // --

// // Pipeline operator! Coming soon..
// // For now, we need to use a transpiler

// const multiplyBy2 = x => x*2;

// console.log(5 |> multiplyBy2);

// // // --

// const result7 = (
//     listOfPeople |> 
//     sortedBySalary |>
//     first |>
//     withSalaryInEuros |>
//     withTaxes |>
//     withFullName |>
//     withSalaryRounded |>
//     saysHi
// );
// console.log('\n--- 7 ---');
// console.log(result7);