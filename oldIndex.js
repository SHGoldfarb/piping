const { compose, pipe } = require('ramda');

const suma2 = (val1) => val1 + 2;
const x2 = val => val * 2;

console.log(pipe(suma2, x2, x2, x2, x2, x2, suma2, suma2)(5));

const myCompose = (f1, f2) => val => f1(f2(val));

console.log(myCompose(suma2, x2)(5));

const myPipe = (...args) => args.reverse().reduce(myCompose);

console.log(myPipe(suma2, x2)(5));

const addGetName = person => ({
    getName: () => `${person.firstName} ${person.lastName}`,
    ...person
});

const addGetAge = person => ({
    getAge: () => 2018 - person.birthYear,
    ...person
});

const decoratePerson = compose(addGetName, addGetAge);

const juanP = {
    firstName: 'Juan',
    lastName: 'Perez',
    birthYear: 1994
};

console.log(juanP);

const decoratedJuanP = decoratePerson(juanP);

console.log(decoratedJuanP);

console.log(decoratedJuanP.getName());
console.log(decoratedJuanP.getAge());

console.log(juanP |> addGetName |> addGetAge)
